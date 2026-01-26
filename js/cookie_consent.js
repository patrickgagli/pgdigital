/* ====================================
    File Name: cookie_consent.js
 ====================================== */

(function () {
    const STORAGE_KEY = "pgdigital.cookieConsent";
    const COOKIE_TTL_DAYS = 180;
    const hiddenClass = "is-hidden";
    const API_ENDPOINT = "/api/cookie-consent/";
    const DEFAULT_PREFS = { necessary: true, analytics: false, marketing: false };
    const syncState = { isAuthenticated: false };

    const parsePrefs = (value) => {
        try {
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.warn("Cookie consent parse failed", error);
            return null;
        }
    };

    const storage = (() => {
        try {
            const testKey = STORAGE_KEY + ".test";
            localStorage.setItem(testKey, "1");
            localStorage.removeItem(testKey);
            return {
                get: () => parsePrefs(localStorage.getItem(STORAGE_KEY)),
                set: (prefs) => {
                    try {
                        localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
                    } catch (error) {
                        console.warn("Cookie consent persist failed", error);
                    }
                }
            };
        } catch (error) {
            const readCookie = (name) => {
                const cookies = document.cookie ? document.cookie.split("; ") : [];
                for (let i = 0; i < cookies.length; i += 1) {
                    const parts = cookies[i].split("=");
                    const key = parts.shift();
                    if (key === name) {
                        return decodeURIComponent(parts.join("="));
                    }
                }
                return null;
            };
            const writeCookie = (name, value, days) => {
                let expires = "";
                if (typeof days === "number") {
                    const date = new Date();
                    date.setTime(date.getTime() + days * 864e5);
                    expires = "; expires=" + date.toUTCString();
                }
                document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/; SameSite=Lax";
            };
            return {
                get: () => parsePrefs(readCookie(STORAGE_KEY)),
                set: (prefs) => writeCookie(STORAGE_KEY, JSON.stringify(prefs), COOKIE_TTL_DAYS)
            };
        }
    })();

    const sanitizePrefs = (prefs = {}) => ({
        ...DEFAULT_PREFS,
        analytics: Boolean(prefs.analytics),
        marketing: Boolean(prefs.marketing),
        ...(prefs.updatedAt ? { updatedAt: prefs.updatedAt } : {})
    });

    const withTimestamp = (prefs) => ({
        ...prefs,
        updatedAt: new Date().toISOString()
    });

    const getCsrfToken = () => {
        const name = "csrftoken";
        const cookies = document.cookie ? document.cookie.split("; ") : [];
        for (let i = 0; i < cookies.length; i += 1) {
            const parts = cookies[i].split("=");
            if (parts[0] === name) {
                return decodeURIComponent(parts[1]);
            }
        }
        return null;
    };

    const fetchServerPrefs = async () => {
        try {
            const response = await fetch(API_ENDPOINT, { credentials: "same-origin" });
            if (!response.ok) {
                syncState.isAuthenticated = false;
                return null;
            }
            const data = await response.json();
            syncState.isAuthenticated = Boolean(data.authenticated);
            
            // Remove authenticated flag from preferences
            const { authenticated, consentStatus, consentVersion, ...prefs } = data;
            
            // Only use server preferences if user is authenticated
            if (!syncState.isAuthenticated) {
                return null;
            }
            
            return sanitizePrefs(prefs);
        } catch (error) {
            console.warn("Cookie consent fetch failed", error);
            syncState.isAuthenticated = false;
            return null;
        }
    };

    const syncServerPrefs = (prefs) => {
        const csrfToken = getCsrfToken();
        const headers = { "Content-Type": "application/json" };
        
        if (csrfToken) {
            headers["X-CSRFToken"] = csrfToken;
        }
        
        // Send full preference object with all required fields
        const payload = {
            necessary: true,
            analytics: Boolean(prefs.analytics),
            marketing: Boolean(prefs.marketing),
            updatedAt: prefs.updatedAt || new Date().toISOString()
        };
        
        fetch(API_ENDPOINT, {
            method: "POST",
            credentials: "same-origin",
            headers: headers,
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Cookie preferences synced to server:", data);
        })
        .catch((error) => {
            console.warn("Cookie consent sync failed", error);
        });
    };

    const init = () => {
        const banner = document.getElementById("cookie-consent");
        if (!banner) return;

        const panel = banner.querySelector("[data-consent-panel]");
        const manageBtn = banner.querySelector("[data-consent-manage]");
        const acceptBtn = banner.querySelector("[data-consent-accept]");
        const rejectBtn = banner.querySelector("[data-consent-reject]");
        const saveBtn = banner.querySelector("[data-consent-save]");
        const closeBtn = banner.querySelector("[data-consent-close]");
        const checkboxes = banner.querySelectorAll("input[data-consent-toggle]");

        const setBannerVisibility = (show) => {
            banner.classList.toggle(hiddenClass, !show);
            banner.setAttribute("aria-hidden", show ? "false" : "true");
        };

        const togglePanel = (show) => {
            if (!panel) return;
            panel.classList.toggle(hiddenClass, !show);
            panel.setAttribute("aria-hidden", show ? "false" : "true");
            if (manageBtn) {
                manageBtn.setAttribute("aria-expanded", show ? "true" : "false");
            }
            if (show) {
                const focusable = panel.querySelector("input, button");
                if (focusable) {
                    focusable.focus();
                }
            }
        };

        const applyPrefsToUI = (prefs) => {
            if (!prefs) return;
            checkboxes.forEach((input) => {
                const key = input.getAttribute("data-consent-toggle");
                if (Object.prototype.hasOwnProperty.call(prefs, key)) {
                    input.checked = Boolean(prefs[key]);
                }
            });
        };

        const persistAndClose = (prefs) => {
            const normalized = withTimestamp(sanitizePrefs(prefs));
            storage.set(normalized);
            applyPrefsToUI(normalized);
            setBannerVisibility(false);
            togglePanel(false);
            
            // Sync to server regardless of authentication status
            // The server will handle anonymous vs authenticated users
            syncServerPrefs(normalized);
        };

        if (manageBtn) {
            manageBtn.addEventListener("click", () => {
                const isOpen = panel ? !panel.classList.contains(hiddenClass) : false;
                togglePanel(!isOpen);
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener("click", () => togglePanel(false));
        }

        if (acceptBtn) {
            acceptBtn.addEventListener("click", () => {
                persistAndClose({ analytics: true, marketing: true });
            });
        }

        if (rejectBtn) {
            rejectBtn.addEventListener("click", () => {
                persistAndClose({ analytics: false, marketing: false });
            });
        }

        if (saveBtn) {
            saveBtn.addEventListener("click", () => {
                const prefs = {};
                checkboxes.forEach((input) => {
                    const key = input.getAttribute("data-consent-toggle");
                    prefs[key] = input.checked;
                });
                persistAndClose(prefs);
            });
        }

        document.addEventListener("keydown", (event) => {
            const isEscape = event.key === "Escape" || event.key === "Esc";
            const panelOpen = panel ? !panel.classList.contains(hiddenClass) : false;
            if (isEscape && panelOpen) {
                togglePanel(false);
            }
        });

        togglePanel(false);

        // Check local storage first
        const storedPrefs = storage.get();
        
        // Then check server preferences
        fetchServerPrefs().then((serverPrefs) => {
            if (serverPrefs) {
                // Server preferences take precedence for authenticated users
                storage.set(serverPrefs);
                applyPrefsToUI(serverPrefs);
                setBannerVisibility(false);
            } else if (storedPrefs) {
                // Use local preferences for anonymous users
                const normalized = sanitizePrefs(storedPrefs);
                storage.set(normalized);
                applyPrefsToUI(normalized);
                setBannerVisibility(false);
            } else {
                // No preferences found, show banner
                setBannerVisibility(true);
            }
        }).catch(() => {
            // On error, fall back to local storage
            if (storedPrefs) {
                const normalized = sanitizePrefs(storedPrefs);
                storage.set(normalized);
                applyPrefsToUI(normalized);
                setBannerVisibility(false);
            } else {
                setBannerVisibility(true);
            }
        });

        if (typeof window === "object") {
            window.CookieConsent = window.CookieConsent || {};
            window.CookieConsent.showPreferences = () => {
                setBannerVisibility(true);
                togglePanel(true);
            };
        }
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();