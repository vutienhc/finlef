import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { FaqItem } from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Vay Tiền CashSpace – Vay Siêu Nhanh Từ Đối Tác | 500K – 20 Triệu",
  description:
    "CashSpace kết nối bạn với các đối tác tài chính uy tín. Vay từ 500.000 đến 20.000.000 VNĐ, tỷ lệ duyệt 97%, giải ngân trong 15 phút, miễn phí hoàn toàn.",
  keywords:
    "vay tiền cashspace, cashspace vn, vay siêu nhanh cashspace, cashspace cho vay, vay online cashspace",
  openGraph: {
    title: "CashSpace – Vay Siêu Nhanh Từ Đối Tác | 500K – 20 Triệu",
    description: "Tỷ lệ duyệt 97%, 312.000 khách hàng hài lòng, giải ngân trong 15 phút. Miễn phí 100%.",
    images: [{ url: "https://finlef.com/images/hero-loan-form.jpg", width: 1200, height: 630, alt: "Vay tiền CashSpace" }],
    type: "website",
    url: "https://finlef.com/vay-tien-cashspace-online",
    siteName: "FinLef",
    locale: "vi_VN",
  },
  alternates: { canonical: "https://finlef.com/vay-tien-cashspace-online" },
};

const CASHSPACE_LINK = process.env.NEXT_PUBLIC_LINK_CASHSPACE ?? "https://cashspace.vn/";

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "CashSpace có trực tiếp cho vay không?", acceptedAnswer: { "@type": "Answer", text: "CashSpace là nền tảng kết nối trung gian, không trực tiếp cho vay. Chúng tôi kết nối bạn với các đối tác tài chính được kiểm duyệt kỹ lưỡng." } },
    { "@type": "Question", name: "Tỷ lệ duyệt của CashSpace là bao nhiêu?", acceptedAnswer: { "@type": "Answer", text: "CashSpace đạt tỷ lệ duyệt lên đến 97% nhờ kết nối với nhiều đối tác có tiêu chí xét duyệt đa dạng." } },
    { "@type": "Question", name: "Vay lần đầu có được lãi suất 0% không?", acceptedAnswer: { "@type": "Answer", text: "Nhiều đối tác của CashSpace có chương trình ưu đãi 0% lãi suất cho khoản vay đầu tiên. Điều kiện cụ thể tùy từng đối tác." } },
  ],
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://finlef.com" },
    { "@type": "ListItem", position: 2, name: "Vay Tiền CashSpace", item: "https://finlef.com/vay-tien-cashspace-online" },
  ],
};

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  name: "CashSpace – Vay Siêu Nhanh Từ Đối Tác",
  description: "Nền tảng kết nối vay tiền online, mức vay 500.000–20.000.000 VNĐ, tỷ lệ duyệt 97%, giải ngân 15 phút.",
  url: "https://cashspace.vn",
  annualPercentageRate: { "@type": "QuantitativeValue", minValue: 0, maxValue: 36, unitText: "%/năm" },
  amount: { "@type": "MonetaryAmount", minValue: 500000, maxValue: 20000000, currency: "VND" },
};

const faqs: FaqItem[] = [
  { q: "CashSpace có trực tiếp cho vay không?", a: "CashSpace là nền tảng kết nối trung gian, không trực tiếp cho vay. Chúng tôi kết nối bạn với các đối tác tài chính được kiểm duyệt kỹ lưỡng về uy tín và pháp lý." },
  { q: "Tỷ lệ duyệt của CashSpace là bao nhiêu?", a: "CashSpace đạt tỷ lệ duyệt lên đến 97% nhờ mạng lưới đối tác rộng với tiêu chí xét duyệt đa dạng, phù hợp nhiều hồ sơ khác nhau." },
  { q: "Vay lần đầu có được lãi suất 0% không?", a: "Nhiều đối tác của CashSpace có chương trình lãi suất 0% cho khoản vay đầu tiên. Điều kiện cụ thể tùy từng đối tác, được thể hiện rõ khi bạn nhận đề xuất." },
  { q: "Vay tối đa bao nhiêu qua CashSpace?", a: "Mức vay từ 500.000 đến 20.000.000 VNĐ, kỳ hạn 91–120 ngày. Ví dụ: vay 2.000.000 VNĐ trong 4 tháng, tổng hoàn trả khoảng 2.024.333 VNĐ (lãi suất 3,65%/năm)." },
  { q: "Người có lịch sử tín dụng xấu có vay được không?", a: "CashSpace kết nối với nhiều đối tác đa dạng, một số đơn vị phù hợp cả với người có lịch sử tín dụng chưa tốt. Hãy thử đăng ký để nhận đề xuất phù hợp nhất." },
  { q: "Giải ngân trong bao lâu?", a: "Sau khi được đối tác phê duyệt, tiền thường giải ngân trong vòng 15 phút đến vài giờ, tùy ngân hàng của bạn." },
  { q: "Đăng ký qua CashSpace có miễn phí không?", a: "Hoàn toàn miễn phí. CashSpace không thu bất kỳ phí dịch vụ nào. Lãi suất và phí vay được đối tác công bố minh bạch trước khi bạn ký kết." },
  { q: "CashSpace hoạt động 24/7 không?", a: "Nền tảng CashSpace hoạt động 24/7, cho phép bạn đăng ký bất kỳ lúc nào. Việc xét duyệt hồ sơ phụ thuộc vào giờ làm việc của từng đối tác tài chính." },
];

const benefits = [
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>, title: "Tỷ lệ duyệt 97%", desc: "Mạng lưới đối tác đa dạng với tiêu chí xét duyệt linh hoạt giúp tối ưu cơ hội được chấp thuận." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>, title: "Giải ngân trong 15 phút", desc: "Sau khi đối tác phê duyệt, tiền được chuyển vào tài khoản ngân hàng của bạn trong khoảng 15 phút." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>, title: "Lãi suất 0% lần đầu", desc: "Nhiều đối tác ưu đãi lãi suất 0% cho khoản vay đầu tiên. Cơ hội tốt cho người vay lần đầu." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>, title: "Phù hợp mọi đối tượng", desc: "Kể cả người có lịch sử tín dụng chưa hoàn hảo cũng có thể tìm được khoản vay phù hợp qua CashSpace." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3 12a8.96 8.96 0 0 0 .284 2.253" /></svg>, title: "Hoạt động 24/7", desc: "Nền tảng hoạt động liên tục, bạn có thể đăng ký bất kỳ lúc nào, kể cả ngoài giờ hành chính." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>, title: "Đối tác được kiểm duyệt", desc: "Tất cả đối tác tài chính trên CashSpace đều được xác minh pháp lý và uy tín trước khi hợp tác." },
];

const steps = [
  { num: "01", title: "Điền biểu mẫu đăng ký", desc: "Nhập thông tin cơ bản và số tiền cần vay. Chỉ cần CMND/CCCD, mất khoảng 3 phút." },
  { num: "02", title: "Nhận danh sách đề xuất", desc: "CashSpace gửi hồ sơ đến các đối tác phù hợp và trả về danh sách đề xuất vay cho bạn lựa chọn." },
  { num: "03", title: "Chọn đề xuất ưng ý", desc: "So sánh lãi suất, kỳ hạn và điều kiện của từng đề xuất. Chọn đơn vị phù hợp nhất với nhu cầu." },
  { num: "04", title: "Ký hợp đồng trực tuyến", desc: "Hoàn tất ký hợp đồng với đối tác được chọn trực tiếp trên nền tảng online." },
  { num: "05", title: "Nhận tiền vào tài khoản", desc: "Tiền được giải ngân trực tiếp vào tài khoản ngân hàng trong khoảng 15 phút sau khi duyệt." },
];

const requirements = [
  "Giấy tờ tùy thân (CMND/CCCD) còn hiệu lực",
  "Tài khoản ngân hàng cá nhân đang hoạt động",
  "Số điện thoại hợp lệ tại Việt Nam",
  "Nền tảng hoạt động 24/7 – đăng ký bất kỳ lúc nào",
];

export default function VayTienCashSpacePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }} />

      {/* Hero */}
      <section className="bg-linear-to-br from-[#721d9a] via-[#9326c6] to-[#b040e0] text-white">
        <div className="max-w-5xl mx-auto px-4 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
              CashSpace – Vay Siêu Nhanh Từ Đối Tác | 500K – 20 Triệu, Duyệt Trong 15 Phút
            </h1>
            <p className="text-purple-100 text-lg mb-6 leading-relaxed">
              CashSpace kết nối bạn với các đối tác tài chính uy tín. Tỷ lệ duyệt <strong className="text-white">97%</strong>,
              312.000 khách hàng hài lòng, lãi suất 0% cho lần vay đầu tiên.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a rel="nofollow" href={CASHSPACE_LINK} target="_blank" className="inline-block bg-white hover:bg-purple-50 text-[#9326c6] font-bold text-center px-8 py-4 rounded-xl text-md transition-colors shadow-lg">
                Đăng Ký Vay Ngay – Miễn Phí
              </a>
              <a href="#huong-dan" className="inline-block border border-white/40 hover:bg-white/10 text-white text-center px-8 py-4 rounded-xl text-md transition-colors">
                Xem Quy Trình
              </a>
            </div>
            <p className="text-purple-100 text-sm mt-4">✓ 97% tỷ lệ duyệt &nbsp;·&nbsp; ✓ Giải ngân 15 phút &nbsp;·&nbsp; ✓ Lãi 0% lần đầu</p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1.5 shrink-0">
                  <Image src="/images/logo/vay-tien-cash-space.svg" alt="Logo CashSpace" width={40} height={40} className="object-contain w-full h-full" />
                </div>
                <div className="font-bold text-white text-xl">CashSpace</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: "20 triệu", label: "Mức vay tối đa" },
                  { val: "15 phút", label: "Thời gian giải ngân" },
                  { val: "97%", label: "Tỷ lệ duyệt" },
                  { val: "312K+", label: "Khách hàng hài lòng" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/20 rounded-xl p-4">
                    <div className="text-xl font-bold text-white">{s.val}</div>
                    <div className="text-purple-100 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-purple-100 text-xs text-center border-t border-white/20 pt-4">Kỳ hạn 91–120 ngày · APR 0–36%/năm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-y border-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-5 gap-6">
          {[
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>, label: "Tỷ lệ 97%", sub: "Được duyệt" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>, label: "Trong 15 phút", sub: "Giải ngân nhanh" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>, label: "0% lần đầu", sub: "Lãi suất ưu đãi" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3 12a8.96 8.96 0 0 0 .284 2.253" /></svg>, label: "24/7 online", sub: "Đăng ký bất kỳ lúc" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>, label: "Miễn phí 100%", sub: "Không phí ẩn" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center gap-2">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-[#9326c6] flex items-center justify-center shadow-sm">{item.icon}</div>
              <span className="font-semibold text-gray-800 text-sm leading-tight">{item.label}</span>
              <span className="text-gray-400 text-xs">{item.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">Tại Sao Chọn CashSpace?</h2>
          <p className="text-gray-500 text-center mb-10">Hơn 312.000 khách hàng đã tìm được khoản vay phù hợp qua CashSpace</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="border border-purple-100 rounded-2xl p-6 hover:shadow-md hover:border-purple-200 transition-all">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#9326c6] flex items-center justify-center mb-4">{b.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="huong-dan" className="bg-purple-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">5 Bước Nhận Tiền Qua CashSpace</h2>
          <p className="text-gray-500 text-center mb-10">Toàn bộ quy trình diễn ra trực tuyến, không cần gặp mặt</p>
          <div className="grid sm:grid-cols-5 gap-4">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#b040e0] to-[#721d9a] text-white text-lg font-bold flex items-center justify-center mx-auto mb-3 shadow-md">{s.num}</div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a rel="nofollow" href={CASHSPACE_LINK} target="_blank" className="inline-block bg-[#9326c6] hover:bg-[#721d9a] text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-md">
              Bắt Đầu Vay Tại CashSpace
            </a>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">Điều Kiện Tối Giản</h2>
          <p className="text-gray-500 text-center mb-8">CashSpace thiết kế để phù hợp với nhiều đối tượng nhất có thể</p>
          <div className="bg-purple-50 rounded-2xl p-6 lg:p-8 border border-purple-100">
            <ul className="space-y-4">
              {requirements.map((r) => (
                <li key={r} className="flex items-center gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-purple-100 text-[#9326c6] flex items-center justify-center shrink-0 text-sm font-bold">✓</span>
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-purple-100 text-sm text-gray-500">
              <strong className="text-gray-700">Ví dụ minh họa:</strong> Khoản vay 2.000.000 VNĐ, kỳ hạn 4 tháng, lãi suất 3,65%/năm → tổng hoàn trả khoảng 2.024.333 VNĐ. Lãi suất thực tế 0%–36%/năm tùy đối tác và hồ sơ.
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-linear-to-r from-[#721d9a] to-[#9326c6] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { num: "312K+", label: "Khách hàng hài lòng" },
            { num: "97%", label: "Tỷ lệ duyệt" },
            { num: "15 phút", label: "Thời gian giải ngân" },
            { num: "255", label: "Khoản vay mỗi ngày" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{s.num}</div>
              <div className="text-purple-100 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">Câu Hỏi Thường Gặp</h2>
          <p className="text-gray-500 text-center mb-10">Giải đáp thắc mắc về vay tiền qua CashSpace</p>
          <FaqAccordion faqs={faqs} accentColor="purple" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-purple-50 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Sẵn Sàng Vay Siêu Nhanh?</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">Tỷ lệ duyệt 97%, giải ngân trong 15 phút. Đăng ký miễn phí, không ràng buộc, có thể vay 0% lãi cho lần đầu.</p>
          <a rel="nofollow" href={CASHSPACE_LINK} target="_blank" className="inline-block bg-[#9326c6] hover:bg-[#721d9a] text-white font-bold px-12 py-5 rounded-2xl text-xl transition-colors shadow-lg">
            Vay Tiền Qua CashSpace →
          </a>
          <p className="text-gray-400 text-xs mt-4">Miễn phí 100% · 97% được duyệt · Giải ngân 15 phút</p>
        </div>
      </section>

      <nav className="bg-gray-50 border-t border-gray-100 py-3 px-4 text-sm text-gray-500">
        <div className="max-w-5xl mx-auto flex gap-2">
          <Link href="/" className="hover:text-[#9326c6] transition-colors">Trang chủ</Link>
          <span>/</span>
          <span className="text-gray-800">Vay Tiền CashSpace</span>
        </div>
      </nav>
    </>
  );
}
