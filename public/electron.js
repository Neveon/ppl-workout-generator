// public/electron.js to house electron logic
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");

// Tells electron current environment we are working to decide either
// serve the build or render the react app running on dev environment
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  // Define the applications' dimension
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    show: false,
    // nodeIntegration: true fixes 'require is not defined' error
    webPreferences: {
      nodeIntegration: true,
    },
  });
  // Determine what to render based on environment
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  // Create event to close window on close
  mainWindow.on("closed", () => (mainWindow = null));

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();

    // Show chrome developer tools when in dev environment
    if (isDev) {
      mainWindow.webContents.openDevTools();
    }
  });
}

// On launch create app window
app.on("ready", createWindow);
app.on("window-all-closed", () => {
  // OSX - app in memory even after all windows closed
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // on macOS, re-create a window in the app when the dock
  // icon is clicked and there are no other windows open
  if (mainWindow !== null) {
    createWindow();
  }
});
