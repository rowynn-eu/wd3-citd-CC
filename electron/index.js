const { app, BrowserWindow } = require('electron');
const path = require('path');

//create window
function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1080,
    height: 1000,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  icon: path.join(__dirname, 'assets', 'favicon.ico')
});

  //hide menubar
  mainWindow.setMenuBarVisibility(false);

  // site
  mainWindow.loadURL('http://citd.rowynn.eu/');
}

module.exports = {
  packagerConfig: {
    icon: 'favicon.ico'
  }};

//init
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }});
});

// quit on close
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }});