(function() {
  if (localStorage.getItem('cookie_consent')) return;

  var styles = [
    '.cb-overlay{position:fixed;bottom:0;left:0;right:0;z-index:99999;background:#1a1a1a;color:#fff;font-family:-apple-system,Helvetica,Arial,sans-serif;padding:20px 24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;font-size:14px;line-height:1.5;box-shadow:0 -2px 12px rgba(0,0,0,.3)}',
    '.cb-text{flex:1;min-width:240px;margin:0}',
    '.cb-actions{display:flex;gap:10px;flex-shrink:0}',
    '.cb-btn{padding:10px 22px;font-size:13px;font-weight:600;letter-spacing:.4px;text-transform:uppercase;cursor:pointer;border-radius:4px;transition:opacity .2s;border:none;font-family:inherit}',
    '.cb-btn:hover{opacity:.85}',
    '.cb-accept{background:#fff;color:#1a1a1a}',
    '.cb-reject{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.4)}'
  ].join(' ');

  var styleEl = document.createElement('style');
  styleEl.textContent = styles;
  document.head.appendChild(styleEl);

  var banner = document.createElement('div');
  banner.className = 'cb-overlay';

  var text = document.createElement('p');
  text.className = 'cb-text';
  text.textContent = 'This website uses technical cookies to improve navigation.';

  var actions = document.createElement('div');
  actions.className = 'cb-actions';

  var acceptBtn = document.createElement('button');
  acceptBtn.className = 'cb-btn cb-accept';
  acceptBtn.id = 'cb-accept';
  acceptBtn.textContent = 'Accept';

  var rejectBtn = document.createElement('button');
  rejectBtn.className = 'cb-btn cb-reject';
  rejectBtn.id = 'cb-reject';
  rejectBtn.textContent = 'Decline';

  actions.appendChild(acceptBtn);
  actions.appendChild(rejectBtn);
  banner.appendChild(text);
  banner.appendChild(actions);
  document.body.appendChild(banner);

  function dismiss(value) {
    localStorage.setItem('cookie_consent', value);
    banner.style.transition = 'transform .3s ease';
    banner.style.transform = 'translateY(100%)';
    setTimeout(function() { banner.remove(); }, 350);
  }

  acceptBtn.addEventListener('click', function() { dismiss('accepted'); });
  rejectBtn.addEventListener('click', function() { dismiss('rejected'); });
})();
