/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

// node -e 'import("./db.mjs").then( loadedModule => loadedModule.init() )'

const WIDGET_FOLDER = 'widgets';
const UI_FOLDER = 'ui';

function createPathForFile(folderPath, fileName) {
    return path.resolve(path.resolve(folderPath, fileName));
}

function createWidget() {
    const dirPath = path.resolve(__dirname, '..', 'src', WIDGET_FOLDER);
    const widgetName = process.argv[2];
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
    if (widgetName === undefined) {
        throw new Error('Need name for component');
    }

    const widgetPath = path.resolve(dirPath, widgetName);
    const uiPath = path.resolve(path.resolve(dirPath, widgetName, UI_FOLDER));

    fs.mkdirSync(widgetPath);
    fs.mkdirSync(uiPath);

    fs.closeSync(fs.openSync(createPathForFile(widgetPath, 'index.ts'), 'w'));
    fs.closeSync(fs.openSync(createPathForFile(uiPath, `${widgetName}.tsx`), 'w'));
    fs.closeSync(fs.openSync(createPathForFile(uiPath, `${widgetName}.module.scss`), 'w'));
}

createWidget();
