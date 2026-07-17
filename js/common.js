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

/* ---------- PLAYER / DISCORD COUNTS ---------- */
async function fetchPlayerCounts() {
  const playersEl = document.getElementById("players-count");
  const discordEl = document.getElementById("discord-count");

  // --- FIVEM ---
  if (playersEl) {
    try {
      // Sostituisci "3ygeopz" con l'ID del tuo server se diverso
      const response = await fetch("https://frontend.cfx-services.net/api/servers/single/3ygeopz");
      if (response.ok) {
        const data = await response.json();
        const online = data.Data.clients;      // Giocatori online
        const max = data.Data.sv_maxclients;   // Slot massimi
        playersEl.textContent = `${online}/${max}`;
      } else {
        playersEl.textContent = "Offline";
      }
    } catch (error) {
      console.error("Errore fetch FiveM:", error);
      playersEl.textContent = "Errore";
    }
  }

  // --- DISCORD ---
  if (discordEl) {
    try {
      // Sostituisci con il TUO ID Server Discord (assicurati di aver abilitato il Widget!)
      const discordServerId = "1225205454850887810"; 
      const response = await fetch(`https://discord.com/api/guilds/${discordServerId}/widget.json`);
      if (response.ok) {
        const data = await response.json();
        // presence_count indica i membri online sul server
        discordEl.textContent = data.presence_count; 
      } else {
        discordEl.textContent = "Offline";
      }
    } catch (error) {
      console.error("Errore fetch Discord:", error);
      discordEl.textContent = "Errore";
    }
  }
}

// Avvia la funzione al caricamento della pagina
document.addEventListener("DOMContentLoaded", fetchPlayerCounts);