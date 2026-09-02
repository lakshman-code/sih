import { AppRouter } from "./router.js";
import { ModalManager } from "./components/Modals.js";
import { ToastManager } from "./components/Toast.js";

document.addEventListener("DOMContentLoaded", () => {
  window.ModalManager = ModalManager;
  window.ToastManager = ToastManager;
  AppRouter.init();
});
