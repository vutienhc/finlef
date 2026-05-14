import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "So Sánh Thẻ Tín Dụng 2026 – Hoàn Tiền, Hạn Mức Cao | FinLef",
  description:
    "So sánh thẻ tín dụng VPBank, VIB: hoàn tiền đến 15%, trả góp 0% lãi suất, hạn mức đến 500 triệu. Đăng ký online trong vài phút, duyệt nhanh trong ngày.",
  keywords:
    "thẻ tín dụng, so sánh thẻ tín dụng, thẻ tín dụng hoàn tiền, mở thẻ tín dụng online, thẻ tín dụng vpbank, thẻ tín dụng vib",
  openGraph: {
    title: "So Sánh Thẻ Tín Dụng 2026 | FinLef",
    description:
      "Hoàn tiền đến 15%, trả góp 0%, hạn mức đến 500 triệu. Chọn và đăng ký thẻ tín dụng ngay.",
    url: "https://finlef.com/mo-the-tin-dung-online",
    type: "website",
    siteName: "FinLef",
    locale: "vi_VN",
  },
  alternates: { canonical: "https://finlef.com/mo-the-tin-dung-online" },
};

const jsonLdItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "So sánh thẻ tín dụng 2026 tại FinLef",
  numberOfItems: 2,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Thẻ Tín Dụng VPBank",
      url: "https://finlef.com/mo-the-tin-dung-vpbank-online",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Thẻ Tín Dụng VIB",
      url: "https://finlef.com/mo-the-tin-dung-vib-online",
    },
  ],
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://finlef.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Thẻ tín dụng",
      item: "https://finlef.com/mo-the-tin-dung-online",
    },
  ],
};

const cards = [
  {
    href: "/mo-the-tin-dung-vpbank-online",
    bank: "VPBank",
    name: "Thẻ Tín Dụng VPBank",
    logo: "/images/Logo-VPBank.webp",
    tag: "Duyệt 10 phút",
    tagColor: "bg-green-100 text-green-700",
    desc: "Hoàn tiền lên đến 15% không giới hạn danh mục, miễn phí thường niên năm đầu, hạn mức đến 500 triệu đồng. Đăng ký online 100%, nhận kết quả ngay.",
    metrics: [
      { label: "Hoàn tiền tối đa", value: "15%" },
      { label: "Hạn mức tín dụng", value: "Đến 500M" },
      { label: "Phí thường niên", value: "Miễn năm đầu" },
      { label: "Thời gian duyệt", value: "10 phút" },
    ],
    highlights: ["Hoàn tiền 15%", "Hạn mức 500M", "Trả góp 0%", "Không cần đến ngân hàng"],
    accentBg: "bg-green-50",
    accentBorder: "border-green-200",
    ctaBg: "bg-green-700 hover:bg-green-800",
    badge: "Được đăng ký nhiều",
    badgeBg: "bg-green-600",
  },
  {
    href: "/mo-the-tin-dung-vib-online",
    bank: "VIB",
    name: "Thẻ Tín Dụng VIB",
    logo: "/images/logo/vib.png",
    tag: "Duyệt 30 phút",
    tagColor: "bg-purple-100 text-purple-700",
    desc: "6 dòng thẻ đa dạng cho mọi nhu cầu: hoàn tiền, du lịch, trả góp linh hoạt. Hạn mức đến 200 triệu, hỗ trợ Apple Pay & Google Pay.",
    metrics: [
      { label: "Hoàn tiền tối đa", value: "6%" },
      { label: "Hạn mức tín dụng", value: "Đến 200M" },
      { label: "Số dòng thẻ", value: "6 loại" },
      { label: "Thời gian duyệt", value: "30 phút" },
    ],
    highlights: ["Hoàn tiền 6%", "Hạn mức 200M", "6 dòng thẻ", "Apple/Google Pay"],
    accentBg: "bg-purple-50",
    accentBorder: "border-purple-200",
    ctaBg: "bg-purple-700 hover:bg-purple-800",
    badge: "Đa dạng lựa chọn",
    badgeBg: "bg-purple-600",
  },
];

export default function TheTinDungPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Hero */}
      <section className="bg-linear-to-br from-slate-800 via-blue-900 to-indigo-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-blue-800/60 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Thẻ tín dụng 2026
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-5">
            So Sánh Thẻ Tín Dụng
            <br className="hidden sm:block" /> Phù Hợp Nhất 2026
          </h1>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Tổng hợp thẻ tín dụng từ các ngân hàng uy tín. Hoàn tiền đến 15%,
            trả góp 0% lãi suất, duyệt online nhanh chóng.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-blue-100">
            {[
              "2 ngân hàng uy tín",
              "Hoàn tiền đến 15%",
              "Duyệt nhanh trong ngày",
              "Đăng ký 100% online",
            ].map((s) => (
              <span key={s} className="bg-white/10 rounded-full px-4 py-2">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Product cards */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Danh Sách Thẻ Tín Dụng
          </h2>
          <p className="text-gray-500 mb-8">
            Cập nhật tháng 5/2026 · {cards.length} sản phẩm
          </p>
          <div className="space-y-6">
            {cards.map((card) => (
              <div
                key={card.href}
                className={`bg-white rounded-2xl border-2 ${card.accentBorder} p-6 shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-white rounded-xl border border-gray-100 flex items-center justify-center p-2 shrink-0 overflow-hidden">
                      <Image
                        src={card.logo}
                        alt={`Logo ${card.bank}`}
                        width={56}
                        height={56}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-gray-900">{card.name}</h3>
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${card.tagColor}`}
                        >
                          {card.tag}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`shrink-0 text-white text-xs font-bold px-3 py-1 rounded-full ${card.badgeBg}`}
                  >
                    {card.badge}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  {card.metrics.map((m) => (
                    <div
                      key={m.label}
                      className={`${card.accentBg} rounded-xl p-3 text-center`}
                    >
                      <div className="font-bold text-gray-900 text-sm">{m.value}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {card.highlights.map((h) => (
                    <span
                      key={h}
                      className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <Link
                  href={card.href}
                  className={`inline-block ${card.ctaBg} text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm`}
                >
                  Xem chi tiết {card.bank} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">So Sánh Nhanh</h2>
          <p className="text-gray-500 mb-8">Các tiêu chí quan trọng nhất khi chọn thẻ</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-4 font-semibold text-gray-700 w-1/3">
                    Tiêu chí
                  </th>
                  <th className="text-center px-5 py-4 font-semibold text-gray-700">VPBank</th>
                  <th className="text-center px-5 py-4 font-semibold text-gray-700">VIB</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { label: "Hoàn tiền tối đa", vpbank: "15%", vib: "6%" },
                  { label: "Hạn mức tín dụng", vpbank: "Đến 500 triệu", vib: "Đến 200 triệu" },
                  { label: "Phí thường niên", vpbank: "Miễn năm đầu", vib: "Miễn năm đầu" },
                  { label: "Trả góp 0%", vpbank: "✓", vib: "✓" },
                  { label: "Thời gian duyệt", vpbank: "10 phút", vib: "30 phút" },
                  { label: "Apple/Google Pay", vpbank: "✓", vib: "✓" },
                  { label: "Số dòng thẻ", vpbank: "Nhiều loại", vib: "6 dòng thẻ" },
                ].map((row) => (
                  <tr key={row.label} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4 text-gray-600 font-medium">{row.label}</td>
                    <td className="px-5 py-4 text-center text-gray-800">{row.vpbank}</td>
                    <td className="px-5 py-4 text-center text-gray-800">{row.vib}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Cách Chọn Thẻ Phù Hợp</h2>
          <p className="text-gray-500 mb-8">
            Mỗi nhu cầu chi tiêu phù hợp với một loại thẻ khác nhau
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-1.657 2.032-3.493 2.032-3.493a.75.75 0 0 0-.63-1.099L7.5 14.25Z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Chi tiêu hàng ngày</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Chọn thẻ hoàn tiền cao như VPBank (15%) hoặc VIB Cash Back (3.8%) không giới
                hạn danh mục chi tiêu.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Du lịch thường xuyên</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                VIB Travel Élite mang lại ưu đãi phòng chờ sân bay, bảo hiểm du lịch và tích
                điểm dặm bay quốc tế.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mua sắm trả góp</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Cả VPBank và VIB đều hỗ trợ trả góp 0% lãi suất tại hàng nghìn đối tác. Chọn
                theo hạn mức phù hợp với nhu cầu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-t border-gray-100 py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-gray-700 transition-colors">
                Trang chủ
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-gray-900 font-medium">Thẻ tín dụng</li>
          </ol>
        </div>
      </nav>
    </>
  );
}
