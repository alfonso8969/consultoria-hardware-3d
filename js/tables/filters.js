import { renderTable } from "./datatable.js";

export function initFilters(products) {
  const search = document.getElementById("component-search");
  const category = document.getElementById("category-filter");
  const count = document.getElementById("table-count");
  if (!search || !category || !count) return;

  const applyFilters = () => {
    const query = search.value.trim().toLocaleLowerCase("es");
    const selectedCategory = category.value;
    const filtered = products.filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const searchable = `${product.type} ${product.model} ${product.specification}`.toLocaleLowerCase("es");
      return matchesCategory && searchable.includes(query);
    });

    count.textContent = `${filtered.length} ${filtered.length === 1 ? "elemento" : "elementos"}`;
    renderTable(filtered);
  };

  search.addEventListener("input", applyFilters);
  category.addEventListener("change", applyFilters);
  applyFilters();
}