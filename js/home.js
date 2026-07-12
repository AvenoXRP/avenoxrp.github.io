/* Logica specifica della home: trailer modal + video di sfondo hero */
document.addEventListener("DOMContentLoaded", () => {
  const heroVideo = document.getElementById("hero-video");
  if (heroVideo) {
    const startAt = 35;
    heroVideo.addEventListener("loadedmetadata", () => {
      heroVideo.currentTime = startAt;
    });
    heroVideo.addEventListener("ended", () => {
      heroVideo.currentTime = startAt;
      heroVideo.play();
    });
  }

  const modal = document.getElementById("trailer-modal");
  const frame = document.getElementById("trailer-frame");
  const openBtn = document.getElementById("btn-trailer");
  const closeBtn = document.getElementById("trailer-close");

  if (!modal) return;

  openBtn.addEventListener("click", () => {
    frame.src = CONFIG.trailerUrl + (CONFIG.trailerUrl.includes("?") ? "&" : "?") + "autoplay=1";
    modal.classList.add("open");
  });

  const close = () => {
    modal.classList.remove("open");
    frame.src = "";
  };

  closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
});
