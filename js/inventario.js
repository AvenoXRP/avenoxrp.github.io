/* Render della pagina inventario.html a partire da js/inventario-data.js */
document.addEventListener("DOMContentLoaded", () => {
  const itemsGrid = document.getElementById("inv-items-grid");
  const weaponsGrid = document.getElementById("inv-weapons-grid");
  const itemsTitle = document.getElementById("inv-items-title");
  const weaponsTitle = document.getElementById("inv-weapons-title");
  const searchInput = document.getElementById("inv-search");
  const counts = document.getElementById("inv-counts");
  const tabs = document.querySelectorAll(".inv-tab");
  if (!itemsGrid || !weaponsGrid) return;

  const items = typeof INVENTARIO_ITEMS !== "undefined" ? INVENTARIO_ITEMS : [];
  const weapons = typeof INVENTARIO_WEAPONS !== "undefined" ? INVENTARIO_WEAPONS : [];

  let activeTab = "all"; // all | items | weapons

  function cardHtml(entry) {
    const imgPath = `assets/inventario/${entry.image}`;
    return `
      <div class="inv-card">
        <table class="inv-table">
          <thead>
            <tr><th>Immagine</th><th>ID</th><th>Label</th></tr>
          </thead>
          <tbody>
            <tr>
              <td class="inv-img-cell">
                <img class="inv-img" src="${imgPath}" alt="${entry.label}"
                     onerror="this.replaceWith(Object.assign(document.createElement('div'), {className:'inv-img-missing', textContent:'?'}))">
              </td>
              <td class="inv-id">${entry.id}</td>
              <td class="inv-label">${entry.label}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }

  function render() {
    const query = searchInput.value.trim().toLowerCase();

    const filteredItems = items.filter(e =>
      !query || e.id.toLowerCase().includes(query) || e.label.toLowerCase().includes(query)
    );
    const filteredWeapons = weapons.filter(e =>
      !query || e.id.toLowerCase().includes(query) || e.label.toLowerCase().includes(query)
    );

    const showItems = activeTab === "all" || activeTab === "items";
    const showWeapons = activeTab === "all" || activeTab === "weapons";

    itemsTitle.style.display = showItems ? "" : "none";
    itemsGrid.style.display = showItems ? "" : "none";
    weaponsTitle.style.display = showWeapons ? "" : "none";
    weaponsGrid.style.display = showWeapons ? "" : "none";

    itemsGrid.innerHTML = showItems ? filteredItems.map(cardHtml).join("") : "";
    weaponsGrid.innerHTML = showWeapons ? filteredWeapons.map(cardHtml).join("") : "";

    itemsTitle.textContent = `Items (${filteredItems.length})`;
    weaponsTitle.textContent = `Armi (${filteredWeapons.length})`;

    counts.textContent = `${filteredItems.length + filteredWeapons.length} risultati su ${items.length + weapons.length}`;
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeTab = tab.dataset.tab;
      render();
    });
  });

  searchInput.addEventListener("input", render);

  render();
});
