"use client";

import { useState } from "react";

const faqs = [
  {
    q: "VayMèo là gì? Có phải tổ chức cho vay không?",
    a: "VayMèo là nền tảng kết nối trung gian, không trực tiếp cho vay tiền. Chúng tôi giúp bạn so sánh và tìm kiếm đề xuất từ các đối tác tài chính uy tín, hoàn toàn miễn phí.",
  },
  {
    q: "Đăng ký qua VayMèo có mất phí không?",
    a: "Hoàn toàn miễn phí 100%. VayMèo không thu bất kỳ khoản phí nào từ người dùng. Chi phí vay sẽ do đối tác tài chính quy định và công khai trước khi bạn quyết định.",
  },
  {
    q: "Có thể vay tối đa bao nhiêu qua VayMèo?",
    a: "Mức vay dao động từ 500.000 VNĐ đến 30.000.000 VNĐ tùy thuộc vào hồ sơ và đối tác tài chính phù hợp với bạn.",
  },
  {
    q: "Điều kiện để đăng ký vay tiền qua VayMèo?",
    a: "Bạn cần là công dân Việt Nam từ 18 tuổi trở lên, đang sinh sống tại Việt Nam, có CCCD/CMND còn hiệu lực, tài khoản ngân hàng cá nhân và số điện thoại/email hợp lệ.",
  },
  {
    q: "Lãi suất vay là bao nhiêu?",
    a: "Lãi suất dao động từ 0% đến tối đa 36%/năm tùy đối tác. Ví dụ: khoản vay 2.000.000 VNĐ trong 4 tháng tổng thanh toán khoảng 2.024.333 VNĐ (lãi suất 3,65%/năm).",
  },
  {
    q: "Người có nợ xấu có vay được không?",
    a: "VayMèo kết nối với nhiều đối tác đa dạng, một số đối tác có thể xem xét hồ sơ ngay cả khi có lịch sử tín dụng chưa tốt. Hãy thử điền thông tin để nhận đề xuất phù hợp.",
  },
  {
    q: "Thời gian nhận tiền sau khi được duyệt là bao lâu?",
    a: "Sau khi được đối tác tài chính phê duyệt, tiền thường được giải ngân trong vòng 15 phút đến 24 giờ tùy từng đối tác và ngân hàng của bạn.",
  },
  {
    q: "Thông tin cá nhân của tôi có được bảo mật không?",
    a: "VayMèo cam kết bảo vệ dữ liệu cá nhân theo quy định pháp luật. Thông tin của bạn chỉ được chia sẻ với đối tác được bạn đồng ý, không bán cho bên thứ ba.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-orange-100 rounded-2xl overflow-hidden"
        >
          <button
            className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 bg-white hover:bg-orange-50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-gray-800 text-sm leading-snug">
              {faq.q}
            </span>
            <span
              className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm transition-transform ${
                open === i ? "bg-orange-500 rotate-45" : "bg-orange-400"
              }`}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 bg-orange-50 text-gray-600 text-sm leading-relaxed">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
