# Tạo Landing Page

Tạo một landing page hoàn chỉnh theo yêu cầu dưới đây.

## Yêu cầu từ người dùng
$ARGUMENTS

## Checklist bắt buộc

Trước khi viết code, đọc guide trong `node_modules/next/dist/docs/` để dùng đúng API của phiên bản Next.js hiện tại.

### Cấu trúc trang
Tạo file page tại đúng vị trí trong App Router. Landing page phải có đủ các section sau (bỏ qua nếu không phù hợp với nội dung):

1. **Hero** — tiêu đề chính, mô tả ngắn, CTA button
2. **Features** — liệt kê tính năng/lợi ích nổi bật
3. **Social proof** — testimonial, số liệu, logo khách hàng
4. **Pricing** — bảng giá (nếu có)
5. **FAQ** — câu hỏi thường gặp
6. **CTA cuối trang** — kêu gọi hành động lần cuối
7. **Footer** — link, thông tin liên hệ

### Yêu cầu kỹ thuật
- Dùng **Server Component** (không có `"use client"` trừ khi cần thiết)
- Styling bằng **Tailwind CSS** — không dùng CSS module hay inline style
- Responsive: mobile-first, breakpoint `sm` và `lg`
- Tất cả ảnh dùng `next/image` với `width`, `height`, và `alt` đầy đủ
- Tất cả link nội bộ dùng `next/link`

### SEO
Xuất `metadata` object từ page file với:
- `title`
- `description`
- `openGraph.title`, `openGraph.description`, `openGraph.images`

### Performance
- Không import thư viện nặng không cần thiết
- Ảnh hero dùng `priority` prop
- Font load bằng `next/font` nếu cần custom font

## Output

Tạo các file sau:
- Page file (ví dụ: `app/landing/page.tsx` hoặc theo yêu cầu)
- Tách thành components riêng trong `components/` nếu section nào dài hơn 50 dòng
- Không tạo file CSS riêng

Sau khi tạo xong, liệt kê ngắn gọn: các file đã tạo và checklist SEO/performance đã đáp ứng.
