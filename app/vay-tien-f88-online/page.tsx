import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { FaqItem } from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Vay Tiền F88 – Cầm Giấy Tờ Xe, Vẫn Giữ Xe Đi Lại | F88.vn",
  description:
    "F88 cho vay cầm giấy tờ xe – bạn vẫn giữ xe đi lại bình thường. Thủ tục đơn giản, giải ngân trong 2 giờ làm việc, hơn 800 chi nhánh toàn quốc. Hotline 18006388.",
  keywords:
    "vay tiền f88, f88 vn, cầm giấy tờ xe f88, vay cầm giấy tờ f88, f88 cho vay, vay tiền mặt f88",
  openGraph: {
    title: "F88 – Cầm Giấy Tờ Xe Lấy Tiền Ngay | Vẫn Giữ Xe Đi Lại",
    description: "Cầm giấy tờ xe máy, ô tô lấy tiền nhanh tại F88 – không cần giao xe. Thủ tục đơn giản, giải ngân trong 2 giờ, 800+ chi nhánh.",
    images: [{ url: "https://finlef.com/images/hero-loan-doc.jpg", width: 1200, height: 630, alt: "Vay tiền F88" }],
    type: "website",
    url: "https://finlef.com/vay-tien-f88-online",
    siteName: "FinLef",
    locale: "vi_VN",
  },
  alternates: { canonical: "https://finlef.com/vay-tien-f88-online" },
};

const F88_LINK = process.env.NEXT_PUBLIC_LINK_F88 ?? "https://f88.vn/";

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "F88 cho vay loại hình nào?", acceptedAnswer: { "@type": "Answer", text: "F88 chuyên cho vay cầm giấy tờ xe: giấy tờ xe máy và giấy tờ ô tô. Bạn vẫn giữ xe đi lại bình thường trong suốt thời gian vay. Ngoài ra còn có một số gói vay tín chấp tùy chi nhánh." } },
    { "@type": "Question", name: "Cần giấy tờ gì để vay tại F88?", acceptedAnswer: { "@type": "Answer", text: "Cần CCCD/CMND của chủ xe và giấy đăng ký xe (cà vẹt) đứng tên chính chủ. F88 giữ giấy tờ xe, bạn vẫn giữ xe đi lại. Xe phải không có tranh chấp, không đang thế chấp ngân hàng." } },
    { "@type": "Question", name: "Tiền được giải ngân bao lâu sau khi duyệt?", acceptedAnswer: { "@type": "Answer", text: "F88 cam kết liên hệ trong vòng 2 giờ làm việc sau khi nhận đăng ký. Giải ngân ngay tại chi nhánh sau khi hoàn tất thủ tục." } },
  ],
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://finlef.com" },
    { "@type": "ListItem", position: 2, name: "Vay Tiền F88", item: "https://finlef.com/vay-tien-f88-online" },
  ],
};

const faqs: FaqItem[] = [
  { q: "F88 cho vay loại hình nào?", a: "F88 chuyên cho vay cầm giấy tờ xe (xe máy, ô tô). Bạn chỉ cần nộp giấy đăng ký xe, vẫn giữ xe đi lại bình thường. Ngoài ra còn có một số gói vay tín chấp tùy chi nhánh và khu vực." },
  { q: "Cần giấy tờ gì để vay tại F88?", a: "Cần CCCD/CMND của chủ xe và giấy tờ xe đứng tên chính chủ (đăng ký xe/cà vẹt). Xe phải không có tranh chấp, không đang thế chấp tại ngân hàng." },
  { q: "Tiền được giải ngân bao lâu?", a: "F88 cam kết liên hệ trong vòng 2 giờ làm việc sau khi nhận đăng ký online. Giải ngân tiền mặt ngay tại chi nhánh sau khi hoàn tất thủ tục kiểm tra xe và ký hợp đồng." },
  { q: "Vay tại F88 có phải giao xe không?", a: "Không. F88 chỉ giữ giấy tờ xe (giấy đăng ký xe/cà vẹt), bạn vẫn giữ xe đi lại bình thường trong suốt thời gian vay. Đây là điểm khác biệt so với cầm đồ truyền thống." },
  { q: "F88 có bao nhiêu chi nhánh?", a: "F88 có hơn 800 chi nhánh trên toàn quốc, phủ khắp các tỉnh thành. Bạn có thể tìm chi nhánh gần nhất trên website f88.vn." },
  { q: "Hotline hỗ trợ của F88 là bao nhiêu?", a: "Hotline F88: 18006388 (miễn phí cuộc gọi). Hỗ trợ trong giờ làm việc để tư vấn và hướng dẫn thủ tục vay." },
  { q: "Vay tại F88 có an toàn không?", a: "F88 là công ty tài chính được cấp phép hoạt động hợp pháp tại Việt Nam, hoạt động minh bạch theo quy định pháp luật. Toàn bộ hợp đồng vay được ký kết rõ ràng, đầy đủ điều khoản." },
  { q: "Có thể đăng ký online rồi đến chi nhánh không?", a: "Có. Bạn đăng ký online với thông tin cơ bản, F88 liên hệ tư vấn và hẹn giờ đến chi nhánh gần nhất để hoàn tất thủ tục và nhận tiền." },
];

const benefits = [
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>, title: "Cầm giấy tờ xe, giữ xe đi lại", desc: "Chỉ nộp giấy đăng ký xe (cà vẹt), bạn vẫn dùng xe bình thường. Không phải giao xe như cầm đồ truyền thống." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>, title: "Giải ngân trong 2 giờ", desc: "Sau khi đăng ký, F88 liên hệ và hướng dẫn trong vòng 2 giờ làm việc. Nhận tiền ngay tại chi nhánh." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>, title: "800+ chi nhánh", desc: "Mạng lưới hơn 800 chi nhánh F88 trên toàn quốc, dễ dàng tìm điểm giao dịch gần nhất." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>, title: "Thủ tục đơn giản", desc: "Chỉ cần CCCD và giấy tờ xe đứng tên chính chủ. Không cần sao kê lương hay chứng minh thu nhập." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>, title: "Pháp lý rõ ràng", desc: "F88 hoạt động hợp pháp, được cấp phép đầy đủ. Hợp đồng minh bạch, điều khoản rõ ràng." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>, title: "Hỗ trợ 18006388", desc: "Hotline miễn phí 18006388 tư vấn thủ tục vay, tìm chi nhánh và giải đáp thắc mắc trong giờ hành chính." },
];

const steps = [
  { num: "01", title: "Đăng ký thông tin online", desc: "Điền họ tên, số điện thoại, tỉnh/quận và loại tài sản muốn cầm. Chỉ mất 2 phút trên website f88.vn." },
  { num: "02", title: "F88 liên hệ tư vấn", desc: "Nhân viên F88 liên hệ trong vòng 2 giờ làm việc để tư vấn thủ tục và hẹn lịch đến chi nhánh gần nhất." },
  { num: "03", title: "Đến chi nhánh kiểm tra tài sản", desc: "Mang CCCD và giấy tờ xe đến chi nhánh F88. Nhân viên định giá xe và hoàn tất thủ tục nhanh chóng." },
  { num: "04", title: "Ký hợp đồng & nhận tiền", desc: "Ký hợp đồng vay minh bạch, nhận tiền mặt ngay tại chi nhánh. Toàn bộ quy trình diễn ra trong ngày." },
];

const requirements = [
  "CCCD/CMND còn hiệu lực, đứng tên chủ xe",
  "Giấy đăng ký xe (cà vẹt) đứng tên chính chủ",
  "Xe không có tranh chấp, không đang thế chấp ngân hàng",
  "Xe trong tình trạng hoạt động tốt",
  "Từ 18 tuổi trở lên",
];

export default function VayTienF88Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      {/* Hero */}
      <section className="bg-linear-to-br from-[#006638] via-[#00844a] to-[#00a85c] text-white">
        <div className="max-w-5xl mx-auto px-4 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
              F88 – Cầm Giấy Tờ Xe, Vẫn Giữ Xe Đi Lại | Giải Ngân Trong 2 Giờ
            </h1>
            <p className="text-green-100 text-lg mb-6 leading-relaxed">
              F88 cho vay cầm giấy tờ xe – bạn chỉ nộp giấy đăng ký xe, <strong className="text-white">vẫn giữ xe đi lại bình thường</strong>.
              Nhận tiền ngay tại <strong className="text-white">800+ chi nhánh</strong> trên toàn quốc.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a rel="nofollow" href={F88_LINK} target="_blank" className="inline-block bg-white hover:bg-green-50 text-[#00844a] font-bold text-center px-8 py-4 rounded-xl text-md transition-colors shadow-lg">
                Đăng Ký Vay Tại F88
              </a>
              <a href="#huong-dan" className="inline-block border border-white/40 hover:bg-white/10 text-white text-center px-8 py-4 rounded-xl text-md transition-colors">
                Xem Quy Trình
              </a>
            </div>
            <p className="text-green-200 text-sm mt-4">✓ Giải ngân 2 giờ &nbsp;·&nbsp; ✓ Giữ xe đi lại bình thường &nbsp;·&nbsp; ✓ 800+ chi nhánh</p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1.5 shrink-0">
                  <Image src="/images/logo/vay-tien-f88-online.svg" alt="Logo F88" width={40} height={40} className="object-contain w-full h-full" />
                </div>
                <div className="font-bold text-white text-xl">F88</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: "2 giờ", label: "Thời gian giải ngân" },
                  { val: "800+", label: "Chi nhánh toàn quốc" },
                  { val: "Xe máy", label: "Cầm giấy tờ xe máy" },
                  { val: "Ô tô", label: "Cầm giấy tờ ô tô" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/20 rounded-xl p-4">
                    <div className="text-xl font-bold text-white">{s.val}</div>
                    <div className="text-green-200 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-green-200 text-xs text-center border-t border-white/20 pt-4">Hotline: 18006388 (miễn phí)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-y border-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-5 gap-6">
          {[
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>, label: "Cầm giấy tờ xe", sub: "Vẫn giữ xe đi lại" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>, label: "Trong 2 giờ", sub: "Liên hệ & giải ngân" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>, label: "800+ chi nhánh", sub: "Toàn quốc" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>, label: "CCCD + giấy tờ xe", sub: "Thủ tục đơn giản" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>, label: "Pháp lý rõ ràng", sub: "Được cấp phép" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center gap-2">
              <div className="w-14 h-14 rounded-2xl bg-green-50 text-[#00844a] flex items-center justify-center shadow-sm">{item.icon}</div>
              <span className="font-semibold text-gray-800 text-sm leading-tight">{item.label}</span>
              <span className="text-gray-400 text-xs">{item.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">Tại Sao Chọn F88?</h2>
          <p className="text-gray-500 text-center mb-10">Hàng triệu khách hàng đã vay nhanh qua F88 với thủ tục đơn giản nhất</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="border border-green-100 rounded-2xl p-6 hover:shadow-md hover:border-green-200 transition-all">
                <div className="w-12 h-12 rounded-xl bg-green-50 text-[#00844a] flex items-center justify-center mb-4">{b.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="huong-dan" className="bg-green-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">4 Bước Vay Tại F88</h2>
          <p className="text-gray-500 text-center mb-10">Từ đăng ký đến nhận tiền diễn ra trong cùng ngày làm việc</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-[#00a85c] to-[#006638] text-white text-xl font-bold flex items-center justify-center mx-auto mb-4 shadow-md">{s.num}</div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a rel="nofollow" href={F88_LINK} target="_blank" className="inline-block bg-[#00844a] hover:bg-[#006638] text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-md">
              Đăng Ký Ngay Tại F88
            </a>
            <p className="text-gray-500 text-sm mt-3">Hoặc gọi hotline <strong>18006388</strong> (miễn phí)</p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">Điều Kiện Vay Tại F88</h2>
          <p className="text-gray-500 text-center mb-8">Yêu cầu tối giản, thủ tục nhanh gọn nhất</p>
          <div className="bg-green-50 rounded-2xl p-6 lg:p-8 border border-green-100">
            <ul className="space-y-4">
              {requirements.map((r) => (
                <li key={r} className="flex items-center gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-[#00844a] flex items-center justify-center shrink-0 text-sm font-bold">✓</span>
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-green-100 text-sm text-gray-500">
              <strong className="text-gray-700">Lưu ý:</strong> Lãi suất và mức vay cụ thể phụ thuộc vào giá trị xe và thỏa thuận tại chi nhánh. Liên hệ hotline 18006388 để được tư vấn chi tiết.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">Câu Hỏi Thường Gặp</h2>
          <p className="text-gray-500 text-center mb-10">Giải đáp thắc mắc về vay cầm giấy tờ xe tại F88</p>
          <FaqAccordion faqs={faqs} accentColor="green" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-50 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Cần Tiền Gấp? Liên Hệ F88 Ngay</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">Đăng ký online hoặc gọi hotline 18006388, F88 tư vấn và hỗ trợ giải ngân nhanh chóng trong ngày.</p>
          <a rel="nofollow" href={F88_LINK} target="_blank" className="inline-block bg-[#00844a] hover:bg-[#006638] text-white font-bold px-12 py-5 rounded-2xl text-xl transition-colors shadow-lg">
            Vay Tiền Tại F88 →
          </a>
          <p className="text-gray-400 text-xs mt-4">800+ chi nhánh · Giải ngân 2 giờ · Hotline 18006388</p>
        </div>
      </section>

      <nav className="bg-gray-50 border-t border-gray-100 py-3 px-4 text-sm text-gray-500">
        <div className="max-w-5xl mx-auto flex gap-2">
          <Link href="/" className="hover:text-[#00844a] transition-colors">Trang chủ</Link>
          <span>/</span>
          <span className="text-gray-800">Vay Tiền F88</span>
        </div>
      </nav>
    </>
  );
}
