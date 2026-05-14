import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { FaqItem } from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Vay Tiền FinZone – Vay Không Thế Chấp 5 – 90 Triệu, Lãi Từ 1.67%",
  description:
    "FinZone kết nối bạn với 16+ tổ chức tài chính uy tín. Vay tín chấp từ 5 đến 90 triệu VNĐ, lãi suất từ 1.67%/tháng, chỉ cần CCCD, duyệt nhanh trong ngày.",
  keywords:
    "vay tiền finzone, finzone vn, vay tín chấp finzone, vay không thế chấp finzone, vay tiền online finzone",
  openGraph: {
    title: "FinZone – Vay Tín Chấp 5–90 Triệu | Lãi Từ 1.67%/Tháng",
    description:
      "Kết nối với 16+ đối tác tài chính. Chỉ cần CCCD, duyệt nhanh, giải ngân trong ngày.",
    images: [{ url: "https://finlef.com/images/hero-loan-doc.jpg", width: 1200, height: 630, alt: "Vay tiền FinZone" }],
    type: "website",
    url: "https://finlef.com/vay-tien-finzone-online",
    siteName: "FinLef",
    locale: "vi_VN",
  },
  alternates: { canonical: "https://finlef.com/vay-tien-finzone-online" },
};

const FINZONE_LINK = process.env.NEXT_PUBLIC_LINK_FINZONE ?? "https://finzone.vn/";

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "FinZone có phải tổ chức cho vay không?", acceptedAnswer: { "@type": "Answer", text: "FinZone là nền tảng kết nối trung gian, không trực tiếp cho vay. Chúng tôi kết nối bạn với hơn 16 ngân hàng và tổ chức tài chính được cấp phép tại Việt Nam." } },
    { "@type": "Question", name: "Vay tối đa bao nhiêu qua FinZone?", acceptedAnswer: { "@type": "Answer", text: "Mức vay từ 5.000.000 đến 90.000.000 VNĐ tùy theo hồ sơ và đối tác tài chính phù hợp." } },
    { "@type": "Question", name: "Lãi suất vay qua FinZone là bao nhiêu?", acceptedAnswer: { "@type": "Answer", text: "Lãi suất bắt đầu từ 1.67%/tháng (khoảng 20%/năm tối đa), cụ thể tùy từng đối tác và hồ sơ của bạn." } },
  ],
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://finlef.com" },
    { "@type": "ListItem", position: 2, name: "Vay Tiền FinZone", item: "https://finlef.com/vay-tien-finzone-online" },
  ],
};

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  name: "FinZone – Vay Tín Chấp Online",
  description: "Nền tảng kết nối vay tín chấp, mức vay từ 5 đến 90 triệu VNĐ qua 16+ đối tác tài chính.",
  url: "https://finzone.vn",
  annualPercentageRate: { "@type": "QuantitativeValue", minValue: 0, maxValue: 20, unitText: "%/năm" },
  amount: { "@type": "MonetaryAmount", minValue: 5000000, maxValue: 90000000, currency: "VND" },
};

const faqs: FaqItem[] = [
  { q: "FinZone có phải tổ chức cho vay không?", a: "FinZone là nền tảng kết nối trung gian, không trực tiếp cho vay. Chúng tôi kết nối bạn với hơn 16 ngân hàng và tổ chức tài chính được cấp phép tại Việt Nam." },
  { q: "Vay tối đa bao nhiêu qua FinZone?", a: "Mức vay từ 5.000.000 đến 90.000.000 VNĐ tùy theo hồ sơ của bạn và đối tác tài chính phù hợp." },
  { q: "Lãi suất vay là bao nhiêu?", a: "Lãi suất bắt đầu từ 1.67%/tháng (APR tối đa 20%/năm). Mức lãi cụ thể do từng đối tác quyết định dựa trên hồ sơ tín dụng của bạn." },
  { q: "Cần giấy tờ gì để đăng ký?", a: "Chỉ cần CCCD/CMND còn hiệu lực. Không cần sao kê lương hay hợp đồng lao động khi đăng ký ban đầu." },
  { q: "Thời gian duyệt và giải ngân mất bao lâu?", a: "Hồ sơ được xét duyệt trong ngày. Sau khi đối tác xác nhận, tiền được giải ngân nhanh vào tài khoản ngân hàng của bạn." },
  { q: "Người có nợ xấu có đăng ký được không?", a: "FinZone kết nối với nhiều đối tác đa dạng, một số đơn vị có thể xem xét hồ sơ ngay cả khi lịch sử tín dụng chưa hoàn hảo. Hãy thử điền thông tin để nhận đề xuất." },
  { q: "Đăng ký qua FinZone có mất phí không?", a: "Hoàn toàn miễn phí. FinZone không thu bất kỳ phí nào từ người dùng. Chi phí vay sẽ do đối tác tài chính công bố rõ ràng trước khi bạn ký hợp đồng." },
  { q: "FinZone sử dụng công nghệ gì để tìm khoản vay phù hợp?", a: "FinZone ứng dụng trí tuệ nhân tạo (AI) để phân tích hồ sơ và khớp với đối tác tài chính có tỷ lệ duyệt cao nhất, giúp tối ưu cơ hội nhận vay của bạn." },
];

const benefits = [
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" /></svg>, title: "Công nghệ AI khớp vay", desc: "Thuật toán thông minh phân tích hồ sơ và tìm đối tác có tỷ lệ duyệt cao nhất cho bạn." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>, title: "16+ đối tác tài chính", desc: "Kết nối với TPBank, VPBank, SeaBank, Sacombank và hơn 16 ngân hàng, tổ chức tài chính uy tín." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>, title: "Vay đến 90 triệu đồng", desc: "Mức vay linh hoạt từ 5 đến 90 triệu VNĐ, kỳ hạn 91–180 ngày, phù hợp mọi nhu cầu." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" /></svg>, title: "Chỉ cần CCCD", desc: "Không yêu cầu sao kê lương hay hợp đồng lao động. Chỉ cần CCCD/CMND còn hiệu lực." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>, title: "Hoàn toàn miễn phí", desc: "Dịch vụ kết nối hoàn toàn miễn phí với người dùng. Chi phí vay minh bạch từ đối tác." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>, title: "Giải ngân trong ngày", desc: "Hồ sơ được xét duyệt nhanh, tiền về tài khoản ngay trong ngày làm việc." },
];

const steps = [
  { num: "01", title: "Gửi yêu cầu vay", desc: "Chọn số tiền cần vay và điền thông tin cơ bản. Chỉ cần CCCD, mất khoảng 3 phút." },
  { num: "02", title: "AI tìm khoản vay phù hợp", desc: "Hệ thống AI của FinZone phân tích hồ sơ và khớp với đối tác có tỷ lệ duyệt cao nhất." },
  { num: "03", title: "Xác nhận & nhận tiền", desc: "Đối tác tài chính liên hệ xác nhận, ký hợp đồng và giải ngân tiền vào tài khoản của bạn." },
];

const requirements = [
  "Công dân Việt Nam, từ 18 tuổi trở lên",
  "CCCD/CMND còn hiệu lực",
  "Có tài khoản ngân hàng cá nhân",
  "Số điện thoại và email đang hoạt động",
  "Đang sinh sống và làm việc tại Việt Nam",
];

export default function VayTienFinZonePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }} />

      {/* Hero */}
      <section className="bg-linear-to-br from-[#015f39] via-[#017848] to-[#019a5c] text-white">
        <div className="max-w-5xl mx-auto px-4 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Vay Tín Chấp Online Qua FinZone – Không Thế Chấp, Lãi Từ 1.67%/Tháng
            </h1>
            <p className="text-green-100 text-lg mb-6 leading-relaxed">
              FinZone kết nối bạn với <strong className="text-white">16+ ngân hàng và tổ chức tài chính</strong> uy tín.
              Vay từ 5 đến 90 triệu VNĐ, chỉ cần CCCD, công nghệ AI tìm khoản vay phù hợp nhất.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a rel="nofollow" href={FINZONE_LINK} target="_blank" className="inline-block bg-white hover:bg-green-50 text-[#017848] font-bold text-center px-8 py-4 rounded-xl text-md transition-colors shadow-lg">
                Đăng Ký Vay Ngay – Miễn Phí
              </a>
              <a href="#huong-dan" className="inline-block border border-white/40 hover:bg-white/10 text-white text-center px-8 py-4 rounded-xl text-md transition-colors">
                Xem Cách Hoạt Động
              </a>
            </div>
            <p className="text-green-200 text-sm mt-4">✓ Miễn phí 100% &nbsp;·&nbsp; ✓ Không thế chấp &nbsp;·&nbsp; ✓ Chỉ cần CCCD</p>
          </div>

          {/* Stats card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1.5 shrink-0">
                  <Image src="/images/logo/vay-tien-finzone-online.jpg" alt="Logo FinZone" width={40} height={40} className="object-contain w-full h-full rounded-lg" />
                </div>
                <div className="font-bold text-white text-xl">FinZone</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: "90 triệu", label: "Mức vay tối đa", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg> },
                  { val: "1.67%", label: "Lãi từ /tháng", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg> },
                  { val: "16+", label: "Đối tác tài chính", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg> },
                  { val: "3M+", label: "Khách hàng kết nối", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg> },
                ].map((s) => (
                  <div key={s.label} className="bg-white/20 rounded-xl p-4">
                    <div className="text-green-200 mb-2">{s.icon}</div>
                    <div className="text-xl font-bold text-white">{s.val}</div>
                    <div className="text-green-200 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-green-200 text-xs text-center border-t border-white/20 pt-4">Kỳ hạn 91–180 ngày · APR tối đa 20%/năm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-y border-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-5 gap-6">
          {[
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" /></svg>, label: "AI khớp vay", sub: "Tỷ lệ duyệt cao" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>, label: "16+ đối tác", sub: "Ngân hàng uy tín" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" /></svg>, label: "Chỉ cần CCCD", sub: "Không thế chấp" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>, label: "Duyệt trong ngày", sub: "Giải ngân nhanh" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>, label: "Miễn phí 100%", sub: "Không phí ẩn" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center gap-2">
              <div className="w-14 h-14 rounded-2xl bg-green-50 text-[#017848] flex items-center justify-center shadow-sm">{item.icon}</div>
              <span className="font-semibold text-gray-800 text-sm leading-tight">{item.label}</span>
              <span className="text-gray-400 text-xs">{item.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">Tại Sao Chọn FinZone?</h2>
          <p className="text-gray-500 text-center mb-10">Hơn 3 triệu khách hàng đã tìm được khoản vay phù hợp qua FinZone</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="border border-green-100 rounded-2xl p-6 hover:shadow-md hover:border-green-200 transition-all">
                <div className="w-12 h-12 rounded-xl bg-green-50 text-[#017848] flex items-center justify-center mb-4">{b.icon}</div>
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
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">3 Bước Nhận Tiền Qua FinZone</h2>
          <p className="text-gray-500 text-center mb-10">Quy trình đơn giản, hoàn tất trong vài phút</p>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#019a5c] to-[#015f39] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-md">{s.num}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a rel="nofollow" href={FINZONE_LINK} target="_blank" className="inline-block bg-[#017848] hover:bg-[#015f39] text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-md">
              Bắt Đầu Đăng Ký Tại FinZone
            </a>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">Điều Kiện Đăng Ký</h2>
          <p className="text-gray-500 text-center mb-8">Yêu cầu đơn giản, phù hợp hầu hết mọi người</p>
          <div className="bg-green-50 rounded-2xl p-6 lg:p-8 border border-green-100">
            <ul className="space-y-4">
              {requirements.map((r) => (
                <li key={r} className="flex items-center gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-[#017848] flex items-center justify-center shrink-0 text-sm font-bold">✓</span>
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-green-100 text-sm text-gray-500">
              <strong className="text-gray-700">Lưu ý:</strong> Không cần sao kê lương hay hợp đồng lao động bản gốc khi đăng ký ban đầu. Một số đối tác có thể yêu cầu thêm tài liệu tùy mức vay.
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-linear-to-r from-[#015f39] to-[#019a5c] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { num: "3M+", label: "Khách hàng kết nối" },
            { num: "16+", label: "Đối tác tài chính" },
            { num: "150K+", label: "Khoản vay thành công" },
            { num: "90 triệu", label: "Mức vay tối đa (VNĐ)" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{s.num}</div>
              <div className="text-green-200 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">Câu Hỏi Thường Gặp</h2>
          <p className="text-gray-500 text-center mb-10">Giải đáp thắc mắc về vay tiền qua FinZone</p>
          <FaqAccordion faqs={faqs} accentColor="blue" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-50 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Sẵn Sàng Đăng Ký Chưa?</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">Điền thông tin cơ bản, AI FinZone tìm khoản vay phù hợp nhất cho bạn. Miễn phí, không ràng buộc.</p>
          <a rel="nofollow" href={FINZONE_LINK} target="_blank" className="inline-block bg-[#017848] hover:bg-[#015f39] text-white font-bold px-12 py-5 rounded-2xl text-xl transition-colors shadow-lg">
            Vay Tiền Qua FinZone →
          </a>
          <p className="text-gray-400 text-xs mt-4">Miễn phí 100% · Không thế chấp · Chỉ cần CCCD</p>
        </div>
      </section>

      <nav className="bg-gray-50 border-t border-gray-100 py-3 px-4 text-sm text-gray-500">
        <div className="max-w-5xl mx-auto flex gap-2">
          <Link href="/" className="hover:text-[#017848] transition-colors">Trang chủ</Link>
          <span>/</span>
          <span className="text-gray-800">Vay Tiền FinZone</span>
        </div>
      </nav>
    </>
  );
}
