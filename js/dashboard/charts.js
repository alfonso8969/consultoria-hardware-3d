import { formatEuro } from "../utils/helpers.js";

export function renderSpendChart(spendByCategory, total) {
  const container = document.getElementById("spend-chart");
  if (!container) return;

  container.innerHTML = spendByCategory.map(({ label, amount }) => {
    const share = total > 0 ? (amount / total) * 100 : 0;
    return `
      <div class="spend-item">
        <span class="spend-item-label">${label}</span>
        <span class="spend-item-track" aria-hidden="true"><span style="width:${share}%"></span></span>
        <span class="spend-item-value">${formatEuro(amount)}</span>
      </div>
    `;
  }).join("");
}