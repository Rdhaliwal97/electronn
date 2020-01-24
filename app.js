const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    show: false
  })
  win.maximize();
  win.show();
  win.loadFile('./client/index.html');
}

app.on('ready', createWindow)