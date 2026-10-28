(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var S = window.SITE;
  var A = S.author;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var el = function (tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  /* ---------- bind author text ---------- */
  var bind = { name: A.name, nameUpper: A.name.toUpperCase(), intro: A.intro };
  $$('[data-bind]').forEach(function (n) { n.textContent = bind[n.dataset.bind]; });
  document.title = A.name + ' | Official Author Website';
  $$('.brand').forEach(function (b) { b.setAttribute('aria-label', A.name + ' home'); });
  $('#year').textContent = new Date().getFullYear();

  /* ---------- covers ---------- */
  var palettes = [
    ['#a8643a', '#e0a878'], ['#6b4a35', '#b48a64'], ['#8a6f55', '#d9c2a3'],
    ['#5c4e43', '#a8947f'], ['#9b5a3a', '#d89b6e'], ['#7a6a5a', '#cdbba5']
  ];
  function cover(book, i) {
    var p = palettes[i % palettes.length];
    var c = el('span', 'cover');
    c.style.setProperty('--c1', p[0]);
    c.style.setProperty('--c2', p[1]);
    c.innerHTML = '<span class="cover__ph"><small>' + esc(A.name) + '</small><strong>' + esc(book.title) + '</strong></span>';
    if (book.cover) {
      var img = new Image();
      img.alt = book.title + ' book cover';
      img.loading = 'lazy';
      img.onerror = function () { img.remove(); };
      img.onload = function () {
        // covers come in different shapes, so show the whole cover over a blurred copy of itself
        var blur = el('span', 'cover__blur');
        blur.style.backgroundImage = 'url(' + book.cover + ')';
        c.insertBefore(blur, img);
        var ph = $('.cover__ph', c);
        if (ph) ph.remove();
      };
      img.src = book.cover;
      c.appendChild(img);
    }
    return c;
  }

  /* ---------- library grid ---------- */
  var grid = $('#grid');
  S.books.forEach(function (b, i) {
    var art = el('article', 'book glass-light reveal');
    var a = el('a', 'book__cover');
    a.href = b.amazon; a.target = '_blank'; a.rel = 'noopener';
    a.setAttribute('aria-label', b.title + ' on Amazon');
    a.appendChild(cover(b, i));
    var body = el('div', 'book__body',
      '<p class="book__meta">' + esc(b.kind) + '</p>' +
      '<h3 class="book__title">' + esc(b.title) + (b.edition ? '<small>' + esc(b.edition) + '</small>' : '') + '</h3>' +
      '<p class="book__tag">' + esc(b.tagline) + '</p>' +
      '<p class="book__blurb">' + esc(b.blurb) + '</p>' +
      '<a class="btn btn--blue" href="' + esc(b.amazon) + '" target="_blank" rel="noopener">' +
      '<span><i class="fa-brands fa-amazon"></i>&nbsp; Buy on Amazon</span>' +
      '<span class="btn__ic"><i class="fa-solid fa-arrow-right"></i></span></a>');
    art.appendChild(a);
    art.appendChild(body);
    grid.appendChild(art);
  });
  $('#authorPage').href = A.amazonAuthorUrl;
  $('#footAmazon').href = A.amazonAuthorUrl;
  if (A.email) {
    var fe = $('#footEmail');
    fe.href = 'mailto:' + A.email; fe.textContent = A.email; fe.hidden = false;
  }

  /* ---------- FAQ ---------- */
  var list = $('#faqList');
  S.faqs.forEach(function (f, i) {
    var d = el('div', 'qa' + (i === 0 ? ' open' : ''));
    d.innerHTML =
      '<button class="qa__q" type="button" aria-expanded="' + (i === 0) + '" aria-controls="qa' + i + '">' +
      '<span>' + esc(f.q) + '</span><span class="qa__t"><i class="fa-solid fa-chevron-down"></i></span></button>' +
      '<div class="qa__a" id="qa' + i + '"><div><p>' + esc(f.a) + '</p></div></div>';
    $('.qa__q', d).addEventListener('click', function () {
      var open = !d.classList.contains('open');
      $$('.qa', list).forEach(function (q) { q.classList.remove('open'); $('.qa__q', q).setAttribute('aria-expanded', 'false'); });
      if (open) { d.classList.add('open'); this.setAttribute('aria-expanded', 'true'); }
    });
    list.appendChild(d);
  });

  /* ---------- reveal on scroll ---------- */
  var reveals = $$('.reveal, .fan__card');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(function (n, i) { n.style.transitionDelay = (n.parentElement.classList.contains('grid') || n.parentElement.id === 'fan' ? (i % 4) * 90 : 0) + 'ms'; io.observe(n); });
  } else {
    reveals.forEach(function (n) { n.classList.add('in'); });
  }

  /* ---------- dock: active section + light/dark ---------- */
  var dock = $('#dock'), links = $$('a', dock);
  var secs = $$('[data-nav]');
  var ticking = false;
  function onScroll() {
    ticking = false;
    var y = window.innerHeight - 44, active = 'home', theme = 'dark';
    secs.forEach(function (s) {
      var r = s.getBoundingClientRect();
      if (r.top <= y && r.bottom > y) { active = s.dataset.nav; theme = s.dataset.theme; }
    });
    // highlight by what fills the middle of the viewport
    var mid = window.innerHeight * .5;
    secs.forEach(function (s) {
      var r = s.getBoundingClientRect();
      if (r.top <= mid && r.bottom > mid) active = s.dataset.nav;
    });
    dock.classList.toggle('on-light', theme === 'light');
    links.forEach(function (a) { a.classList.toggle('is-active', a.dataset.key === active); });
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
  // the nav slips away once the page scrolls and returns at the very top
  function markScrolled() { dock.classList.toggle('is-hidden', window.scrollY > 40); }
  window.addEventListener('scroll', markScrolled, { passive: true });
  markScrolled();
})();
