from pathlib import Path
import json,urllib.request,concurrent.futures
root=Path.cwd()
sets={
'fashion':['1598033129183-c4f50c736f10','1624378439575-d8705ad7ae80','1521572163474-6864f9cf17ab','1553062407-98eeb64c6a62','1525966222134-fcfa99b8ae77','1588850561407-ed78c282e89b'],
 'tech':['1587829741301-dc798b83add3','1527814050087-3793815479db','1527443224154-c4a3942d3acf','1541029071515-84cc54f84dc5','1597872200969-2b65d56bd16b','1546435770-a3e426bf472b'],
 'furniture':['1518455027359-f3f8164ba6bd','1598300042247-d088f8ab3a91','1507473885765-e6ed057f782c','1594620302200-9a762244a156','1578500494198-246f612d3b3d','1503602642458-232111445657'],
 'handmade':['1514228742587-6b1558fcca3d','1590874103328-eac38a683ce7','1603006905003-be475563bc59','1531346878377-a5be20888e57','1605651202774-7d573fd3f12d','1622560480605-d83c853bc5c3'],
 'flowers':['1563241527-3004b7be0ffd','1490750967868-88aa4486c946','1597848212624-a19eb35e2651','1525310072745-f49212b5ac6d','1457089328109-e5d9bd499191','1513201099705-a9746e1e201f'],
 'organic':['1540420773420-3366772f4999','1546094096-0df4bcaaa337','1547514701-42782101795e','1586201375761-83865001e31c','1587049352851-8d4e89133924','1518977676601-b53f82aba655']}
failed=[]
def fetch(job):
 slug,i,pid=job
 try:urllib.request.urlretrieve(f'https://images.unsplash.com/photo-{pid}?auto=format&fit=crop&w=800&q=80',root/slug/'images'/f'product-{i+1:02d}.jpg')
 except Exception:failed.append((slug,i+1))
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as ex:list(ex.map(fetch,[(s,i,p) for s,ps in sets.items() for i,p in enumerate(ps)]))
print('Photo failures:',failed)
# Product descriptions are item-specific rather than repeating the brand slogan.
specs={
'fashion':['Linen pha cotton · Phom rộng · S/M/L','Cotton · Ống suông · S/M/L','Cotton · Cổ tròn · S/M/L','Canvas · 35 × 40 cm · Màu tự nhiên','Vải canvas · Đế cao su · Size 36–42','Cotton · Vành mềm · Vòng đầu 56–58 cm'],
 'tech':['Bố cục 75% · USB-C · Switch cơ','Kết nối 2.4GHz · 3 mức DPI · Pin AA','24 inch · Full HD · Tấm nền IPS','16GB · DDR4 · 3200MHz · Kiểm tra mainboard trước khi chọn','512GB · SSD SATA 2.5 inch · Dành cho máy có cổng SATA','Chụp tai · Jack 3.5mm · Micro tích hợp'],
 'furniture':['120 × 60 × 74 cm · Gỗ cao su · Lắp ráp','45 × 48 × 80 cm · Tựa gỗ · Màu tự nhiên','Cao 38 cm · Ánh sáng ấm · Nguồn điện 220V','60 × 25 × 90 cm · Ba tầng · Gỗ công nghiệp','Cao 18 cm · Gốm men mờ · Dùng trang trí','Mặt ghế 32 cm · Cao 45 cm · Chân gỗ'],
 'handmade':['Gốm men trắng · Dung tích 300ml','Sợi cotton · Túi đan mềm · Màu kem','Sáp đậu nành · Hũ 120g · Mùi gỗ nhẹ','Giấy 100gsm · 80 trang · Bìa vải','Mây đan · Đường kính 10 cm · Bộ 2 chiếc','Vải cotton · Khóa kéo · 12 × 9 cm'],
 'bookstore':['Văn học · Bìa mềm · 224 trang','Tin học · Bìa mềm · 320 trang','Truyện ngắn · Bìa mềm · 180 trang','Kỹ năng · Bìa mềm · 256 trang','Du ký · Bìa mềm · 208 trang','Học tập · Bìa mềm · 192 trang'],
 'flowers':['Hoa hồng phối lá · Bó cỡ vừa · Tông hồng','Cúc trắng · Giỏ tre · Tông trắng xanh','Hướng dương phối lá · Bó cỡ vừa','Hoa phối theo mùa · Hộp giấy · Tông ấm','Hoa nhỏ phối lá · Kèm bình thủy tinh','Thiệp giấy · 10 × 15 cm · Ghi lời nhắn ở địa chỉ đơn hàng'],
 'organic':['Gói 500g · Bảo quản ngăn mát','Túi 1kg · Cà chua tươi · Rửa trước khi dùng','Túi 1kg · Trái cây theo mùa','Túi 1kg · Bảo quản khô ráo','Chai 250ml · Đậy kín sau khi dùng','Túi 1kg · Bảo quản nơi thoáng mát']}
prices={'tech':[890000,320000,2490000,790000,690000,450000],'furniture':[1850000,950000,290000,1250000,180000,390000],'bookstore':[89000,169000,75000,125000,99000,115000],'flowers':[350000,280000,250000,550000,420000,25000],'organic':[25000,35000,45000,48000,95000,28000],'tickets':[90000,150000,220000,110000,180000,200000],'appointments':[80000,120000,250000,150000,50000,100000],'fashion':[350000,420000,180000,125000,390000,95000]}
for c in json.loads((root/'scripts/projects.json').read_text(encoding='utf-8')):
 f=root/c[0]/'js/data.js';cfg=json.loads(f.read_text(encoding='utf-8')[15:-1])
 for i,p in enumerate(cfg['items']):
  if c[0] in specs:p['description']=specs[c[0]][i]+'.';p['specs']=specs[c[0]][i].split(' · ')
  if c[0] in prices:p['price']=prices[c[0]][i]
  if c[0]=='fashion':p['category']=['Áo & quần','Áo & quần','Áo & quần','Giày & túi','Giày & túi','Phụ kiện'][i]
 if c[0]=='fashion':
  for page in (root/c[0]).glob('*.html'):
   s=page.read_text(encoding='utf-8').replace('<option>Nổi bật</option><option>Bộ sưu tập</option>','<option>Áo & quần</option><option>Giày & túi</option><option>Phụ kiện</option>')
   for cat in ['Áo & quần','Giày & túi','Phụ kiện']:s=s.replace('href="products.html">'+cat,'href="products.html?category='+cat+'">'+cat)
   page.write_text(s,encoding='utf-8')
 f.write_text('const CONFIG = '+json.dumps(cfg,ensure_ascii=False)+';',encoding='utf-8')
