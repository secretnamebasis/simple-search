export function createGnomonManager() {
  const el = document.createElement("div");
  el.className = "manager-page gnomon-manager";

  el.innerHTML = `
    <h2>Gnomon Manager</h2>

    <div style="display:flex; align-items:center; gap:8px; margin-top:10px;">
      <div id="gnomon-status" class="led yellow"></div>
      <span id="gnomon-text">Checking Gnomon...</span>
    </div>

    <div style="margin-top:15px;">
      <button id="gnomon-start">Start</button>
      <button id="gnomon-stop">Stop</button>
    </div>

    <pre id="gnomon-log" style="margin-top:15px; height:300px; overflow:auto; background:#111; color:#0f0; padding:10px; border-radius:5px;"></pre>
  `;

  const led = el.querySelector("#gnomon-status");
  const text = el.querySelector("#gnomon-text");
  const startBtn = el.querySelector("#gnomon-start");
  const stopBtn = el.querySelector("#gnomon-stop");
  const logEl = el.querySelector("#gnomon-log");

  const api = window.electronAPI;

  if (!api) {
    console.error("electronAPI not found!");
    text.textContent = "electronAPI not available";
    return el;
  }

  // Function to update status LED
  async function updateStatus() {
    led.className = "led yellow";
    text.textContent = "Checking Gnomon...";
    const running = await api.checkGnomon();
    if (running) {
      led.className = "led green";
      text.textContent = "Gnomon running";
    } else {
      led.className = "led red";
      text.textContent = "Gnomon stopped";
    }
  }

  // Start button
  startBtn.addEventListener("click", async () => {
    text.textContent = "Starting Gnomon...";
    try {
      await api.gnomonStart();
      await updateStatus();
    } catch (err) {
      console.error(err);
      text.textContent = "Failed to start Gnomon";
    }
  });

  // Stop button
  stopBtn.addEventListener("click", async () => {
    text.textContent = "Stopping Gnomon...";
    try {
      await api.gnomonStop();
      await updateStatus();
    } catch (err) {
      console.error(err);
      text.textContent = "Failed to stop Gnomon";
    }
  });

  // Live log listener
  api.onGnomonLog((log) => {
    logEl.textContent += log;
    logEl.scrollTop = logEl.scrollHeight; // auto-scroll
  });

  // Exit listener
  api.onGnomonExit(() => {
    logEl.textContent += "\n--- Gnomon stopped ---\n";
    updateStatus();
  });

  // Check initial status every 2s
  updateStatus();
  const interval = setInterval(updateStatus, 2000);
  el.cleanup = () => clearInterval(interval);

  return el;
}
