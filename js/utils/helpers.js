const euroFormatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  useGrouping: "always",
});

export function formatEuro(amount) {
  return euroFormatter.format(amount);
}

export function formatNumber(amount, maximumFractionDigits = 1) {
  return new Intl.NumberFormat("es-ES", {
    maximumFractionDigits,
    minimumFractionDigits: 0,
  }).format(amount);
}

export function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}