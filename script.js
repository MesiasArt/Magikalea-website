const SOCIAL_KEYS = ["instagram", "x", "artstation", "behance", "discord", "web"];

function socialsFrom(person) {
  const socials = {};
  SOCIAL_KEYS.forEach(key => {
    if (person[key]) socials[key] = person[key];
    if (person.socials && person.socials[key]) socials[key] = person.socials[key];
  });
  return socials;
}

function handleFrom(url) {
  if (!url) return "";
  const parts = String(url).split("?")[0].split("/").filter(Boolean);
  return (parts[parts.length - 1] || "").replace(/^@/, "");
}

const CORE_TEAM = (typeof EQUIPO !== "undefined" ? EQUIPO : []).map(person => ({
  name: person.nombre || person.name || handleFrom(person.instagram || person.x) || "",
  handle: person.alias || person.handle || "",
  initials: person.iniciales || person.initials || "",
  roles: person.roles || [],
  photo: person.foto || person.photo || "",
  socials: socialsFrom(person)
}));

function initialsFrom(name) {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

const ARTIST_LIST = (typeof ARTISTAS !== "undefined" ? ARTISTAS : []).map(person => {
  const socials = socialsFrom(person);
  const name = person.nombre || person.name || handleFrom(person.instagram || person.x) || "Artista";
  return {
    name,
    photo: person.foto || person.photo || "",
    card: person.carta || person.card || "",
    initials: person.iniciales || initialsFrom(name),
    socials
  };
});

const DECK = typeof CARTAS !== "undefined" ? CARTAS : [];

function cardTitle(src) {
  const file = String(src).split("/").pop() || "";
  return file.replace(/\.[^.]+$/, "").replace(/\s+copia$/i, "");
}

const SOCIAL_ICONS = {
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor"/></svg>',
  x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" d="M6 6l12 12M18 6 6 18"/></svg>',
  artstation: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 17.5 8.2 6h2.3L5.2 17.5H3zm7.2 0 2.6-5.2h8.7l-2.5 5.2h-8.8zm3.4-6.5 2.2-4.4h2.2l2.3 4.4h-6.7z"/></svg>',
  behance: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8.4 11.2c.9-.4 1.5-1.1 1.5-2.1 0-1.8-1.4-2.9-3.6-2.9H2.2V18h4.4c2.4 0 4-1.2 4-3.2 0-1.5-.9-2.6-2.2-3.1zM4.6 8h1.6c1 0 1.6.5 1.6 1.3S7.2 10.6 6.2 10.6H4.6V8zm1.8 8.2H4.6v-3.6h1.9c1.1 0 1.8.6 1.8 1.8s-.7 1.8-1.9 1.8zM14.2 7.4h6.2v1.5h-6.2V7.4zM20.6 13c0-2.3-1.4-4-3.9-4s-4 1.7-4 4 1.5 4.1 4.2 4.1c1.6 0 2.8-.6 3.4-1.7h-1.9c-.3.4-.8.7-1.5.7-1 0-1.6-.5-1.8-1.4h5.4c.1-.3.1-.6.1-.7zm-5.5-1.1c.2-.9.8-1.4 1.6-1.4s1.4.5 1.6 1.4h-3.2z"/></svg>',
  discord: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8.2 8.6c1.6-.7 3.2-.7 3.2-.7l.2.4c-1.3.3-2.1.8-2.1.8s2.4-.9 6.3 0c0 0-.7-.5-2-.8l.3-.4s1.6 0 3.2.7c0 0 1.6 2.8 1.6 6.2 0 0-1.7 2.2-5.1 2.3 0 0-.4-.6-.8-1.1 1.5-.5 2.1-1.3 2.1-1.3s-.5.3-1.3.6c-.7.2-1.4.4-2.2.4h-.2c-.8 0-1.5-.2-2.2-.4-.8-.3-1.3-.6-1.3-.6s.6.8 2.1 1.3c-.4.5-.8 1.1-.8 1.1-3.4-.1-5.1-2.3-5.1-2.3 0-3.4 1.6-6.2 1.6-6.2zm1.7 5.5c-.6 0-1.1-.6-1.1-1.3s.5-1.3 1.1-1.3 1.1.6 1.1 1.3-.5 1.3-1.1 1.3zm4.2 0c-.6 0-1.1-.6-1.1-1.3s.5-1.3 1.1-1.3 1.1.6 1.1 1.3-.5 1.3-1.1 1.3z"/></svg>',
  web: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.8"/><path fill="none" stroke="currentColor" stroke-width="1.8" d="M4 12h16M12 4c2.2 2.4 3.2 5.1 3.2 8s-1 5.6-3.2 8c-2.2-2.4-3.2-5.1-3.2-8s1-5.6 3.2-8z"/></svg>'
};

const SOCIAL_LABELS = {
  instagram: "Instagram",
  x: "X",
  artstation: "ArtStation",
  behance: "Behance",
  discord: "Discord",
  web: "Web"
};

function esc(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function avatarMarkup(person) {
  if (person.photo) {
    return `<div class="artist-avatar"><img src="${esc(person.photo)}" alt=""></div>`;
  }
  if (person.initials) {
    return `<div class="artist-avatar">${esc(person.initials)}</div>`;
  }
  return `<div class="artist-avatar is-empty" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.1" fill="currentColor"/><path fill="currentColor" d="M5.8 19c.9-3.2 3.1-4.8 6.2-4.8s5.3 1.6 6.2 4.8"/></svg></div>`;
}

function socialMarkup(person) {
  const keys = ["instagram", "x", "artstation", "behance", "discord", "web"];
  const links = keys.filter(key => person.socials && person.socials[key]);
  if (!links.length) return "";
  const items = links;
  return `<div class="artist-socials">${items.map(key => {
    const icon = SOCIAL_ICONS[key];
    const label = SOCIAL_LABELS[key];
    const href = links.length ? person.socials[key] : "";
    if (!href) return `<span title="${label}" aria-hidden="true">${icon}</span>`;
    return `<a href="${esc(href)}" target="_blank" rel="noreferrer" aria-label="${esc(label)} de ${esc(person.name)}" title="${label}">${icon}</a>`;
  }).join("")}</div>`;
}

function artistForCard(src) {
  return ARTIST_LIST.find(item => item.card === src) || null;
}

function cardArtistMarkup(person) {
  if (!person) return "";
  return `
    <div class="card-artist">
      ${avatarMarkup(person)}
      <div class="card-artist-info">
        <p class="card-artist-name">${esc(person.name)}</p>
        <p class="card-artist-role">Ilustrador de carta</p>
        ${socialMarkup(person)}
      </div>
    </div>
  `;
}

function flipCardMarkup(person, clone) {
  const art = person.card
    ? `<img class="flip-card-art" src="${esc(person.card)}" alt="${clone ? "" : `Carta de ${esc(person.name)}`}">`
    : `<div class="flip-empty">Carta próximamente</div>`;
  return `
    <article class="flip-card"${clone ? ' aria-hidden="true"' : ""}>
      <div class="flip-inner">
        <div class="flip-face flip-front">
          ${avatarMarkup(person)}
          <h3>${esc(person.name)}</h3>
          ${socialMarkup(person)}
          <button type="button" class="flip-toggle" aria-pressed="false"${clone ? " tabindex=\"-1\"" : ""}>Ver carta</button>
        </div>
        <div class="flip-face flip-back">
          ${art}
          <button type="button" class="flip-toggle" aria-pressed="false"${clone ? " tabindex=\"-1\"" : ""}>Volver</button>
        </div>
      </div>
    </article>
  `;
}

function renderArtists() {
  const leads = document.getElementById("artist-leads");
  const roster = document.getElementById("artist-roster");
  const shell = document.getElementById("artist-carousel");

  if (leads) leads.innerHTML = CORE_TEAM.map(person => `
    <article class="artist-card">
      ${avatarMarkup(person)}
      <h3>${esc(person.name)}</h3>
      ${person.handle ? `<p class="artist-handle">${esc(person.handle)}</p>` : ""}
      <ul class="artist-roles">${(person.roles || []).map(role => `<li>${esc(role)}</li>`).join("")}</ul>
      ${socialMarkup(person)}
    </article>
  `).join("");

  const catalogCards = document.getElementById("catalog-cards");
  if (catalogCards) {
    const named = ARTIST_LIST.filter(person => person.card);
    const used = new Set(named.map(person => person.card));
    const loose = DECK.filter(src => src && !used.has(src));
    const cards = [...named.map(person => person.card), ...loose];
    catalogCards.innerHTML = cards.map(src => `
      <article class="catalog-card">
        <img src="${esc(src)}" alt="${esc(cardTitle(src))}" draggable="false">
        ${cardArtistMarkup(artistForCard(src))}
      </article>
    `).join("");
  }

  const gallery = document.getElementById("card-gallery");
  if (gallery) {
    const featured = [
      "assets/baja/Arcane Call.jpg",
      "assets/baja/Deadeye.jpg",
      "assets/baja/Maga - Mao.jpg",
      "assets/baja/Clairvoyance.jpg",
      "assets/baja/Maga - Naira.jpg"
    ];
    gallery.innerHTML = featured.map(src => `
      <article class="tcg-card">
        <img src="${esc(src)}" alt="${esc(cardTitle(src))}" draggable="false">
      </article>
    `).join("");
  }

  const watchImages = root => {
    if (!root) return;
    root.querySelectorAll(".flip-card-art, .catalog-card img").forEach(img => {
      img.addEventListener("error", () => {
        const note = document.createElement("div");
        note.className = "flip-empty";
        note.textContent = "No se encontró la imagen";
        img.replaceWith(note);
      });
    });
  };
  watchImages(catalogCards);

  const bindFlip = root => {
    if (!root) return;
    root.addEventListener("click", event => {
      const button = event.target.closest(".flip-toggle");
      if (!button || !root.contains(button)) return;
      const card = button.closest(".flip-card");
      const flipped = card.classList.toggle("is-flipped");
      card.querySelectorAll(".flip-toggle").forEach(item => {
        item.setAttribute("aria-pressed", flipped ? "true" : "false");
      });
      if (root === roster) flipPaused = !!roster.querySelector(".flip-card.is-flipped");
    });
  };
  if (!shell || !roster) return;
  if (!ARTIST_LIST.length) {
    shell.hidden = true;
    return;
  }

  const viewport = shell.querySelector(".carousel-viewport");
  const cardWidth = 196;
  const copies = Math.max(2, Math.ceil((viewport.clientWidth * 2) / (cardWidth * ARTIST_LIST.length)));
  const oneSet = ARTIST_LIST.map(person => flipCardMarkup(person, false)).join("");
  const extra = ARTIST_LIST.map(person => flipCardMarkup(person, true)).join("");
  roster.innerHTML = oneSet + extra.repeat(copies - 1);
  watchImages(roster);
  bindFlip(roster);

  let offset = 0;
  let setWidth = 0;
  let hoverPaused = false;
  let flipPaused = false;
  let hiddenPaused = false;
  const motionOk = () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const measure = () => {
    const card = roster.querySelector(".flip-card");
    if (!card) return;
    const gap = parseFloat(getComputedStyle(roster).columnGap) || 0;
    setWidth = (card.offsetWidth + gap) * ARTIST_LIST.length;
  };

  const paint = () => {
    roster.style.transform = `translate3d(${-offset}px,0,0)`;
  };

  const wrap = () => {
    if (setWidth <= 0) return;
    offset = ((offset % setWidth) + setWidth) % setWidth;
  };

  viewport.addEventListener("pointerenter", () => { hoverPaused = true; });
  viewport.addEventListener("pointerleave", () => { hoverPaused = false; });
  viewport.addEventListener("pointerdown", () => { hoverPaused = true; });
  viewport.addEventListener("pointerup", () => {
    setTimeout(() => { hoverPaused = false; }, 0);
  });
  viewport.addEventListener("pointercancel", () => { hoverPaused = false; });

  shell.querySelector(".prev").addEventListener("click", () => {
    measure();
    const card = roster.querySelector(".flip-card");
    const gap = parseFloat(getComputedStyle(roster).columnGap) || 0;
    offset -= (card ? card.offsetWidth + gap : cardWidth);
    wrap();
    paint();
  });
  shell.querySelector(".next").addEventListener("click", () => {
    measure();
    const card = roster.querySelector(".flip-card");
    const gap = parseFloat(getComputedStyle(roster).columnGap) || 0;
    offset += (card ? card.offsetWidth + gap : cardWidth);
    wrap();
    paint();
  });

  document.addEventListener("visibilitychange", () => {
    hiddenPaused = document.hidden;
  });
  window.addEventListener("resize", () => {
    measure();
    wrap();
    paint();
  });

  measure();
  const tick = () => {
    if (motionOk() && !hoverPaused && !flipPaused && !hiddenPaused && setWidth > 0) {
      offset += 0.55;
      if (offset >= setWidth) offset -= setWidth;
      paint();
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

renderArtists();

// Magikalea landing page — small interaction layer.
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
  });
});

// Subtle parallax on the hero artwork.
const heroArt = document.querySelector('.hero-art');
window.addEventListener('scroll', () => {
  if (!heroArt) return;
  const y = Math.min(window.scrollY * .12, 80);
  heroArt.style.transform = `translateY(${y}px) scale(1.03)`;
}, {passive:true});
