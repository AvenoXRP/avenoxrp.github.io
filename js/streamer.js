/* Render della pagina streamer: live prima, offline dopo */
document.addEventListener("DOMContentLoaded", () => {
  const liveContainer = document.getElementById("streamers-live");
  const offlineContainer = document.getElementById("streamers-offline");
  if (!liveContainer || !offlineContainer) return;

  const live = CONFIG.streamers.filter(s => s.isLive);
  const offline = CONFIG.streamers.filter(s => !s.isLive);

  liveContainer.innerHTML = live.length
    ? live.map(streamerCard).join("")
    : `<p class="empty-msg">Nessuno streamer è in live al momento.</p>`;

  offlineContainer.innerHTML = offline.length
    ? offline.map(streamerCard).join("")
    : `<p class="empty-msg">Tutti gli streamer sono attualmente in live!</p>`;

  document.querySelectorAll(".streamer-card").forEach(card => {
    card.addEventListener("click", () => {
      window.open(`https://www.twitch.tv/${card.dataset.username}`, "_blank");
    });
  });
});

function streamerCard(s) {
  const previewImg = s.isLive
    ? `https://static-cdn.jtvnw.net/previews-ttv/live_user_${s.username}-440x248.jpg`
    : "";
  const avatarImg = s.avatar || `assets/streamers/default-avatar.png`;

  return `
    <div class="streamer-card ${s.isLive ? "live" : "offline"}" data-username="${s.username}">
      <div class="streamer-preview" style="${previewImg ? `background-image:url('${previewImg}')` : ""}">
        ${s.isLive ? `<span class="live-badge">LIVE</span>` : ""}
      </div>
      <div class="streamer-info">
        <img src="${avatarImg}" alt="${s.displayName || s.username}" onerror="this.style.visibility='hidden'">
        <div class="streamer-name">${s.displayName || s.username}</div>
      </div>
    </div>
  `;
}
