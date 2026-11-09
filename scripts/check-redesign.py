"""Regression for the independent static projects. Serve repo at localhost:8080 first."""
from pathlib import Path
import json
import re
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
projects = json.loads((ROOT/'scripts/projects.json').read_text(encoding='utf-8'))
out = ROOT/'artifacts/redesign'
out.mkdir(parents=True, exist_ok=True)
failures=[]
with sync_playwright() as p:
    browser=p.chromium.launch()
    page=browser.new_page()
    page.on('pageerror',lambda e:failures.append({'type':'javascript','url':page.url,'error':str(e)}))
    page.on('response',lambda r:failures.append({'type':'http','url':r.url,'status':r.status}) if r.status>=400 and 'favicon.ico' not in r.url else None)
    count=0
    for project in projects:
        slug=project[0]
        for file in (ROOT/slug).glob('*.html'):
            for width in [390,1024,1440]:
                page.set_viewport_size({'width':width,'height':900})
                page.goto(f'http://127.0.0.1:8080/{slug}/{file.name}')
                page.wait_for_timeout(30)
                if page.locator('html').get_attribute('lang') != 'en':
                    failures.append({'type':'language','project':slug,'page':file.name})
                visible=page.locator('body').inner_text()
                if re.search('[\u0102\u0103\u00c2\u00e2\u00ca\u00ea\u00d4\u00f4\u01a0\u01a1\u01af\u01b0\u0110\u0111\u1ea0-\u1ef9]', visible):
                    failures.append({'type':'untranslated-text','project':slug,'page':file.name})
                if page.evaluate('document.documentElement.scrollWidth > innerWidth'):
                    failures.append({'type':'overflow','project':slug,'page':file.name,'width':width})
                count+=1
        page.set_viewport_size({'width':1440,'height':900})
        page.goto(f'http://127.0.0.1:8080/{slug}/')
        page.evaluate('document.fonts.ready')
        page.wait_for_timeout(150)
        page.screenshot(path=str(out/(slug+'.png')),full_page=False)
    browser.close()
(out/'results.json').write_text(json.dumps({'page_viewports':count,'failures':failures},ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'page_viewports':count,'failure_count':len(failures),'failures':failures[:20]},ensure_ascii=False))
if failures:raise SystemExit(1)
