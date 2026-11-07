from pathlib import Path
import json,urllib.request,concurrent.futures,shutil
root=Path.cwd();assets=root/'scripts/assets'
photos={'fashion':['1434389677669-e08b4cac3105','1542291026-7eec264c27ff'],'tech':['1517336714731-489689fd1ca8','1587829741301-dc798b83add3'],'home':['1555041469-a586c61ea9bc','1503602642458-232111445657'],'craft':['1578749556568-bc2c40e68b61','1603006905003-be475563bc59'],'books':['1544947950-fa07a98d237f','1519682337058-a94d519337bc'],'flowers':['1457089328109-e5d9bd499191','1525310072745-f49212b5ac6d'],'food':['1512621776951-a57141f2eefd','1547592180-85f173990554'],'travel':['1464822759023-fed622ff2c3b','1441974231531-c6227db76b6e'],'music':['1493225457124-a3eb161ffa5f','1507838153414-b4b713384a76'],'study':['1456513080510-7bf3a84b82f8','1516321318423-f06f85e504b3']}
def fetch(job):
 k,i,p=job;dest=assets/f'{k}-{i}.jpg'
 try:urllib.request.urlretrieve(f'https://images.unsplash.com/photo-{p}?auto=format&fit=crop&w=800&q=75',dest)
 except Exception:shutil.copy2(assets/f'{k}.jpg',dest)
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:list(ex.map(fetch,[(k,i,p) for k,ps in photos.items() for i,p in enumerate(ps)]))
for c in json.loads((root/'scripts/projects.json').read_text(encoding='utf-8')):
 folder=root/c[0];datafile=folder/'js/data.js';cfg=json.loads(datafile.read_text(encoding='utf-8')[15:-1])
 for i,p in enumerate(cfg['items']):
  src=assets/(c[8]+(f'-{i%3-1}' if i%3 else '')+'.jpg');name=f'product-{i+1:02d}.jpg';shutil.copy2(src,folder/'images'/name);p['image']='images/'+name
 datafile.write_text('const CONFIG = '+json.dumps(cfg,ensure_ascii=False)+';',encoding='utf-8')
