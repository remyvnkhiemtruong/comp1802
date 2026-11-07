# COMP1802 — Web Design Projects

This repository contains projects and assignments for the **Web Design** course (COMP1802) at Ho Chi Minh City University of Education.

## Course Information

| Field | Details |
|-------|---------|
| **Course** | Web Design |
| **Course Code** | COMP1802 |
| **Instructor** | M.Sc. Hien Tran Hy Luong |
| **Faculty** | Faculty of Information Technology |
| **University** | Ho Chi Minh City University of Education (HCMUE) |

## Author

| Field | Details |
|-------|---------|
| **Name** | Minh Khiem Truong |
| **Major** | Information Technology |
| **University** | Ho Chi Minh City University of Education (HCMUE) |

## Projects

| # | Project | Tech | Link |
|---|---------|------|------|
| 1 | Aquarium | HTML, CSS | [View project](./aquarium/) · [Source](./aquarium/index.html) |
| 2 | CV | HTML, CSS | [View project](./cv/) · [Source](./cv/index.html) |

## License

This repository is licensed under the [MIT License](./LICENSE).

## Đồ án cuối học phần

24 project độc lập, mỗi project có 6 mục dữ liệu mẫu, trang liên hệ/giới thiệu, tài khoản demo, góp ý và chức năng theo chủ đề. Chạy từ index.html hoặc Live Server. Không có backend hoặc thanh toán thực tế.

| Project | Đề tài | Chức năng chính |
|---|---|---|
| [NẾP](./fashion/index.html) | Thời trang | shop |
| [MẠCH](./tech/index.html) | Công nghệ | shop |
| [GỖ NHÀ](./furniture/index.html) | Nội thất | shop |
| [TAY MỘC](./handmade/index.html) | Thủ công | shop |
| [TRANG](./bookstore/index.html) | Sách | shop |
| [THÁNG HOA](./flowers/index.html) | Hoa & quà | shop |
| [VƯỜN SỚM](./organic/index.html) | Nông sản | shop |
| [CHẠM ĐÀ LẠT](./dalat/index.html) | Điểm đến | guide |
| [ĐI CHẬM](./tours/index.html) | Tour du lịch | booking |
| [HIÊN](./homestay/index.html) | Homestay | stay |
| [BẾP DỌC MIỀN](./cuisine/index.html) | Ẩm thực | guide |
| [MÙA HỘI](./festivals/index.html) | Văn hóa | guide |
| [SUẤT TỐI](./tickets/index.html) | Vé & sự kiện | ticket |
| [CÙNG HỌC](./language/index.html) | Trung tâm ngoại ngữ | course |
| [MỞ LỚP](./courses/index.html) | Học trực tuyến | course |
| [GHI CHÉP](./study-blog/index.html) | Tài liệu học tập | blog |
| [XƯỞNG WEB](./coding/index.html) | Khóa học kỹ năng | course |
| [THỬ TRÍ](./quiz/index.html) | Trắc nghiệm | quiz |
| [VIỆC NHỎ](./todo/index.html) | Quản lý công việc | todo |
| [SỔ CHI](./expenses/index.html) | Chi tiêu cá nhân | expense |
| [HẸN NGÀY](./calendar/index.html) | Lịch sự kiện | calendar |
| [KHOẢNG NGHỈ](./appointments/index.html) | Đặt lịch hẹn | appointment |
| [KHUNG](./gallery/index.html) | Album ảnh | gallery |
| [BÀN NHỎ](./mini-tools/index.html) | Ứng dụng mini | tools |

Mỗi folder có README với phạm vi và dàn ý báo cáo. Báo cáo DOCX/PDF, phần phân công và thuyết trình cần chuẩn bị riêng. Các ảnh lưu nội bộ từ Unsplash, dùng làm minh họa chủ đề; không phải ảnh chính xác cho từng mặt hàng.

Mã nền dùng chung được sao chép vào từng project để folder chạy độc lập. `scripts/build-projects.py` sinh HTML/CSS/data từ `scripts/projects.json`; `scripts/main-template.js` là nguồn JavaScript chung. Sau khi sửa mẫu cần sao chép vào `js/main.js` của các project. Không chạy lại trình sinh sau khi đã sửa tay các trang nếu muốn giữ chỉnh sửa đó.

### Kiểm tra tự động

Dùng Python Playwright với trình duyệt Chromium để chạy `scripts/check-browser.py` và `scripts/check-flows.py` khi máy đã cài sẵn Playwright. Khởi động server tĩnh ở cổng 8080 trước khi chạy. Đã kiểm tra 72 lượt tải trang, 24 viewport mobile và các luồng tài khoản, giỏ hàng, đặt chỗ, trùng lịch, dữ liệu công cụ, tiến độ, tải ảnh và góp ý.

Các bước tạo lại: build-projects.py → add-photos.py → refine-design.py → product-details.py → editorial-content.py → brand-details.py. Sao lưu các sửa tay trước khi tạo lại. Các script tải ảnh cần mạng; website sau khi tạo có thể chạy ngoại tuyến. Ảnh một số trang du lịch/văn hóa/ẩm thực được lấy qua Wikipedia/Wikimedia; xem images/SOURCES.md trong folder tương ứng.
