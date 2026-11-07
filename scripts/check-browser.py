from playwright.sync_api import sync_playwright
import json
from pathlib import Path
with sync_playwright() as p:
 b=p.chromium.launch();page=b.new_page(viewport={'width':1440,'height':1000});errors=[]
 page.on('pageerror',lambda e:errors.append(str(e)))
 for c in json.loads(Path('scripts/projects.json').read_text(encoding='utf-8')):
  for path in ['index.html','products.html','login.html']:
   r=page.goto('http://127.0.0.1:8080/'+c[0]+'/'+path)
   assert r.status==200,(c[0],path)
  page.set_viewport_size({'width':390,'height':844});page.goto('http://127.0.0.1:8080/'+c[0]+'/')
  assert page.evaluate('document.documentElement.scrollWidth <= window.innerWidth'),c[0]
  page.set_viewport_size({'width':1440,'height':1000})
 for slug in ['fashion','tours','todo','courses']:
  page.goto('http://127.0.0.1:8080/'+slug+'/');page.screenshot(path='scripts/'+slug+'-desktop.png',full_page=True)
 assert not errors,errors
 print('72 pages loaded, 24 mobile widths passed; no JS errors')
 b.close()
