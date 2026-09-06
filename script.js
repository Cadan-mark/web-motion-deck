const slides = Array.from(document.querySelectorAll("[data-slide]"));
const statusText = document.getElementById("statusText");
const body = document.body;
const motionButton = document.querySelector('[data-action="motion"]');
let currentIndex = 0;
let touchStartX = 0;

function renderSlide(index) {
  if (slides.length === 0) {
    return;
  }

  currentIndex = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === currentIndex;
    slide.classList.toggle("is-active", isActive);
    slide.hidden = !isActive;
    slide.setAttribute("aria-hidden", String(!isActive));
  });

  if (statusText) {
    statusText.textContent = `${currentIndex + 1} / ${slides.length}`;
  }
}

function toggleTheme() {
  body.dataset.theme = body.dataset.theme === "dark" ? "light" : "dark";
}

function toggleMotion() {
  const motionOn = body.dataset.motion !== "off";
  body.dataset.motion = motionOn ? "off" : "on";

  if (motionButton) {
    motionButton.textContent = motionOn ? "开启动效" : "关闭动效";
  }
}

function toggleFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    return;
  }

  document.documentElement.requestFullscreen?.();
}

document.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]")?.dataset.action;

  if (!action) {
    return;
  }

  if (action === "prev") {
    renderSlide(currentIndex - 1);
  } else if (action === "next") {
    renderSlide(currentIndex + 1);
  } else if (action === "theme") {
    toggleTheme();
  } else if (action === "motion") {
    toggleMotion();
  } else if (action === "fullscreen") {
    toggleFullscreen();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    renderSlide(currentIndex - 1);
  } else if (event.key === "ArrowRight") {
    renderSlide(currentIndex + 1);
  }
});

document.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0]?.clientX ?? 0;
}, { passive: true });

document.addEventListener("touchend", (event) => {
  const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
  const distance = touchEndX - touchStartX;

  if (Math.abs(distance) < 40) {
    return;
  }

  if (distance > 0) {
    renderSlide(currentIndex - 1);
  } else {
    renderSlide(currentIndex + 1);
  }
}, { passive: true });

renderSlide(0);
