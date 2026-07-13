(function () {
  const pages = [
    { href: 'index.html',        label: 'Overview' },
    { href: 'ch0-products.html', label: 'Products' },
    { href: 'ch1-joints.html',   label: 'Joint Injections' },
    { href: 'ch2-iv.html',       label: 'IV Protocol' },
    { href: 'ch3-storage.html',  label: 'Storage & Chain of Custody' },
    { href: 'ch4-clinical.html', label: 'Clinical Flow' },
    { href: 'ch5-aftercare.html',label: 'Aftercare' },
  ];

  const current = location.pathname.split('/').pop() || 'index.html';

  const links = pages.map(p =>
    `<a href="${p.href}" class="${current === p.href ? 'active' : ''}">${p.label}</a>`
  ).join('');

  const nav = `
    <nav class="site-nav">
      <div class="nav-inner">
        <a class="nav-logo" href="index.html">Clinical Operations</a>
        <div class="nav-links">${links}</div>
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="nav-mobile-menu" id="nav-mobile-menu">
        ${links}
      </div>
    </nav>`;

  const footer = `
    <footer class="site-footer">
      Regenerative Revival &mdash; Clinical Operations Manual &mdash; For licensed clinical staff only. Not for patient distribution.
    </footer>`;

  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('beforeend', footer);

  const btn = document.getElementById('nav-hamburger');
  const menu = document.getElementById('nav-mobile-menu');

  btn.addEventListener('click', function () {
    const open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });

  // Close menu when a link is tapped
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', false);
    });
  });
})();
