import { BUDGET_LIMIT, SHIPPING_TOTAL } from "../utils/constants.js";
import { formatEuro, formatNumber } from "../utils/helpers.js";

export function calculateBudget(products) {
  const productsSubtotal = products.reduce((total, product) => total + product.price, 0);
  const total = productsSubtotal + SHIPPING_TOTAL;

  return {
    productsSubtotal,
    shipping: SHIPPING_TOTAL,
    total,
    remaining: BUDGET_LIMIT - total,
    usedPercent: (total / BUDGET_LIMIT) * 100,
  };
}

export function renderBudget(products) {
  const budget = calculateBudget(products);
  const displayValues = {
    "budget-total": formatEuro(budget.total),
    "budget-remaining": formatEuro(budget.remaining),
    "products-subtotal": formatEuro(budget.productsSubtotal),
    "table-subtotal": formatEuro(budget.productsSubtotal),
    "table-total": formatEuro(budget.total),
    "detail-products": formatEuro(budget.productsSubtotal),
    "detail-total": formatEuro(budget.total),
    "detail-margin": formatEuro(budget.remaining),
  };

  for (const [id, value] of Object.entries(displayValues)) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }

  const percentage = Math.min(Math.max(budget.usedPercent, 0), 100);
  const fill = document.getElementById("budget-meter-fill");
  const meter = document.querySelector(".budget-meter");
  const percentageLabel = document.getElementById("budget-used-percent");
  const budgetHero = document.querySelector(".budget-hero");
  const status = document.getElementById("budget-status");

  if (fill) fill.style.width = `${percentage}%`;
  if (meter) meter.setAttribute("aria-valuenow", formatNumber(percentage, 1));
  if (percentageLabel) percentageLabel.textContent = `${formatNumber(percentage, 1)} %`;
  if (budgetHero) budgetHero.classList.toggle("is-over-budget", budget.remaining < 0);
  if (status) {
    status.textContent = budget.remaining < 0
      ? `La propuesta supera el límite en ${formatEuro(Math.abs(budget.remaining))}.`
      : "Dentro del límite con los portes mínimos publicados.";
  }

  return budget;
}