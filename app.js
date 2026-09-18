const tools = [
  // AI Creator — 18
  { name: "ChatGPT Plus", category: "AI Creator" },
  { name: "HeyGen", category: "AI Creator" },
  { name: "Leonardo AI", category: "AI Creator" },
  { name: "Gemini", category: "AI Creator" },
  { name: "Claude AI", category: "AI Creator" },
  { name: "DeepSeek AI", category: "AI Creator" },
  { name: "Grok AI", category: "AI Creator" },
  { name: "Runway ML", category: "AI Creator" },
  { name: "Speechify", category: "AI Creator" },
  { name: "Perplexity AI", category: "AI Creator" },
  { name: "Sora", category: "AI Creator" },
  { name: "HumanPal", category: "AI Creator" },
  { name: "Avatar Builder", category: "AI Creator" },
  { name: "Toons AI", category: "AI Creator" },
  { name: "Artistly", category: "AI Creator" },
  { name: "Bolt AI", category: "AI Creator" },
  { name: "Monica AI", category: "AI Creator" },
  { name: "AI Images Generator", category: "AI Creator" },

  // SEO & Research — 33
  { name: "Semrush Guru", category: "SEO & Research" },
  { name: "Moz Pro", category: "SEO & Research" },
  { name: "Ubersuggest", category: "SEO & Research" },
  { name: "SEOptimer", category: "SEO & Research" },
  { name: "Woorank", category: "SEO & Research" },
  { name: "SimilarWeb", category: "SEO & Research" },
  { name: "Wordtracker", category: "SEO & Research" },
  { name: "SpyFu", category: "SEO & Research" },
  { name: "Helium 10", category: "SEO & Research" },
  { name: "Seobility", category: "SEO & Research" },
  { name: "BuzzStream", category: "SEO & Research" },
  { name: "SEO Site Checkup", category: "SEO & Research" },
  { name: "AnswerThePublic", category: "SEO & Research" },
  { name: "Mangools", category: "SEO & Research" },
  { name: "KWfinder", category: "SEO & Research" },
  { name: "Keyword.io", category: "SEO & Research" },
  { name: "SpamZilla", category: "SEO & Research" },
  { name: "Keywords Everywhere", category: "SEO & Research" },
  { name: "KeywordRevealer", category: "SEO & Research" },
  { name: "Taplio", category: "SEO & Research" },
  { name: "Rivalflow", category: "SEO & Research" },
  { name: "Majestic", category: "SEO & Research" },
  { name: "Unbounce", category: "SEO & Research" },
  { name: "SEO Audit", category: "SEO & Research" },
  { name: "LongTail Pro", category: "SEO & Research" },
  { name: "Cognitive SEO", category: "SEO & Research" },
  { name: "SEO Crawl", category: "SEO & Research" },
  { name: "LeadPal", category: "SEO & Research" },
  { name: "Ice.bio", category: "SEO & Research" },
  { name: "Indexification", category: "SEO & Research" },
  { name: "Links Indexer", category: "SEO & Research" },
  { name: "Buzzsumo", category: "SEO & Research" },
  { name: "Surfshark VPN", category: "SEO & Research" },

  // Design & Stock — 28
  { name: "Envato Elements", category: "Design & Stock" },
  { name: "Freepik", category: "Design & Stock" },
  { name: "Freepik Downloader", category: "Design & Stock" },
  { name: "Adobe Stock", category: "Design & Stock" },
  { name: "Shutterstock Downloader", category: "Design & Stock" },
  { name: "Getty Images Downloader", category: "Design & Stock" },
  { name: "iStock Photo", category: "Design & Stock" },
  { name: "Alamy Downloader", category: "Design & Stock" },
  { name: "Canva Pro", category: "Design & Stock" },
  { name: "Figma", category: "Design & Stock" },
  { name: "Placeit", category: "Design & Stock" },
  { name: "Vecteezy Pro", category: "Design & Stock" },
  { name: "Design AI", category: "Design & Stock" },
  { name: "Vista Create", category: "Design & Stock" },
  { name: "PicMonkey", category: "Design & Stock" },
  { name: "Picsart", category: "Design & Stock" },
  { name: "Kittl", category: "Design & Stock" },
  { name: "Photoroom", category: "Design & Stock" },
  { name: "Beautiful AI", category: "Design & Stock" },
  { name: "Uizard", category: "Design & Stock" },
  { name: "Sketchgenius", category: "Design & Stock" },
  { name: "Designbeast", category: "Design & Stock" },
  { name: "Fotojet", category: "Design & Stock" },
  { name: "Icons8", category: "Design & Stock" },
  { name: "IconScout", category: "Design & Stock" },
  { name: "Flaticon", category: "Design & Stock" },
  { name: "PNGTree", category: "Design & Stock" },
  { name: "LOVEPIK", category: "Design & Stock" },

  // AI Writing — 28
  { name: "Grammarly", category: "AI Writing" },
  { name: "Quillbot", category: "AI Writing" },
  { name: "Jasper", category: "AI Writing" },
  { name: "Wordtune", category: "AI Writing" },
  { name: "CloserCopy", category: "AI Writing" },
  { name: "HIX AI", category: "AI Writing" },
  { name: "WriteHuman", category: "AI Writing" },
  { name: "StealthWriter", category: "AI Writing" },
  { name: "Jenni AI", category: "AI Writing" },
  { name: "Scite AI", category: "AI Writing" },
  { name: "ProWritingAid", category: "AI Writing" },
  { name: "WordHero", category: "AI Writing" },
  { name: "Rytr", category: "AI Writing" },
  { name: "NoteGPT", category: "AI Writing" },
  { name: "Paperpal", category: "AI Writing" },
  { name: "Quetext", category: "AI Writing" },
  { name: "Creaitor AI", category: "AI Writing" },
  { name: "Cramly AI", category: "AI Writing" },
  { name: "Word AI", category: "AI Writing" },
  { name: "Writerzen", category: "AI Writing" },
  { name: "SpinRewriter", category: "AI Writing" },
  { name: "Autodraft", category: "AI Writing" },
  { name: "Linguix", category: "AI Writing" },
  { name: "Textshift", category: "AI Writing" },
  { name: "One Click Article", category: "AI Writing" },
  { name: "Kontentai", category: "AI Writing" },
  { name: "Article Builder", category: "AI Writing" },
  { name: "Plagiarism Checker", category: "AI Writing" },

  // Video & Media — 15
  { name: "CapCut Pro", category: "Video & Media" },
  { name: "VidIQ Boost", category: "Video & Media" },
  { name: "InVideo Studio", category: "Video & Media" },
  { name: "Motion Array", category: "Video & Media" },
  { name: "StoryBlocks", category: "Video & Media" },
  { name: "StoryBlocks Downloader", category: "Video & Media" },
  { name: "Artlist Downloader", category: "Video & Media" },
  { name: "iStock Videos", category: "Video & Media" },
  { name: "AE Download", category: "Video & Media" },
  { name: "Flexclip", category: "Video & Media" },
  { name: "Wave.Video", category: "Video & Media" },
  { name: "Tube Ranker", category: "Video & Media" },
  { name: "Videoexpress AI", category: "Video & Media" },
  { name: "FomoClips", category: "Video & Media" },
  { name: "Storybase", category: "Video & Media" },

  // Learning — 10
  { name: "Udemy", category: "Learning" },
  { name: "Skillshare", category: "Learning" },
  { name: "Coursera", category: "Learning" },
  { name: "LinkedIn Learning", category: "Learning" },
  { name: "Scribd", category: "Learning" },
  { name: "EdX", category: "Learning" },
  { name: "Educative", category: "Learning" },
  { name: "Duolingo", category: "Learning" },
  { name: "Spotify", category: "Learning" },
  { name: "Lynda Premium", category: "Learning" }
];

const publishedPrices = {
  "ChatGPT Plus": 8500,
  "Semrush Guru": 3000,
  "Grammarly": 2500,
  "Quillbot": 2500,
  "StealthWriter": 17000,
  "CapCut Pro": 5000
};

const categoryClass = {
  "AI Creator": "ai",
  "SEO & Research": "seo",
  "Design & Stock": "design",
  "AI Writing": "writing",
  "Video & Media": "video",
  "Learning": "learning"
};

const categoryIcon = {
  "AI Creator": "✦",
  "SEO & Research": "⌁",
  "Design & Stock": "◇",
  "AI Writing": "✎",
  "Video & Media": "▶",
  "Learning": "◫"
};

function money(amount) {
  return new Intl.NumberFormat("en-NG").format(amount);
}

function getPrice(tool) {
  return publishedPrices[tool.name] ?? 5000;
}

function initials(name) {
  const clean = name.replace(/[^a-zA-Z0-9\s]/g, " ").trim().split(/\s+/);
  if (clean.length === 1) return clean[0].slice(0, 2).toUpperCase();
  return (clean[0][0] + clean[1][0]).toUpperCase();
}

function toolCard(tool) {
  const price = getPrice(tool);
  const isReference = Object.prototype.hasOwnProperty.call(publishedPrices, tool.name);
  return `
    <article class="tool-card">
      <div class="tool-card-top">
        <div class="tool-avatar ${categoryClass[tool.category] || ""}">${initials(tool.name)}</div>
        <span class="tool-category"><i>${categoryIcon[tool.category]}</i>${tool.category}</span>
      </div>
      <div class="tool-card-body">
        <h3>${tool.name}</h3>
        <p>Premium access listing for ${tool.category.toLowerCase()} workflows.</p>
      </div>
      <div class="tool-card-price">
        <div>
          <small>${isReference ? "Published reference price" : "Standard monthly price"}</small>
          <strong>₦${money(price)}<span>/month</span></strong>
        </div>
        <button class="tool-action" data-tool="${tool.name}" data-price="${price}" aria-label="View ${tool.name}">→</button>
      </div>
    </article>
  `;
}

function renderFeatured() {
  const mount = document.getElementById("featuredTools");
  if (!mount) return;
  const names = [
    "ChatGPT Plus", "Semrush Guru", "Canva Pro", "StealthWriter",
    "CapCut Pro", "Grammarly", "Quillbot", "Runway ML"
  ];
  mount.innerHTML = names.map(name => toolCard(tools.find(t => t.name === name))).join("");
}

function initCatalogue() {
  const mount = document.getElementById("allTools");
  if (!mount) return;

  const search = document.getElementById("toolSearch");
  const filters = [...document.querySelectorAll(".filter-btn")];
  const count = document.getElementById("resultCount");
  const empty = document.getElementById("emptyState");
  const clear = document.getElementById("clearFilters");

  let activeCategory = "All";
  let query = "";

  const queryCategory = new URLSearchParams(window.location.search).get("category");
  if (queryCategory && filters.some(btn => btn.dataset.category === queryCategory)) {
    activeCategory = queryCategory;
    filters.forEach(btn => btn.classList.toggle("active", btn.dataset.category === activeCategory));
  }

  function render() {
    const filtered = tools.filter(tool => {
      const categoryMatch = activeCategory === "All" || tool.category === activeCategory;
      const searchMatch = tool.name.toLowerCase().includes(query.toLowerCase());
      return categoryMatch && searchMatch;
    });

    mount.innerHTML = filtered.map(toolCard).join("");
    count.textContent = filtered.length;
    empty.hidden = filtered.length !== 0;
  }

  filters.forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      filters.forEach(item => item.classList.toggle("active", item === btn));
      render();
    });
  });

  search.addEventListener("input", event => {
    query = event.target.value.trim();
    render();
  });

  clear.addEventListener("click", () => {
    activeCategory = "All";
    query = "";
    search.value = "";
    filters.forEach(btn => btn.classList.toggle("active", btn.dataset.category === "All"));
    render();
  });

  render();
}

function initMobileNav() {
  const button = document.querySelector(".menu-btn");
  const nav = document.querySelector(".main-nav");
  if (!button || !nav) return;
  button.addEventListener("click", () => {
    nav.classList.toggle("open");
    button.textContent = nav.classList.contains("open") ? "×" : "☰";
  });
}

function initToolModal() {
  const modal = document.createElement("div");
  modal.className = "tool-modal";
  modal.innerHTML = `
    <div class="tool-modal-backdrop" data-close-modal></div>
    <div class="tool-modal-card" role="dialog" aria-modal="true" aria-labelledby="modalToolName">
      <button class="modal-close" data-close-modal aria-label="Close">×</button>
      <span class="eyebrow dark">TOOL DETAILS</span>
      <h2 id="modalToolName"></h2>
      <p class="modal-copy">This is the frontend selection state. Checkout, authentication and fulfilment can be connected later without changing the catalogue UI.</p>
      <div class="modal-price">
        <span>Monthly price</span>
        <strong id="modalToolPrice"></strong>
      </div>
      <button class="btn btn-primary modal-primary" data-close-modal>Continue browsing</button>
    </div>
  `;
  document.body.appendChild(modal);

  document.addEventListener("click", event => {
    const action = event.target.closest(".tool-action");
    if (action) {
      document.getElementById("modalToolName").textContent = action.dataset.tool;
      document.getElementById("modalToolPrice").textContent = `₦${money(Number(action.dataset.price))}/month`;
      modal.classList.add("show");
      document.body.classList.add("modal-open");
    }

    if (event.target.closest("[data-close-modal]")) {
      modal.classList.remove("show");
      document.body.classList.remove("modal-open");
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      modal.classList.remove("show");
      document.body.classList.remove("modal-open");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFeatured();
  initCatalogue();
  initMobileNav();
  initToolModal();
});