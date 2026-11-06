import { products, reportSources } from "./core/config.js";
import { initTheme } from "./core/theme.js";
import { completeLoading } from "./core/loader.js";
import { initRouter } from "./core/router.js";
import { renderKpis } from "./dashboard/kpi.js";
import { renderBudget } from "./dashboard/budget.js";
import { getSpendByCategory } from "./dashboard/analytics.js";
import { renderSpendChart } from "./dashboard/charts.js";
import { renderTable } from "./tables/datatable.js";
import { initFilters } from "./tables/filters.js";
import { initGallery } from "./ui/gallery.js";
import { initSidebar } from "./ui/sidebar.js";
import { initAnimations } from "./ui/animations.js";
import { initPdfExport } from "./export/export-pdf.js";
import { initDocExport } from "./export/export-doc.js";
import { escapeHTML } from "./utils/helpers.js";

function renderSources() {
  const container = document.getElementById("source-links");
  if (!container) return;

  container.innerHTML = reportSources.map((source) => `
    <a href="${escapeHTML(source.url)}" target="_blank" rel="noopener noreferrer">
      <span>${escapeHTML(source.label)}</span><span aria-hidden="true">↗</span>
    </a>
  `).join("");
}

initTheme();
renderSources();
renderKpis(products);
renderTable(products);
renderBudget(products);
renderSpendChart(getSpendByCategory(products), products.reduce((sum, item) => sum + item.price, 0));
initFilters(products);
initGallery();
initSidebar();
initRouter();
initAnimations();
initPdfExport();
initDocExport();
completeLoading();