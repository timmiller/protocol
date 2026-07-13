// Inject shared nav and footer, highlight active link
(function () {
  const pages = [
    { href: 'index.html',       label: 'Overview' },
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
      </div>
    </nav>`;

  const footer = `
    <footer class="site-footer">
      Regenerative Revival &mdash; Clinical Operations Manual &mdash; For licensed clinical staff only. Not for patient distribution.
    </footer>`;

  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('beforeend', footer);
})();
