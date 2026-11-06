import { readPreference, writePreference } from "../utils/storage.js";

function setTheme(theme) {
  document.body.dataset.theme = theme;
  const toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) {
    const nextTheme = theme === "dark" ? "claro" : "oscuro";
    toggle.setAttribute("aria-label", `Cambiar a tema ${nextTheme}`);
  }
}

export function initTheme() {
  const savedTheme = readPreference("theme");
  setTheme(savedTheme === "light" ? "light" : "dark");

  document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    writePreference("theme", nextTheme);
  });
}