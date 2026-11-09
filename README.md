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

## Giao diện theo từng project

Mỗi project có bố cục, hệ chữ, điều hướng và cách hiển thị nội dung riêng. Các trang trong cùng project dùng nhận diện thống nhất. Trang index có ảnh chụp giao diện để so sánh nhanh.

Nguồn hiện hành là HTML/CSS/JS trực tiếp trong từng folder. Mỗi folder chạy độc lập, không cần build. Các script sinh mẫu ban đầu (`build-projects.py`, `refine-design.py`, `main-template.js`...) chỉ giữ làm lịch sử tạo mẫu; **không chạy lại hoặc sao chép đè**, vì sẽ làm mất thiết kế và bộ xử lý riêng hiện tại.

### Kiểm tra

Chạy server tĩnh ở cổng 8080, sau đó dùng Python có Playwright/Chromium để chạy:

- `scripts/check-redesign.py`: tải 216 trang ở 390px, 1024px và 1440px; phát hiện lỗi JavaScript, tài nguyên 404 và tràn ngang; chụp các trang chủ vào artifacts/redesign.
- `scripts/check-flows.py`: kiểm tra các luồng tài khoản, giỏ hàng, đặt chỗ, trùng lịch, công cụ, tiến độ học, tải ảnh và góp ý.

Ảnh giao diện hiển thị ở trang index được lưu trong previews. Ảnh nội dung được lưu trong từng project; một số có ghi chú nguồn tại images/SOURCES.md. Các font bổ sung được lưu nội bộ kèm giấy phép OFL. Không có backend hoặc thanh toán thật.
