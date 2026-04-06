import { fontSplit } from 'cn-font-split';

import fs from 'fs';
const inputBuffer = new Uint8Array(
    fs.readFileSync('./MiSansVF.ttf').buffer,
);

console.time('font-split');
await fontSplit({
    input: inputBuffer,
    outDir: './dist',
    renameOutputFont: 'misansvf_[index].[ext]',
    testHtml: false,
    reporter: false,
    silent: true,
});
console.timeEnd('font-split');
