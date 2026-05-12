@AGENTS.md

# Dự án: FinLef.com

Website dùng để kiếm tiền từ affiliate chuyển về mảng tài chính, giới thiệu đến khách hàng các dịch vụ như vay tiền, mở thẻ của các brand, ngân hàng.

**Đối tượng người dùng:** có nhu cầu mau sắm, tiêu dùng.

---
## Yêu cầu
- Giao diện responsive cho mobile
- Website chạy nhanh, điểm google speed insight cao
- Tối ưu seo cho tất cả các page, có đủ các google schema cần thiết

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4**

---

## Cấu trúc thư mục

```
app/
  (auth)/         - các trang đăng nhập, đăng ký
  (dashboard)/    - các trang sau khi đăng nhập
  layout.tsx      - root layout
  page.tsx        - trang chủ
components/       - UI components dùng lại
lib/              - utilities, helpers, API clients
types/            - TypeScript interfaces & types
public/           - static assets
```

> Cập nhật cấu trúc này khi thêm thư mục mới.

---

## Quy ước code

- Dùng **Server Components** mặc định; chỉ thêm `"use client"` khi cần tương tác hoặc hooks
- Không viết comment trừ khi logic thực sự phức tạp
- Dùng Tailwind cho styling — không dùng CSS module hay inline style

---

## Lệnh thường dùng

```bash
npm run dev      # chạy dev server tại localhost:3000
npm run build    # build production
npm run lint     # kiểm tra lỗi ESLint
```
---

## Hình ảnh – Pexels API

Dự án dùng **Pexels** để lấy ảnh stock miễn phí. API key lưu trong `.env.local`:

```
PEXELS_API_KEY=<xem file .env.local>
```

### Cách tải ảnh mới bằng PowerShell

```powershell
$key = (Get-Content .env.local | Where-Object { $_ -match "PEXELS_API_KEY" }) -replace "PEXELS_API_KEY=", ""
$headers = @{ Authorization = $key }

# Tìm ảnh
$res = Invoke-RestMethod -Uri "https://api.pexels.com/v1/search?query=QUERY&per_page=5&orientation=landscape" -Headers $headers
$res.photos | ForEach-Object { Write-Host "$($_.id) | $($_.alt) | $($_.src.large2x)" }

# Tải ảnh về public/images/
$detail = Invoke-RestMethod -Uri "https://api.pexels.com/v1/photos/PHOTO_ID" -Headers $headers
Invoke-WebRequest -Uri $detail.src.large2x -OutFile "public/images/TEN-FILE.jpg"
```

### Ảnh đã có trong `public/images/`

| File | Dùng ở | Pexels ID |
|---|---|---|
| `hero-home.jpg` | Trang chủ – hero background | 36765993 |
| `hero-vpbank.jpg` | Landing VPBank – cột phải | 9122014 |
| `about-hero.jpg` | Trang Giới thiệu – hero background | 7654629 |

> Khi thêm trang mới cần ảnh: tìm query phù hợp → tải về `public/images/` → dùng `next/image`.

---

## Những điều KHÔNG làm

- Không thêm thư viện mới mà chưa hỏi
- Không sửa file `AGENTS.md`
