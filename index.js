const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;﻿

app.on('ready', function(){
	var mainWindow = new BrowserWindow({
		width: 800,
		heigth: 600
	});
	mainWindow.loadURL('file://' + __dirname + '/index.html');
});
