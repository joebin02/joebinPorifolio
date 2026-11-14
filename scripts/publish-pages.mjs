import { cp, copyFile, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const projectRoot = process.cwd();
const builtSite = resolve(projectRoot, 'app/dist');
const publishedAssets = resolve(projectRoot, 'assets');

await copyFile(resolve(builtSite, 'index.html'), resolve(projectRoot, 'index.html'));
await rm(publishedAssets, { recursive: true, force: true });
await mkdir(publishedAssets, { recursive: true });
await cp(resolve(builtSite, 'assets'), publishedAssets, { recursive: true });
