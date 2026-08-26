import fs from 'node:fs';
const max=13*1024,p='dist/unicorn-stampede.zip';
if(!fs.existsSync(p))throw Error('Run npm run build first');
const n=fs.statSync(p).size,free=max-n;
console.log(`${n}/${max} bytes (${free>=0?free+' free':-free+' OVER'})`);
if(free<0)process.exit(1);
