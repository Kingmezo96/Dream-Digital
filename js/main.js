document.documentElement.classList.add('js');

const services = {
  "brand-strategy": {
    name: "Brand Strategy",
    eyebrow: "Clarity before creativity",
    intro: "We turn market insight into a position your audience understands, values and chooses.",
    description: "A practical strategic foundation for ambitious organisations entering new markets, repositioning, or preparing for a new stage of growth.",
    items: ["Business positioning", "Growth strategy", "Brand architecture", "Market research", "Business transformation", "Audience definition"],
    outcomes: [["One story", "A clear narrative teams can repeat"], ["Sharper fit", "A position grounded in customer need"], ["Growth map", "Prioritised routes to market"]]
  },
  branding: {
    name: "Branding",
    eyebrow: "Identity built to move",
    intro: "Distinctive identity systems that help modern brands look credible, consistent and unmistakably themselves.",
    description: "From a defining mark to a complete visual language, we create flexible brand systems that work in the real world and scale across every customer touchpoint.",
    items: ["Brand identity", "Logo design", "Visual identity", "Packaging", "Brand guidelines", "Marketing assets"],
    outcomes: [["Recognition", "A memorable and ownable identity"], ["Consistency", "A system every team can use"], ["Momentum", "Launch-ready brand assets"]]
  },
  "ui-ux": {
    name: "UI/UX Design",
    eyebrow: "Designed around people",
    intro: "Digital experiences that feel simple because the thinking behind them is rigorous.",
    description: "We combine research, product logic and polished interface craft to make complex platforms clear, inclusive and delightful to use.",
    items: ["User research", "Wireframes", "User experience", "Design systems", "Prototyping", "Usability testing", "Design audit"],
    outcomes: [["Less friction", "Clearer journeys and decisions"], ["Faster teams", "Reusable, governed design systems"], ["Better adoption", "Experiences people return to"]]
  },
  "product-management": {
    name: "Product Management",
    eyebrow: "From idea to traction",
    intro: "We shape promising ideas into focused products, executable roadmaps and measurable outcomes.",
    description: "Embedded product leadership for teams that need clarity on what to build, why it matters and how to deliver it without losing momentum.",
    items: ["Product discovery", "Roadmaps", "Requirements", "Sprint planning", "MVP strategy", "Product scaling", "Agile coaching"],
    outcomes: [["Right bets", "Evidence-led product priorities"], ["Aligned teams", "Shared goals and delivery rhythm"], ["Faster learning", "MVPs built to validate"]]
  },
  "software-development": {
    name: "Software Development",
    eyebrow: "Engineered for scale",
    intro: "Reliable digital products, platforms and systems shaped around the way your organisation grows.",
    description: "Our product engineers turn validated concepts into secure, maintainable web and mobile experiences with clean architecture and thoughtful delivery.",
    items: ["Web applications", "Mobile apps", "Enterprise systems", "SaaS platforms", "API development", "Cloud infrastructure", "Maintenance"],
    outcomes: [["Production-ready", "Secure, tested, maintainable builds"], ["Built to scale", "Architecture that supports growth"], ["Clear ownership", "Documentation and handover"]]
  },
  "ai-solutions": {
    name: "AI Solutions",
    eyebrow: "Intelligence with purpose",
    intro: "Applied AI that removes busywork, improves decisions and creates genuinely useful customer experiences.",
    description: "We identify high-value automation opportunities, prototype quickly and integrate AI responsibly into the systems your teams already use.",
    items: ["AI automation", "Chatbots", "Workflow automation", "AI agents", "ML integrations", "Business intelligence", "Custom AI solutions"],
    outcomes: [["Time returned", "Automate repetitive workflows"], ["Smarter service", "Useful, contextual assistance"], ["Visible ROI", "Measured operational impact"]]
  },
  multimedia: {
    name: "Multimedia",
    eyebrow: "Stories people feel",
    intro: "Film, photography and motion crafted to carry your story across every screen.",
    description: "End-to-end content production for campaigns, products and moments that deserve to be seen, remembered and shared.",
    items: ["Photography", "Videography", "Animation", "Motion graphics", "Podcast production", "Live streaming", "Content production"],
    outcomes: [["Attention", "Creative built to stop the scroll"], ["Coherence", "One story across formats"], ["Utility", "Content systems with longevity"]]
  },
  "business-development": {
    name: "Business Development",
    eyebrow: "Growth made actionable",
    intro: "Commercial strategy, systems and partnerships that turn market opportunity into repeatable growth.",
    description: "We work with leadership teams to clarify the offer, strengthen the sales engine and build credible routes into new markets.",
    items: ["Go-to-market strategy", "Sales systems", "Business consulting", "Market expansion", "Revenue strategy", "Growth partnerships"],
    outcomes: [["Market focus", "Prioritised segments and channels"], ["Sales rhythm", "Repeatable commercial systems"], ["New reach", "Partnerships that unlock growth"]]
  },
  "digital-marketing": {
    name: "Digital Marketing",
    eyebrow: "Attention into action",
    intro: "Connected campaigns that compound reach, relevance and measurable demand.",
    description: "We pair creative experimentation with rigorous measurement to grow awareness, improve acquisition and convert more of the right customers.",
    items: ["SEO", "Paid advertising", "Email marketing", "Social media", "Analytics", "Conversion optimisation"],
    outcomes: [["Qualified reach", "Find the audience that matters"], ["Better conversion", "Remove friction in the funnel"], ["Useful insight", "Reporting tied to decisions"]]
  },
  consultancy: {
    name: "Consultancy",
    eyebrow: "Direction for what’s next",
    intro: "Senior technology and transformation guidance for complex, high-stakes change.",
    description: "We help leadership teams diagnose constraints, select the right technology and build an achievable path from ambition to adoption.",
    items: ["Digital transformation", "Technology advisory", "Innovation strategy", "Process optimisation", "Executive consulting"],
    outcomes: [["Clarity", "Independent, practical recommendations"], ["Confidence", "Risks surfaced before investment"], ["Adoption", "Change designed around people"]]
  }
};

const navigation = `
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header" id="site-header">
    <div class="container nav">
      <a class="brand" href="index.html" aria-label="Dream Digital home"><img src="assets/images/dream-digital-logo.png" alt="Dream Digital"></a>
      <nav class="nav-links" id="nav-links" aria-label="Primary navigation">
        <a href="about.html">About</a><a href="services.html">Services</a><a href="work.html">Work</a><a href="insights.html">Insights</a><a href="faq.html">FAQs</a>
        <a class="button button-primary" href="contact.html">Start a project <span class="arrow">↗</span></a>
      </nav>
      <div class="nav-actions">
        <button class="icon-button" id="theme-toggle" type="button" aria-label="Switch theme">◐</button>
        <a class="button button-primary" href="contact.html">Start a project <span class="arrow">↗</span></a>
        <button class="icon-button menu-button" id="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">☰</button>
      </div>
    </div>
  </header>`;

const footer = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand"><img src="assets/images/dream-digital-logo.png" alt="Dream Digital"><p>Africa’s modern digital transformation partner. We combine strategy, design and technology to help ambitious organisations move forward.</p></div>
        <div class="footer-col"><h3>Explore</h3><a href="about.html">About</a><a href="services.html">Services</a><a href="work.html">Work</a><a href="insights.html">Insights</a></div>
        <div class="footer-col"><h3>Services</h3><a href="service.html?s=brand-strategy">Strategy</a><a href="service.html?s=ui-ux">UI/UX</a><a href="service.html?s=software-development">Development</a><a href="service.html?s=ai-solutions">AI solutions</a></div>
        <div class="footer-col"><h3>Connect</h3><a href="mailto:dreamdigitalafrica@gmail.com?subject=Dream%20Digital%20enquiry">dreamdigitalafrica@gmail.com</a><a href="tel:+2347037078046">+234 703 707 8046</a><a href="contact.html">Start a project</a><a href="faq.html">FAQs</a><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a></div>
      </div>
      <div class="footer-bottom"><span>© <span data-year></span> Dream Digital. Built for what’s next.</span><span>Strategy · Design · Technology · Innovation</span></div>
    </div>
  </footer>`;

function renderChrome() {
  const headerSlot = document.querySelector('[data-header]');
  const footerSlot = document.querySelector('[data-footer]');
  if (headerSlot) headerSlot.innerHTML = navigation;
  if (footerSlot) footerSlot.innerHTML = footer;
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === 'service.html' && href === 'services.html') || (current === 'case-study.html' && href === 'work.html')) link.classList.add('active');
  });
}

function initTheme() {
  const saved = localStorage.getItem('dream-theme');
  document.documentElement.dataset.theme = saved || 'dark';
  const toggle = document.getElementById('theme-toggle');
  toggle?.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('dream-theme', theme);
  });
}

function initNavigation() {
  const header = document.getElementById('site-header');
  const menu = document.getElementById('nav-links');
  const toggle = document.getElementById('menu-toggle');
  const onScroll = () => header?.classList.toggle('scrolled', scrollY > 20);
  onScroll();
  addEventListener('scroll', onScroll, { passive: true });
  toggle?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '×' : '☰';
    document.body.style.overflow = open ? 'hidden' : '';
  });
}

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) return items.forEach(el => el.classList.add('visible'));
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: .08, rootMargin: '160px 0px' });
  items.forEach(el => observer.observe(el));
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const start = performance.now();
    const tick = now => {
      const progress = Math.min((now - start) / 1100, 1);
      el.textContent = `${Math.round(target * (1 - Math.pow(1 - progress, 3)))}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    observer.unobserve(el);
  }), { threshold: .5 });
  counters.forEach(el => observer.observe(el));
}

function initFaq() {
  document.querySelectorAll('.faq-question').forEach(button => button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const open = item.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  }));
}

function initFilters() {
  document.querySelectorAll('.filter-button').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('.filter-button').forEach(el => el.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.work-card').forEach(card => card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter));
  }));
}

function initBeforeAfter() {
  const range = document.querySelector('[data-compare]');
  const after = document.querySelector('.before-after .after');
  range?.addEventListener('input', () => after.style.width = `${range.value}%`);
}

function initForm() {
  const form = document.querySelector('[data-contact-form]');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form));
    sessionStorage.setItem('dream-digital-enquiry', JSON.stringify({ ...data, createdAt: new Date().toISOString() }));
    const status = form.querySelector('.form-status');
    status.textContent = `Thanks, ${data.name.split(' ')[0]}. Your enquiry has been captured for this prototype. Connect the production CRM endpoint in js/main.js to route it to the Dream Digital team.`;
    status.classList.add('show');
    form.reset();
  });
}

function renderServiceDetail() {
  const root = document.querySelector('[data-service-detail]');
  if (!root) return;
  const key = new URLSearchParams(location.search).get('s') || 'brand-strategy';
  const service = services[key] || services['brand-strategy'];
  document.title = `${service.name} — Dream Digital`;
  root.innerHTML = `
    <section class="page-hero"><div class="container reveal">
      <p class="eyebrow">${service.eyebrow}</p><h1>${service.name}</h1><p class="lead">${service.intro}</p>
      <div class="hero-actions"><a class="button button-primary button-lg" href="contact.html?service=${encodeURIComponent(service.name)}">Discuss your project <span class="arrow">↗</span></a><a class="button button-ghost button-lg" href="services.html">All services</a></div>
    </div></section>
    <section class="section"><div class="container split">
      <div class="reveal"><p class="eyebrow">The opportunity</p><h2>Move with clarity.</h2></div>
      <div class="reveal"><p class="lead">${service.description}</p><ul class="detail-list">${service.items.map(item => `<li>${item}</li>`).join('')}</ul></div>
    </div></section>
    <section class="section-sm"><div class="container"><p class="eyebrow">What changes</p><div class="outcomes">${service.outcomes.map(([title, copy]) => `<div class="outcome glass-card reveal"><strong>${title}</strong><p class="text-muted">${copy}</p></div>`).join('')}</div></div></section>
    <section class="section"><div class="container cta reveal"><p class="eyebrow">Ready when you are</p><h2>Let’s make what’s next real.</h2><p class="lead">Tell us where you are, where you need to go, and what is standing in the way.</p><a class="button button-primary button-lg" href="contact.html?service=${encodeURIComponent(service.name)}">Start a conversation <span class="arrow">↗</span></a></div></section>`;
}

function prefillService() {
  const select = document.querySelector('[name="service"]');
  const value = new URLSearchParams(location.search).get('service');
  if (select && value) select.value = value;
}

function initCursor() {
  if (!matchMedia('(pointer:fine)').matches) return;
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);
  addEventListener('pointermove', event => { glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; }, { passive: true });
}

renderChrome();
renderServiceDetail();
initTheme();
initNavigation();
initReveal();
initCounters();
initFaq();
initFilters();
initBeforeAfter();
initForm();
prefillService();
initCursor();
