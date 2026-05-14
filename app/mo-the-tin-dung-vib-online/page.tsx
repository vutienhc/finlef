import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { FaqItem } from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Mở Thẻ Tín Dụng VIB Online 2026 – Hoàn Tiền Đến 6%, Duyệt 30 Phút",
  description:
    "Mở thẻ tín dụng VIB online nhanh chóng, hoàn toàn miễn phí. Hoàn tiền lên đến 6%, trả góp 0% lãi suất, hạn mức đến 200 triệu. Duyệt trong 30 phút, không cần đến ngân hàng.",
  keywords:
    "mở thẻ tín dụng vib, thẻ tín dụng vib online, đăng ký thẻ vib, thẻ tín dụng vib 2026, vib online plus, vib cashback, vib travel elite",
  openGraph: {
    title: "Mở Thẻ Tín Dụng VIB Online 2026 – Hoàn Tiền Đến 6%",
    description:
      "Hoàn tiền lên đến 6%, trả góp 0%, hạn mức đến 200 triệu. Duyệt 30 phút, không cần đến ngân hàng!",
    images: [
      {
        url: "https://finlef.com/images/hero-vib.jpg",
        width: 1200,
        height: 630,
        alt: "Mở thẻ tín dụng VIB online",
      },
    ],
    type: "website",
    url: "https://finlef.com/mo-the-tin-dung-vib-online",
    siteName: "FinLef",
    locale: "vi_VN",
  },
  alternates: { canonical: "https://finlef.com/mo-the-tin-dung-vib-online" },
};

const VIB_LINK = process.env.NEXT_PUBLIC_LINK_VIB ?? "https://www.vib.com.vn/vn/the-tin-dung";

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mở thẻ tín dụng VIB online có mất phí không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hoàn toàn miễn phí khi đăng ký online. Phí thường niên được miễn trong năm đầu. Từ năm thứ hai, phí có thể được miễn khi đạt mức chi tiêu nhất định tùy từng loại thẻ.",
      },
    },
    {
      "@type": "Question",
      name: "Bao lâu thì được duyệt thẻ tín dụng VIB?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hồ sơ online được duyệt sơ bộ trong 30 phút, kết quả chính thức trong 1–3 ngày làm việc. Thẻ được giao tận nhà sau 5–7 ngày.",
      },
    },
    {
      "@type": "Question",
      name: "Thẻ tín dụng VIB hoàn tiền tối đa bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VIB Online Plus 2in1 hoàn tiền lên đến 6% cho giao dịch mua sắm online. VIB Cash Back hoàn 3.8% mọi giao dịch không giới hạn danh mục.",
      },
    },
    {
      "@type": "Question",
      name: "Hạn mức thẻ tín dụng VIB tối đa là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hạn mức khởi điểm từ 10 triệu VNĐ, tối đa lên đến 200 triệu VNĐ tùy theo thu nhập và lịch sử tín dụng. Có thể tăng hạn mức sau 6 tháng sử dụng tốt.",
      },
    },
  ],
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://finlef.com" },
    { "@type": "ListItem", position: 2, name: "Mở thẻ tín dụng VIB online", item: "https://finlef.com/mo-the-tin-dung-vib-online" },
  ],
};

const faqs: FaqItem[] = [
  {
    q: "Mở thẻ tín dụng VIB online có mất phí không?",
    a: "Hoàn toàn miễn phí khi đăng ký online. Phí thường niên miễn trong năm đầu. Từ năm thứ hai, một số thẻ miễn hoàn toàn khi đạt mức chi tiêu quy định.",
  },
  {
    q: "Bao lâu thì được duyệt thẻ tín dụng VIB?",
    a: "Hồ sơ online được duyệt sơ bộ trong 30 phút, kết quả chính thức trong 1–3 ngày làm việc. Thẻ vật lý được giao tận nhà sau 5–7 ngày.",
  },
  {
    q: "Thẻ VIB Online Plus 2in1 là gì?",
    a: "VIB Online Plus 2in1 là thẻ combo vừa có chức năng thẻ tín dụng vừa có tài khoản thanh toán, hoàn tiền lên đến 6% cho mua sắm online – một trong những mức hoàn tiền cao nhất thị trường.",
  },
  {
    q: "Thẻ tín dụng VIB hoàn tiền nhiều nhất là loại nào?",
    a: "VIB Online Plus 2in1 hoàn đến 6% online shopping. VIB Cash Back hoàn 3.8% mọi giao dịch không giới hạn danh mục. VIB Super Card hoàn tiền linh hoạt theo nhóm chi tiêu cá nhân hóa.",
  },
  {
    q: "Điều kiện thu nhập để mở thẻ VIB là bao nhiêu?",
    a: "Thu nhập tối thiểu từ 4.500.000 VNĐ/tháng cho các dòng thẻ cơ bản. Dòng thẻ cao cấp Travel Élite và Premier Boundless yêu cầu thu nhập cao hơn. Nhân viên văn phòng, kinh doanh tự do đều có thể đăng ký.",
  },
  {
    q: "Hạn mức thẻ tín dụng VIB tối đa là bao nhiêu?",
    a: "Hạn mức khởi điểm từ 10 triệu VNĐ, tối đa đến 200 triệu VNĐ tùy thu nhập và lịch sử tín dụng. Có thể yêu cầu tăng hạn mức sau 6 tháng sử dụng tốt.",
  },
  {
    q: "Thẻ VIB có hỗ trợ trả góp 0% không?",
    a: "Có. Thẻ tín dụng VIB hỗ trợ trả góp 0% lãi suất tại hàng nghìn đối tác thương mại, siêu thị, và sàn thương mại điện tử trong thời hạn 3–24 tháng.",
  },
  {
    q: "Apple Pay và Google Pay có dùng được với thẻ VIB không?",
    a: "Có. Thẻ tín dụng VIB hỗ trợ đầy đủ Apple Pay, Google Pay và Samsung Pay, giúp thanh toán không tiếp xúc tiện lợi mọi lúc mọi nơi.",
  },
];

const cardTypes = [
  {
    name: "VIB Online Plus 2in1",
    tag: "Mua sắm online",
    tagColor: "bg-[#0066b3]",
    highlight: "Hoàn tiền đến 6% online shopping",
    features: [
      "Combo thẻ tín dụng + tài khoản thanh toán",
      "Hoàn tiền 6% tại Shopee, Lazada, Tiki…",
      "Miễn phí thường niên năm đầu",
    ],
    fee: "Miễn năm đầu",
  },
  {
    name: "VIB Cash Back",
    tag: "Hoàn tiền mọi nơi",
    tagColor: "bg-[#005a9e]",
    highlight: "Hoàn 3.8% tất cả giao dịch",
    features: [
      "Không giới hạn danh mục chi tiêu",
      "Hoàn tiền tự động vào tài khoản",
      "Miễn phí thường niên năm đầu",
    ],
    fee: "Miễn năm đầu",
  },
  {
    name: "VIB Travel Élite",
    tag: "Du lịch & Tích dặm",
    tagColor: "bg-indigo-600",
    highlight: "Tích dặm + phòng chờ sân bay",
    features: [
      "Vào phòng chờ sân bay miễn phí",
      "Tích dặm mọi giao dịch",
      "Ưu đãi khách sạn 5 sao toàn cầu",
    ],
    fee: "Miễn năm đầu",
  },
  {
    name: "VIB Premier Boundless",
    tag: "Thẻ cao cấp",
    tagColor: "bg-[#003d6b]",
    highlight: "Hoàn tiền không giới hạn",
    features: [
      "Concierge 24/7 toàn cầu",
      "Phòng chờ sân bay Priority Pass",
      "Bảo hiểm du lịch quốc tế",
    ],
    fee: "Theo hạng thẻ",
  },
  {
    name: "VIB Rewards Unlimited",
    tag: "Điểm thưởng",
    tagColor: "bg-fuchsia-600",
    highlight: "Điểm thưởng mọi giao dịch, không hết hạn",
    features: [
      "Điểm thưởng tích lũy không giới hạn",
      "Đổi điểm lấy quà, voucher, hoàn tiền",
      "Miễn phí thường niên năm đầu",
    ],
    fee: "Miễn năm đầu",
  },
  {
    name: "VIB Financial Free",
    tag: "Kiểm soát tài chính",
    tagColor: "bg-blue-700",
    highlight: "Trả góp 0% lãi suất linh hoạt",
    features: [
      "Chuyển đổi trả góp 0% bất kỳ giao dịch nào",
      "Kỳ hạn 3–24 tháng",
      "Thu nhập từ 4.5 triệu/tháng",
    ],
    fee: "Miễn năm đầu",
  },
];

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    title: "Hoàn tiền lên đến 6%",
    desc: "Tỷ lệ hoàn tiền hấp dẫn cho mua sắm online và offline, tự động hoàn vào tài khoản mỗi tháng.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    title: "Duyệt sơ bộ trong 30 phút",
    desc: "Nộp hồ sơ online, nhận kết quả duyệt sơ bộ trong 30 phút. Không cần đến chi nhánh ngân hàng.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
      </svg>
    ),
    title: "Trả góp 0% lãi suất",
    desc: "Chuyển đổi mọi giao dịch sang trả góp 0% trong 3–24 tháng tại hàng nghìn đối tác trên toàn quốc.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
      </svg>
    ),
    title: "Hạn mức đến 200 triệu",
    desc: "Hạn mức tín dụng linh hoạt từ 10 triệu, tối đa 200 triệu VNĐ theo thu nhập và lịch sử tín dụng.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Apple Pay & Google Pay",
    desc: "Thanh toán không tiếp xúc qua Apple Pay, Google Pay và Samsung Pay. Tiện lợi, bảo mật tuyệt đối.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Bảo hiểm & bảo vệ toàn diện",
    desc: "Bảo hiểm tai nạn, bảo vệ giao dịch trực tuyến, hoàn tiền khi bị gian lận theo tiêu chuẩn quốc tế.",
  },
];

const steps = [
  {
    num: "01",
    title: "Chọn loại thẻ & điền form",
    desc: "Chọn dòng thẻ phù hợp nhu cầu, điền thông tin cá nhân và thu nhập. Mất khoảng 5 phút.",
  },
  {
    num: "02",
    title: "Chụp ảnh CCCD & xác minh",
    desc: "Upload 2 mặt CCCD và selfie cầm CCCD trực tiếp qua điện thoại. Hoàn toàn không cần gặp mặt.",
  },
  {
    num: "03",
    title: "Nhận kết quả & kích hoạt thẻ",
    desc: "Duyệt sơ bộ trong 30 phút. Thẻ vật lý giao tận nhà 5–7 ngày. Kích hoạt ngay trên app VIB.",
  },
];

const requirements = [
  "Từ 18 tuổi trở lên (thẻ phụ từ 15 tuổi)",
  "CCCD/CMND còn hiệu lực",
  "Thu nhập từ 4.500.000 VNĐ/tháng",
  "Có địa chỉ cư trú hợp lệ tại Việt Nam",
  "Không có nợ xấu tại thời điểm đăng ký",
];

export default function TheTinDungVIBPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      {/* Hero */}
      <section className="bg-linear-to-br from-[#003d6b] via-[#0066b3] to-[#0080cc] text-white">
        <div className="max-w-5xl mx-auto px-4 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-white rounded-xl px-3 py-2 inline-flex items-center">
                <Image src="/images/logo/vib.png" alt="VIB logo" width={48} height={48} className="object-contain w-12 h-12" />
              </div>
              <span className="inline-block bg-yellow-400 text-[#003d6b] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Ưu đãi tháng 5/2026
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Mở Thẻ Tín Dụng VIB Online – Hoàn Tiền Đến 6%, Duyệt Ngay 30 Phút
            </h1>
            <p className="text-blue-100 text-lg mb-6 leading-relaxed">
              Không cần đến ngân hàng. Chọn trong 6 dòng thẻ, hoàn tiền đến 6%, trả góp 0% lãi suất,
              hạn mức đến <strong className="text-white">200 triệu đồng</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                rel="nofollow"
                href={VIB_LINK}
                target="_blank"
                className="inline-block bg-yellow-400 hover:bg-yellow-300 text-[#003d6b] font-bold text-center px-8 py-4 rounded-xl text-md transition-colors shadow-lg"
              >
                Đăng Ký Thẻ VIB – Miễn Phí
              </a>
              <a
                href="#huong-dan"
                className="inline-block border border-white/40 hover:bg-white/10 text-white text-center px-8 py-4 rounded-xl text-md transition-colors"
              >
                Xem Hướng Dẫn
              </a>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              ✓ Miễn phí thường niên năm đầu &nbsp;·&nbsp; ✓ Duyệt 30 phút &nbsp;·&nbsp; ✓ Giao thẻ tận nhà
            </p>
          </div>

          {/* Stats card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-[#003d6b]/60 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div className="bg-white rounded-xl px-3 py-1.5 inline-flex items-center">
                  <Image src="/images/logo/vib.png" alt="VIB logo" width={40} height={40} className="object-contain w-10 h-10" />
                </div>
                <span className="text-blue-300 text-sm font-medium">Thẻ tín dụng</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: "30 phút", label: "Duyệt sơ bộ", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg> },
                  { val: "6%", label: "Hoàn tiền tối đa", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /></svg> },
                  { val: "200 triệu", label: "Hạn mức tối đa", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg> },
                  { val: "Miễn phí", label: "Thường niên năm đầu", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" /></svg> },
                ].map((s) => (
                  <div key={s.label} className="bg-[#0066b3]/60 rounded-xl p-4">
                    <div className="text-blue-300 mb-2">{s.icon}</div>
                    <div className="text-xl font-bold text-yellow-400 leading-tight">{s.val}</div>
                    <div className="text-blue-300 text-xs mt-1 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="relative rounded-xl overflow-hidden h-28">
                <Image
                  src="/images/hero-vib.jpg"
                  alt="Thẻ tín dụng VIB"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#002d5c]/70 to-transparent flex items-end p-3">
                  <span className="text-white text-xs font-medium">6 dòng thẻ · Hoàn tiền · Tích dặm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-y border-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-5 gap-6">
          {[
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>, label: "Duyệt 30 phút", sub: "Kết quả sơ bộ" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /></svg>, label: "Hoàn tiền 6%", sub: "Mua sắm online" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" /></svg>, label: "Trả góp 0%", sub: "3–24 tháng" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>, label: "Apple & Google Pay", sub: "Thanh toán chạm" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>, label: "Miễn phí năm đầu", sub: "Phí thường niên" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center gap-2">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0066b3] flex items-center justify-center shadow-sm">{item.icon}</div>
              <span className="font-semibold text-gray-800 text-sm leading-tight">{item.label}</span>
              <span className="text-gray-400 text-xs">{item.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">
            Tại Sao Chọn Thẻ Tín Dụng VIB?
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Hàng triệu khách hàng tin dùng thẻ tín dụng VIB cho cuộc sống hiện đại
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="border border-blue-100 rounded-2xl p-6 hover:shadow-md hover:border-blue-200 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066b3] flex items-center justify-center mb-4">{b.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Card types */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">
            6 Dòng Thẻ Tín Dụng VIB
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Chọn dòng thẻ phù hợp với nhu cầu và phong cách sống của bạn
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardTypes.map((card) => (
              <div key={card.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-100 flex flex-col">
                {/* Card header */}
                <div className={`${card.tagColor} px-6 py-5`}>
                  <span className="text-white text-xs font-bold uppercase tracking-wide block mb-2">{card.tag}</span>
                  <div className="text-white text-lg font-bold leading-tight">{card.name}</div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[#0066b3] font-medium text-sm mb-4">{card.highlight}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {card.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-gray-600">
                        <span className="text-[#0066b3] shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs text-gray-400 mb-4">Phí thường niên: {card.fee}</div>
                  <a
                    href={VIB_LINK}
                    target="_blank"
                    className="w-full inline-block text-center bg-[#0066b3] hover:bg-[#003d6b] text-white font-semibold py-3 rounded-xl transition-colors text-sm"
                    rel="nofollow"
                  >
                    Đăng Ký Thẻ Này
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="huong-dan" className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">
            3 Bước Mở Thẻ Tín Dụng VIB Online
          </h2>
          <p className="text-gray-500 text-center mb-10">Hoàn tất đăng ký trong dưới 5 phút</p>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#0080cc] to-[#003d6b] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-md">{s.num}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a rel="nofollow" href={VIB_LINK} target="_blank" className="inline-block bg-[#0066b3] hover:bg-[#003d6b] text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-md">
              Bắt Đầu Đăng Ký Ngay
            </a>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">Điều Kiện Mở Thẻ</h2>
          <p className="text-gray-500 text-center mb-8">Điều kiện đơn giản, phù hợp hầu hết người đi làm</p>
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-blue-100">
            <ul className="space-y-4">
              {requirements.map((r) => (
                <li key={r} className="flex items-center gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-[#0066b3] flex items-center justify-center shrink-0 text-sm font-bold">✓</span>
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-blue-100 text-sm text-gray-500">
              <strong className="text-gray-700">Giấy tờ cần chuẩn bị:</strong>{" "}
              CCCD 2 mặt còn hiệu lực (chụp rõ nét), ảnh selfie cầm CCCD. Hợp đồng lao động hoặc sao kê lương có thể cần thêm tùy loại thẻ.
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-linear-to-r from-[#003d6b] to-[#0066b3] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { num: "6%", label: "Hoàn tiền tối đa" },
            { num: "30 phút", label: "Duyệt sơ bộ" },
            { num: "200 triệu", label: "Hạn mức tối đa (VNĐ)" },
            { num: "6", label: "Dòng thẻ đa dạng" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">{s.num}</div>
              <div className="text-blue-200 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">Câu Hỏi Thường Gặp</h2>
          <p className="text-gray-500 text-center mb-10">Giải đáp thắc mắc về thẻ tín dụng VIB</p>
          <FaqAccordion faqs={faqs} accentColor="blue" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Sẵn Sàng Mở Thẻ VIB Chưa?</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Đăng ký online hoàn toàn miễn phí, duyệt sơ bộ trong 30 phút, thẻ giao tận nhà.
            Không cần đến ngân hàng, không mất thời gian xếp hàng.
          </p>
          <a
            rel="nofollow"
            href={VIB_LINK}
            target="_blank"
            className="inline-block bg-[#0066b3] hover:bg-[#003d6b] text-white font-bold px-12 py-5 rounded-2xl text-xl transition-colors shadow-lg"
          >
            Đăng Ký Thẻ Tín Dụng VIB →
          </a>
          <p className="text-gray-400 text-xs mt-4">
            Miễn phí thường niên năm đầu · Duyệt 30 phút · Giao thẻ tận nhà
          </p>
        </div>
      </section>

      <nav className="bg-gray-50 border-t border-gray-100 py-3 px-4 text-sm text-gray-500">
        <div className="max-w-5xl mx-auto flex gap-2">
          <Link href="/" className="hover:text-[#0066b3] transition-colors">Trang chủ</Link>
          <span>/</span>
          <span className="text-gray-800">Mở Thẻ Tín Dụng VIB Online</span>
        </div>
      </nav>
    </>
  );
}
