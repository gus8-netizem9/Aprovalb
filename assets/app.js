const CATEGORIES = [
  { id: "portugues", name: "Língua Portuguesa", symbol: "Aa" },
  { id: "matematica", name: "Matemática", symbol: "＋" },
  { id: "raciocinio-logico", name: "Raciocínio Lógico", symbol: "∴" },
  { id: "informatica", name: "Informática", symbol: "⌘" },
  { id: "direito-constitucional", name: "Direito Constitucional", symbol: "§" },
  { id: "direito-administrativo", name: "Direito Administrativo", symbol: "⚖" }
];

const grid = document.getElementById("materials-grid");
const empty = document.getElementById("empty-state");
const search = document.getElementById("search-input");
const filter = document.getElementById("category-filter");
const count = document.getElementById("material-count");

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[char]));
}

function renderMaterials(items) {
  const term = search.value.trim().toLocaleLowerCase("pt-BR");
  const category = filter.value;
  const visible = items.filter(item => {
    const matchesCategory = category === "todos" || item.category === category;
    const text = [item.title, item.description, item.category_name].join(" ").toLocaleLowerCase("pt-BR");
    return matchesCategory && text.includes(term);
  });
  count.textContent = visible.length;
  grid.innerHTML = visible.map(item => {
    const cover = item.cover
      ? '<img src="' + escapeHtml(item.cover) + '" alt="Capa de ' + escapeHtml(item.title) + '">'
      : '<span class="cover-symbol">' + escapeHtml(item.icon || "▤") + '</span>';
    const pages = Number(item.pages) > 0 ? Number(item.pages) + " páginas" : "Material de estudo";
    const action = item.pdf
      ? '<a class="material-link" href="' + escapeHtml(item.pdf) + '" target="_blank" rel="noopener">Abrir material ↗</a>'
      : '<span class="material-link">Em preparação</span>';
    return '<article class="material-card"><div class="material-cover">' + cover + '</div><div class="material-info"><span class="material-category">' + escapeHtml(item.category_name || "Material de estudo") + '</span><h3>' + escapeHtml(item.title) + '</h3><p>' + escapeHtml(item.description || "") + '</p><div class="material-meta"><span>' + escapeHtml(pages) + '</span>' + action + '</div></div></article>';
  }).join("");
  empty.hidden = visible.length > 0;
  if (visible.length === 0 && items.length > 0) {
    empty.querySelector("h3").textContent = "Nenhum material encontrado.";
    empty.querySelector("p").textContent = "Tente mudar a busca ou selecionar outra disciplina.";
  } else if (items.length === 0) {
    empty.querySelector("h3").textContent = "A biblioteca está sendo preparada.";
    empty.querySelector("p").textContent = "Em breve, novos materiais serão disponibilizados nesta área.";
  }
}

async function loadMaterials() {
  try {
    const response = await fetch("materiais.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Não foi possível carregar materiais.json");
    const data = await response.json();
    const items = Array.isArray(data.materials) ? data.materials.filter(item => item.published !== false) : [];
    renderMaterials(items);
  } catch (error) {
    console.error(error);
    count.textContent = "0";
    grid.innerHTML = "";
    empty.hidden = false;
    empty.querySelector("h3").textContent = "Não foi possível carregar a biblioteca.";
    empty.querySelector("p").textContent = "Atualize a página ou tente novamente mais tarde.";
  }
}

search.addEventListener("input", loadMaterials);
filter.addEventListener("change", loadMaterials);
document.querySelectorAll(".discipline-card").forEach(card => card.addEventListener("click", () => {
  filter.value = card.dataset.filter;
  setTimeout(loadMaterials, 0);
}));
document.getElementById("year").textContent = new Date().getFullYear();
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".desktop-nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}));
loadMaterials();