from pathlib import Path
import urllib.request,urllib.parse,json,concurrent.futures,shutil
root=Path.cwd();headers={'User-Agent':'COMP1802-Educational/1.0'}
groups={'tours':['Da_Lat','Phu_Quoc','Sa_Pa','Hội_An','Ninh_Binh','Hue'],'dalat':['Da_Lat','Tuyen_Lam_Lake','Da_Lat_railway_station','Da_Lat','Da_Lat','Lang_Biang'],'cuisine':['Pho','Bun_bo_Hue','Mi_Quang','Cao_lau','Banh_xeo','Com_tam'],'festivals':['Quan_ho','Hung_Kings_Temple','Hue','Hội_An','Space_of_gong_culture','Khmer_Krom']}
failed=[]
def fetch(job):
 slug,i,title=job
 try:
  req=urllib.request.Request('https://en.wikipedia.org/api/rest_v1/page/summary/'+urllib.parse.quote(title),headers=headers);d=json.load(urllib.request.urlopen(req,timeout=15));url=d.get('originalimage',d.get('thumbnail',{})).get('source')
  if not url:raise ValueError('no image')
  # Keep Wikimedia's documented thumbnail URL rather than constructing a file path.
  dest=root/slug/'images'/f'product-{i+1:02d}.jpg';dest.write_bytes(urllib.request.urlopen(urllib.request.Request(url,headers=headers),timeout=15).read())
  return slug,i,title,url,d.get('content_urls',{}).get('desktop',{}).get('page','')
 except Exception as e:failed.append((slug,title,str(e)));return None
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:results=list(ex.map(fetch,[(s,i,t) for s,ts in groups.items() for i,t in enumerate(ts)]))
for slug in groups:
 if (root/slug/'images/product-01.jpg').exists():shutil.copy2(root/slug/'images/product-01.jpg',root/slug/'images/banner.jpg')
 lines=['# Nguồn ảnh','Ảnh địa danh/món ăn từ Wikimedia qua Wikipedia REST API. Trang nguồn chứa tác giả và điều kiện giấy phép của ảnh; mở ảnh tại trang nguồn để xem đầy đủ. Các ảnh khác từ Unsplash, dùng minh họa đề tài.','']
 for r in results:
  if r and r[0]==slug:lines+=['- product-'+str(r[1]+1).zfill(2)+'.jpg: ['+r[2]+']('+r[4]+') · [Ảnh]('+r[3]+')']
 (root/slug/'images/SOURCES.md').write_text('\n'.join(lines),encoding='utf-8')
print('Missing:',failed)
