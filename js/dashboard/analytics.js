const CATEGORY_LABELS = {
  core: "Plataforma",
  memory: "Memoria + GPU",
  storage: "Almacenamiento",
  cooling: "Energía + caja",
  peripherals: "Pantalla + control",
  accessories: "Accesorios",
};

export function getSpendByCategory(products) {
  const totals = new Map();
  for (const product of products) {
    totals.set(product.category, (totals.get(product.category) ?? 0) + product.price);
  }

  return [...totals.entries()]
    .map(([category, amount]) => ({
      category,
      label: CATEGORY_LABELS[category] ?? category,
      amount,
    }))
    .filter((entry) => entry.amount > 0)
    .sort((left, right) => right.amount - left.amount);
}