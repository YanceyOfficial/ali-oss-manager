// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');

const path = require('path');
const os = require('os');

const touchBar = require('./touchBar');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 768,
  });

  // and load the index.html of the app.

  mainWindow.loadURL('http://localhost:3000/');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  BrowserWindow.addDevToolsExtension(
    // Register React Developer Tools
    path.join(
      os.homedir(),
      '/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/3.6.0_0',
    ),
  );

  BrowserWindow.addDevToolsExtension(
    // Register Redux DevTools Extension
    path.join(
      os.homedir(),
      '/Library/Application Support/Google/Chrome/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.17.0_0',
    ),
  );

  // Register devtron
  require('devtron').install();

  mainWindow.setTouchBar(touchBar);


  // 这个地方可以搞个上传进度条 很爽
  mainWindow.setProgressBar(0.5)

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
