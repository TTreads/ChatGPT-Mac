const { app, BrowserWindow, nativeImage } = require('electron');



function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        minWidth: 500,
        width: 1400,
        height: 840,
        // Set the title bar style to transparent.
        titleBarStyle: 'hidden',
        title: "ChatGPT",
        // Remove the default window frame.
        frame: false,
        // Make the background transparent.
        transparent: true,
        webPreferences: {
            nodeIntegration: true,
            devTools: false
        },
        icon: __dirname + "/assets/icon/mac-icon.png"
    });

    // Load the website.
    win.loadURL('https://chat.openai.com/');

    win.setTitle('Hello ChatGPT');

    win.webContents.on('did-finish-load', () => {
        win.webContents.insertCSS(`
         
#__next > div > div.dark {
    margin-top: 30px;
}
        `);
    });
}

app.whenReady().then(createWindow);

