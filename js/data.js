/* Chargement et rendu des données de contenu depuis json/ */
;
(function(window, document) {
    'use strict';

    var CONTENT_URL = 'json/site-data.json';
    var FORM_CONFIG_URL = 'json/contact-form.json';

    function fetchJson(url) {
        if (typeof window.fetch !== 'function') {
            return Promise.reject(new Error('fetch indisponible'));
        }
        return window.fetch(url, { cache: 'no-cache' }).then(function(response) {
            if (!response.ok) {
                throw new Error('Réponse ' + response.status + ' pour ' + url);
            }
            return response.json();
        });
    }

    function element(tag, className, text) {
        var node = document.createElement(tag);
        if (className) {
            node.className = className;
        }
        if (text !== undefined && text !== null) {
            node.textContent = String(text);
        }
        return node;
    }

    function icon(name, extraClass) {
        var node = element('i', 'bi ' + name + (extraClass ? ' ' + extraClass : ''));
        node.setAttribute('aria-hidden', 'true');
        return node;
    }

    function image(src, alt, className) {
        var node = element('img', className);
        node.src = src;
        node.alt = alt;
        return node;
    }

    // Empêche l'injection de schémas d'URL exécutables via le fichier JSON.
    function safeUrl(url) {
        var value = String(url || '').trim();
        return /^(https?:|mailto:)/i.test(value) ? value : '';
    }

    function replaceChildren(container, nodes) {
        container.textContent = '';
        nodes.forEach(function(node) {
            container.appendChild(node);
        });
    }

    function animatedItem(className) {
        return element('div', className + ' animated fadeInUp');
    }

    function renderFacts(facts) {
        var container = document.querySelector('.facts-list');
        if (!container || !Array.isArray(facts)) {
            return;
        }
        replaceChildren(container, facts.map(function(fact) {
            var item = animatedItem('item');
            var box = element('div', 'counter-box');
            box.appendChild(icon(fact.icon, 'counter-icon'));
            box.appendChild(element('span', 'count-number', fact.value));
            box.appendChild(document.createTextNode(' ' + fact.label));
            item.appendChild(box);
            return item;
        }));
    }

    function renderServices(services) {
        var container = document.querySelector('.services-list');
        if (!container || !Array.isArray(services)) {
            return;
        }
        replaceChildren(container, services.map(function(service) {
            var item = animatedItem('item');
            var box = element('div', 'service-box');
            var iconWrap = element('span', 'service-icon');
            iconWrap.appendChild(icon(service.icon));
            box.appendChild(iconWrap);
            box.appendChild(element('h3', null, service.title));
            box.appendChild(element('p', null, service.description));
            item.appendChild(box);
            return item;
        }));
    }

    function renderSkills(skills) {
        var container = document.querySelector('.testimonials-slider');
        if (!container || !Array.isArray(skills)) {
            return;
        }
        replaceChildren(container, skills.map(function(skill) {
            var item = animatedItem('item');
            var testimonial = element('div', 'testimonial-item');
            var clientRow = element('div', 'client-row');
            clientRow.appendChild(image(skill.image, skill.name, 'rounded-circle'));
            var content = element('div', 'testimonial-content');
            content.appendChild(element('h4', null, skill.name));
            content.appendChild(element('p', null, skill.description));
            testimonial.appendChild(clientRow);
            testimonial.appendChild(content);
            item.appendChild(testimonial);
            return item;
        }));
    }

    function renderTools(tools) {
        var container = document.querySelector('.gallery-list');
        if (!container || !Array.isArray(tools)) {
            return;
        }
        replaceChildren(container, tools.map(function(tool) {
            var item = animatedItem('item');
            var portfolio = element('div', 'portfolio-item');
            var thumb = element('div', 'thumb');
            thumb.appendChild(image(tool.image, tool.name));
            var inner = animatedItem('thumb-inner');
            inner.appendChild(element('h4', null, tool.name));
            inner.appendChild(element('p', null, tool.description));
            portfolio.appendChild(thumb);
            portfolio.appendChild(inner);
            item.appendChild(portfolio);
            return item;
        }));
    }

    function renderContact(contact) {
        var container = document.querySelector('.contact-box');
        if (!container || !contact) {
            return;
        }
        var nodes = [element('div', 'contact-row', contact.name)];
        var mail = safeUrl('mailto:' + contact.email);
        if (mail) {
            var row = element('div', 'contact-row');
            var link = element('a', null, contact.email);
            link.href = mail;
            row.appendChild(link);
            nodes.push(row);
        }
        replaceChildren(container, nodes);
    }

    function renderSocial(social) {
        var container = document.querySelector('.social-icons');
        if (!container || !Array.isArray(social)) {
            return;
        }
        var items = social.filter(function(entry) {
            return safeUrl(entry.url);
        }).map(function(entry) {
            var listItem = element('li');
            var link = element('a');
            link.href = safeUrl(entry.url);
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.title = entry.label;
            link.setAttribute('aria-label', entry.label);
            link.appendChild(icon(entry.icon));
            listItem.appendChild(link);
            return listItem;
        });
        replaceChildren(container, items);
    }

    function render(content) {
        renderFacts(content.facts);
        renderServices(content.services);
        renderSkills(content.skills);
        renderTools(content.tools);
        renderContact(content.contact);
        renderSocial(content.social);
    }

    // Le contenu statique de index.html reste affiché si le JSON n'est pas accessible
    // (ouverture directe en file://, ressource absente ou invalide).
    var contentReady = fetchJson(CONTENT_URL).then(function(content) {
        render(content);
        return content;
    }).catch(function(error) {
        window.console && console.warn('Contenu JSON non chargé :', error.message);
        return null;
    });

    var formReady = fetchJson(FORM_CONFIG_URL).catch(function(error) {
        window.console && console.warn('Configuration du formulaire non chargée :', error.message);
        return null;
    });

    window.PGDigital = {
        ready: Promise.all([contentReady, formReady]).then(function(results) {
            return { content: results[0], form: results[1] };
        })
    };
})(window, document);
