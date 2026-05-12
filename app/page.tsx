import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "FinLef – Tìm Thẻ Tín Dụng & Vay Tiền Online Phù Hợp Nhất 2025",
  description:
    "Tìm và đăng ký thẻ tín dụng, vay tiền online từ các ngân hàng lớn. Thông tin minh bạch, duyệt nhanh, hoàn toàn trực tuyến.",
  openGraph: {
    title: "FinLef – Tìm Thẻ Tín Dụng & Vay Tiền Online Phù Hợp Nhất 2025",
    description:
      "Tìm và đăng ký thẻ tín dụng, vay tiền online từ các ngân hàng lớn.",
    url: "https://finlef.com",
  },
};

const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FinLef",
  url: "https://finlef.com",
  logo: "https://finlef.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@finlef.com",
    contactType: "customer service",
    availableLanguage: "Vietnamese",
  },
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "FinLef",
  url: "https://finlef.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://finlef.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const featuredProducts = [
  {
    href: "/mo-the-tin-dung-vpbank-online",
    bank: "VPBank",
    name: "Thẻ Tín Dụng VPBank",
    tag: "Duyệt 10 phút",
    tagColor: "bg-green-100 text-green-800",
    desc: "Hoàn tiền lên đến 3%, miễn phí thường niên năm đầu, hạn mức đến 500 triệu.",
    highlights: ["Hoàn tiền 3%", "Hạn mức 500M", "Duyệt trong 10'"],
    cta: "Xem chi tiết →",
  },
];

const categories = [
  {
    icon: "💳",
    title: "Thẻ tín dụng",
    desc: "Tìm hiểu và đăng ký thẻ tín dụng từ VPBank, Techcombank, MB Bank và nhiều ngân hàng khác.",
    href: "/mo-the-tin-dung-vpbank-online",
    count: "1 sản phẩm",
    active: true,
  },
  {
    icon: "🏦",
    title: "Vay tiền online",
    desc: "Vay tiêu dùng, vay tín chấp lên đến 500 triệu, không cần tài sản thế chấp.",
    href: "/vay-tien",
    count: "Sắp ra mắt",
    active: false,
  }
];

const trustPoints = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
    title: "Thông tin minh bạch",
    desc: "Tất cả lãi suất, phí và điều kiện được công khai rõ ràng, cập nhật liên tục.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
      </svg>
    ),
    title: "Hoàn toàn miễn phí",
    desc: "Dịch vụ tư vấn và thông tin hoàn toàn miễn phí với người dùng.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    title: "Duyệt nhanh chóng",
    desc: "Kết nối trực tiếp với ngân hàng, nhận kết quả nhanh nhất có thể.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    title: "Bảo mật tuyệt đối",
    desc: "Thông tin của bạn được mã hóa và bảo vệ theo tiêu chuẩn quốc tế.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />

      {/* Hero */}
      <section className="relative bg-[#00543D] text-white overflow-hidden">
        <Image
          src="/images/card.jpg"
          alt="Thông tin tài chính tin cậy"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="relative max-w-4xl mx-auto text-center py-16 lg:py-24 px-4">
          <span className="inline-block bg-green-800 text-green-200 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Thông tin tài chính tin cậy
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-5">
            Tìm Sản Phẩm Tài Chính<br className="hidden sm:block" /> Phù Hợp Nhất Với Bạn
          </h1>
          <p className="text-green-100 text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Khám phá thẻ tín dụng, vay tiền từ các ngân hàng lớn. Thông tin đầy đủ,
            đăng ký hoàn toàn trực tuyến, nhận kết quả ngay.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/mo-the-tin-dung-vpbank-online"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Mở Thẻ Tín Dụng VPBank
            </Link>
            {/* <Link
              href="/mo-the-tin-dung-vpbank-online"
              className="inline-block border border-green-300 hover:bg-green-800 text-white px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Xem Tất Cả Thẻ
            </Link> */}
          </div>
          <p className="text-green-300 text-sm mt-4">Miễn phí · Không ràng buộc · Bảo mật 100%</p>
        </div>
      </section>

      {/* Stats bar */}
      {/* <section className="bg-white border-b border-gray-100 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { num: "20+", label: "Ngân hàng đối tác" },
            { num: "50+", label: "Sản phẩm tài chính" },
            { num: "10K+", label: "Người đã đăng ký" },
            { num: "4.8★", label: "Đánh giá người dùng" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-[#00543D]">{s.num}</div>
              <div className="text-gray-500 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Featured products */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Sản Phẩm Nổi Bật</h2>
          <p className="text-gray-500 mb-8">Được nhiều người đăng ký nhất tháng này</p>
          <div className="grid gap-4">
            {featuredProducts.map((p) => (
              <div
                key={p.href}
                className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 overflow-hidden p-1">
                  <Image
                    src="/images/Logo-VPBank.webp"
                    alt={`Logo ${p.bank}`}
                    width={48}
                    height={48}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">{p.name}</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${p.tagColor}`}>
                      {p.tag}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.highlights.map((h) => (
                      <span key={h} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={p.href}
                  className="shrink-0 bg-[#00543D] hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Danh Mục Sản Phẩm</h2>
          <p className="text-gray-500 mb-8">Khám phá đầy đủ các dịch vụ tài chính</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {categories.map((cat) => (
              <div
                key={cat.href}
                className={`rounded-2xl border p-6 transition-shadow ${
                  cat.active
                    ? "border-green-200 hover:shadow-md cursor-pointer"
                    : "border-gray-100 opacity-60 cursor-default"
                }`}
              >
                {cat.active ? (
                  <Link href={cat.href} className="block h-full">
                    <div className="text-3xl mb-3">{cat.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{cat.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{cat.desc}</p>
                    <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-1 rounded-full">
                      {cat.count}
                    </span>
                  </Link>
                ) : (
                  <>
                    <div className="text-3xl mb-3">{cat.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{cat.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{cat.desc}</p>
                    <span className="text-xs bg-gray-100 text-gray-500 font-semibold px-2 py-1 rounded-full">
                      {cat.count}
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FinLef */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-2">
            Tại Sao Chọn FinLef?
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Hàng nghìn người đã tin tưởng sử dụng FinLef mỗi tháng
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((t) => (
              <div key={t.title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-green-50 text-[#00543D] flex items-center justify-center mx-auto mb-4">
                  {t.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#00543D] text-white py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Bắt Đầu Ngay Hôm Nay
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Đăng ký thẻ tín dụng VPBank chỉ mất 5 phút. Duyệt trong 10 phút.
          </p>
          <Link
            href="/mo-the-tin-dung-vpbank-online"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-10 py-4 rounded-xl text-lg transition-colors"
          >
            Xem Ưu Đãi VPBank →
          </Link>
        </div>
      </section>
    </>
  );
}
