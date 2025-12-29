import { managers } from "./index.js";

const root = document.getElementById("managerRoot");
let activeEl = null;

// Show one manager
export function showManager(id) {
  hideManagers();

  const el = managers[id].create();
  el.classList.add("manager-page");

  root.appendChild(el);
  activeEl = el;

  // Hide BrowserViews
  window.electronAPI?.hideAllBrowserViews?.();
}

// Hide current manager
export function hideManagers() {
  if (!activeEl) return;

  // allow manager cleanup
  if (typeof activeEl.cleanup === "function") {
    activeEl.cleanup();
  }

  root.innerHTML = "";
  activeEl = null;
}
