/* Render della griglia categorie in shop.html */
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("shop-categories");
  if (!container) return;

  const countProducts = cat => cat.subcategories
    ? cat.subcategories.reduce((n, sub) => n + sub.products.length, 0)
    : cat.products.length;

  container.innerHTML = CONFIG.shopCategories.map(cat => `
    <a href="shop-category.html?cat=${cat.id}" class="category-card">
      <div class="category-card-img" style="background-image:url('${cat.cover}')"></div>
      <div class="category-card-body">
        <span class="category-icon">${cat.icon}</span>
        <h3>${cat.title}</h3>
        <span class="category-count">${countProducts(cat)} prodotti</span>
      </div>
    </a>
  `).join("");
});
