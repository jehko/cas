const { app, BrowserWindow } = require("electron");

function createWindow() {
  const mainWindow = new BrowserWindow({
    center: true,
    width: 800,
    height: 600,
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadURL("http://localhost:3000/react");

  mainWindow.on("closed", () => {
    mainWindow = undefined;
  });
}

app.on("ready", createWindow);
