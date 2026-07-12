/* Logica condivisa da tutte le pagine: navbar, topbar, endbar, burger menu */
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const discordLink = document.getElementById("link-discord");
  const tiktokLink = document.getElementById("link-tiktok");
  const youtubeLink = document.getElementById("link-youtube");
  if (discordLink) discordLink.href = CONFIG.social.discord;
  if (tiktokLink) tiktokLink.href = CONFIG.social.tiktok;
  if (youtubeLink) youtubeLink.href = CONFIG.social.youtube;

  const statusLink = document.getElementById("server-status-link");
  if (statusLink) statusLink.href = CONFIG.server.statusLink;

  const burger = document.getElementById("burger");
  const links = document.querySelector(".nav-links");
  if (burger && links) {
    burger.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
  }

  fetchPlayerCounts();
});

/* ---------- PLAYER / DISCORD COUNTS ----------
   NOTA: per mostrare i numeri reali di giocatori connessi al
   server FiveM/cfx e di membri Discord servono chiamate API
   che richiedono un backend (per CORS e chiavi private).
   Sostituisci il contenuto di questa funzione con una vera
   fetch() verso il tuo server/backend quando disponibile.
------------------------------------------------- */
function fetchPlayerCounts() {
  const playersEl = document.getElementById("players-count");
  const discordEl = document.getElementById("discord-count");
  if (playersEl) playersEl.textContent = "--/--";
  if (discordEl) discordEl.textContent = "--";
}
