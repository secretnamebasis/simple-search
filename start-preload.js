const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('startAPI', {
  loadSCIDBookmarks: () => ipcRenderer.invoke('scid:load'),
  loadNodeBookmarks: () => ipcRenderer.invoke('node:load'),
});
