"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Mở thẻ tín dụng VPBank online có mất phí không?",
    a: "Hoàn toàn miễn phí khi đăng ký online. Phí thường niên được miễn hoàn toàn trong năm đầu tiên. Từ năm thứ hai, phí dao động từ 399.000 – 1.200.000 VND tùy loại thẻ, có thể được miễn nếu chi tiêu đủ điều kiện.",
  },
  {
    q: "Điều kiện để mở thẻ tín dụng VPBank là gì?",
    a: "Bạn cần đủ 18 tuổi, có CCCD/CMND hợp lệ và thu nhập ổn định từ 4 triệu VND/tháng trở lên. Một số loại thẻ cao cấp yêu cầu thu nhập cao hơn.",
  },
  {
    q: "Bao lâu thì được duyệt thẻ?",
    a: "Hồ sơ online thường được duyệt sơ bộ trong 10 phút. Kết quả chính thức trong 1–3 ngày làm việc. Thẻ vật lý giao tận nhà trong 5–7 ngày sau khi duyệt.",
  },
  {
    q: "Hạn mức thẻ tín dụng VPBank tối đa là bao nhiêu?",
    a: "Hạn mức khởi điểm từ 5 triệu VND, tối đa lên đến 500 triệu VND tùy theo thu nhập và lịch sử tín dụng của bạn.",
  },
  {
    q: "Lãi suất thẻ tín dụng VPBank là bao nhiêu?",
    a: "Lãi suất khoảng 2.99%/tháng (tương đương 35.88%/năm). Nếu thanh toán toàn bộ dư nợ trước ngày đáo hạn, bạn được miễn hoàn toàn lãi suất.",
  },
  {
    q: "Thẻ VPBank có trả góp 0% không?",
    a: "Có. VPBank hợp tác với hơn 10.000 đơn vị bán lẻ để cung cấp ưu đãi trả góp 0% lãi suất từ 3–24 tháng cho nhiều danh mục hàng hóa.",
  },
  {
    q: "Không có lịch sử tín dụng có mở được thẻ không?",
    a: "Vẫn có thể mở được. VPBank có chương trình xét duyệt dành cho khách hàng chưa có lịch sử tín dụng dựa trên thu nhập và hồ sơ cá nhân.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between py-5 text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-medium text-gray-900 text-base">{faq.q}</span>
            <span className="shrink-0 text-green-700 text-xl">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <p className="pb-5 text-gray-600 leading-relaxed text-sm">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
