// nav.js — side navigation, theme (dark / light), footer, back-to-top, progress tracking.
// Every page has this ONE line inside <head>:   <script src="nav.js" defer></script>
(function () {
  'use strict';

  // ---------------------------------------------------------------- pages
  const ROBOTS = [
    ['arm.html',        { en: '3-DOF arm' },   'R-R-R'],
    ['gantry.html',     { en: 'Cartesian gantry' },       'P-P-P'],
    ['scara.html',      { en: 'SCARA' },             'R-R-P-R'],
    ['articulated.html',{ en: '6-axis industrial robot' },  '6 × R'],
    ['cobot.html',      { en: 'Collaborative robot (UR5)' },      '6 × R'],
    ['delta.html',      { en: 'Delta robot' },              'parallel'],
    ['mobile.html',     { en: 'Mobile robot' },         '2 wheels'],
    ['wheels.html',     { en: 'Wheels and mobile bases' }, '—']
  ];
  const COURSES = [
    ['learn.html',                { en: 'The basics' }],
    ['learn-maths.html',          { en: 'Maths and motion' }],
    ['learn-model.html',          { en: 'Robot modelling' }],
    ['learn-singularities.html',  { en: 'Singularities and the Jacobian' }],
    ['learn-control.html',        { en: 'Dynamics and control' }],
    ['learn-intelligence.html',   { en: 'Perception, planning and AI' }],
    ['learn-world.html',          { en: 'Robots in the real world' }]
  ];
  // ---------------------------------------------------------------- THE CLUB — the only place to edit the club identity
  const ICON = {
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".9" fill="currentColor" stroke="none"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 8.5h3V4.5h-3A4.5 4.5 0 0 0 9.5 9v2.5H7v4h2.5V21h4v-5.5H16l.9-4h-3.4V9a.5.5 0 0 1 .5-.5z"/></svg>',
    telegram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 17a24.1 24.1 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg>',
    join: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/></svg>'
  };
  const CLUB = {
    name: 'Mecatro Club',
    site: 'mecatrobot',
    faculty: { en: "M'hamed Bougara University of Boumerdes · Faculty of Technology", url: 'https://share.google/eufiRZZL8Yy0b7gOo' },
    join: 'https://docs.google.com/forms/d/e/1FAIpQLSeOB3BBPLgxm9DrejRvyybx3fxoz1bSOGuJxaaW5sTpuh2oYg/viewform',
    links: [
      ['Instagram', 'https://www.instagram.com/mecatro.sc', ICON.instagram],
      ['Facebook', 'https://www.facebook.com/mecatrosc', ICON.facebook],
      ['Telegram', 'https://t.me/mecatrosc', ICON.telegram],
      ['YouTube', 'https://youtube.com/@mecatroclub', ICON.youtube],
      ['Email', 'mailto:ftmecatroclub@gmail.com', ICON.mail],
      ['Links', 'https://beacons.ai/mecatro', ICON.link]
    ]
  };
  window.RA_ICON = ICON;
  const UI = {
    en: { home: 'Home', learn: 'Learn', courses: 'Courses', robots: 'Robots', done: 'Mark this page as done', doneOn: 'Done, well played!', road: 'Back to the learning path', menu: 'Open the menu', top: 'Back to top', lang: 'Language', theme: 'Switch between dark and light', join: 'Join the club', tag: 'by Mecatro Club', onPage: 'On this page',
          tagline: 'An interactive learning platform for robotics.', made: 'Made by', rights: 'Free to learn, free to share.', loadFail: 'The 3D engine could not be loaded (slow or interrupted connection).', reload: 'Reload', prev: 'Previous', next: 'Next' },
  };

  // ---------------------------------------------------------------- preferences
  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* private mode: ignore */ } }
  };
  const root = document.documentElement;
  const savedTheme = store.get('ra-theme');
  if (savedTheme === 'dark' || savedTheme === 'light') root.dataset.theme = savedTheme;
  const lang = 'en';
  root.lang = lang; root.dir = 'ltr';
  const ui = UI[lang];
  window.RA_CLUB = { name: CLUB.name, site: CLUB.site, faculty: CLUB.faculty[lang], facultyUrl: CLUB.faculty.url, join: CLUB.join, links: CLUB.links, ui: ui };
  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const pageName = here.replace(/\.html$/, '');

  // ---------------------------------------------------------------- translation engine
  const DICT = Object.create(null), RULES = [];
  const norm = (s) => s.replace(/\s+/g, ' ').trim();
  function hash(str) {                                                  // cyrb53: short, stable key of an English text
    let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (let i = 0; i < str.length; i++) {
      const c = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ c, 2654435761); h2 = Math.imul(h2 ^ c, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
  }
  const RA = window.RA = {
    lang, hash, norm,
    add(obj) { Object.assign(DICT, obj); },                                // { hashOfEnglish: 'translation' } (kept for future use)
    rule(re, fn) { RULES.push([re, fn]); },                                // for texts that contain numbers: fn(match) returns the Arabic text
    tr(text) {                                                             // Arabic for a plain text, or null
      const k = norm(text);
      if (!k) return null;
      const v = DICT[hash(k)];
      if (v !== undefined) return v;
      for (const [re, fn] of RULES) { const m = k.match(re); if (m) return fn(m); }   // fn(match) -> Arabic text
      return null;
    },
    text(s) { return RA.tr(s) || s; }
  };
  // what the visitor has finished (roadmap, lessons and robot pages share it)
  const PROG = 'ra-progress';
  RA.progress = {
    all() { try { return JSON.parse(store.get(PROG) || '{}') || {}; } catch (e) { return {}; } },
    get(id) { return !!this.all()[id]; },
    set(id, v) { const o = this.all(); if (v) o[id] = 1; else delete o[id]; store.set(PROG, JSON.stringify(o)); window.dispatchEvent(new CustomEvent('ra-progress', { detail: { id, v: !!v } })); },
    clear(ids) { const o = this.all(); ids.forEach((i) => delete o[i]); store.set(PROG, JSON.stringify(o)); window.dispatchEvent(new CustomEvent('ra-progress', { detail: { id: null } })); }
  };
  window.addEventListener('storage', (e) => { if (e.key === PROG) window.dispatchEvent(new CustomEvent('ra-progress', { detail: { id: null } })); });
  const SKIP = /^(SCRIPT|STYLE|SVG|CANVAS|TEXTAREA|NOSCRIPT|PRE|CODE)$/i;
  const mine = (el) => el.classList && (el.classList.contains('site-nav') || el.classList.contains('site-foot') || el.classList.contains('to-top'));
  const inSvg = (n) => { const e = n.nodeType === 1 ? n : n.parentNode; return !!(e && e.closest && e.closest('svg')); };
  const INLINE = /^(STRONG|EM|B|I|CODE|SUB|SUP|BR|SMALL|SPAN|A|KBD|MARK|ABBR|U)$/;
  // a block we can replace as a whole: only text and inline markup inside, no element that the page's JavaScript may hold on to
  const canReplace = (el) => !el.querySelector('input,select,button,textarea,canvas,svg,[id]') &&
    Array.prototype.every.call(el.children, (c) => INLINE.test(c.tagName) && (!c.children.length || canReplace(c)));

  function doText(n) {
    const s = n.nodeValue, k = norm(s);
    if (!k) return;
    const v = RA.tr(k);
    if (v !== null && v !== k) n.nodeValue = s.match(/^\s*/)[0] + v + s.match(/\s*$/)[0];
  }
  const isSvg = (el) => el.namespaceURI && el.namespaceURI.indexOf('svg') >= 0;
  function doSvg(svg) {                                                     // static captions inside drawings (<text>)
    svg.querySelectorAll('text').forEach((t) => { for (let n = t.firstChild; n; n = n.nextSibling) if (n.nodeType === 3) doText(n); });
  }
  function doEl(el) {
    if (isSvg(el)) { if (el.tagName.toLowerCase() === 'text') doSvg({ querySelectorAll: () => [el] }); else doSvg(el); return; }
    if (SKIP.test(el.tagName) && !(el.tagName === 'PRE' || el.tagName === 'CODE')) return;
    if (mine(el) || !el.textContent.trim()) return;
    if (canReplace(el)) {                                                  // whole element (keeps <strong>, <code>, ... inside)
      const v = DICT[hash(norm(el.innerHTML))];
      if (v !== undefined) { el.innerHTML = v; return; }
    }
    if (el.tagName === 'CODE') return;
    for (let n = el.firstChild; n; n = n.nextSibling) {
      if (n.nodeType === 1) doEl(n); else if (n.nodeType === 3) doText(n);
    }
  }
  RA.collect = function (rootEl) {                                         // used only to build the dictionaries
    const out = [];
    (function walk(el) {
      if (isSvg(el)) {
        if (el.tagName.toLowerCase() === 'svg') el.querySelectorAll('text').forEach((t) => { const k = norm(t.textContent); if (k) out.push({ kind: 'svgtext', tag: 'text', key: k, h: hash(k) }); });
        return;
      }
      if (/^(SCRIPT|STYLE|NOSCRIPT|CANVAS|TEXTAREA)$/i.test(el.tagName) || mine(el) || !el.textContent.trim()) return;
      if (canReplace(el)) { const k = norm(el.innerHTML); out.push({ kind: 'el', tag: el.tagName, key: k, h: hash(k) }); return; }
      for (let n = el.firstChild; n; n = n.nextSibling) {
        if (n.nodeType === 1) walk(n); else if (n.nodeType === 3 && norm(n.nodeValue)) out.push({ kind: 'text', tag: el.tagName, key: norm(n.nodeValue), h: hash(norm(n.nodeValue)) });
      }
    })(rootEl || document.body);
    return out;
  };

  function startTranslation() {
    doEl(document.body);
    const t = document.title && RA.tr(document.title); if (t) document.title = t;
    const cfg = { childList: true, subtree: true, characterData: true };
    const obs = new MutationObserver((muts) => {
      obs.disconnect();
      try {
        for (const m of muts) {
          if (m.type === 'characterData') { if (!inSvg(m.target)) doText(m.target); continue; }
          m.addedNodes.forEach((n) => {
            if (n.nodeType === 1) doEl(n); else if (n.nodeType === 3 && !inSvg(n)) doText(n);     // (a text inside a drawing is handled with its <text>)
          });
        }
      } finally { obs.observe(document.body, cfg); }
    });
    obs.observe(document.body, cfg);
  }
  function loadDictionaries(done) {
    const files = ['i18n/ar-common.js', `i18n/ar-${pageName}.js`];
    let left = files.length;
    const fin = () => { if (--left === 0) done(); };
    files.forEach((f) => {
      const s = document.createElement('script');
      s.src = f; s.onload = fin; s.onerror = fin;
      document.head.appendChild(s);
    });
  }

  // ---------------------------------------------------------------- favicon and colour of the browser bar
  const head = document.head;
  if (!head.querySelector('link[rel~=icon]')) {
    const ic = document.createElement('link'); ic.rel = 'icon'; ic.type = 'image/png'; ic.href = 'assets/favicon-32.png'; head.appendChild(ic);
    const ap = document.createElement('link'); ap.rel = 'apple-touch-icon'; ap.href = 'assets/favicon-180.png'; head.appendChild(ap);
  }
  if (!head.querySelector('meta[name=theme-color]')) { const m = document.createElement('meta'); m.name = 'theme-color'; m.content = '#2d2e92'; head.appendChild(m); }

  // ---------------------------------------------------------------- build the page chrome
  function build() {
    const SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
    const MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
    const effective = () => root.dataset.theme || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    const pid = (href) => href.replace(/\.html$/, '');
    const link = (href, text, extra) => `<a class="sn-link" href="${href}"${here === href ? ' aria-current="page"' : ''}>${extra || ''}${text}</a>`;
    const dot = (href) => `<span class="dot${RA.progress.get(pid(href)) ? ' on' : ''}" data-pg="${pid(href)}" aria-hidden="true"></span>`;
    const group = (title, items, open) => `<details class="sn-group"${open ? ' open' : ''}><summary>${title}</summary>${items}</details>`;
    const inCourses = COURSES.some((c) => c[0] === here), inRobots = ROBOTS.some((r) => r[0] === here), isHome = here === 'index.html';

    const nav = document.createElement('header');
    nav.className = 'site-nav';
    nav.innerHTML =
      `<div class="sn-bar"><a class="brand" href="index.html"><img class="lg" src="assets/mark.png" width="38" height="38" alt=""><span class="bn"><b>${CLUB.site}</b><small>${ui.tag}</small></span></a>` +
      `<button class="icon-btn nav-toggle" type="button" aria-label="${ui.menu}" aria-expanded="false">☰</button></div>` +
      '<div class="sn-body"><nav aria-label="Main">' +
      link('index.html', ui.home, ICON.home) +
      group(ui.courses, COURSES.map(([h, n]) => link(h, n[lang], '<span class="dot hollow" aria-hidden="true"></span>')).join(''), isHome || inCourses) +
      group(ui.robots, ROBOTS.map(([h, n, k]) => link(h, `${n[lang]}<small>${k}</small>`, dot(h))).join(''), isHome || inRobots) +
      '</nav><div class="sn-foot">' +
      `<a class="sn-join" href="${CLUB.join}" target="_blank" rel="noopener">${ICON.join.replace('<svg ', '<svg width="18" height="18" ')}${ui.join}</a>` +
      '<div class="sn-tools">' +
      `<button class="icon-btn theme-btn" type="button" aria-label="${ui.theme}" title="${ui.theme}"></button></div></div></div>`;
    document.body.insertBefore(nav, document.body.firstChild);

    const themeBtn = nav.querySelector('.theme-btn');
    const paintTheme = () => { themeBtn.innerHTML = effective() === 'dark' ? SUN : MOON; };
    paintTheme();
    themeBtn.addEventListener('click', () => {
      const next = effective() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next; store.set('ra-theme', next); paintTheme();
    });
    const toggle = nav.querySelector('.nav-toggle');
    toggle.addEventListener('click', () => { const o = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(o)); });
    nav.querySelectorAll('.sn-link').forEach((a) => a.addEventListener('click', () => nav.classList.remove('open')));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') nav.classList.remove('open'); });
    const cur = nav.querySelector('.sn-link[aria-current]'); if (cur && cur.scrollIntoView) { const b = nav.querySelector('.sn-body'); b.scrollTop = Math.max(0, cur.offsetTop - b.clientHeight / 2); }
    window.addEventListener('ra-progress', () => nav.querySelectorAll('.dot[data-pg]').forEach((d) => d.classList.toggle('on', RA.progress.get(d.dataset.pg))));

    // ---- footer: progress bar of the page, previous / next robot, the club
    const foot = document.createElement('footer');
    foot.className = 'site-foot';
    const i = ROBOTS.findIndex((r) => r[0] === here);
    const arrows = ['←', '→'];
    let pager = '';
    if (i >= 0) {
      const p = ROBOTS[(i + ROBOTS.length - 1) % ROBOTS.length], n = ROBOTS[(i + 1) % ROBOTS.length];
      pager = `<div class="pager"><a href="${p[0]}">${arrows[0]} ${p[1][lang]}</a><a href="${n[0]}">${n[1][lang]} ${arrows[1]}</a></div>`;
    }
    const doneBar = i >= 0 ? `<div class="done-bar"><label class="done-toggle"><input type="checkbox" id="pageDone"><span class="box" aria-hidden="true"></span><span class="lbl">${ui.done}</span></label><a href="index.html#path">${ui.road} ${arrows[1]}</a></div>` : '';
    const social = CLUB.links.map(([name, url, icon]) => `<a href="${url}"${url.indexOf('mailto:') === 0 ? '' : ' target="_blank" rel="noopener"'} aria-label="${name}" title="${name}">${icon}</a>`).join('');
    foot.innerHTML = doneBar + pager +
      `<div class="sf-main"><div class="sf-id"><img class="lg" src="assets/mark.png" width="38" height="38" alt=""><p><strong>${CLUB.name}</strong><br><a href="${CLUB.faculty[lang] ? CLUB.faculty.url : '#'}" target="_blank" rel="noopener">${CLUB.faculty[lang]}</a></p></div><div class="sf-links">${social}</div></div>` +
      `<div class="sf-bottom"><span>© ${new Date().getFullYear()} ${CLUB.name} · ${ui.rights}</span><span>${CLUB.site}</span></div>`;
    document.body.appendChild(foot);
    const dn = foot.querySelector('#pageDone');
    if (dn) {
      const paint = () => { dn.checked = RA.progress.get(pageName); dn.closest('.done-toggle').classList.toggle('on', dn.checked); dn.parentNode.querySelector('.lbl').textContent = dn.checked ? ui.doneOn : ui.done; };
      dn.addEventListener('change', () => RA.progress.set(pageName, dn.checked)); window.addEventListener('ra-progress', paint); paint();
    }

    const top = document.createElement('button');
    top.className = 'to-top'; top.type = 'button'; top.setAttribute('aria-label', ui.top); top.textContent = '↑';
    top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.body.appendChild(top);
    const onScroll = () => top.classList.toggle('show', window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }


  // ---------------------------------------------------------------- robot pages: header, "on this page" chips, 3D view next to the controls, diagram fitted and centred
  function robotPage() {
    const body = document.body, h1 = body.querySelector('h1'), view = document.getElementById('view'), controls = document.getElementById('controls');
    if (h1 && h1.nextElementSibling && h1.nextElementSibling.tagName === 'P' && h1.nextElementSibling.querySelector('a[href="index.html"]')) h1.nextElementSibling.classList.add('crumbs');
    // 3D view on the left, joints and sliders on the right (stacked on small screens)
    if (view && controls && view.parentNode === body && controls.parentNode === body) {
      const kids = [...body.children], iv = kids.indexOf(view), ic = kids.indexOf(controls);
      const ih = kids.findIndex((el, i) => i > iv && el.tagName === 'H2');
      if (ih > iv && ic > ih) {
        const stage = document.createElement('div'), main = document.createElement('div'), side = document.createElement('div');
        stage.className = 'stage'; main.className = 'stage-main'; side.className = 'stage-side';
        body.insertBefore(stage, view); stage.append(main, side);
        kids.slice(iv, ih).forEach((el) => main.appendChild(el));
        kids.slice(ih, ic + 1).forEach((el) => side.appendChild(el));
      }
    }
    // chips that jump to each section
    const heads = [...body.querySelectorAll('h2')].filter((h) => !h.closest('.stage-side') && !h.closest('.robot') && h.textContent.trim());
    if (h1 && heads.length > 2 && !body.classList.contains('home') && !body.classList.contains('learn')) {
      const toc = document.createElement('nav'); toc.className = 'toc'; toc.setAttribute('aria-label', ui.onPage);
      const short = (h) => h.textContent.replace(/^\d+\.\s*/, '').replace(/\s*\(.*$/, '').replace(/,\s*(side|top|front) view$/i, '').trim() || h.textContent.trim();
      heads.forEach((h, i) => {
        if (!h.id) h.id = 'sec' + (i + 1);
        const a = document.createElement('a'); a.href = '#' + h.id; a.textContent = short(h); toc.appendChild(a);
        new MutationObserver(() => { const s = short(h); if (a.textContent !== s) a.textContent = s; }).observe(h, { childList: true, characterData: true, subtree: true });   // follows the language
      });
      const anchor = h1.nextElementSibling && h1.nextElementSibling.classList.contains('crumbs') ? h1.nextElementSibling : h1;
      anchor.after(toc);
    }
    // the kinematic diagram: zoom on the robot (the box only grows, so it does not jitter) and centre it
    const svg = document.getElementById('schema');
    if (svg && svg.viewBox && svg.viewBox.baseVal) {
      let box = null, pending = false;
      const apply = () => {
        pending = false;
        try {
          const b = svg.getBBox(); if (!b.width || !b.height) return;
          box = box ? { x0: Math.min(box.x0, b.x), y0: Math.min(box.y0, b.y), x1: Math.max(box.x1, b.x + b.width), y1: Math.max(box.y1, b.y + b.height) } : { x0: b.x, y0: b.y, x1: b.x + b.width, y1: b.y + b.height };
          const pad = 44, R = 700 / 420; let w = box.x1 - box.x0 + 2 * pad, h = box.y1 - box.y0 + 2 * pad;
          if (w / h < R) w = h * R; else h = w / R;
          w = Math.min(Math.max(w, 330), 900); h = w / R;
          const cx = (box.x0 + box.x1) / 2, cy = (box.y0 + box.y1) / 2;
          svg.setAttribute('viewBox', [cx - w / 2, cy - h / 2, w, h].map((v) => v.toFixed(1)).join(' '));
        } catch (e) { /* svg not displayed yet */ }
      };
      new MutationObserver((ms) => { if (ms.every((m) => m.target === svg && m.attributeName === 'viewBox')) return; if (!pending) { pending = true; requestAnimationFrame(apply); } })
        .observe(svg, { childList: true, subtree: true, attributes: true, characterData: true });
      document.addEventListener('change', () => { box = null; });
    }
  }

  // ---------------------------------------------------------------- smooth scrolling between sections, and the active link in the bar
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let anim = 0;
  function smoothTo(y) {
    const y0 = window.scrollY, dist = y - y0;
    if (reduceMotion || Math.abs(dist) < 2) { window.scrollTo(0, y); return; }
    const dur = Math.min(1300, 550 + Math.abs(dist) * 0.35), t0 = performance.now(), id = ++anim;
    root.classList.add('scrolling');
    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    (function step(now) {
      if (id !== anim) return;
      const k = Math.min(1, (now - t0) / dur);
      window.scrollTo(0, y0 + dist * ease(k));
      if (k < 1) requestAnimationFrame(step); else root.classList.remove('scrolling');
    })(t0);
  }
  RA.smoothTo = smoothTo;
  ['wheel', 'touchstart', 'keydown'].forEach((ev) => window.addEventListener(ev, () => { anim++; root.classList.remove('scrolling'); }, { passive: true }));
  function wireScroll() {
    document.addEventListener('click', (e) => {
      const a = e.target.closest && e.target.closest('a[href]'); if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const u = new URL(a.href, location.href); if (u.origin !== location.origin || u.pathname !== location.pathname) return;
      let y = null;
      if (u.hash) { const t = document.getElementById(u.hash.slice(1)); if (t) y = t.getBoundingClientRect().top + window.scrollY - (innerWidth <= 1000 ? 76 : 20); }
      else if (/index\.html$|\/$/.test(u.pathname) && !u.search) y = 0;
      if (y === null) return;
      e.preventDefault(); history.replaceState(null, '', u.hash || u.pathname); smoothTo(Math.max(0, y)); document.querySelector('.site-nav').classList.remove('open');
    });
  }

  // ---------------------------------------------------------------- if the 3D engine cannot be loaded, say so (and offer a reload) instead of leaving empty boxes
  function watch3d() {
    const needs = document.querySelector('script[type="importmap"]'); if (!needs) return;
    const fail = () => {
      if (document.getElementById('err3d')) return;
      const b = document.createElement('div'); b.id = 'err3d'; b.className = 'err3d'; b.setAttribute('role', 'alert');
      b.innerHTML = `<span>${ui.loadFail}</span><button type="button">${ui.reload}</button>`;
      b.querySelector('button').addEventListener('click', () => location.reload()); document.body.appendChild(b);
    };
    window.addEventListener('unhandledrejection', (e) => { if (/dynamically imported|Failed to fetch|module script|import/i.test(String(e.reason && (e.reason.message || e.reason)))) fail(); });
    window.addEventListener('error', (e) => { if (e.target && e.target.tagName === 'SCRIPT' && e.target.type === 'module') fail(); }, true);
    setTimeout(() => { import('./vendor/three.module.min.js').catch(fail); }, 4000);          // already cached when everything worked: no extra download
  }

  function init() {
    build();
    watch3d();
    robotPage();
    wireScroll();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
