// ============================================================
//  Libraries: GSAP + ScrollTrigger, Three.js, Typed.js, Lottie
// ============================================================

declare const gsap: any;
declare const ScrollTrigger: any;
declare const THREE: any;
declare const Typed: any;
declare const lottie: any;

// ============================================================
//  LOADER
// ============================================================
function initLoader(): Promise<void> {
  return new Promise((resolve) => {
    const loader = document.getElementById("loader") as HTMLElement;
    const progress = loader.querySelector(".loader-progress") as HTMLElement;
    let pct = 0;
    const timer = setInterval(() => {
      pct += Math.random() * 15;
      if (pct >= 100) {
        pct = 100;
        clearInterval(timer);
        progress.style.width = "100%";
        setTimeout(() => {
          gsap.to(loader, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
              loader.style.display = "none";
              resolve();
            },
          });
        }, 300);
      } else {
        progress.style.width = `${pct}%`;
      }
    }, 80);
  });
}

// ============================================================
//  THREE.JS — Particle background
// ============================================================
function initThreeBackground(): void {
  const canvas = document.getElementById("bg-canvas") as HTMLCanvasElement;
  if (!canvas || !THREE) return;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: false,
    alpha: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.z = 5;

  // Particle geometry
  const count = 800;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  // Color based on current theme
  const isDark =
    document.documentElement.getAttribute("data-theme") !== "light";
  const material = new THREE.PointsMaterial({
    size: 0.035,
    color: isDark ? 0x4f8ef7 : 0x2563eb,
    transparent: true,
    opacity: isDark ? 0.35 : 0.2,
    sizeAttenuation: true,
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  // Mouse parallax
  let mouseX = 0,
    mouseY = 0;
  document.addEventListener("mousemove", (e: MouseEvent) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 0.4;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 0.4;
  });

  // Animation loop
  let frame = 0;
  const animate = () => {
    requestAnimationFrame(animate);
    frame += 0.003;
    points.rotation.y = frame + mouseX * 0.3;
    points.rotation.x = mouseY * 0.2;
    renderer.render(scene, camera);
  };
  animate();

  // Resize
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Update particle color on theme change
  const observer = new MutationObserver(() => {
    const dark =
      document.documentElement.getAttribute("data-theme") !== "light";
    material.color.setHex(dark ? 0x4f8ef7 : 0x2563eb);
    material.opacity = dark ? 0.35 : 0.2;
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
}

// ============================================================
//  TYPED.JS — Hero text
// ============================================================
function initTyped(): void {
  const el = document.getElementById("typed-text");
  if (!el || !Typed) return;
  new Typed("#typed-text", {
    strings: ["Web", "Mobile", "Design", "Code"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1800,
    loop: true,
    cursorChar: "|",
  });
}

// ============================================================
//  LOTTIE — Profile badge
// ============================================================
function initLottie(): void {
  const container = document.getElementById("lottie-code");
  if (!container || !lottie) return;
  // Use a simple inline SVG animation (no external JSON needed)
  container.innerHTML = `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#1a2233"/>
    <path d="M15 13L9 20L15 27" stroke="#4f8ef7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M25 13L31 20L25 27" stroke="#4f8ef7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22 10L18 30" stroke="#93c5fd" stroke-width="2" stroke-linecap="round"/>
  </svg>`;
}

// ============================================================
//  GSAP — All scroll & entrance animations
// ============================================================
function initGSAP(): void {
  if (!gsap || !ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  // --- Hero fade-up sequence ---
  const heroItems = document.querySelectorAll(".hero-content .gsap-fade-up");
  gsap.fromTo(
    heroItems,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out",
      delay: 0.2,
    },
  );

  // Hero profile
  gsap.fromTo(
    ".profile-frame",
    { opacity: 0, scale: 0.85 },
    { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.4)", delay: 0.4 },
  );

  // Floating cards
  gsap.fromTo(
    ".floating-card",
    { opacity: 0, x: -30 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.9,
    },
  );

  // Floating animation loop
  gsap.to(".card-1", {
    y: -12,
    duration: 2.4,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    delay: 0,
  });
  gsap.to(".card-2", {
    y: -10,
    duration: 2.8,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    delay: 0.6,
  });
  gsap.to(".profile-badge-floating", {
    y: -6,
    duration: 2,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    delay: 0.3,
  });

  // --- Section reveals (eyebrow + title + subtitle) ---
  document.querySelectorAll(".gsap-reveal").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      },
    );
  });

  // --- Cards stagger ---
  const cardGroups: { [key: string]: Element[] } = {};
  document.querySelectorAll(".gsap-card").forEach((card) => {
    const section = card.closest("section")?.id || "default";
    if (!cardGroups[section]) cardGroups[section] = [];
    cardGroups[section].push(card);
  });

  Object.entries(cardGroups).forEach(([, cards]) => {
    cards.forEach((card) => {
      const delay = parseFloat((card as HTMLElement).dataset.delay || "0");
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%", once: true },
        },
      );
    });
  });

  // --- Counter animation ---
  document.querySelectorAll(".stat-number").forEach((el) => {
    const target = parseInt((el as HTMLElement).dataset.count || "0");
    ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () => {
        gsap.to(
          { val: 0 },
          {
            val: target,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: function () {
              el.textContent = Math.round(this.targets()[0].val).toString();
            },
          },
        );
      },
    });
  });

  // --- Nav active state on scroll ---
  const sections = document.querySelectorAll("section[id]");
  ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    onUpdate: () => {
      let current = "";
      sections.forEach((s) => {
        const rect = s.getBoundingClientRect();
        if (rect.top <= 120) current = s.id;
      });
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.toggle(
          "active",
          (link as HTMLElement).dataset.section === current,
        );
      });
    },
  });
}

// ============================================================
//  CUSTOM CURSOR
// ============================================================
function initCursor(): void {
  const dot = document.querySelector(".cursor-dot") as HTMLElement;
  const ring = document.querySelector(".cursor-ring") as HTMLElement;
  if (!dot || !ring) return;

  let rx = 0,
    ry = 0;
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  document.addEventListener("mousemove", (e: MouseEvent) => {
    gsap.set(dot, { x: e.clientX, y: e.clientY });
    rx = e.clientX;
    ry = e.clientY;
  });

  // Smooth ring follow
  const followRing = () => {
    const cx = parseFloat(ring.style.left || "0");
    const cy = parseFloat(ring.style.top || "0");
    ring.style.left = lerp(cx, rx, 0.12) + "px";
    ring.style.top = lerp(cy, ry, 0.12) + "px";
    requestAnimationFrame(followRing);
  };
  followRing();

  // Hover expand
  document
    .querySelectorAll("a, button, .project-card, .service-card")
    .forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(ring, { width: 56, height: 56, opacity: 0.8, duration: 0.25 });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(ring, { width: 36, height: 36, opacity: 0.5, duration: 0.25 });
      });
    });
}

// ============================================================
//  HEADER scroll effect
// ============================================================
function initHeader(): void {
  const header = document.getElementById("header");
  if (!header) return;
  const onScroll = () =>
    header.classList.toggle("scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// ============================================================
//  THEME TOGGLE
// ============================================================
function initTheme(): void {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  const html = document.documentElement;
  const saved = localStorage.getItem("portfolio-theme") || "dark";
  html.setAttribute("data-theme", saved);

  btn.addEventListener("click", () => {
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
    gsap.fromTo(
      btn,
      { rotate: 0 },
      { rotate: 180, duration: 0.4, ease: "back.out(1.7)" },
    );
  });
}

// ============================================================
//  MOBILE MENU
// ============================================================
function initMobileMenu(): void {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("mobile-menu");
  if (!hamburger || !menu) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    menu.classList.toggle("open");
  });

  menu.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      menu.classList.remove("open");
    });
  });
}

// ============================================================
//  SMOOTH SCROLL for nav links
// ============================================================
function initSmoothScroll(): void {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = (link as HTMLAnchorElement).getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navH = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--nav-h",
          ) || "72",
        );
        const top =
          (target as HTMLElement).getBoundingClientRect().top +
          window.scrollY -
          navH;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}

// ============================================================
//  CONTACT FORM — micro-animation on submit
// ============================================================
function initContactForm(): void {
  const form = document.getElementById("contact-form") as HTMLFormElement;
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector(".btn-submit") as HTMLElement;
    const original = btn.innerHTML;
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Message envoyé !`;
    gsap.fromTo(
      btn,
      { scale: 0.95 },
      { scale: 1, duration: 0.3, ease: "back.out(2)" },
    );
    setTimeout(() => {
      btn.innerHTML = original;
    }, 3000);
  });
}

// ============================================================
//  CARD TILT micro-interaction
// ============================================================
function initCardTilt(): void {
  document.querySelectorAll(".project-card, .service-card").forEach((card) => {
    const el = card as HTMLElement;
    el.addEventListener("mousemove", (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(el, {
        rotateX: -y * 6,
        rotateY: x * 6,
        transformPerspective: 800,
        duration: 0.35,
        ease: "power1.out",
      });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  });
}

// ============================================================
//  BOOT
// ============================================================
async function boot(): Promise<void> {
  initTheme();
  await initLoader();

  // Wait one frame so DOM is fully laid out
  requestAnimationFrame(() => {
    initThreeBackground();
    initTyped();
    initLottie();
    initGSAP();
    initCursor();
    initHeader();
    initMobileMenu();
    initSmoothScroll();
    initContactForm();
    initCardTilt();
  });
}

boot();
