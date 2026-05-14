import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vay Tiền Online 2026 – Nhanh, Không Thế Chấp | FinLef",
  description:
    "Tổng hợp kênh vay tiền online uy tín 2026. Vay từ 500K đến 90 triệu, giải ngân trong ngày, tỷ lệ duyệt cao. So sánh VayMèo, FinZone, Crezu, F88, CashSpace, VayVND.",
  keywords:
    "vay tiền online, vay tiền nhanh, vay tín chấp, vay tiền không thế chấp, vay tiền 2026, vaymeo, finzone, crezu, f88, cashspace, vayvnd",
  openGraph: {
    title: "Vay Tiền Online 2026 | FinLef",
    description:
      "Vay 500K–90 triệu, giải ngân nhanh, tỷ lệ duyệt cao. So sánh 6 kênh vay uy tín.",
    url: "https://finlef.com/vay-tien",
    type: "website",
    siteName: "FinLef",
    locale: "vi_VN",
  },
  alternates: { canonical: "https://finlef.com/vay-tien" },
};

const jsonLdItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Tổng hợp kênh vay tiền online 2026 tại FinLef",
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Vay Tiền VayMèo",
      url: "https://finlef.com/vay-tien-meo-online",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Vay Tiền FinZone",
      url: "https://finlef.com/vay-tien-finzone-online",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Vay Tiền Crezu",
      url: "https://finlef.com/vay-tien-crezu-online",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Vay Tiền F88",
      url: "https://finlef.com/vay-tien-f88-online",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Vay Tiền CashSpace",
      url: "https://finlef.com/vay-tien-cashspace-online",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Vay Tiền VayVND",
      url: "https://finlef.com/vay-tien-vayvnd-online",
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
      name: "Vay tiền online",
      item: "https://finlef.com/vay-tien",
    },
  ],
};

const loans = [
  {
    href: "/vay-tien-meo-online",
    name: "Vay Tiền VayMèo",
    bank: "VayMèo",
    logo: "/images/logo/vay-tien-meo-online.svg",
    tag: "Nhận đề xuất 1 click",
    tagColor: "bg-orange-100 text-orange-700",
    type: "Tín chấp online",
    typeBg: "bg-orange-100 text-orange-600",
    desc: "Kết nối với đối tác tài chính uy tín, nhận đề xuất vay phù hợp chỉ 1 click. Miễn phí hoàn toàn, không ràng buộc.",
    metrics: [
      { label: "Số tiền vay", value: "500K – 30M" },
      { label: "Thời hạn", value: "91–120 ngày" },
      { label: "Lãi suất", value: "Từ 0%" },
      { label: "Phí sử dụng", value: "Miễn phí 100%" },
    ],
    highlights: ["500K – 30 triệu", "Lãi từ 0%", "Miễn phí 100%", "Nhận đề xuất ngay"],
    accentBg: "bg-orange-50",
    accentBorder: "border-orange-200",
    ctaBg: "bg-orange-600 hover:bg-orange-700",
  },
  {
    href: "/vay-tien-finzone-online",
    name: "Vay Tiền FinZone",
    bank: "FinZone",
    logo: "/images/logo/vay-tien-finzone-online.jpg",
    tag: "AI khớp vay",
    tagColor: "bg-blue-100 text-blue-700",
    type: "Tín chấp online",
    typeBg: "bg-blue-100 text-blue-600",
    desc: "Công nghệ AI kết nối với 16+ ngân hàng và tổ chức tài chính. Hạn mức lên đến 90 triệu, APR tối đa 20%/năm.",
    metrics: [
      { label: "Số tiền vay", value: "5 – 90M" },
      { label: "Lãi suất", value: "Từ 1.67%/tháng" },
      { label: "Đối tác", value: "16+ ngân hàng" },
      { label: "Khách hàng", value: "3M+" },
    ],
    highlights: ["5 – 90 triệu", "Lãi từ 1.67%/tháng", "16+ đối tác", "AI khớp tự động"],
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-200",
    ctaBg: "bg-blue-700 hover:bg-blue-800",
  },
  {
    href: "/vay-tien-crezu-online",
    name: "Vay Tiền Crezu",
    bank: "Crezu",
    logo: "/images/logo/vay-tien-crezu-online.svg",
    tag: "Đề xuất trong 7 phút",
    tagColor: "bg-sky-100 text-sky-700",
    type: "Tín chấp online",
    typeBg: "bg-sky-100 text-sky-600",
    desc: "68 đối tác tài chính, tỷ lệ duyệt 95%. Chỉ điền form 1 lần, nhận đề xuất phù hợp trong 7 phút. 6.6M+ người dùng.",
    metrics: [
      { label: "Số tiền vay", value: "500K – 20M" },
      { label: "Đối tác", value: "68 tổ chức" },
      { label: "Tỷ lệ duyệt", value: "95%" },
      { label: "Thời gian đề xuất", value: "7 phút" },
    ],
    highlights: ["500K – 20 triệu", "95% tỷ lệ duyệt", "7 phút nhận đề xuất", "6.6M+ người dùng"],
    accentBg: "bg-sky-50",
    accentBorder: "border-sky-200",
    ctaBg: "bg-sky-600 hover:bg-sky-700",
  },
  {
    href: "/vay-tien-f88-online",
    name: "Vay Tiền F88 – Cầm Giấy Tờ Xe",
    bank: "F88",
    logo: "/images/logo/vay-tien-f88-online.svg",
    tag: "Cầm giấy tờ xe, giữ xe đi lại",
    tagColor: "bg-orange-100 text-orange-700",
    type: "Cầm giấy tờ xe",
    typeBg: "bg-amber-100 text-amber-600",
    desc: "Chỉ cần nộp giấy đăng ký xe (cà vẹt), vẫn giữ xe đi lại bình thường. 800+ chi nhánh toàn quốc, giải ngân trong 2 giờ.",
    metrics: [
      { label: "Tài sản thế chấp", value: "Giấy tờ xe" },
      { label: "Chi nhánh", value: "800+" },
      { label: "Thời gian giải ngân", value: "2 giờ" },
      { label: "Hotline", value: "18006388" },
    ],
    highlights: ["Cầm giấy tờ xe", "Vẫn giữ xe đi lại", "800+ chi nhánh", "Giải ngân 2 giờ"],
    accentBg: "bg-orange-50",
    accentBorder: "border-orange-200",
    ctaBg: "bg-orange-600 hover:bg-orange-700",
  },
  {
    href: "/vay-tien-cashspace-online",
    name: "Vay Tiền CashSpace",
    bank: "CashSpace",
    logo: "/images/logo/vay-tien-cash-space.svg",
    tag: "97% tỷ lệ duyệt",
    tagColor: "bg-teal-100 text-teal-700",
    type: "Tín chấp online",
    typeBg: "bg-teal-100 text-teal-600",
    desc: "Tỷ lệ duyệt 97%, giải ngân 15 phút. Khoản vay đầu tiên hưởng lãi suất 0%. Phù hợp mọi đối tượng.",
    metrics: [
      { label: "Số tiền vay", value: "500K – 20M" },
      { label: "Tỷ lệ duyệt", value: "97%" },
      { label: "Thời gian giải ngân", value: "15 phút" },
      { label: "Khuyến mãi", value: "0% khoản đầu" },
    ],
    highlights: ["500K – 20 triệu", "97% được duyệt", "Giải ngân 15 phút", "0% lần đầu"],
    accentBg: "bg-teal-50",
    accentBorder: "border-teal-200",
    ctaBg: "bg-teal-600 hover:bg-teal-700",
  },
  {
    href: "/vay-tien-vayvnd-online",
    name: "Vay Tiền VayVND",
    bank: "VayVND",
    logo: "/images/logo/vay-tien-vayvnd-online.svg",
    tag: "Giải ngân 5–10 phút",
    tagColor: "bg-green-100 text-green-700",
    type: "Tín chấp online",
    typeBg: "bg-green-100 text-green-600",
    desc: "Vay trả góp không thế chấp, giải ngân 5–10 phút vào tài khoản ngân hàng. 550.000+ khách hàng thành công.",
    metrics: [
      { label: "Hình thức vay", value: "Không thế chấp" },
      { label: "Thời gian giải ngân", value: "5–10 phút" },
      { label: "Khách hàng", value: "550K+" },
      { label: "Phương thức", value: "Công nghệ P2P" },
    ],
    highlights: ["Không thế chấp", "550K+ khách hàng", "Giải ngân 5–10 phút", "Công nghệ P2P"],
    accentBg: "bg-green-50",
    accentBorder: "border-green-200",
    ctaBg: "bg-green-700 hover:bg-green-800",
  },
];

export default function VayTienPage() {
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
      <section className="bg-linear-to-br from-green-800 via-green-700 to-emerald-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-green-900/60 text-green-200 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Vay tiền online 2026
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-5">
            So Sánh Vay Tiền Online
            <br className="hidden sm:block" /> Uy Tín Nhất 2026
          </h1>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Tổng hợp 6 kênh vay tiền uy tín nhất. Vay từ 500K đến 90 triệu,
            giải ngân nhanh, tỷ lệ duyệt cao, không cần thế chấp.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-green-100">
            {[
              "6 kênh vay uy tín",
              "Vay đến 90 triệu",
              "Giải ngân trong ngày",
              "Tỷ lệ duyệt cao",
            ].map((s) => (
              <span key={s} className="bg-white/10 rounded-full px-4 py-2">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Loan cards */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Danh Sách Kênh Vay Tiền
          </h2>
          <p className="text-gray-500 mb-8">
            Cập nhật tháng 5/2026 · {loans.length} kênh vay
          </p>
          <div className="space-y-5">
            {loans.map((loan) => (
              <div
                key={loan.href}
                className={`bg-white rounded-2xl border-2 ${loan.accentBorder} p-6 shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white rounded-xl border border-gray-100 flex items-center justify-center p-1.5 shrink-0 overflow-hidden">
                      <Image
                        src={loan.logo}
                        alt={`Logo ${loan.bank}`}
                        width={48}
                        height={48}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-gray-900">{loan.name}</h3>
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${loan.tagColor}`}
                        >
                          {loan.tag}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                        {loan.desc}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`shrink-0 text-xs font-semibold px-3 py-1 rounded-full ${loan.typeBg}`}
                  >
                    {loan.type}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  {loan.metrics.map((m) => (
                    <div
                      key={m.label}
                      className={`${loan.accentBg} rounded-xl p-3 text-center`}
                    >
                      <div className="font-bold text-gray-900 text-sm">{m.value}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {loan.highlights.map((h) => (
                      <span
                        key={h}
                        className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={loan.href}
                    className={`shrink-0 ${loan.ctaBg} text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-sm whitespace-nowrap`}
                  >
                    Xem chi tiết →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Lưu Ý Khi Vay Tiền Online</h2>
          <p className="text-gray-500 mb-8">Một số điểm quan trọng trước khi quyết định vay</p>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-gray-50 rounded-2xl p-6">
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
                    d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tính toán khả năng trả nợ</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Chỉ vay số tiền bạn thực sự cần và có khả năng trả đúng hạn. Tránh vay quá mức
                thu nhập hàng tháng cho phép.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
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
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Đọc kỹ điều khoản</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Xem rõ lãi suất, phí phạt trả trễ, phí tất toán trước hạn. Tất cả thông tin sẽ
                được ghi rõ trong hợp đồng vay.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center mb-4">
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
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Chọn đơn vị uy tín</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ưu tiên các kênh có giấy phép hoạt động, đánh giá tốt từ người dùng. Cảnh giác
                với lời mời vay lãi suất 0% không có điều kiện.
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
            <li className="text-gray-900 font-medium">Vay tiền online</li>
          </ol>
        </div>
      </nav>
    </>
  );
}
