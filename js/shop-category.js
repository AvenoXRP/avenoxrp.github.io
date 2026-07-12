/* Render della griglia categorie/sotto-categorie/prodotti in shop-category.html, letta da ?cat= e ?sub= nell'URL */
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  const catId = params.get("cat");
  const subId = params.get("sub");
  const category = CONFIG.shopCategories.find(c => c.id === catId) || CONFIG.shopCategories[0];
  const backLink = document.querySelector(".page-hero .back-link");

  if (category.subcategories && !subId) {
    renderSubcategories();
  } else if (category.subcategories) {
    const subcategory = category.subcategories.find(s => s.id === subId) || category.subcategories[0];
    if (backLink) {
      backLink.href = `shop-category.html?cat=${category.id}`;
      backLink.innerHTML = `&larr; Torna a ${category.title}`;
    }
    renderProducts(
      `${category.title} - ${subcategory.title}`,
      subcategory.products,
      `Tutti i prodotti disponibili nella categoria ${category.title.toLowerCase()} - ${subcategory.title.toLowerCase()}.`
    );
  } else {
    renderProducts(category.title, category.products, `Tutti i prodotti disponibili nella categoria ${category.title.toLowerCase()}.`);
  }

  function renderSubcategories() {
    document.getElementById("category-title").textContent = category.title;
    document.getElementById("category-subtitle").textContent = `Scegli una sotto-categoria di ${category.title.toLowerCase()}.`;
    document.title = `${category.title} - AvenoX RP`;

    grid.className = "category-grid";
    grid.innerHTML = category.subcategories.map(sub => `
      <a href="shop-category.html?cat=${category.id}&sub=${sub.id}" class="category-card">
        <div class="category-card-img" style="background-image:url('${sub.cover || (sub.products[0] && sub.products[0].img) || category.cover}')"></div>
        <div class="category-card-body">
          <h3>${sub.title}</h3>
          <span class="category-count">${sub.products.length} prodotti</span>
        </div>
      </a>
    `).join("");
  }

  function renderProducts(title, products, subtitle) {
    document.getElementById("category-title").textContent = title;
    document.getElementById("category-subtitle").textContent = subtitle;
    document.title = `${title} - AvenoX RP`;

    grid.className = "shop-grid";
    grid.innerHTML = products.map((p, i) => {
      const isAvailable = p.available !== false;
      return `
      <div class="shop-card" data-index="${i}">
        <div class="shop-card-img" style="background-image:url('${p.img}')"></div>
        <div class="shop-card-body">
          <h4>${p.name}</h4>
          <p>${p.desc}</p>
          <span class="availability">
            <span class="availability-dot ${isAvailable ? "available" : "unavailable"}"></span>
            ${isAvailable ? "Disponibile" : "Non disponibile"}
          </span>
        </div>
      </div>
    `;
    }).join("");

    const modal = document.getElementById("product-modal");
    const closeBtn = document.getElementById("product-close");

    grid.querySelectorAll(".shop-card").forEach(card => {
      card.addEventListener("click", () => openProduct(products[card.dataset.index]));
    });

    function openProduct(p) {
      const isAvailable = p.available !== false;
      document.getElementById("product-modal-img").style.backgroundImage = `url('${p.img}')`;
      document.getElementById("product-modal-name").textContent = p.name;
      document.getElementById("product-modal-desc").textContent = p.desc;
      document.getElementById("product-modal-price").innerHTML = `
        <span class="availability-dot ${isAvailable ? "available" : "unavailable"}"></span>
        ${isAvailable ? "Disponibile" : "Non disponibile"}
      `;
      document.getElementById("product-modal-price").className = "availability";
      document.getElementById("product-modal-details").innerHTML = (p.details || []).map(d => `<li>${d}</li>`).join("");
      modal.classList.add("open");
    }

    function close() { modal.classList.remove("open"); }
    closeBtn.addEventListener("click", close);
    modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  }
});
