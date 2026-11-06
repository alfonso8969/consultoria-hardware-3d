export const BUDGET_LIMIT = 1395;
export const RESEARCH_DATE = "06/11/2026";
export const VENDOR_NAME = "PcComponentes";

export const SHIPPING_FEES = [
  { item: "Disipador", amount: 3.95 },
  { item: "Caja", amount: 6.25 },
  { item: "Combo teclado y ratón", amount: 5.25 },
];

export const SHIPPING_TOTAL = SHIPPING_FEES.reduce((total, fee) => total + fee.amount, 0);