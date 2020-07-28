import { realpathSync } from "fs";
import { resolve } from "path";

const appDirectory = realpathSync(process.cwd());

export const appResolve = (paths: string) => resolve(appDirectory, paths);
