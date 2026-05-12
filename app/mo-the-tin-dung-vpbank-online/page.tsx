import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FaqAccordion from "@/components/vpbank-credit-card/FaqAccordion";

export const metadata: Metadata = {
  title: "Mở Thẻ Tín Dụng VPBank Online 2025 – Duyệt Ngay Trong 10 Phút",
  description:
    "Mở thẻ tín dụng VPBank online nhanh chóng, không cần đến ngân hàng. Hoàn tiền lên đến 3%, hạn mức đến 500 triệu, duyệt trong 10 phút. Miễn phí thường niên năm đầu.",
  keywords:
    "mở thẻ tín dụng vpbank, thẻ tín dụng vpbank online, đăng ký thẻ vpbank, thẻ tín dụng vpbank 2025",
  openGraph: {
    title: "Mở Thẻ Tín Dụng VPBank Online – Duyệt Ngay Trong 10 Phút",
    description:
      "Hoàn tiền lên đến 3%, hạn mức đến 500 triệu, duyệt trong 10 phút. Không cần đến ngân hàng!",
    images: [
      {
        url: "https://finlef.com/og/mo-the-tin-dung-vpbank.jpg",
        width: 1200,
        height: 630,
        alt: "Mở thẻ tín dụng VPBank online",
      },
    ],
    type: "website",
    url: "https://finlef.com/mo-the-tin-dung-vpbank-online",
    siteName: "FinLef",
    locale: "vi_VN",
  },
  alternates: {
    canonical: "https://finlef.com/mo-the-tin-dung-vpbank-online",
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mở thẻ tín dụng VPBank online có mất phí không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hoàn toàn miễn phí khi đăng ký online. Phí thường niên miễn hoàn toàn năm đầu. Từ năm thứ hai từ 399.000 – 1.200.000 VND tùy loại thẻ.",
      },
    },
    {
      "@type": "Question",
      name: "Bao lâu thì được duyệt thẻ tín dụng VPBank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hồ sơ online được duyệt sơ bộ trong 10 phút, kết quả chính thức trong 1–3 ngày làm việc. Thẻ giao tận nhà sau 5–7 ngày.",
      },
    },
    {
      "@type": "Question",
      name: "Hạn mức thẻ tín dụng VPBank tối đa là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hạn mức khởi điểm từ 5 triệu VND, tối đa lên đến 500 triệu VND tùy thu nhập và lịch sử tín dụng.",
      },
    },
  ],
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://finlef.com" },
    // { "@type": "ListItem", position: 2, name: "Thẻ tín dụng", item: "https://finlef.com/the-tin-dung" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Mở thẻ tín dụng VPBank online",
      item: "https://finlef.com/mo-the-tin-dung-vpbank-online",
    },
  ],
};

const AFFILIATE_LINK = "https://pmrevo.com/ql/SScy0FlXX";

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    title: "Hoàn tiền lên đến 3%",
    desc: "Hoàn tiền tự động mỗi tháng cho các giao dịch mua sắm, ăn uống, giải trí.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    title: "Duyệt trong 10 phút",
    desc: "Chỉ cần CCCD, không cần đến ngân hàng. Kết quả ngay trên điện thoại.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
      </svg>
    ),
    title: "Miễn phí thường niên năm đầu",
    desc: "Không tốn chi phí trong 12 tháng đầu. Từ năm 2 miễn nếu chi tiêu đủ điều kiện.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
      </svg>
    ),
    title: "Trả góp 0% lãi suất",
    desc: "Hơn 10.000 đơn vị chấp nhận trả góp 0% từ 3–24 tháng.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
      </svg>
    ),
    title: "Hạn mức lên đến 500 triệu",
    desc: "Hạn mức linh hoạt theo thu nhập, tăng hạn mức dễ dàng sau 6 tháng sử dụng tốt.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Bảo hiểm & bảo mật",
    desc: "Bảo hiểm tai nạn, bảo vệ giao dịch trực tuyến, công nghệ OTP và 3D Secure.",
  },
];

const steps = [
  {
    num: "01",
    title: "Điền form đăng ký",
    desc: "Nhập thông tin cá nhân, CCCD và thu nhập hàng tháng. Mất khoảng 3 phút.",
  },
  {
    num: "02",
    title: "Chụp ảnh CCCD & xác minh",
    desc: "Chụp 2 mặt CCCD và selfie trực tiếp qua app hoặc web. Không cần gặp mặt.",
  },
  {
    num: "03",
    title: "Nhận kết quả & thẻ",
    desc: "Duyệt sơ bộ trong 10 phút. Thẻ vật lý giao tận nhà trong 5–7 ngày làm việc.",
  },
];

const cardTypes = [
  {
    name: "VPBank MC²",
    tag: "Phổ biến nhất",
    tagColor: "bg-green-700",
    highlight: "Hoàn tiền 2% mọi giao dịch",
    features: ["Miễn phí thường niên trọn đời nếu đủ điều kiện", "Trả góp 0% tại hàng nghìn đối tác", "Thanh toán qua Apple Pay & Google Pay"],
    fee: "Miễn phí năm đầu",
  },
  {
    name: "VPBank StepUp",
    tag: "Hoàn tiền cao nhất",
    tagColor: "bg-orange-500",
    highlight: "Hoàn tiền đến 3% mua sắm",
    features: ["Ưu đãi hoàn tiền theo bậc chi tiêu", "Hạn mức lên đến 500 triệu VND", "Bảo hiểm mua hàng trực tuyến"],
    fee: "399.000 VND/năm",
  },
  {
    name: "VPBank Platinum",
    tag: "Hạng cao cấp",
    tagColor: "bg-gray-700",
    highlight: "Ưu đãi lounge sân bay",
    features: ["Vào phòng chờ sân bay miễn phí", "Bảo hiểm du lịch quốc tế", "Hỗ trợ concierge 24/7"],
    fee: "1.200.000 VND/năm",
  },
];

const requirements = [
  "Từ 18 tuổi trở lên",
  "Giấy tờ tùy thân còn hiệu lực",
  "Có thu nhập ổn định hàng tháng",
  "Không có nợ xấu tại thời điểm đăng ký",
  "Có địa chỉ cư trú hợp lệ",
];

export default function MoTheTinDungVPBankPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Breadcrumb */}
      {/* <nav className="bg-gray-50 border-b border-gray-100 text-sm py-3 px-4">
        <div className="max-w-5xl mx-auto flex gap-2 text-gray-500">
          <Link href="/" className="hover:text-green-700">Trang chủ</Link>
          <span>/</span>
          <Link href="/the-tin-dung" className="hover:text-green-700">Thẻ tín dụng</Link>
          <span>/</span>
          <span className="text-gray-800">Thẻ tín dụng VPBank</span>
        </div>
      </nav> */}

      {/* Hero */}
      <section className="bg-[#00543D] text-white">
        <div className="max-w-5xl mx-auto px-4 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-xl p-2 w-14 h-14 flex items-center justify-center shrink-0">
                <Image
                  src="/images/Logo-VPBank.webp"
                  alt="Logo VPBank"
                  width={44}
                  height={44}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <span className="inline-block bg-yellow-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Ưu đãi tháng 5/2025
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Mở Thẻ Tín Dụng VPBank Online – Duyệt Ngay Trong 10 Phút
            </h1>
            <p className="text-green-100 text-lg mb-6 leading-relaxed">
              Không cần đến ngân hàng. Chỉ cần CCCD, điền form online và nhận kết quả ngay.
              Hoàn tiền lên đến 3%, hạn mức đến 500 triệu đồng.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={AFFILIATE_LINK}
                className="inline-block bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold text-center px-8 py-4 rounded-xl text-md transition-colors"
              >
                Đăng Ký Ngay – Miễn Phí
              </a>
              <a
                href="#huong-dan"
                className="inline-block border border-green-200 hover:bg-green-800 text-white text-center px-8 py-4 rounded-xl text-md transition-colors"
              >
                Xem Hướng Dẫn
              </a>
            </div>
            <p className="text-green-200 text-sm mt-4">
              ✓ Miễn phí thường niên năm đầu &nbsp;·&nbsp; ✓ Không cần chứng minh thu nhập bằng giấy tờ
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-green-800 rounded-2xl p-6 space-y-5">
              {/* Card header */}
              <div className="flex items-center justify-between">
                <div className="bg-white rounded-xl p-2 w-12 h-12 flex items-center justify-center">
                  <Image src="/images/Logo-VPBank.webp" alt="VPBank" width={36} height={36} className="object-contain" />
                </div>
                <span className="text-green-200 text-sm font-medium">Thẻ tín dụng</span>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    val: "10 phút",
                    label: "Duyệt hồ sơ",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                      </svg>
                    ),
                  },
                  {
                    val: "3%",
                    label: "Hoàn tiền tối đa",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                      </svg>
                    ),
                  },
                  {
                    val: "500 triệu",
                    label: "Hạn mức tối đa",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                      </svg>
                    ),
                  },
                  {
                    val: "Miễn phí",
                    label: "Phí thường niên năm đầu",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                      </svg>
                    ),
                  },
                ].map((s) => (
                  <div key={s.label} className="bg-green-700/60 rounded-xl p-4">
                    <div className="text-green-300 mb-2">{s.icon}</div>
                    <div className="text-xl font-bold text-yellow-400 leading-tight">{s.val}</div>
                    <div className="text-green-300 text-xs mt-1 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-green-400 text-xs text-center border-t border-green-700 pt-4">Không cần đến ngân hàng · Kết quả trong 10 phút</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">
            Tại Sao Chọn Thẻ Tín Dụng VPBank?
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Hơn 3 triệu khách hàng đang sử dụng thẻ tín dụng VPBank
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-green-50 text-[#00543D] flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Card types */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">
            Các Loại Thẻ Tín Dụng VPBank
          </h2>
          <p className="text-gray-500 text-center mb-10">Chọn loại thẻ phù hợp với nhu cầu của bạn</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardTypes.map((card) => (
              <div key={card.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className={`${card.tagColor} text-white text-xs font-bold px-4 py-2 uppercase tracking-wide`}>
                  {card.tag}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{card.name}</h3>
                  <p className="text-green-700 font-medium text-sm mb-4">{card.highlight}</p>
                  <ul className="space-y-2 mb-6">
                    {card.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-gray-600">
                        <span className="text-green-600 shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs text-gray-400 mb-4">Phí thường niên: {card.fee}</div>
                  <a
                    href={AFFILIATE_LINK}
                    className="w-full inline-block text-center bg-[#00543D] hover:bg-green-800 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
                  >
                    Đăng Ký Thẻ Này
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section id="huong-dan" className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">
            3 Bước Mở Thẻ Tín Dụng VPBank Online
          </h2>
          <p className="text-gray-500 text-center mb-10">Hoàn tất đăng ký trong dưới 5 phút</p>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#00543D] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={AFFILIATE_LINK}
              className="inline-block bg-[#00543D] hover:bg-green-800 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors"
            >
              Bắt Đầu Đăng Ký Ngay
            </a>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-green-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">
            Điều Kiện Mở Thẻ
          </h2>
          <p className="text-gray-500 text-center mb-8">Điều kiện đơn giản, phù hợp với hầu hết mọi người</p>
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
            <ul className="space-y-4">
              {requirements.map((req) => (
                <li key={req} className="flex items-center gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-sm font-bold">
                    ✓
                  </span>
                  {req}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-100 text-sm text-gray-500">
              <strong className="text-gray-700">Giấy tờ cần chuẩn bị:</strong> Giấy tờ tùy thân 2 mặt (chụp ảnh rõ nét), ảnh selfie cầm giấy tờ. Không cần sao kê lương bản gốc khi đăng ký online.
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="bg-[#00543D] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { num: "3M+", label: "Khách hàng đang dùng" },
            { num: "10 phút", label: "Thời gian duyệt nhanh nhất" },
            { num: "10.000+", label: "Đối tác trả góp 0%" },
            { num: "500M", label: "Hạn mức tối đa (VND)" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">{stat.num}</div>
              <div className="text-green-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Giải đáp những thắc mắc phổ biến về thẻ tín dụng VPBank
          </p>
          <FaqAccordion />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Sẵn Sàng Mở Thẻ Chưa?
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Đăng ký hoàn toàn online, miễn phí, nhận kết quả trong 10 phút.
            Không mất thời gian xếp hàng tại ngân hàng.
          </p>
          <a
            href={AFFILIATE_LINK}
            className="inline-block bg-[#00543D] hover:bg-green-800 text-white font-bold px-12 py-5 rounded-2xl text-xl transition-colors shadow-lg"
          >
            Đăng Ký Thẻ Tín Dụng VPBank →
          </a>
          <p className="text-gray-400 text-xs mt-4">
            Miễn phí thường niên năm đầu · Không ràng buộc · Thẻ giao tận nhà
          </p>
        </div>
      </section>
    </>
  );
}
