import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { FaqItem } from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Vay Tiền Crezu – Khoản Vay Nhanh Từ Đối Tác | 500K – 20 Triệu",
  description:
    "Crezu kết nối bạn với 68 đối tác tài chính. Vay từ 500.000 đến 20.000.000 VNĐ, tỷ lệ duyệt 95%, nhận đề xuất trong 7 phút. Miễn phí, bảo mật 256-bit.",
  keywords:
    "vay tiền crezu, crezu vn, crezu vay nhanh, vay online crezu, crezu vietnam",
  openGraph: {
    title: "Crezu – Vay Tiền Nhanh Từ Đối Tác | 500K – 20 Triệu",
    description: "68 đối tác cho vay, tỷ lệ duyệt 95%, nhận đề xuất trong 7 phút. Miễn phí, bảo mật SSL.",
    images: [{ url: "https://finlef.com/images/hero-vaymeo.jpg", width: 1200, height: 630, alt: "Vay tiền Crezu" }],
    type: "website",
    url: "https://finlef.com/vay-tien-crezu",
    siteName: "FinLef",
    locale: "vi_VN",
  },
  alternates: { canonical: "https://finlef.com/vay-tien-crezu" },
};

const CREZU_LINK = process.env.NEXT_PUBLIC_LINK_CREZU ?? "https://crezu.vn/";

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Crezu có trực tiếp cho vay tiền không?", acceptedAnswer: { "@type": "Answer", text: "Crezu là nền tảng kết nối trung gian, không trực tiếp cho vay. Chúng tôi kết nối bạn với 68+ đối tác tài chính uy tín tại Việt Nam." } },
    { "@type": "Question", name: "Tỷ lệ được duyệt qua Crezu là bao nhiêu?", acceptedAnswer: { "@type": "Answer", text: "Crezu đạt tỷ lệ duyệt lên đến 95% nhờ hệ thống phân tích thông minh giúp khớp hồ sơ với đối tác phù hợp nhất." } },
    { "@type": "Question", name: "Bao lâu thì nhận được đề xuất vay từ Crezu?", acceptedAnswer: { "@type": "Answer", text: "Chỉ cần khoảng 7 phút để hệ thống phân tích và gửi danh sách đề xuất vay từ các đối tác phù hợp." } },
  ],
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://finlef.com" },
    { "@type": "ListItem", position: 2, name: "Vay Tiền Crezu", item: "https://finlef.com/vay-tien-crezu" },
  ],
};

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  name: "Crezu – Vay Tiền Nhanh Online",
  description: "Nền tảng kết nối 68 đối tác tài chính, mức vay 500.000–20.000.000 VNĐ, tỷ lệ duyệt 95%.",
  url: "https://crezu.vn",
  annualPercentageRate: { "@type": "QuantitativeValue", minValue: 0, maxValue: 36, unitText: "%/năm" },
  amount: { "@type": "MonetaryAmount", minValue: 500000, maxValue: 20000000, currency: "VND" },
};

const faqs: FaqItem[] = [
  { q: "Crezu có trực tiếp cho vay tiền không?", a: "Crezu là nền tảng kết nối trung gian, không trực tiếp cho vay. Chúng tôi kết nối bạn với 68+ đối tác tài chính uy tín đang hoạt động tại Việt Nam và 15 quốc gia khác." },
  { q: "Tỷ lệ được duyệt qua Crezu là bao nhiêu?", a: "Tỷ lệ duyệt lên đến 95% nhờ hệ thống phân tích thông minh khớp hồ sơ của bạn với đối tác tài chính phù hợp nhất, tối ưu khả năng được chấp thuận." },
  { q: "Bao lâu thì nhận được đề xuất từ Crezu?", a: "Chỉ mất khoảng 7 phút để hệ thống phân tích và gửi danh sách đề xuất vay từ các đối tác phù hợp. Sau đó bạn chọn đơn vị ưng ý và ký hợp đồng." },
  { q: "Vay tối đa bao nhiêu qua Crezu?", a: "Mức vay từ 500.000 đến 20.000.000 VNĐ, kỳ hạn 3–6 tháng (91–180 ngày). Lãi suất từ 0% đến 36%/năm tùy đối tác." },
  { q: "Thông tin cá nhân có được bảo mật không?", a: "Crezu sử dụng mã hóa 256-bit và bảo mật SSL để bảo vệ dữ liệu. Thông tin chỉ được chia sẻ với đối tác bạn chấp thuận, không bán cho bên thứ ba." },
  { q: "Crezu hoạt động ở những nơi nào?", a: "Crezu hoạt động tại 16 quốc gia trên 4 châu lục, trong đó có Việt Nam với hệ thống đối tác tài chính được cấp phép đầy đủ." },
  { q: "Đăng ký qua Crezu có mất phí không?", a: "Hoàn toàn miễn phí. Chi phí vay do đối tác tài chính quy định và công bố rõ ràng trước khi bạn quyết định ký hợp đồng." },
  { q: "71% người dùng quay lại nghĩa là gì?", a: "71% người dùng đã từng vay qua Crezu tiếp tục quay lại khi có nhu cầu vay mới – đây là chỉ số cho thấy trải nghiệm dịch vụ được đánh giá tốt." },
];

const benefits = [
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>, title: "68 đối tác tài chính", desc: "Mạng lưới rộng lớn với 68 tổ chức cho vay uy tín, hoạt động tại 16 quốc gia trên 4 châu lục." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>, title: "Tỷ lệ duyệt 95%", desc: "Hệ thống phân tích thông minh tối ưu hồ sơ của bạn với đối tác có khả năng duyệt cao nhất." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>, title: "Đề xuất trong 7 phút", desc: "Chỉ mất 7 phút để nhận danh sách đề xuất vay từ các đối tác phù hợp nhất với hồ sơ của bạn." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>, title: "Bảo mật 256-bit SSL", desc: "Dữ liệu mã hóa theo chuẩn 256-bit, kết nối SSL bảo vệ thông tin cá nhân tuyệt đối." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>, title: "Hoàn toàn miễn phí", desc: "Không thu phí từ người dùng. Chi phí vay được công bố minh bạch trước khi ký hợp đồng." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>, title: "71% khách quay lại", desc: "71% người dùng chọn Crezu lần tiếp theo khi có nhu cầu vay mới – minh chứng chất lượng dịch vụ." },
];

const steps = [
  { num: "01", title: "Điền số điện thoại", desc: "Nhập số điện thoại và chọn số tiền cần vay. Chỉ mất khoảng 2 phút để hoàn tất biểu mẫu cơ bản." },
  { num: "02", title: "Nhận đề xuất trong 7 phút", desc: "Hệ thống phân tích hồ sơ và gửi danh sách đề xuất từ các đối tác phù hợp nhất. So sánh và chọn lựa thoải mái." },
  { num: "03", title: "Ký hợp đồng & nhận tiền", desc: "Chọn đối tác ưng ý, ký hợp đồng trực tuyến và nhận tiền giải ngân về tài khoản ngân hàng trong vài phút." },
];

const requirements = [
  "Từ 18 tuổi trở lên",
  "Đang sinh sống tại Việt Nam",
  "Giấy tờ tùy thân còn hiệu lực (CCCD/CMND)",
  "Tài khoản ngân hàng cá nhân đang hoạt động",
  "Số điện thoại hợp lệ",
];

export default function VayTienCrezuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }} />

      {/* Hero */}
      <section className="bg-linear-to-br from-[#1a7a14] via-[#3abc33] to-[#4dcf45] text-white">
        <div className="max-w-5xl mx-auto px-4 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Crezu – Khoản Vay Nhanh Từ Đối Tác | Đề Xuất Trong 7 Phút
            </h1>
            <p className="text-green-100 text-lg mb-6 leading-relaxed">
              Crezu kết nối bạn với <strong className="text-white">68 đối tác tài chính</strong> uy tín.
              Vay từ 500.000 đến 20.000.000 VNĐ, tỷ lệ duyệt 95%, bảo mật SSL 256-bit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a rel="nofollow" href={CREZU_LINK} target="_blank" className="inline-block bg-white hover:bg-green-50 text-[#3abc33] font-bold text-center px-8 py-4 rounded-xl text-md transition-colors shadow-lg">
                Nhận Đề Xuất Ngay – Miễn Phí
              </a>
              <a href="#huong-dan" className="inline-block border border-white/40 hover:bg-white/10 text-white text-center px-8 py-4 rounded-xl text-md transition-colors">
                Xem Cách Hoạt Động
              </a>
            </div>
            <p className="text-green-200 text-sm mt-4">✓ 95% tỷ lệ duyệt &nbsp;·&nbsp; ✓ Đề xuất trong 7 phút &nbsp;·&nbsp; ✓ Miễn phí 100%</p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1.5 shrink-0">
                  <Image src="/images/logo/vay-tien-crezu.svg" alt="Logo Crezu" width={40} height={40} className="object-contain w-full h-full" />
                </div>
                <div className="font-bold text-white text-xl">Crezu</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: "20 triệu", label: "Mức vay tối đa" },
                  { val: "7 phút", label: "Nhận đề xuất" },
                  { val: "95%", label: "Tỷ lệ duyệt" },
                  { val: "68", label: "Đối tác cho vay" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/20 rounded-xl p-4">
                    <div className="text-xl font-bold text-white">{s.val}</div>
                    <div className="text-green-200 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-green-200 text-xs text-center border-t border-white/20 pt-4">Kỳ hạn 91–180 ngày · APR 0–36%/năm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-y border-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-5 gap-6">
          {[
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>, label: "68 đối tác", sub: "Tài chính uy tín" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>, label: "95% duyệt", sub: "Tỷ lệ thành công" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>, label: "Bảo mật 256-bit", sub: "Mã hóa SSL" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>, label: "Trong 7 phút", sub: "Nhận đề xuất" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>, label: "Miễn phí 100%", sub: "Không phí dịch vụ" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center gap-2">
              <div className="w-14 h-14 rounded-2xl bg-green-50 text-[#3abc33] flex items-center justify-center shadow-sm">{item.icon}</div>
              <span className="font-semibold text-gray-800 text-sm leading-tight">{item.label}</span>
              <span className="text-gray-400 text-xs">{item.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">Tại Sao Chọn Crezu?</h2>
          <p className="text-gray-500 text-center mb-10">Hơn 6,6 triệu người dùng đã tin tưởng sử dụng Crezu, 71% quay lại lần tiếp theo</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="border border-green-100 rounded-2xl p-6 hover:shadow-md hover:border-green-200 transition-all">
                <div className="w-12 h-12 rounded-xl bg-green-50 text-[#3abc33] flex items-center justify-center mb-4">{b.icon}</div>
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
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">3 Bước Nhận Tiền Qua Crezu</h2>
          <p className="text-gray-500 text-center mb-10">Đơn giản, nhanh chóng, hoàn toàn trực tuyến</p>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#4dcf45] to-[#1a7a14] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-md">{s.num}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a rel="nofollow" href={CREZU_LINK} target="_blank" className="inline-block bg-[#3abc33] hover:bg-[#2da027] text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-md">
              Bắt Đầu Vay Tại Crezu
            </a>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">Điều Kiện Đăng Ký</h2>
          <p className="text-gray-500 text-center mb-8">Yêu cầu tối giản để đảm bảo tiếp cận dễ dàng nhất</p>
          <div className="bg-green-50 rounded-2xl p-6 lg:p-8 border border-green-100">
            <ul className="space-y-4">
              {requirements.map((r) => (
                <li key={r} className="flex items-center gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-[#3abc33] flex items-center justify-center shrink-0 text-sm font-bold">✓</span>
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-green-100 text-sm text-gray-500">
              <strong className="text-gray-700">Ví dụ minh họa:</strong> Khoản vay 2.000.000 VNĐ, kỳ hạn 4 tháng, lãi suất 3,65%/năm → tổng thanh toán khoảng 2.024.333 VNĐ. Lãi suất thực tế từ 0% đến 36%/năm.
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-linear-to-r from-[#1a7a14] to-[#3abc33] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { num: "6.6M+", label: "Người dùng tin tưởng" },
            { num: "68", label: "Đối tác tài chính" },
            { num: "95%", label: "Tỷ lệ duyệt thành công" },
            { num: "16", label: "Quốc gia hoạt động" },
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
          <p className="text-gray-500 text-center mb-10">Giải đáp thắc mắc về dịch vụ vay tiền qua Crezu</p>
          <FaqAccordion faqs={faqs} accentColor="blue" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-50 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Nhận Đề Xuất Vay Ngay</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">Chỉ 7 phút để nhận danh sách đề xuất từ 68 đối tác tài chính. Miễn phí, an toàn, không ràng buộc.</p>
          <a rel="nofollow" href={CREZU_LINK} target="_blank" className="inline-block bg-[#3abc33] hover:bg-[#2da027] text-white font-bold px-12 py-5 rounded-2xl text-xl transition-colors shadow-lg">
            Vay Tiền Qua Crezu →
          </a>
          <p className="text-gray-400 text-xs mt-4">Miễn phí 100% · Bảo mật SSL 256-bit · Tỷ lệ duyệt 95%</p>
        </div>
      </section>

      <nav className="bg-gray-50 border-t border-gray-100 py-3 px-4 text-sm text-gray-500">
        <div className="max-w-5xl mx-auto flex gap-2">
          <Link href="/" className="hover:text-[#3abc33] transition-colors">Trang chủ</Link>
          <span>/</span>
          <span className="text-gray-800">Vay Tiền Crezu</span>
        </div>
      </nav>
    </>
  );
}
