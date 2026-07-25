/* Logica della pagina roadmap.html — salvataggio in localStorage del browser */
document.addEventListener("DOMContentLoaded", () => {
  const STORAGE_KEY = "avenox_roadmap_goals_v1";
  const USERNAME_KEY = "avenox_roadmap_username";

  const listEl = document.getElementById("rm-list");
  const emptyEl = document.getElementById("rm-empty");
  const countsEl = document.getElementById("rm-counts");
  const searchInput = document.getElementById("rm-search");
  const tabs = document.querySelectorAll(".rm-tab");
  const usernameInput = document.getElementById("rm-username");
  const addBtn = document.getElementById("rm-add-btn");
  const exportBtn = document.getElementById("rm-export-btn");
  const importBtn = document.getElementById("rm-import-btn");
  const importFile = document.getElementById("rm-import-file");

  const modalOverlay = document.getElementById("rm-modal-overlay");
  const modalTitle = document.getElementById("rm-modal-title");
  const formTitle = document.getElementById("rm-form-title");
  const formDesc = document.getElementById("rm-form-desc");
  const modalCancel = document.getElementById("rm-modal-cancel");
  const modalSave = document.getElementById("rm-modal-save");

  if (!listEl) return;

  let activeTab = "all"; // all | pending | done

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  function getUsername() {
    return (localStorage.getItem(USERNAME_KEY) || "").trim();
  }

  function formatDate(iso) {
    const d = new Date(iso);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleString("it-IT", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.error("Roadmap: dati salvati non validi", e);
    }
    const defaults = typeof ROADMAP_DEFAULT_GOALS !== "undefined" ? ROADMAP_DEFAULT_GOALS : [];
    const seeded = defaults.map(g => ({
      id: uid(),
      title: g.title,
      description: g.description,
      status: "pending",
      createdAt: new Date().toISOString(),
      completedBy: "",
      completedAt: "",
      comments: []
    }));
    save(seeded);
    return seeded;
  }

  function save(goals) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(goals));
  }

  let goals = load();

  function requireUsername() {
    const name = getUsername();
    if (!name) {
      usernameInput.focus();
      usernameInput.style.borderColor = "#e5484d";
      setTimeout(() => { usernameInput.style.borderColor = ""; }, 1500);
      return null;
    }
    return name;
  }

  function goalCardHtml(goal) {
    const isDone = goal.status === "done";
    const commentsHtml = goal.comments.length
      ? goal.comments.map(c => `
          <div class="rm-comment">
            <div class="rm-comment-head">
              <span class="rm-comment-author">${escapeHtml(c.author)}</span>
              <span class="rm-comment-date">${formatDate(c.date)}</span>
            </div>
            <div class="rm-comment-text">${escapeHtml(c.text)}</div>
          </div>
        `).join("")
      : `<div class="rm-comment-empty">Nessun commento ancora.</div>`;

    const metaParts = [`Creato il ${formatDate(goal.createdAt)}`];
    if (isDone && goal.completedBy) {
      metaParts.push(`Completato da ${escapeHtml(goal.completedBy)} il ${formatDate(goal.completedAt)}`);
    }

    return `
      <div class="rm-card ${isDone ? "done" : ""}" data-id="${goal.id}">
        <div class="rm-card-head">
          <div class="rm-card-title">${escapeHtml(goal.title)}</div>
          <div class="rm-status ${isDone ? "done" : "pending"}">${isDone ? "Completato" : "Da fare"}</div>
        </div>
        <div class="rm-card-desc">${escapeHtml(goal.description)}</div>
        <div class="rm-card-meta">${metaParts.join(" · ")}</div>
        <div class="rm-card-actions">
          <button class="rm-btn rm-btn-small rm-toggle-btn" data-action="toggle">${isDone ? "Segna come da fare" : "Segna come completato"}</button>
          <button class="rm-btn rm-btn-small rm-btn-danger" data-action="delete">Elimina obiettivo</button>
        </div>
        <div class="rm-comments">
          <div class="rm-comments-title">Commenti (${goal.comments.length})</div>
          <div class="rm-comment-list">${commentsHtml}</div>
          <form class="rm-comment-form" data-action="comment-form">
            <textarea class="rm-comment-input" placeholder="Scrivi un commento..." rows="1"></textarea>
            <button type="submit" class="rm-btn rm-btn-small rm-btn-primary">Invia</button>
          </form>
        </div>
      </div>
    `;
  }

  function render() {
    const query = searchInput.value.trim().toLowerCase();

    const filtered = goals.filter(g => {
      const matchesQuery = !query ||
        g.title.toLowerCase().includes(query) ||
        g.description.toLowerCase().includes(query);
      const matchesTab =
        activeTab === "all" ||
        (activeTab === "pending" && g.status !== "done") ||
        (activeTab === "done" && g.status === "done");
      return matchesQuery && matchesTab;
    });

    listEl.innerHTML = filtered.map(goalCardHtml).join("");
    emptyEl.style.display = filtered.length ? "none" : "block";

    const doneCount = goals.filter(g => g.status === "done").length;
    countsEl.textContent = `${filtered.length} obiettivi mostrati su ${goals.length} totali · ${doneCount} completati`;
  }

  // ---- Toolbar: ricerca, filtri, username ----
  searchInput.addEventListener("input", render);

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeTab = tab.dataset.tab;
      render();
    });
  });

  usernameInput.value = getUsername();
  usernameInput.addEventListener("input", () => {
    localStorage.setItem(USERNAME_KEY, usernameInput.value.trim());
  });

  // ---- Azioni sulle card (delega eventi) ----
  listEl.addEventListener("click", (e) => {
    const card = e.target.closest(".rm-card");
    if (!card) return;
    const id = card.dataset.id;
    const goal = goals.find(g => g.id === id);
    if (!goal) return;

    const action = e.target.dataset.action;
    if (action === "toggle") {
      const name = requireUsername();
      if (!name) return;
      if (goal.status === "done") {
        goal.status = "pending";
        goal.completedBy = "";
        goal.completedAt = "";
      } else {
        goal.status = "done";
        goal.completedBy = name;
        goal.completedAt = new Date().toISOString();
      }
      save(goals);
      render();
    } else if (action === "delete") {
      if (!confirm(`Eliminare definitivamente l'obiettivo "${goal.title}"?`)) return;
      goals = goals.filter(g => g.id !== id);
      save(goals);
      render();
    }
  });

  listEl.addEventListener("submit", (e) => {
    const form = e.target.closest("[data-action='comment-form']");
    if (!form) return;
    e.preventDefault();
    const card = e.target.closest(".rm-card");
    const id = card.dataset.id;
    const goal = goals.find(g => g.id === id);
    if (!goal) return;

    const name = requireUsername();
    if (!name) return;

    const textarea = form.querySelector(".rm-comment-input");
    const text = textarea.value.trim();
    if (!text) return;

    goal.comments.push({ author: name, text, date: new Date().toISOString() });
    save(goals);
    render();
  });

  // ---- Modale nuovo obiettivo ----
  function openModal() {
    formTitle.value = "";
    formDesc.value = "";
    modalTitle.textContent = "Nuovo obiettivo";
    modalOverlay.classList.add("open");
    formTitle.focus();
  }
  function closeModal() {
    modalOverlay.classList.remove("open");
  }

  addBtn.addEventListener("click", openModal);
  modalCancel.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  modalSave.addEventListener("click", () => {
    const title = formTitle.value.trim();
    const description = formDesc.value.trim();
    if (!title) {
      formTitle.focus();
      formTitle.style.borderColor = "#e5484d";
      setTimeout(() => { formTitle.style.borderColor = ""; }, 1500);
      return;
    }
    goals.unshift({
      id: uid(),
      title,
      description,
      status: "pending",
      createdAt: new Date().toISOString(),
      completedBy: "",
      completedAt: "",
      comments: []
    });
    save(goals);
    closeModal();
    render();
  });

  // ---- Esportazione / Importazione JSON (per condividere lo stato tra staff) ----
  exportBtn.addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(goals, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `roadmap-avenox-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  importBtn.addEventListener("click", () => importFile.click());

  importFile.addEventListener("change", () => {
    const file = importFile.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const imported = JSON.parse(reader.result);
        if (!Array.isArray(imported)) throw new Error("Formato non valido");
        if (!confirm(`Importare ${imported.length} obiettivi? Questo sostituirà tutti i dati attuali su questo browser.`)) return;
        goals = imported;
        save(goals);
        render();
      } catch (e) {
        alert("File non valido: impossibile importare il JSON.");
      }
    };
    reader.readAsText(file);
    importFile.value = "";
  });

  render();
});
