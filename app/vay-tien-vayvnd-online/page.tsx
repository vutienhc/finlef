import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { FaqItem } from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Vay Tiền VayVND – Vay Trả Góp Online | Giải Ngân 5–10 Phút",
  description:
    "VayVND kết nối bạn với đối tác tài chính uy tín. Vay trả góp online không thế chấp, giải ngân chỉ 5–10 phút, hơn 550.000 khách hàng thành công. Hoàn toàn miễn phí.",
  keywords:
    "vay tiền vayvnd, vayvnd vn, vay trả góp vayvnd, vay online vayvnd, vayvnd cho vay",
  openGraph: {
    title: "VayVND – Vay Trả Góp Online | Giải Ngân 5–10 Phút",
    description: "550.000+ khách hàng thành công, giải ngân 5–10 phút, không thế chấp. Đăng ký miễn phí.",
    images: [{ url: "https://finlef.com/images/hero-loan-form.jpg", width: 1200, height: 630, alt: "Vay tiền VayVND" }],
    type: "website",
    url: "https://finlef.com/vay-tien-vayvnd-online",
    siteName: "FinLef",
    locale: "vi_VN",
  },
  alternates: { canonical: "https://finlef.com/vay-tien-vayvnd-online" },
};

const VAYVND_LINK = process.env.NEXT_PUBLIC_LINK_VAYVND ?? "https://vayvnd.net/";

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "VayVND có trực tiếp cho vay không?", acceptedAnswer: { "@type": "Answer", text: "VayVND là nền tảng công nghệ trung gian, không trực tiếp cho vay. Chúng tôi kết nối người vay với các tổ chức tài chính được cấp phép." } },
    { "@type": "Question", name: "Giải ngân qua VayVND mất bao lâu?", acceptedAnswer: { "@type": "Answer", text: "Sau khi được phê duyệt, tiền sẽ được chuyển vào tài khoản ngân hàng của bạn trong vòng 5–10 phút." } },
    { "@type": "Question", name: "VayVND hoạt động mấy giờ?", acceptedAnswer: { "@type": "Answer", text: "VayVND hỗ trợ thứ Hai–Thứ Bảy từ 08:00–21:00 và Chủ nhật 08:00–17:00. Hotline 1900 98 89 54." } },
  ],
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://finlef.com" },
    { "@type": "ListItem", position: 2, name: "Vay Tiền VayVND", item: "https://finlef.com/vay-tien-vayvnd-online" },
  ],
};

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  name: "VayVND – Vay Trả Góp Online",
  description: "Nền tảng kết nối vay trả góp online không thế chấp, giải ngân 5–10 phút, hơn 550.000 khách hàng thành công.",
  url: "https://vayvnd.net",
  feesAndCommissionsSpecification: "Miễn phí sử dụng nền tảng",
};

const faqs: FaqItem[] = [
  { q: "VayVND có trực tiếp cho vay không?", a: "VayVND là nền tảng công nghệ trung gian, không trực tiếp cho vay. Chúng tôi kết nối người vay với các tổ chức tài chính được cấp phép hoạt động hợp pháp tại Việt Nam." },
  { q: "Giải ngân qua VayVND mất bao lâu?", a: "Sau khi được đối tác phê duyệt và xác minh thông tin, tiền sẽ được chuyển thẳng vào tài khoản ngân hàng của bạn trong vòng 5–10 phút." },
  { q: "VayVND hoạt động những giờ nào?", a: "Hỗ trợ khách hàng Thứ Hai–Thứ Bảy: 08:00–21:00 và Chủ nhật: 08:00–17:00. Hotline: 1900 98 89 54. Đăng ký online có thể thực hiện 24/7." },
  { q: "Vay qua VayVND cần điều kiện gì?", a: "Cần thông tin cơ bản cá nhân, giấy tờ tùy thân còn hiệu lực và tài khoản ngân hàng. Không yêu cầu thế chấp tài sản hay chứng minh thu nhập phức tạp." },
  { q: "VayVND có phải mạng P2P (peer-to-peer) không?", a: "VayVND hoạt động theo mô hình kết nối có ứng dụng công nghệ đánh giá rủi ro và phân tích dữ liệu tự động, kết nối người vay với các đối tác tài chính được cấp phép." },
  { q: "Thông tin cá nhân có được bảo vệ không?", a: "VayVND tuân thủ đầy đủ quy định bảo vệ dữ liệu cá nhân theo pháp luật Việt Nam. Thông tin được mã hóa và chỉ chia sẻ với đối tác bạn chấp thuận." },
  { q: "Đăng ký qua VayVND có mất phí không?", a: "Hoàn toàn miễn phí khi sử dụng nền tảng VayVND. Lãi suất và phí vay do đối tác tài chính quy định, được công khai minh bạch trước khi bạn ký hợp đồng." },
  { q: "VayVND có hỗ trợ qua điện thoại không?", a: "Có. Hotline hỗ trợ: 1900 98 89 54 (Thứ 2–7: 8:00–21:00, Chủ nhật: 8:00–17:00). Email: info@vayvnd.vn." },
];

const benefits = [
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>, title: "Giải ngân 5–10 phút", desc: "Tiền được chuyển vào tài khoản ngân hàng chỉ trong 5–10 phút sau khi đối tác phê duyệt hồ sơ." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>, title: "Hoàn toàn trực tuyến", desc: "Đăng ký và xác minh hồ sơ 100% online qua điện thoại hoặc máy tính. Không cần gặp mặt." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>, title: "Không thế chấp", desc: "Vay tín chấp hoàn toàn, không yêu cầu tài sản đảm bảo. Chỉ cần thông tin cá nhân cơ bản." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" /></svg>, title: "Công nghệ phân tích dữ liệu", desc: "Hệ thống đánh giá rủi ro tự động, phân tích dữ liệu thông minh để khớp hồ sơ với đối tác phù hợp." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>, title: "Thông tin minh bạch", desc: "Toàn bộ điều kiện, lãi suất và phí vay được công khai rõ ràng trước khi bạn quyết định ký kết." },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>, title: "Hỗ trợ 1900 98 89 54", desc: "Đội ngũ hỗ trợ tận tình qua hotline và email, sẵn sàng tư vấn trong giờ làm việc." },
];

const steps = [
  { num: "01", title: "Đăng ký thông tin", desc: "Điền thông tin cá nhân cơ bản và chọn khoản vay phù hợp. Quy trình đơn giản, rõ ràng." },
  { num: "02", title: "Xác minh hồ sơ online", desc: "Xác nhận giấy tờ tùy thân và thông tin cá nhân trực tuyến. Không cần gặp mặt hay đến văn phòng." },
  { num: "03", title: "Nhận tiền trong 5–10 phút", desc: "Sau khi được phê duyệt, tiền được giải ngân trực tiếp vào tài khoản ngân hàng trong 5–10 phút." },
];

const requirements = [
  "Cung cấp thông tin cá nhân cơ bản",
  "Giấy tờ tùy thân còn hiệu lực (CCCD/CMND)",
  "Tài khoản ngân hàng cá nhân đang hoạt động",
  "Số điện thoại và email hợp lệ",
  "Không yêu cầu thế chấp tài sản",
];

export default function VayTienVayVNDPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }} />

      {/* Hero */}
      <section className="bg-linear-to-br from-[#a80f14] via-[#d0141a] to-[#e83d42] text-white">
        <div className="max-w-5xl mx-auto px-4 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
              VayVND – Vay Trả Góp Online Không Thế Chấp | Giải Ngân 5–10 Phút
            </h1>
            <p className="text-red-100 text-lg mb-6 leading-relaxed">
              VayVND kết nối bạn với đối tác tài chính được cấp phép. Vay trả góp linh hoạt,
              <strong className="text-white"> giải ngân chỉ 5–10 phút</strong>, hơn 550.000 khách hàng đã thành công.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a rel="nofollow" href={VAYVND_LINK} target="_blank" className="inline-block bg-white hover:bg-red-50 text-[#d0141a] font-bold text-center px-8 py-4 rounded-xl text-md transition-colors shadow-lg">
                Đăng Ký Vay Ngay – Miễn Phí
              </a>
              <a href="#huong-dan" className="inline-block border border-white/40 hover:bg-white/10 text-white text-center px-8 py-4 rounded-xl text-md transition-colors">
                Xem Quy Trình
              </a>
            </div>
            <p className="text-red-200 text-sm mt-4">✓ Giải ngân 5–10 phút &nbsp;·&nbsp; ✓ Không thế chấp &nbsp;·&nbsp; ✓ 550K+ khách hàng</p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1.5 shrink-0">
                  <Image src="/images/logo/vay-tien-vayvnd-online.svg" alt="Logo VayVND" width={40} height={40} className="object-contain w-full h-full" />
                </div>
                <div className="font-bold text-white text-xl">VayVND</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: "5–10 phút", label: "Giải ngân sau duyệt" },
                  { val: "550K+", label: "Khách hàng thành công" },
                  { val: "0%", label: "Không thế chấp" },
                  { val: "Miễn phí", label: "Dịch vụ nền tảng" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/20 rounded-xl p-4">
                    <div className="text-xl font-bold text-white leading-tight">{s.val}</div>
                    <div className="text-red-200 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-red-200 text-xs text-center border-t border-white/20 pt-4">Hotline: 1900 98 89 54 · T2–T7: 8:00–21:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-y border-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-5 gap-6">
          {[
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>, label: "5–10 phút", sub: "Giải ngân sau duyệt" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>, label: "100% online", sub: "Không gặp mặt" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>, label: "Không thế chấp", sub: "Vay tín chấp" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>, label: "Thông tin minh bạch", sub: "Không phí ẩn" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>, label: "Hỗ trợ trực tiếp", sub: "1900 98 89 54" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center gap-2">
              <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#d0141a] flex items-center justify-center shadow-sm">{item.icon}</div>
              <span className="font-semibold text-gray-800 text-sm leading-tight">{item.label}</span>
              <span className="text-gray-400 text-xs">{item.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">Tại Sao Chọn VayVND?</h2>
          <p className="text-gray-500 text-center mb-10">Hơn 550.000 khách hàng đã vay thành công qua nền tảng VayVND</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="border border-red-100 rounded-2xl p-6 hover:shadow-md hover:border-red-200 transition-all">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#d0141a] flex items-center justify-center mb-4">{b.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="huong-dan" className="bg-red-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">3 Bước Nhận Tiền Qua VayVND</h2>
          <p className="text-gray-500 text-center mb-10">Từ đăng ký đến nhận tiền, toàn bộ diễn ra trong vài phút</p>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#e83d42] to-[#a80f14] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-md">{s.num}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a rel="nofollow" href={VAYVND_LINK} target="_blank" className="inline-block bg-[#d0141a] hover:bg-[#a80f14] text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-md">
              Bắt Đầu Vay Tại VayVND
            </a>
            <p className="text-gray-500 text-sm mt-3">Hotline tư vấn: <strong>1900 98 89 54</strong></p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">Điều Kiện Đăng Ký</h2>
          <p className="text-gray-500 text-center mb-8">Yêu cầu tối giản, quy trình đơn giản nhất có thể</p>
          <div className="bg-red-50 rounded-2xl p-6 lg:p-8 border border-red-100">
            <ul className="space-y-4">
              {requirements.map((r) => (
                <li key={r} className="flex items-center gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-[#d0141a] flex items-center justify-center shrink-0 text-sm font-bold">✓</span>
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-red-100 text-sm text-gray-500">
              <strong className="text-gray-700">Lưu ý:</strong> Lãi suất và mức vay cụ thể do đối tác tài chính xác định dựa trên hồ sơ của bạn. VayVND đảm bảo mọi thông tin được công khai minh bạch trước khi bạn quyết định.
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-linear-to-r from-[#a80f14] to-[#d0141a] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { num: "550K+", label: "Khách hàng thành công" },
            { num: "5–10 phút", label: "Tốc độ giải ngân" },
            { num: "3 bước", label: "Quy trình đơn giản" },
            { num: "Miễn phí", label: "Dịch vụ nền tảng" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{s.num}</div>
              <div className="text-red-200 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">Câu Hỏi Thường Gặp</h2>
          <p className="text-gray-500 text-center mb-10">Giải đáp thắc mắc về vay tiền qua VayVND</p>
          <FaqAccordion faqs={faqs} accentColor="red" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-50 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Sẵn Sàng Vay Trả Góp Không Thế Chấp?</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">Đăng ký miễn phí, 3 bước đơn giản, tiền về tài khoản trong 5–10 phút sau khi được duyệt.</p>
          <a rel="nofollow" href={VAYVND_LINK} target="_blank" className="inline-block bg-[#d0141a] hover:bg-[#a80f14] text-white font-bold px-12 py-5 rounded-2xl text-xl transition-colors shadow-lg">
            Vay Tiền Qua VayVND →
          </a>
          <p className="text-gray-400 text-xs mt-4">Miễn phí 100% · Không thế chấp · Giải ngân 5–10 phút · Hotline 1900 98 89 54</p>
        </div>
      </section>

      <nav className="bg-gray-50 border-t border-gray-100 py-3 px-4 text-sm text-gray-500">
        <div className="max-w-5xl mx-auto flex gap-2">
          <Link href="/" className="hover:text-[#d0141a] transition-colors">Trang chủ</Link>
          <span>/</span>
          <span className="text-gray-800">Vay Tiền VayVND</span>
        </div>
      </nav>
    </>
  );
}
