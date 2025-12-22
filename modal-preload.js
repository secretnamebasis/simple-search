const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('modalAPI', {
  close: () => ipcRenderer.invoke('modal:close'),
  saveBookmark: (name, type, value) => ipcRenderer.invoke('bookmark-save-from-modal', { name, type, value })
});
