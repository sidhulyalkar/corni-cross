import fs from 'node:fs';
import {deflateRawSync} from 'node:zlib';

const js=['core.js','herd.js','render.js','ui.js'].map(f=>fs.readFileSync('src/'+f,'utf8')).join('\n');
const css=fs.readFileSync('src/style.css','utf8').replace(/\s+/g,' ').replace(/ ?([{}:;,]) ?/g,'$1');
const html=`<canvas id=c width=1280 height=720></canvas><style>${css}</style><script>${js}<\/script>`;
const data=Buffer.from(html),name=Buffer.from('index.html'),compressed=deflateRawSync(data,{level:9});

let table;
function crc32(buf){
  if(!table)table=Array.from({length:256},(_,n)=>{let c=n;for(let k=0;k<8;k++)c=c&1?0xedb88320^c>>>1:c>>>1;return c>>>0});
  let c=0xffffffff;for(const b of buf)c=table[(c^b)&255]^c>>>8;return(c^0xffffffff)>>>0;
}
function u16(n){const b=Buffer.alloc(2);b.writeUInt16LE(n);return b}
function u32(n){const b=Buffer.alloc(4);b.writeUInt32LE(n>>>0);return b}
const crc=crc32(data);
const local=Buffer.concat([u32(0x04034b50),u16(20),u16(0),u16(8),u16(0),u16(0),u32(crc),u32(compressed.length),u32(data.length),u16(name.length),u16(0),name,compressed]);
const central=Buffer.concat([u32(0x02014b50),u16(20),u16(20),u16(0),u16(8),u16(0),u16(0),u32(crc),u32(compressed.length),u32(data.length),u16(name.length),u16(0),u16(0),u16(0),u16(0),u32(0),u32(0),name]);
const end=Buffer.concat([u32(0x06054b50),u16(0),u16(0),u16(1),u16(1),u32(central.length),u32(local.length),u16(0)]);
const zip=Buffer.concat([local,central,end]);
fs.mkdirSync('dist',{recursive:true});fs.writeFileSync('dist/index.html',html);fs.writeFileSync('dist/corni-cross.zip',zip);
console.log(`html ${data.length} bytes | zip ${zip.length} bytes`);
