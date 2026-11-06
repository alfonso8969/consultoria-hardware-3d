export function openDialog(dialog) {
  if (!dialog || dialog.open) return;
  dialog.showModal();
}

export function initModal(dialog) {
  if (!dialog) return;

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}