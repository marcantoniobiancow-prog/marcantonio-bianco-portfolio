/**
 * Cookie Banner GDPR — Marcantonio Bianco Portfolio
 * Gestione consenso cookie conforme GDPR / ePrivacy.
 * Nessun cookie non essenziale viene impostato prima del consenso esplicito.
 */

(function () {
  'use strict';

  const COOKIE_NAME = 'mb_cookie_consent';
  const COOKIE_DAYS = 365;

  const CATEGORIES = {
    necessary: true,
    analytics: false,
    marketing: false,
  };

  /* ---------- Utility ---------- */

  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie =
      name +
      '=' +
      encodeURIComponent(JSON.stringify(value)) +
      ';expires=' +
      d.toUTCString() +
      ';path=/;SameSite=Lax;Secure';
  }

  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
      try {
        return JSON.parse(decodeURIComponent(match[2]));
      } catch (e) {
        return null;
      }
    }
    return null;
  }

  function deleteCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax;Secure';
  }

  /* ---------- Consent state ---------- */

  function getConsent() {
    return getCookie(COOKIE_NAME);
  }

  function saveConsent(preferences) {
    var consent = {
      timestamp: new Date().toISOString(),
      necessary: true,
      analytics: !!preferences.analytics,
      marketing: !!preferences.marketing,
    };
    setCookie(COOKIE_NAME, consent, COOKIE_DAYS);
    applyConsent(consent);
    hideBanner();
    hidePreferences();
  }

  /* ---------- Apply consent ---------- */

  function applyConsent(consent) {
    // Attiva script bloccati in base alla categoria
    document.querySelectorAll('script[data-cookie-category]').forEach(function (el) {
      var cat = el.getAttribute('data-cookie-category');
      if (consent[cat]) {
        var script = document.createElement('script');
        if (el.src) script.src = el.src;
        else script.textContent = el.textContent;
        script.type = 'text/javascript';
        document.head.appendChild(script);
      }
    });

    // Dispatch evento custom per integrazioni esterne
    window.dispatchEvent(
      new CustomEvent('cookieConsentUpdate', { detail: consent })
    );
  }

  /* ---------- UI: Banner ---------- */

  function createBanner() {
    if (document.getElementById('mb-cookie-banner')) return;

    var overlay = document.createElement('div');
    overlay.id = 'mb-cookie-overlay';

    var banner = document.createElement('div');
    banner.id = 'mb-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML =
      '<div class="mb-cookie-inner">' +
        '<div class="mb-cookie-text">' +
          '<p class="mb-cookie-title">Questo sito utilizza i cookie</p>' +
          '<p class="mb-cookie-desc">Utilizziamo cookie tecnici necessari al funzionamento del sito e, con il tuo consenso, cookie analitici e di marketing per migliorare la tua esperienza. Puoi personalizzare le tue preferenze o accettare tutti i cookie.</p>' +
        '</div>' +
        '<div class="mb-cookie-actions">' +
          '<button id="mb-cookie-accept-all" class="mb-cookie-btn mb-cookie-btn--primary">Accetta tutti</button>' +
          '<button id="mb-cookie-reject-all" class="mb-cookie-btn mb-cookie-btn--secondary">Rifiuta non essenziali</button>' +
          '<button id="mb-cookie-customize" class="mb-cookie-btn mb-cookie-btn--link">Personalizza</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(overlay);
    document.body.appendChild(banner);

    document.getElementById('mb-cookie-accept-all').addEventListener('click', function () {
      saveConsent({ necessary: true, analytics: true, marketing: true });
    });

    document.getElementById('mb-cookie-reject-all').addEventListener('click', function () {
      saveConsent({ necessary: true, analytics: false, marketing: false });
    });

    document.getElementById('mb-cookie-customize').addEventListener('click', function () {
      hideBanner();
      showPreferences();
    });
  }

  function hideBanner() {
    var banner = document.getElementById('mb-cookie-banner');
    var overlay = document.getElementById('mb-cookie-overlay');
    if (banner) banner.classList.add('mb-cookie-hidden');
    if (overlay) overlay.classList.add('mb-cookie-hidden');
  }

  /* ---------- UI: Preferences panel ---------- */

  function showPreferences() {
    if (document.getElementById('mb-cookie-prefs')) {
      document.getElementById('mb-cookie-prefs').classList.remove('mb-cookie-hidden');
      document.getElementById('mb-cookie-overlay').classList.remove('mb-cookie-hidden');
      return;
    }

    var overlay = document.getElementById('mb-cookie-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'mb-cookie-overlay';
      document.body.appendChild(overlay);
    }
    overlay.classList.remove('mb-cookie-hidden');

    var existing = getConsent();

    var panel = document.createElement('div');
    panel.id = 'mb-cookie-prefs';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Cookie preferences');
    panel.innerHTML =
      '<div class="mb-cookie-prefs-inner">' +
        '<p class="mb-cookie-title">Preferenze cookie</p>' +
        '<div class="mb-cookie-option">' +
          '<label>' +
            '<input type="checkbox" checked disabled /> ' +
            '<strong>Necessari</strong>' +
          '</label>' +
          '<p class="mb-cookie-option-desc">Essenziali per il funzionamento del sito. Sempre attivi.</p>' +
        '</div>' +
        '<div class="mb-cookie-option">' +
          '<label>' +
            '<input type="checkbox" id="mb-pref-analytics" ' + (existing && existing.analytics ? 'checked' : '') + ' /> ' +
            '<strong>Analitici</strong>' +
          '</label>' +
          '<p class="mb-cookie-option-desc">Ci aiutano a capire come i visitatori interagiscono con il sito.</p>' +
        '</div>' +
        '<div class="mb-cookie-option">' +
          '<label>' +
            '<input type="checkbox" id="mb-pref-marketing" ' + (existing && existing.marketing ? 'checked' : '') + ' /> ' +
            '<strong>Marketing</strong>' +
          '</label>' +
          '<p class="mb-cookie-option-desc">Utilizzati per mostrare contenuti e annunci pertinenti.</p>' +
        '</div>' +
        '<div class="mb-cookie-actions">' +
          '<button id="mb-pref-save" class="mb-cookie-btn mb-cookie-btn--primary">Salva preferenze</button>' +
          '<button id="mb-pref-accept-all" class="mb-cookie-btn mb-cookie-btn--secondary">Accetta tutti</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(panel);

    document.getElementById('mb-pref-save').addEventListener('click', function () {
      saveConsent({
        necessary: true,
        analytics: document.getElementById('mb-pref-analytics').checked,
        marketing: document.getElementById('mb-pref-marketing').checked,
      });
    });

    document.getElementById('mb-pref-accept-all').addEventListener('click', function () {
      saveConsent({ necessary: true, analytics: true, marketing: true });
    });
  }

  function hidePreferences() {
    var panel = document.getElementById('mb-cookie-prefs');
    var overlay = document.getElementById('mb-cookie-overlay');
    if (panel) panel.classList.add('mb-cookie-hidden');
    if (overlay) overlay.classList.add('mb-cookie-hidden');
  }

  /* ---------- Public API ---------- */

  window.MBCookieConsent = {
    getConsent: getConsent,
    showPreferences: showPreferences,
    reset: function () {
      deleteCookie(COOKIE_NAME);
      location.reload();
    },
    hasConsent: function (category) {
      var c = getConsent();
      return c ? !!c[category] : false;
    },
  };

  /* ---------- Init ---------- */

  function init() {
    var consent = getConsent();
    if (consent) {
      applyConsent(consent);
    } else {
      createBanner();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
