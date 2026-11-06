import { showToast } from "../ui/toast.js";

export function initPdfExport() {
  document.querySelector("[data-action='export-pdf']")?.addEventListener("click", () => {
    showToast("En el diálogo de impresión, elige «Guardar como PDF».");
    window.print();
  });
}