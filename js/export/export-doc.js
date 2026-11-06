import { showToast } from "../ui/toast.js";

const wordStyles = `
  body { font-family: Arial, sans-serif; color: #172321; line-height: 1.45; }
  h1, h2, h3 { color: #12362f; }
  h1 { font-size: 24pt; }
  h2 { margin-top: 24pt; font-size: 17pt; border-bottom: 1px solid #9db7ae; padding-bottom: 5pt; }
  h3 { font-size: 12pt; }
  p, li { font-size: 10pt; }
  table { width: 100%; border-collapse: collapse; margin: 10pt 0; }
  th, td { border: 1px solid #aebbb5; padding: 6pt; text-align: left; }
  th { background: #e8f0ec; }
  img { max-width: 90px; max-height: 70px; }
  a { color: #126b5a; text-decoration: none; }
  .sidebar, .topbar, .table-toolbar, .product-dialog, .toast, .text-link { display: none !important; }
  .product-image-trigger { border: 0; background: transparent; padding: 0; }
  .product-image-trigger.is-fallback { display: none !important; }
`;

function createWordDocument() {
  const report = document.getElementById("report-content");
  if (!report) throw new Error("No se encontró el contenido del informe para exportar.");

  return `<!doctype html>
    <html lang="es"><head><meta charset="utf-8"><title>Informe de consultoría de hardware</title>
    <style>${wordStyles}</style></head>
    <body><h1>Consultoría de hardware para edición y 3D</h1>
    <p>Propuesta de estación · consulta de precios: 06/11/2026 · presupuesto máximo: 1.395,00 € IVA incluido.</p>
    ${report.innerHTML}
    </body></html>`;
}

export function initDocExport() {
  document.querySelector("[data-action='export-doc']")?.addEventListener("click", () => {
    const documentHtml = createWordDocument();
    const blob = new Blob(["\ufeff", documentHtml], { type: "application/msword;charset=utf-8" });
    const downloadLink = document.createElement("a");
    const url = URL.createObjectURL(blob);

    downloadLink.href = url;
    downloadLink.download = "informe-consultoria-hardware-edicion-3d.doc";
    document.body.append(downloadLink);
    downloadLink.click();
    downloadLink.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast("Informe Word descargado.");
  });
}