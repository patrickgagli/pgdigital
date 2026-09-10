/* Global Scripts */


/* Theme preference */
function getDarkModePreference() {
    const preference = localStorage.getItem('dark-mode');
    return preference === 'dark' ? 'dark' : 'light';
}

function updateDarkModeToggle(theme) {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (!darkModeToggle) {
        return;
    }

    const isDark = theme === 'dark';
    darkModeToggle.setAttribute('aria-pressed', String(isDark));
    darkModeToggle.setAttribute('aria-label', isDark ? 'Activer le mode clair' : 'Activer le mode sombre');
    darkModeToggle.setAttribute('title', isDark ? 'Activer le mode clair' : 'Activer le mode sombre');
    darkModeToggle.innerHTML = `<i class="bi ${isDark ? 'bi-sun' : 'bi-moon-stars'}" aria-hidden="true"></i>`;
}

function applyDarkModePreference() {
    const theme = getDarkModePreference();
    document.documentElement.setAttribute('data-bs-theme', theme);
    updateDarkModeToggle(theme);
}

function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('dark-mode', newTheme);
    updateDarkModeToggle(newTheme);
}

window.addEventListener('load', function() {
    applyDarkModePreference();
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
});
