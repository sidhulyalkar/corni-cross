import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd(),port=process.env.PORT||4173;
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json'};
http.createServer((req,res)=>{
  let p=path.join(root,req.url==='/'?'index.html':req.url.split('?')[0]);
  if(!p.startsWith(root)) return res.end();
  fs.readFile(p,(e,b)=>{if(e){res.statusCode=404;return res.end('404')}res.setHeader('content-type',mime[path.extname(p)]||'text/plain');res.end(b)});
}).listen(port,()=>console.log(`Corni Cross dev server: http://localhost:${port}`));
