from pathlib import Path
import json
root=Path.cwd()
content={
'dalat':[
('Đồi chè Cầu Đất','Những triền chè và khoảng nhìn rộng về phía đồi. Phù hợp cho chuyến đi buổi sáng; đường xa trung tâm nên cần dành đủ thời gian di chuyển.','Gợi ý: ghép cùng một điểm dừng trên cung đường Trại Mát. Mang áo khoác nhẹ, tránh đi vào lối sản xuất khi chưa được phép.'),
('Hồ Tuyền Lâm','Không gian hồ và rừng thông ở phía nam thành phố. Dành thời gian đi dạo, chụp ảnh và nghỉ chân thay vì di chuyển liên tục.','Gợi ý: chọn một điểm dừng ven hồ có lối tiếp cận an toàn. Không bơi tự phát hoặc để rác lại bờ hồ.'),
('Ga Đà Lạt','Công trình kiến trúc gắn với lịch sử đường sắt của thành phố. Có thể kết hợp tìm hiểu tuyến đường sắt và chụp ảnh kiến trúc.','Gợi ý: kiểm tra lịch hoạt động trước khi đến. Giữ khoảng cách với khu vực đường ray và tuân thủ hướng dẫn tại ga.'),
('Dốc Nhà Bò','Một con dốc trong khu dân cư, phù hợp làm điểm ghé ngắn khi khám phá thành phố.','Gợi ý: không đứng chắn lối, hạn chế tiếng ồn và không chụp sát nhà riêng khi chưa xin phép.'),
('Vườn hoa thành phố','Không gian trưng bày các loài hoa, phù hợp để đi dạo và tìm hiểu cây cảnh.','Gợi ý: lựa chọn giày dễ đi, mang nước và chỉ đi trên lối dành cho khách tham quan.'),
('Langbiang','Khu vực núi gắn với cảnh quan cao nguyên và văn hóa địa phương. Thời tiết có thể thay đổi trong ngày.','Gợi ý: xem dự báo thời tiết và quy định cung đường. Nếu đi bộ đường dài, cần hướng dẫn phù hợp và trang bị đầy đủ.')],
'cuisine':[
('Phở Hà Nội','Bánh phở, nước dùng và các loại thịt tạo nên món ăn quen thuộc của miền Bắc.','Chú ý sự cân bằng giữa nước dùng, bánh phở và rau gia vị. Cách nêm và món ăn kèm khác nhau theo mỗi quán.'),
('Bún bò Huế','Món bún với hương sả, nước dùng đậm và vị cay đặc trưng.','Thưởng thức từ ít gia vị trước, sau đó thêm ớt theo khẩu vị. Hỏi thành phần nếu bạn có dị ứng hoặc cần tránh một loại thịt.'),
('Mì Quảng','Sợi mì, ít nước dùng đậm vị, rau sống và bánh tráng tạo thành một phần ăn nhiều lớp kết cấu.','Trộn nhẹ các thành phần, thêm rau và bánh tráng theo khẩu vị. Các phiên bản có thể dùng gà, tôm hoặc thịt.'),
('Cao lầu Hội An','Món mì gắn với Hội An, kết hợp sợi mì dày, thịt và rau.','Dành một bữa trưa để tìm hiểu món ăn và câu chuyện khu phố. Thành phần và cách chế biến thay đổi theo nơi bán.'),
('Bánh xèo miền Tây','Bánh đổ trên chảo với phần vỏ giòn, ăn cùng nhiều loại rau.','Cuốn một miếng nhỏ cùng rau, chấm vừa đủ. Hỏi thành phần nhân nếu không dùng tôm hoặc thịt.'),
('Cơm tấm Sài Gòn','Cơm từ hạt gạo tấm, thường đi cùng sườn và các món ăn kèm.','Chọn phần ăn vừa sức, thêm đồ chua và nước mắm theo khẩu vị. Đây là món ăn thường gặp trong nhịp sống thành phố.')],
'festivals':[(n,d,'Thời gian tổ chức có thể thay đổi theo từng năm và địa phương. Cần tra cứu thông báo của ban tổ chức trước chuyến đi; trang này cung cấp thông tin nền, không phải lịch sự kiện hiện hành.') for n,d in [
('Hội Lim','Sinh hoạt văn hóa gắn với quan họ ở Bắc Ninh.'),('Lễ hội đền Hùng','Hoạt động tưởng nhớ các Vua Hùng, gắn với Phú Thọ.'),('Festival Huế','Chương trình văn hóa nghệ thuật gắn với không gian di sản Huế.'),('Lễ hội đèn lồng','Không gian đèn lồng và sinh hoạt phố cổ, gắn với Hội An.'),('Lễ hội cồng chiêng','Sinh hoạt âm nhạc và văn hóa cộng đồng ở Tây Nguyên.'),('Lễ hội Óc Om Bóc','Lễ cúng trăng trong văn hóa cộng đồng Khmer Nam Bộ.')]],
 'tours':[(n,d,detail) for n,d,detail in [
('Đà Lạt 3 ngày','3 ngày 2 đêm · Lịch trình thành phố và vùng đồi','Ngày 1: trung tâm và ga cũ. Ngày 2: Cầu Đất và Trại Mát. Ngày 3: đi dạo ven hồ, kết thúc hành trình.'),
('Phú Quốc 4 ngày','4 ngày 3 đêm · Biển và trải nghiệm địa phương','Ngày 1: nhận phòng và dạo biển. Ngày 2: phía nam đảo. Ngày 3: làng chài và ẩm thực. Ngày 4: nghỉ ngơi, trở về.'),
('Sapa 3 ngày','3 ngày 2 đêm · Thị trấn và bản làng','Ngày 1: đến thị trấn. Ngày 2: đi bộ tìm hiểu bản làng với hướng dẫn địa phương. Ngày 3: nghỉ ngơi và trở về.'),
('Hội An 2 ngày','2 ngày 1 đêm · Phố cổ và làng nghề','Ngày 1: tham quan phố cổ. Ngày 2: ghé làng nghề, thưởng thức ẩm thực và kết thúc chuyến đi.'),
('Ninh Bình 2 ngày','2 ngày 1 đêm · Cảnh quan sông núi','Ngày 1: tham quan tuyến thuyền theo điều kiện thời tiết. Ngày 2: khám phá di tích và cảnh quan, trở về.'),
('Huế 3 ngày','3 ngày 2 đêm · Di sản và ẩm thực','Ngày 1: khu vực Đại Nội. Ngày 2: lăng tẩm và làng nghề. Ngày 3: chợ địa phương và trở về.')]],
 'homestay':[(n,d,'Tiện nghi minh họa: giường, bàn nhỏ, khăn và phòng tắm. Giá là dữ liệu đồ án theo một người mỗi đêm; tổng chi phí được tính theo số người × số đêm. Chưa có đồng bộ tồn phòng hoặc hệ thống thanh toán.') for n,d in [
('Phòng Gác Nhỏ','18 m² · 1 giường đôi · Cửa sổ áp mái'),('Phòng Hướng Vườn','24 m² · 1 giường đôi · Nhìn ra vườn'),('Căn Nhà Gỗ','45 m² · 2 phòng ngủ · Khu sinh hoạt chung'),('Studio Ban Công','30 m² · Bàn làm việc · Ban công riêng'),('Phòng Gia Đình','36 m² · 2 giường đôi · Không gian rộng'),('Lều Bên Đồi','20 m² · Nệm đôi · Khu vệ sinh chung')]]}
lessons=[('HTML','Dùng thẻ h1 cho tiêu đề chính, p cho đoạn văn và a cho liên kết. Hãy tạo một trang giới thiệu bản thân, kiểm tra cấu trúc bằng công cụ của trình duyệt.'),('CSS','Grid chia bố cục thành hàng và cột. Thử display: grid; grid-template-columns: 1fr 1fr; gap: 16px; sau đó chuyển về một cột trong media query cho màn hình nhỏ.'),('JavaScript','Lấy phần tử bằng document.querySelector, lắng nghe sự kiện click bằng addEventListener và cập nhật textContent. Thử tạo một nút đếm lượt bấm, bắt đầu từ 0.'),('Thiết kế','Chọn một nhiệm vụ chính của màn hình. Sắp xếp tiêu đề, thông tin và nút hành động theo thứ tự người dùng cần đọc. Giảm màu và đường viền không phục vụ phân cấp.'),('Thực hành','Chia một yêu cầu lớn thành ba bước nhỏ. Hoàn thành bước đầu, kiểm tra kết quả bằng ví dụ cụ thể rồi mới chuyển bước. Viết lại điều đã học trong năm dòng.'),('Trình bày','Mở đầu bằng vấn đề cần giải quyết. Demo một thao tác từ đầu đến cuối, giải thích quyết định chính và kết thúc bằng một giới hạn thực tế của sản phẩm.')]
for c in json.loads((root/'scripts/projects.json').read_text(encoding='utf-8')):
 f=root/c[0]/'js/data.js';cfg=json.loads(f.read_text(encoding='utf-8')[15:-1])
 for i,p in enumerate(cfg['items']):
  if c[0] in content:
   _,p['description'],p['detail']=content[c[0]][i]
  if c[5] in ['course','blog']:
   title,text=lessons[i];p['description']=('Bài học ' if c[5]=='course' else 'Ghi chép ')+str(i+1)+' · '+title+' · Thực hành từng bước';p['detail']=text
  if c[5]=='appointment':p['description']=['30 phút · Cắt và tạo kiểu cơ bản','45 phút · Gội và massage da đầu','60 phút · Làm sạch và chăm sóc cơ bản','30 phút · Thư giãn vùng vai gáy','20 phút · Tư vấn theo dáng mặt','45 phút · Làm sạch và chăm sóc móng'][i]
  if c[5]=='ticket':p['description']=['Phim truyện · 100 phút · Suất chiếu 19:00','Acoustic · 90 phút · Bắt đầu 20:00','Jazz · 90 phút · Bắt đầu 20:30','Phim truyện · 110 phút · Suất chiếu 18:30','Nhạc Indie · 120 phút · Bắt đầu 19:30','Sân khấu · 90 phút · Bắt đầu 19:00'][i]
 f.write_text('const CONFIG = '+json.dumps(cfg,ensure_ascii=False)+';',encoding='utf-8')
p=root/'scripts/main-template.js';s=p.read_text(encoding='utf-8')
s=s.replace("function say(s){$('#status').textContent=s;}","function say(s){$('#status').textContent=s;const d=$('#detail[open] #dialog-status');if(d)d.textContent=s;}")
s=s.replace("$('#detail-body').innerHTML=content;", "if(p.detail)content='<h2>'+esc(p.name)+'</h2><p>'+esc(p.description)+'</p><section class=\"reading\"><h3>'+ (CONFIG.kind==='course'?'Bài thực hành mẫu':'Thông tin chi tiết') +'</h3><p>'+esc(p.detail)+'</p></section>'+content.substring(content.indexOf('<form')>=0?content.indexOf('<form'):content.indexOf('<label')>=0?content.indexOf('<label'):content.length);content+='<p id=\"dialog-status\" role=\"status\" class=\"message\"></p>';$('#detail-body').innerHTML=content;")
s=s.replace("if($('#catalog')) {catalog();", "if($('#catalog')) {const category=new URLSearchParams(location.search).get('category');if(category)$('#filter').value=category;catalog();")
p.write_text(s,encoding='utf-8')
for c in json.loads((root/'scripts/projects.json').read_text(encoding='utf-8')):(root/c[0]/'js/main.js').write_text(s,encoding='utf-8')
