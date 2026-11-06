import { escapeHTML, formatEuro } from "../utils/helpers.js";

function renderImage(product) {
  if (product.image) {
    return `
      <button class="product-image-trigger" type="button" data-image-open="${escapeHTML(product.id)}"
        aria-label="Ampliar imagen de ${escapeHTML(product.model)}">
        <img src="${escapeHTML(product.image)}" alt="" loading="lazy" decoding="async">
      </button>
    `;
  }

  const marker = product.id === "accessories" ? "—" : product.type.slice(0, 3).toUpperCase();
  return `<span class="product-image-trigger is-fallback" aria-hidden="true">${escapeHTML(marker)}</span>`;
}

function renderStoreLink(product) {
  if (!product.url) return '<span class="muted-dash">—</span>';
  return `<a class="store-link" href="${escapeHTML(product.url)}" target="_blank" rel="noopener noreferrer">PcComponentes <span aria-hidden="true">↗</span></a>`;
}

export function renderTable(products) {
  const tableBody = document.getElementById("component-rows");
  if (!tableBody) return;

  if (products.length === 0) {
    tableBody.innerHTML = '<tr><td class="empty-state" colspan="4">No hay componentes que coincidan con el filtro.</td></tr>';
    return;
  }

  tableBody.innerHTML = products.map((product) => `
    <tr>
      <td>
        <div class="product-cell">
          ${renderImage(product)}
          <span class="product-cell-copy"><strong>${escapeHTML(product.type)}</strong><small>${escapeHTML(product.id === "accessories" ? "Partida informativa" : "Producto seleccionado")}</small></span>
        </div>
      </td>
      <td class="product-model">${escapeHTML(product.model)}<span class="product-spec">${escapeHTML(product.specification)}</span></td>
      <td>${renderStoreLink(product)}</td>
      <td class="price-cell">${formatEuro(product.price)}</td>
    </tr>
  `).join("");
}