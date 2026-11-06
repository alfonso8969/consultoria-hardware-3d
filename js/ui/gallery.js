import { products } from "../core/config.js";
import { openDialog, initModal } from "./modals.js";

export function initGallery() {
  const dialog = document.getElementById("product-dialog");
  const image = document.getElementById("dialog-image");
  const title = document.getElementById("dialog-title");
  const specification = document.getElementById("dialog-spec");
  const productLink = document.getElementById("dialog-link");
  if (!dialog || !image || !title || !specification || !productLink) return;

  initModal(dialog);
  document.addEventListener("click", (event) => {
    const trigger = event.target instanceof Element
      ? event.target.closest("[data-image-open]")
      : null;
    if (!trigger) return;

    const product = products.find((item) => item.id === trigger.dataset.imageOpen);
    if (!product?.image) return;

    image.src = product.image;
    image.alt = product.model;
    title.textContent = product.model;
    specification.textContent = product.specification;
    productLink.href = product.url;
    openDialog(dialog);
  });
}