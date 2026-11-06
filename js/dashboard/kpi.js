export function renderKpis(products) {
  const productById = new Map(products.map((product) => [product.id, product]));
  const metrics = [
    { id: "kpi-cpu", productId: "cpu", value: "8", unit: "núcleos", detail: "16 hilos · boost 4,6 GHz" },
    { id: "kpi-ram", productId: "ram", value: "32", unit: "GB", detail: "DDR4-3200 · doble canal" },
    { id: "kpi-gpu", productId: "gpu", value: "8", unit: "GB", detail: "GDDR7 · 3.840 CUDA" },
    { id: "kpi-storage", productId: "ssd", value: "1", unit: "TB", detail: "NVMe PCIe 4.0 · Gen4" },
  ];

  for (const metric of metrics) {
    const element = document.getElementById(metric.id);
    if (!element || !productById.has(metric.productId)) continue;

    element.innerHTML = `${metric.value} <small>${metric.unit}</small>`;
    const detail = element.parentElement?.querySelector(".kpi-detail");
    if (detail) detail.textContent = metric.detail;
  };
}