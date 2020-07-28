const { realpathSync } = require("fs");
const { resolve } = require("path");

const appDirectory = realpathSync(process.cwd());
const appResolve = (paths) => resolve(appDirectory, paths);

module.exports = { appResolve };
