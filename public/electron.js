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
    mainWindow = new BrowserWindow({ width: 900, height: 680 });

    // Determine what to render based on environment
    mainWindow.loadURL(
        isDev
        ? "http://localhost:3000"
        : `file://${path.join(__dirname, "../build/index.html")}`
    );

    // Show chrome developer tools when in dev environment
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }
    // Create event to close window on close
    mainWindow.on("closed", () => (mainWindow = null));
}

// On launch create app window
app.on("ready", createWindow);
app.on("window-all-closed", () => {
    // Based on which OS you are using
    if (process.platform !== "linux") {
        // Close app if OS not on linux
        // Other OS can be added
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow !== null) {
        createWindow();
    }
});