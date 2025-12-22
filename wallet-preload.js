const { contextBridge } = require('electron');

/* ---------------- Wallet RPC shim ---------------- */

contextBridge.exposeInMainWorld('walletAPI', {
  connect: async (...args) => {
    const scid = window.SCID_ID || 'unknown';
    console.log(`[WalletPreload][${scid}] walletConnect called`, args);

    const res = await fetch('http://127.0.0.1:10102/json_rpc', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "wallet_connect",
        params: args
      })
    });

    return res.json();
  }
});

/* ---------------- WebSocket normalization + handshake ---------------- */

(() => {
  const OriginalWebSocket = window.WebSocket;

  window.WebSocket = function (url, protocols) {
    if (typeof url === "string") {
      url = url
        .replace("ws://localhost:", "ws://127.0.0.1:")
        .replace("wss://localhost:", "wss://127.0.0.1:");
    }

    const ws = new OriginalWebSocket(url, protocols);

    ws.addEventListener("open", () => {
      try {
        ws.send(JSON.stringify({
          jsonrpc: "2.0",
          id: 0,
          method: "xswd_init"
        }));
        console.log("[XSWD] Handshake sent");
      } catch (e) {
        console.warn("[XSWD] Handshake failed", e);
      }
    });

    return ws;
  };

  window.WebSocket.prototype = OriginalWebSocket.prototype;
})();

/* ---------------- Legacy compatibility ---------------- */

if (!window.walletConnect) {
  window.walletConnect = (...args) => window.walletAPI.connect(...args);
}
