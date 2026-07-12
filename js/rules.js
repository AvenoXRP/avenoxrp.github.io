/* Render del regolamento con sidebar di navigazione */
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("rules-sidebar");
  const content = document.getElementById("rules-content");
  if (!sidebar || !content) return;

  sidebar.innerHTML = CONFIG.rules.map((r, i) => `
    <button data-index="${i}" class="${i === 0 ? "active" : ""}">${r.title}</button>
  `).join("");

  function showRule(index) {
    const r = CONFIG.rules[index];
    content.innerHTML = `
      <h3>${r.title}</h3>
      <ol>${r.points.map(p => `<li>${p}</li>`).join("")}</ol>
    `;
    sidebar.querySelectorAll("button").forEach(b => b.classList.remove("active"));
    sidebar.querySelector(`[data-index="${index}"]`).classList.add("active");
  }

  sidebar.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => showRule(btn.dataset.index));
  });

  const params = new URLSearchParams(window.location.search);
  const initial = CONFIG.rules.findIndex(r => r.id === params.get("regola"));
  showRule(initial >= 0 ? initial : 0);
});
