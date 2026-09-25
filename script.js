const SOCIAL_KEYS = ["instagram", "x", "deviantart", "artstation", "behance", "discord", "web"];

function socialsFrom(person) {
  const socials = {};
  SOCIAL_KEYS.forEach(key => {
    if (person[key]) socials[key] = person[key];
    if (person.socials && person.socials[key]) socials[key] = person.socials[key];
  });
  if (person.DA || person.da) socials.deviantart = person.DA || person.da;
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
  credit: person.credito || person.credit || "",
  photo: person.foto || person.photo || "",
  socials: socialsFrom(person)
}));

function initialsFrom(name) {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

function personFrom(person, fallbackRole) {
  const name = person.nombre || person.name || handleFrom(person.instagram || person.x) || "Artista";
  return {
    name,
    photo: person.foto || person.photo || "",
    card: person.carta || person.card || "",
    hideCard: !!(person.ocultarCarta || person.hideCard),
    role: person.rol || person.role || fallbackRole,
    initials: person.iniciales || initialsFrom(name),
    socials: socialsFrom(person)
  };
}

const ARTIST_LIST = (typeof ARTISTAS !== "undefined" ? ARTISTAS : []).map(person => {
  const entry = personFrom(person, "Ilustrador de carta");
  entry.extras = (person.tambien || []).map(extra => personFrom(extra, "Color"));
  return entry;
});

function cartaEntrada(item) {
  if (typeof item === "string") return { src: item, tipo: "" };
  return {
    src: item.archivo || item.src || "",
    tipo: String(item.tipo || "").trim().toLowerCase()
  };
}

const DECK_ITEMS = (typeof CARTAS !== "undefined" ? CARTAS : []).map(cartaEntrada).filter(item => item.src);
const TIPO_POR_CARTA = {};
DECK_ITEMS.forEach(item => { TIPO_POR_CARTA[item.src] = item.tipo; });
const DECK = DECK_ITEMS.map(item => item.src);

function tipoDe(src) {
  return TIPO_POR_CARTA[src] || "";
}

function cardTitle(src) {
  const file = String(src).split("/").pop() || "";
  return file.replace(/\.[^.]+$/, "").replace(/\s+copia$/i, "");
}

const SOCIAL_ICONS = {
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor"/></svg>',
  x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" d="M6 6l12 12M18 6 6 18"/></svg>',
  deviantart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M16.4 4.4h-3.2L11 7.6H8.6L6.2 11h2.5l1.3-2.2h2.3L8.8 15l2.4 4.6h2.5L11.3 15l4.6-7.8h2.7l1.9-2.8h-4.1z"/></svg>',
  artstation: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 17.5 8.2 6h2.3L5.2 17.5H3zm7.2 0 2.6-5.2h8.7l-2.5 5.2h-8.8zm3.4-6.5 2.2-4.4h2.2l2.3 4.4h-6.7z"/></svg>',
  behance: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8.4 11.2c.9-.4 1.5-1.1 1.5-2.1 0-1.8-1.4-2.9-3.6-2.9H2.2V18h4.4c2.4 0 4-1.2 4-3.2 0-1.5-.9-2.6-2.2-3.1zM4.6 8h1.6c1 0 1.6.5 1.6 1.3S7.2 10.6 6.2 10.6H4.6V8zm1.8 8.2H4.6v-3.6h1.9c1.1 0 1.8.6 1.8 1.8s-.7 1.8-1.9 1.8zM14.2 7.4h6.2v1.5h-6.2V7.4zM20.6 13c0-2.3-1.4-4-3.9-4s-4 1.7-4 4 1.5 4.1 4.2 4.1c1.6 0 2.8-.6 3.4-1.7h-1.9c-.3.4-.8.7-1.5.7-1 0-1.6-.5-1.8-1.4h5.4c.1-.3.1-.6.1-.7zm-5.5-1.1c.2-.9.8-1.4 1.6-1.4s1.4.5 1.6 1.4h-3.2z"/></svg>',
  discord: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8.2 8.6c1.6-.7 3.2-.7 3.2-.7l.2.4c-1.3.3-2.1.8-2.1.8s2.4-.9 6.3 0c0 0-.7-.5-2-.8l.3-.4s1.6 0 3.2.7c0 0 1.6 2.8 1.6 6.2 0 0-1.7 2.2-5.1 2.3 0 0-.4-.6-.8-1.1 1.5-.5 2.1-1.3 2.1-1.3s-.5.3-1.3.6c-.7.2-1.4.4-2.2.4h-.2c-.8 0-1.5-.2-2.2-.4-.8-.3-1.3-.6-1.3-.6s.6.8 2.1 1.3c-.4.5-.8 1.1-.8 1.1-3.4-.1-5.1-2.3-5.1-2.3 0-3.4 1.6-6.2 1.6-6.2zm1.7 5.5c-.6 0-1.1-.6-1.1-1.3s.5-1.3 1.1-1.3 1.1.6 1.1 1.3-.5 1.3-1.1 1.3zm4.2 0c-.6 0-1.1-.6-1.1-1.3s.5-1.3 1.1-1.3 1.1.6 1.1 1.3-.5 1.3-1.1 1.3z"/></svg>',
  web: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.8"/><path fill="none" stroke="currentColor" stroke-width="1.8" d="M4 12h16M12 4c2.2 2.4 3.2 5.1 3.2 8s-1 5.6-3.2 8c-2.2-2.4-3.2-5.1-3.2-8s1-5.6 3.2-8z"/></svg>'
};

const SOCIAL_LABELS = {
  instagram: "Instagram",
  x: "X",
  deviantart: "DeviantArt",
  artstation: "ArtStation",
  behance: "Behance",
  discord: "Discord",
  web: "Web"
};

const I18N = {
  es: {
    "meta.homeTitle": "MAGIKALEA — Nombre Temporal",
    "meta.homeDesc": "Magikalea — un juego de cartas de magia, estrategia y azar. Prueba el demo y únete a la comunidad.",
    "meta.catalogTitle": "Catálogo — MAGIKALEA",
    "meta.catalogDesc": "Artistas y cartas de Magikalea.",
    "nav.game": "EL JUEGO",
    "nav.cards": "CARTAS",
    "nav.catalog": "CATÁLOGO COMPLETO",
    "nav.artists": "ARTISTAS",
    "nav.tester": "TESTER",
    "nav.demo": "JUGAR DEMO",
    "nav.back": "VOLVER",
    "hero.eyebrow": "JUEGO DE CARTAS DIGITAL",
    "hero.copy": "Encuentra al mago rival. Juega tus cartas. Lee sus movimientos.",
    "hero.strong": "La magia decide quién sobrevive.",
    "hero.demo": "PROBAR EL DEMO",
    "hero.discord": "UNIRME AL DISCORD",
    "hero.alt": "Partida de Magikalea",
    "hero.caption": "DEMO EN DESARROLLO",
    "hero.scroll": "DESPLAZA",
    "game.kicker": "01 — EL JUEGO",
    "game.title": "Una batalla de magia<br><em>en tus manos.</em>",
    "game.lead": "MAGIKALEA es un juego de cartas donde el azar, la estrategia y la lectura del rival se mezclan en partidas rápidas.",
    "game.body": "Tu objetivo es descubrir el Mago escondido en la mano de tu oponente y golpearlo tres veces. Cada carta puede cambiar el rumbo de la partida: elementos para atacar, trampas para castigar y bendiciones para alterar las reglas.",
    "game.link": "DESCUBRE LAS CARTAS",
    "rule.find": "ENCUENTRA",
    "rule.findBody": "Identifica dónde se esconde el Mago rival.",
    "rule.attack": "ATACA",
    "rule.attackBody": "Usa el elemento correcto para golpear su mano.",
    "rule.win": "VENCE",
    "rule.winBody": "Tres impactos al Mago y la partida termina.",
    "cards.kicker": "02 — COLECCIÓN",
    "cards.title": "Las cartas<br><em>de Magikalea.</em>",
    "cards.lead": "Estas son algunas de las cartas que ya forman parte del prototipo. La colección seguirá creciendo durante el desarrollo.",
    "cards.more": "Ver más cartas",
    "world.kicker": "EL MUNDO",
    "world.title": "Bienvenido a<br><em>Magikalea.</em>",
    "world.body": "Islas flotantes, torres mágicas, cristales y criaturas que esperan convertirse en parte de este universo.",
    "world.video": "Video de Magikalea",
    "artists.kicker": "03 — CRÉDITOS",
    "artists.title": "Hecho por<br><em>artistas.</em>",
    "artists.lead": "Magikalea es un proyecto independiente construido junto a ilustradores, diseñadores y desarrolladores.",
    "artists.roster": "Colaboradores",
    "artists.prev": "Artistas anteriores",
    "artists.next": "Artistas siguientes",
    "community.title": "Forma parte<br><em>del juego</em>",
    "community.lead": "Buscamos jugadores para probar las versiones tempranas,",
    "community.body": "Juega las próximas versiones, comparte tu opinión y ayuda a dar forma al futuro del juego.",
    "community.testers": "TESTERS",
    "community.become": "BECOME A TESTER",
    "footer.name": "NOMBRE TEMPORAL",
    "catalog.back": "← Volver al inicio",
    "catalog.kicker": "COLECCIÓN",
    "catalog.title": "Todas las<br><em>cartas.</em>",
    "catalog.lead": "Cada carta, junto al artista que la hizo.",
    "catalog.production": "Cartas en producción.",
    "catalog.empty": "Todavía no hay cartas en esta pestaña.",
    "catalog.soon": "En desarrollo",
    "tab.all": "Todas",
    "tab.elementals": "Elementales",
    "tab.mages": "Magos",
    "tab.blessings": "Bendiciones",
    "tab.curses": "Maldiciones",
    "tab.joker": "Joker",
    "role.illustrator": "Ilustrador de carta",
    "role.color": "Color",
    "flip.see": "Ver carta",
    "flip.back": "Volver",
    "flip.soon": "Carta próximamente",
    "flip.missing": "No se encontró la imagen",
    "lang.label": "Cambiar idioma"
  },
  en: {
    "meta.homeTitle": "MAGIKALEA — Temporary Name",
    "meta.homeDesc": "Magikalea — a card game of magic, strategy, and chance. Try the demo and join the community.",
    "meta.catalogTitle": "Catalog — MAGIKALEA",
    "meta.catalogDesc": "Artists and cards of Magikalea.",
    "nav.game": "THE GAME",
    "nav.cards": "CARDS",
    "nav.catalog": "FULL CATALOG",
    "nav.artists": "ARTISTS",
    "nav.tester": "TESTER",
    "nav.demo": "PLAY DEMO",
    "nav.back": "BACK",
    "hero.eyebrow": "DIGITAL CARD GAME",
    "hero.copy": "Find the rival mage. Play your cards. Read their moves.",
    "hero.strong": "Magic decides who survives.",
    "hero.demo": "TRY THE DEMO",
    "hero.discord": "JOIN THE DISCORD",
    "hero.alt": "A Magikalea match",
    "hero.caption": "DEMO IN DEVELOPMENT",
    "hero.scroll": "SCROLL",
    "game.kicker": "01 — THE GAME",
    "game.title": "A battle of magic<br><em>in your hands.</em>",
    "game.lead": "MAGIKALEA is a card game where chance, strategy, and reading your rival come together in quick matches.",
    "game.body": "Your goal is to find the Mage hidden in your opponent's hand and hit them three times. Every card can change the match: elements to attack, traps to punish, and blessings to rewrite the rules.",
    "game.link": "DISCOVER THE CARDS",
    "rule.find": "FIND",
    "rule.findBody": "Spot where the rival Mage is hiding.",
    "rule.attack": "ATTACK",
    "rule.attackBody": "Use the right element to strike their hand.",
    "rule.win": "WIN",
    "rule.winBody": "Three hits on the Mage and the match is over.",
    "cards.kicker": "02 — COLLECTION",
    "cards.title": "The cards<br><em>of Magikalea.</em>",
    "cards.lead": "These are some of the cards already in the prototype. The collection will keep growing during development.",
    "cards.more": "See more cards",
    "world.kicker": "THE WORLD",
    "world.title": "Welcome to<br><em>Magikalea.</em>",
    "world.body": "Floating islands, magic towers, crystals, and creatures waiting to become part of this universe.",
    "world.video": "Magikalea video",
    "artists.kicker": "03 — CREDITS",
    "artists.title": "Made by<br><em>artists.</em>",
    "artists.lead": "Magikalea is an independent project built with illustrators, designers, and developers.",
    "artists.roster": "Collaborators",
    "artists.prev": "Previous artists",
    "artists.next": "Next artists",
    "community.title": "Become part<br><em>of the game</em>",
    "community.lead": "We're looking for players to test early builds,",
    "community.body": "Play upcoming builds, share your feedback, and help shape the future of our game.",
    "community.testers": "TESTERS",
    "community.become": "BECOME A TESTER",
    "footer.name": "TEMPORARY NAME",
    "catalog.back": "← Back to home",
    "catalog.kicker": "COLLECTION",
    "catalog.title": "All the<br><em>cards.</em>",
    "catalog.lead": "Each card, with the artist who made it.",
    "catalog.production": "Cards in production.",
    "catalog.empty": "There are no cards in this tab yet.",
    "catalog.soon": "In development",
    "tab.all": "All",
    "tab.elementals": "Elementals",
    "tab.mages": "Mages",
    "tab.blessings": "Blessings",
    "tab.curses": "Curses",
    "tab.joker": "Joker",
    "role.illustrator": "Card illustrator",
    "role.color": "Colorist",
    "flip.see": "See card",
    "flip.back": "Back",
    "flip.soon": "Card coming soon",
    "flip.missing": "Image not found",
    "lang.label": "Change language"
  }
};

const CREDIT_EN = {
  "Creador / Game Design": "Creator / Game Design",
  "Desarrollo": "Development",
  "Artista principal": "Lead Artist"
};

let LANG = "es";
let paintCatalog = null;
let catalogFilter = "todas";

function initialLang() {
  try {
    const saved = localStorage.getItem("magikalea-lang");
    if (saved === "en" || saved === "es") return saved;
  } catch (error) {}
  const primary = (navigator.language || "").toLowerCase();
  return primary.startsWith("en") ? "en" : "es";
}

function t(key) {
  const pack = I18N[LANG] || I18N.es;
  if (pack[key] != null) return pack[key];
  return I18N.es[key] != null ? I18N.es[key] : key;
}

function trCredit(text) {
  if (LANG !== "en" || !text) return text || "";
  return CREDIT_EN[text] || text;
}

function trRole(role) {
  if (role === "Color") return t("role.color");
  if (!role || role === "Ilustrador de carta") return t("role.illustrator");
  return role;
}

function applyLang() {
  document.documentElement.lang = LANG;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    el.alt = t(el.dataset.i18nAlt);
  });
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    el.title = t(el.dataset.i18nTitle);
  });
  const meta = document.querySelector('meta[name="description"][data-i18n-content]');
  if (meta) meta.setAttribute("content", t(meta.dataset.i18nContent));
  const langSwitch = document.getElementById("lang-switch");
  if (langSwitch) {
    langSwitch.setAttribute("aria-label", t("lang.label"));
    langSwitch.querySelectorAll("[data-set-lang]").forEach(button => {
      const on = button.dataset.setLang === LANG;
      button.classList.toggle("is-active", on);
      button.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }
}

function mountLangSwitch() {
  if (document.getElementById("lang-switch")) return;
  const wrap = document.createElement("div");
  wrap.id = "lang-switch";
  wrap.className = "lang-switch";
  wrap.innerHTML = '<button type="button" data-set-lang="es">ES</button><button type="button" data-set-lang="en">EN</button>';
  wrap.addEventListener("click", event => {
    const button = event.target.closest("[data-set-lang]");
    if (!button || button.dataset.setLang === LANG) return;
    LANG = button.dataset.setLang;
    try { localStorage.setItem("magikalea-lang", LANG); } catch (error) {}
    applyLang();
    refreshLocalized();
  });
  document.body.appendChild(wrap);
}

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
  const keys = ["instagram", "x", "deviantart", "artstation", "behance", "discord", "web"];
  const links = keys.filter(key => person.socials && person.socials[key]);
  if (!links.length) return "";
  const items = links;
  return `<div class="artist-socials">${items.map(key => {
    const icon = SOCIAL_ICONS[key];
    const label = SOCIAL_LABELS[key];
    const href = links.length ? person.socials[key] : "";
    if (!href) return `<span title="${label}" aria-hidden="true">${icon}</span>`;
    const named = LANG === "en" ? `${label} — ${person.name}` : `${label} de ${person.name}`;
    return `<a href="${esc(href)}" target="_blank" rel="noreferrer" aria-label="${esc(named)}" title="${label}">${icon}</a>`;
  }).join("")}</div>`;
}

function artistsForCard(src) {
  const person = ARTIST_LIST.find(item => item.card === src);
  if (!person) return [];
  return [person, ...(person.extras || [])];
}

function cardArtistMarkup(person) {
  if (!person) return "";
  return `
    <div class="card-artist">
      ${avatarMarkup(person)}
      <div class="card-artist-info">
        <p class="card-artist-name">${esc(person.name)}</p>
        <p class="card-artist-role">${esc(trRole(person.role))}</p>
        ${socialMarkup(person)}
      </div>
    </div>
  `;
}

function cardArtistsMarkup(src) {
  const people = artistsForCard(src);
  if (!people.length) return "";
  return `<div class="card-artists">${people.map(cardArtistMarkup).join("")}</div>`;
}

function flipPersonMarkup(person) {
  return `
    <div class="flip-person">
      ${avatarMarkup(person)}
      <h3>${esc(person.name)}</h3>
      ${socialMarkup(person)}
    </div>
  `;
}

function flipCardMarkup(person, clone) {
  const people = [person, ...(person.extras || [])];
  const art = person.card && !person.hideCard
    ? `<img class="flip-card-art" src="${esc(person.card)}" alt="${clone ? "" : `Carta de ${esc(person.name)}`}">`
    : `<div class="flip-empty">${esc(t(person.hideCard ? "catalog.soon" : "flip.soon"))}</div>`;
  return `
    <article class="flip-card"${clone ? ' aria-hidden="true"' : ""}>
      <div class="flip-inner">
        <div class="flip-face flip-front${people.length > 1 ? " is-duo" : ""}">
          ${people.map(flipPersonMarkup).join("")}
          <button type="button" class="flip-toggle" aria-pressed="false"${clone ? " tabindex=\"-1\"" : ""}>${esc(t("flip.see"))}</button>
        </div>
        <div class="flip-face flip-back">
          ${art}
          <button type="button" class="flip-toggle" aria-pressed="false"${clone ? " tabindex=\"-1\"" : ""}>${esc(t("flip.back"))}</button>
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
      <div class="artist-card-body">
        ${person.credit ? `<p class="artist-kicker">${esc(trCredit(person.credit))}</p>` : ""}
        <h3>${esc(person.name)}</h3>
        ${person.handle ? `<p class="artist-handle">${esc(person.handle)}</p>` : ""}
        <ul class="artist-roles"><li>${esc((person.roles || []).join(" · "))}</li></ul>
        ${socialMarkup(person)}
      </div>
    </article>
  `).join("");

  const catalogCards = document.getElementById("catalog-cards");
  const catalogTabs = document.getElementById("catalog-tabs");
  let catalogSources = [];
  if (catalogCards) {
    const named = ARTIST_LIST.filter(person => person.card);
    const used = new Set(named.map(person => person.card));
    const loose = DECK.filter(src => src && !used.has(src));
    const hiddenCards = new Set(
      ARTIST_LIST.filter(person => person.card && person.hideCard).map(person => person.card)
    );
    catalogSources = [...named.map(person => person.card), ...loose].map(src => ({
      src,
      tipo: tipoDe(src),
      hideCard: hiddenCards.has(src)
    }));
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
        note.textContent = t("flip.missing");
        img.replaceWith(note);
      });
    });
  };
  watchImages(catalogCards);

  if (catalogCards) {
    const pestanas = [
      { id: "todas", label: "tab.all" },
      { id: "elementales", label: "tab.elementals" },
      { id: "magos", label: "tab.mages" },
      { id: "bendiciones", label: "tab.blessings" },
      { id: "maldiciones", label: "tab.curses" },
      { id: "joker", label: "tab.joker" }
    ];
    const META_CARTAS = 63;
    const renderCatalog = tipo => {
      catalogFilter = tipo;
      const soonCard = `
        <article class="catalog-card catalog-soon">
          <div class="catalog-soon-card">
            <span>${esc(t("catalog.soon"))}</span>
          </div>
        </article>
      `;
      const visible = tipo === "todas"
        ? catalogSources
        : catalogSources.filter(item => item.tipo === tipo);
      const cards = visible.map(item => `
        <article class="catalog-card">
          ${item.hideCard
            ? `<div class="catalog-soon-card"><span>${esc(t("catalog.soon"))}</span></div>`
            : `<img src="${esc(item.src)}" alt="${esc(cardTitle(item.src))}" draggable="false">`}
          ${cardArtistsMarkup(item.src)}
        </article>
      `).join("");
      const empty = cards ? "" : `<p class="catalog-empty">${esc(t("catalog.empty"))}</p>`;
      const faltan = Math.max(0, META_CARTAS - catalogSources.length);
      const soonCards = tipo === "todas" ? soonCard.repeat(faltan) : "";
      catalogCards.innerHTML = cards + empty + soonCards;
      watchImages(catalogCards);
      if (!catalogTabs) return;
      catalogTabs.querySelectorAll("button").forEach(button => {
        const on = button.dataset.tipo === tipo;
        button.classList.toggle("is-active", on);
        button.setAttribute("aria-pressed", on ? "true" : "false");
      });
    };
    if (catalogTabs) {
      catalogTabs.innerHTML = pestanas.map(tab => `
        <button type="button" data-tipo="${tab.id}" data-i18n="${tab.label}" aria-pressed="false">${t(tab.label)}</button>
      `).join("");
      catalogTabs.addEventListener("click", event => {
        const button = event.target.closest("button");
        if (!button || !catalogTabs.contains(button)) return;
        renderCatalog(button.dataset.tipo);
      });
    }
    paintCatalog = renderCatalog;
    renderCatalog(catalogFilter);
  }

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

function refreshLocalized() {
  const leads = document.getElementById("artist-leads");
  if (leads) leads.innerHTML = CORE_TEAM.map(person => `
    <article class="artist-card">
      ${avatarMarkup(person)}
      <div class="artist-card-body">
        ${person.credit ? `<p class="artist-kicker">${esc(trCredit(person.credit))}</p>` : ""}
        <h3>${esc(person.name)}</h3>
        ${person.handle ? `<p class="artist-handle">${esc(person.handle)}</p>` : ""}
        <ul class="artist-roles"><li>${esc((person.roles || []).join(" · "))}</li></ul>
        ${socialMarkup(person)}
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".flip-front .flip-toggle").forEach(button => {
    button.textContent = t("flip.see");
  });
  document.querySelectorAll(".flip-back .flip-toggle").forEach(button => {
    button.textContent = t("flip.back");
  });
  document.querySelectorAll(".flip-front .flip-empty").forEach(node => {
    node.textContent = t("flip.soon");
  });
  document.querySelectorAll(".flip-card .artist-socials a").forEach(link => {
    const label = link.getAttribute("title") || "";
    const scope = link.closest(".flip-person") || link.closest(".flip-card");
    const name = (scope.querySelector("h3") || {}).textContent || "";
    if (!label || !name) return;
    link.setAttribute("aria-label", LANG === "en" ? `${label} — ${name}` : `${label} de ${name}`);
  });

  if (paintCatalog) paintCatalog(catalogFilter);
}

function renderTesters() {
  const list = document.getElementById("tester-list");
  const kicker = document.querySelector(".tester-kicker");
  if (!list) return;
  const names = (typeof TESTERS !== "undefined" ? TESTERS : [])
    .map(name => String(name || "").trim())
    .filter(Boolean);
  if (!names.length) {
    list.hidden = true;
    if (kicker) kicker.hidden = true;
    return;
  }
  list.hidden = false;
  if (kicker) kicker.hidden = false;
  list.innerHTML = names.map(name => `<li>${esc(name)}</li>`).join("");
}

LANG = initialLang();
mountLangSwitch();
applyLang();
renderArtists();
renderTesters();

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
