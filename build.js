var electronInstaller = require('electron-winstaller');


var settings = {
    appDirectory: './joox-win32-ia32',
    outputDirectory: './joox-install',
    authors: 'Elvin Chu',
    exe: './joox.exe'
};

resultPromise = electronInstaller.createWindowsInstaller(settings);
 
resultPromise.then(() => {
    console.log("The installers of your application were succesfully created !");
}, (e) => {
    console.log(`Well, sometimes you are not so lucky: ${e.message}`)
});