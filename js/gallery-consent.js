/* Consent applies only to this page view; no optional browser storage. */
(() => {
  const load = document.getElementById('load-gallery');
  const reject = document.getElementById('reject-gallery');
  const revoke = document.getElementById('revoke-gallery');
  const status = document.getElementById('gallery-status');
  load.addEventListener('click', () => {
    const frame = document.createElement('iframe');
    frame.src = 'https://lightwidget.com/widgets/609bd2e250ac52d69a70d788c130eafd.html';
    frame.title = 'Instagram-Galerie von Phillip Bösger über LightWidget';
    frame.className = 'lightwidget-widget';
    frame.referrerPolicy = 'no-referrer';
    frame.style.cssText = 'width:100%;min-height:500px;border:0;overflow:hidden';
    document.getElementById('gallery-frame').replaceChildren(frame);
    const script = document.createElement('script');
    script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
    document.body.append(script);
    load.hidden = true; reject.hidden = true; revoke.hidden = false;
    status.textContent = 'Einwilligung erteilt. Sie gilt bis zum Verlassen oder Neuladen dieser Seite.';
  });
  reject.addEventListener('click', () => {
    status.textContent = 'Die Galerie bleibt gesperrt. Du kannst sie später hier laden.';
  });
  revoke.addEventListener('click', () => location.reload());
})();
