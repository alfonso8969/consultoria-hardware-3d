export function initSidebar() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const sidebar = document.getElementById("sidebar");
  const scrim = document.querySelector("[data-sidebar-scrim]");
  if (!toggle || !sidebar || !scrim) return;

  const closeMenu = () => {
    document.body.classList.remove("sidebar-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir navegación");
    scrim.hidden = true;
  };

  const openMenu = () => {
    document.body.classList.add("sidebar-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Cerrar navegación");
    scrim.hidden = false;
  };

  toggle.addEventListener("click", () => {
    if (document.body.classList.contains("sidebar-open")) closeMenu();
    else openMenu();
  });
  scrim.addEventListener("click", closeMenu);
  sidebar.querySelectorAll(".primary-nav a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMenu();
  });
}