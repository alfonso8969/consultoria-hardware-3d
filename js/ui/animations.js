export function initAnimations() {
  const targets = document.querySelectorAll(".report-section, .overview-grid");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.06 });

  targets.forEach((target) => {
    target.classList.add("reveal");
    observer.observe(target);
  });
}