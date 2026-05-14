import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "@/components/vaymeo/FaqAccordion";

export const metadata: Metadata = {
  title: "Vay Tiền Mèo – VayMèo: Nhận Đề Xuất Vay Trong 1 Click | 500K – 30 Triệu",
  description:
    "VayMèo kết nối bạn với các đối tác tài chính uy tín. Vay từ 500.000 – 30.000.000 VNĐ, duyệt nhanh, giải ngân trong ngày. Hoàn toàn miễn phí, an toàn, không cần thế chấp.",
  keywords:
    "vay tiền mèo, vaymeo, vay tiền online, vay nhanh online, vay tiền không thế chấp, vay tiền nhanh trong ngày, vay mèo, vaymeo vn",
  openGraph: {
    title: "VayMèo – Vay Tiền Online Nhanh | 500K – 30 Triệu",
    description:
      "Nhận đề xuất vay tiền phù hợp chỉ với 1 click. Miễn phí 100%, an toàn, duyệt nhanh, giải ngân trong ngày.",
    images: [
      {
        url: "https://finlef.com/images/hero-vaymeo.jpg",
        width: 1200,
        height: 630,
        alt: "VayMèo – Vay tiền online nhanh chóng",
      },
    ],
    type: "website",
    url: "https://finlef.com/vay-tien-meo-online",
    siteName: "FinLef",
    locale: "vi_VN",
  },
  alternates: {
    canonical: "https://finlef.com/vay-tien-meo-online",
  },
};

const VAYMEO_LINK = process.env.NEXT_PUBLIC_LINK_VAYMEO ?? "https://vaymeo.vn/";

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "VayMèo là gì? Có phải tổ chức cho vay không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VayMèo là nền tảng kết nối trung gian, không trực tiếp cho vay tiền. Chúng tôi giúp bạn so sánh và tìm kiếm đề xuất từ các đối tác tài chính uy tín, hoàn toàn miễn phí.",
      },
    },
    {
      "@type": "Question",
      name: "Đăng ký qua VayMèo có mất phí không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hoàn toàn miễn phí 100%. VayMèo không thu bất kỳ khoản phí nào từ người dùng.",
      },
    },
    {
      "@type": "Question",
      name: "Có thể vay tối đa bao nhiêu qua VayMèo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mức vay dao động từ 500.000 VNĐ đến 30.000.000 VNĐ tùy thuộc vào hồ sơ và đối tác tài chính phù hợp với bạn.",
      },
    },
    {
      "@type": "Question",
      name: "Lãi suất vay là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lãi suất dao động từ 0% đến tối đa 36%/năm tùy đối tác. Ví dụ: khoản vay 2.000.000 VNĐ trong 4 tháng tổng thanh toán khoảng 2.024.333 VNĐ (lãi suất 3,65%/năm).",
      },
    },
  ],
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Trang chủ",
      item: "https://finlef.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Vay Tiền Mèo – VayMèo",
      item: "https://finlef.com/vay-tien-meo-online",
    },
  ],
};

const jsonLdFinancialProduct = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  name: "VayMèo – Vay Tiền Online",
  description:
    "Nền tảng kết nối vay tiền online, nhận đề xuất từ nhiều đối tác tài chính với mức vay từ 500.000 đến 30.000.000 VNĐ.",
  url: "https://vaymeo.vn",
  feesAndCommissionsSpecification: "Miễn phí 100% cho người dùng",
  annualPercentageRate: {
    "@type": "QuantitativeValue",
    minValue: 0,
    maxValue: 36,
    unitText: "%/năm",
  },
  amount: {
    "@type": "MonetaryAmount",
    minValue: 500000,
    maxValue: 30000000,
    currency: "VND",
  },
};

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Hoàn toàn miễn phí",
    desc: "Không tốn bất kỳ chi phí nào khi đăng ký qua VayMèo. Chúng tôi được trả phí bởi đối tác, không phải bạn.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    title: "Nhận đề xuất trong 1 click",
    desc: "Điền thông tin cơ bản, nhận ngay danh sách đề xuất từ nhiều đối tác tài chính. Nhanh chóng, không chờ đợi.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: "So sánh nhiều đề xuất",
    desc: "Không bị ràng buộc với 1 đối tác. So sánh lãi suất, kỳ hạn, điều kiện từ nhiều đơn vị để chọn tốt nhất.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "An toàn & bảo mật",
    desc: "Dữ liệu cá nhân được mã hóa và bảo vệ theo tiêu chuẩn bảo mật. Chỉ chia sẻ với đối tác bạn đã chấp thuận.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "100% trực tuyến",
    desc: "Đăng ký hoàn toàn trên điện thoại hoặc máy tính. Không cần gặp mặt, không cần thế chấp tài sản.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>
    ),
    title: "Thân thiện & dễ dùng",
    desc: "Giao diện đơn giản, thân thiện như mèo của nhà. Chỉ cần vài bước cơ bản là hoàn tất đăng ký.",
  },
];

const steps = [
  {
    num: "01",
    title: "Chọn số tiền cần vay",
    desc: "Nhập số tiền cần vay (500K–30 triệu), chọn kỳ hạn và điền thông tin cá nhân cơ bản. Chỉ mất 2–3 phút.",
  },
  {
    num: "02",
    title: "Nhận và so sánh đề xuất",
    desc: "VayMèo gửi hồ sơ đến các đối tác phù hợp. Bạn nhận danh sách đề xuất và so sánh trực tiếp trên màn hình.",
  },
  {
    num: "03",
    title: "Chọn đối tác & nhận tiền",
    desc: "Chọn đề xuất ưng ý nhất, hoàn tất thủ tục với đối tác được chọn. Tiền giải ngân nhanh về tài khoản ngân hàng.",
  },
];

const loanRanges = [
  {
    amount: "500K – 2 triệu",
    tag: "Vay nhỏ linh hoạt",
    tagColor: "bg-orange-400",
    desc: "Phù hợp khi cần tiền gấp, chi tiêu nhỏ hàng ngày",
    period: "91 – 120 ngày",
    highlight: "Duyệt nhanh nhất",
    features: [
      "Không cần tài sản thế chấp",
      "Điều kiện đơn giản nhất",
      "Giải ngân trong ngày",
    ],
  },
  {
    amount: "2 – 10 triệu",
    tag: "Phổ biến nhất",
    tagColor: "bg-orange-500",
    desc: "Lý tưởng cho chi phí gia đình, sửa chữa nhỏ, học phí",
    period: "91 – 120 ngày",
    highlight: "Được chọn nhiều nhất",
    features: [
      "Lãi suất cạnh tranh",
      "Nhiều lựa chọn kỳ hạn",
      "Hỗ trợ tư vấn 24/7",
    ],
  },
  {
    amount: "10 – 30 triệu",
    tag: "Vay lớn",
    tagColor: "bg-orange-600",
    desc: "Dành cho nhu cầu lớn hơn như mua xe, kinh doanh nhỏ",
    period: "91 – 120 ngày",
    highlight: "Hạn mức cao nhất",
    features: [
      "Cần có nguồn thu nhập ổn định",
      "Thời gian xem xét kỹ hơn",
      "Lãi suất ưu đãi hơn",
    ],
  },
];

const requirements = [
  "Công dân Việt Nam, từ 18 tuổi trở lên",
  "Đang sinh sống và làm việc tại Việt Nam",
  "CCCD/CMND còn hiệu lực",
  "Có tài khoản ngân hàng cá nhân tại Việt Nam",
  "Số điện thoại và email hợp lệ đang hoạt động",
  "Có nguồn thu nhập (yêu cầu tùy theo từng đối tác)",
];

export default function VayTienMeoPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFinancialProduct) }}
      />

      {/* Hero */}
      <section className="bg-linear-to-br from-orange-500 via-orange-400 to-amber-400 text-white">
        <div className="max-w-5xl mx-auto px-4 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Vay Tiền Online Nhanh – Nhận Đề Xuất Chỉ Với 1 Click!
            </h1>
            <p className="text-orange-50 text-lg mb-6 leading-relaxed">
              VayMèo kết nối bạn với hàng chục đối tác tài chính uy tín. Vay từ{" "}
              <strong className="text-white">500.000 đến 30.000.000 VNĐ</strong>,
              miễn phí hoàn toàn, an toàn bảo mật.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                rel="nofollow"
                href={VAYMEO_LINK}
                target="_blank"
                className="inline-block bg-white hover:bg-orange-50 text-orange-600 font-bold text-center px-8 py-4 rounded-xl text-md transition-colors shadow-lg"
              >
                Nhận Đề Xuất Ngay – Miễn Phí
              </a>
              <a
                href="#huong-dan"
                className="inline-block border border-white/50 hover:bg-white/10 text-white text-center px-8 py-4 rounded-xl text-md transition-colors"
              >
                Xem Cách Hoạt Động
              </a>
            </div>
            <p className="text-orange-100 text-sm mt-4">
              ✓ Miễn phí 100% &nbsp;·&nbsp; ✓ Không thế chấp &nbsp;·&nbsp; ✓ Giải ngân trong ngày
            </p>
          </div>

          {/* Stats card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1.5 shrink-0">
                  <Image src="/images/logo/vay-tien-meo-online.svg" alt="Logo VayMèo" width={40} height={40} className="object-contain w-full h-full" />
                </div>
                <div>
                  <div className="font-bold text-white text-lg leading-none">VayMèo</div>
                  <div className="text-orange-100 text-xs">vaymeo.vn</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: "30 triệu", label: "Mức vay tối đa", emoji: "💰" },
                  { val: "1 click", label: "Nhận đề xuất", emoji: "⚡" },
                  { val: "0%", label: "Lãi suất tối thiểu", emoji: "🎯" },
                  { val: "Miễn phí", label: "Dịch vụ 100%", emoji: "🆓" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/20 rounded-xl p-4">
                    <div className="text-lg mb-1">{s.emoji}</div>
                    <div className="text-xl font-bold text-white leading-tight">
                      {s.val}
                    </div>
                    <div className="text-orange-100 text-xs mt-1 leading-snug">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative rounded-xl overflow-hidden h-32">
                <Image
                  src="/images/hero-vaymeo.jpg"
                  alt="Vay tiền online qua VayMèo"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent flex items-end p-3">
                  <span className="text-white text-xs font-medium">
                    Vay nhanh · An toàn · Tin cậy
                  </span>
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
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              ),
              label: "Bảo mật thông tin",
              sub: "Mã hóa dữ liệu",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              ),
              label: "Đối tác uy tín",
              sub: "Được cấp phép",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              ),
              label: "100% trực tuyến",
              sub: "Không cần gặp mặt",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
              ),
              label: "Giải ngân trong ngày",
              sub: "Nhanh từ 15 phút",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              ),
              label: "Hoàn toàn miễn phí",
              sub: "Không phí ẩn",
            },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center gap-2">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center shadow-sm">
                {item.icon}
              </div>
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
            Tại Sao Chọn VayMèo?
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Hàng nghìn người Việt mỗi ngày tìm kiếm khoản vay phù hợp qua VayMèo
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="border border-orange-100 rounded-2xl p-6 hover:shadow-md hover:border-orange-200 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan ranges */}
      <section className="bg-orange-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">
            Mức Vay & Kỳ Hạn
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Linh hoạt từ khoản vay nhỏ đến lớn, phù hợp mọi nhu cầu
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {loanRanges.map((loan) => (
              <div
                key={loan.amount}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-orange-100 flex flex-col"
              >
                <div className={`${loan.tagColor} px-6 py-4`}>
                  <span className="text-white text-xs font-bold uppercase tracking-wide block mb-1">
                    {loan.tag}
                  </span>
                  <div className="text-white text-2xl font-bold">{loan.amount}</div>
                  <div className="text-orange-100 text-sm mt-1">VNĐ</div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-600 text-sm mb-3">{loan.desc}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded-full font-medium">
                      ⏱ {loan.period}
                    </span>
                    <span className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded-full font-medium">
                      ✓ {loan.highlight}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {loan.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-gray-600">
                        <span className="text-orange-400 shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={VAYMEO_LINK}
                    target="_blank"
                    rel="nofollow"
                    className="w-full inline-block text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
                  >
                    Vay Ngay
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-white rounded-xl p-4 border border-orange-100 text-xs text-gray-500 leading-relaxed">
            <strong className="text-gray-700">Ví dụ minh họa:</strong> Khoản vay 2.000.000 VNĐ, kỳ hạn 4 tháng, lãi suất 3,65%/năm → tổng thanh toán khoảng 2.024.333 VNĐ.
            Lãi suất thực tế từ 0% đến 36%/năm tùy đối tác và hồ sơ của bạn. VayMèo là nền tảng trung gian, không trực tiếp cho vay.
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="huong-dan" className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">
            3 Bước Nhận Tiền Qua VayMèo
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Quy trình đơn giản, hoàn tất trong dưới 5 phút
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-orange-400 to-orange-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-md">
                  {step.num}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              rel="nofollow"
              href={VAYMEO_LINK}
              target="_blank"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-md"
            >
              Bắt Đầu Ngay Tại VayMèo
            </a>
            <p className="text-gray-400 text-sm mt-3">Miễn phí · Không ràng buộc · Bảo mật thông tin</p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-orange-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3">
            Điều Kiện Đăng Ký
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Yêu cầu đơn giản, hầu hết mọi người đều đủ điều kiện
          </p>
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-orange-100">
            <ul className="space-y-4">
              {requirements.map((req) => (
                <li key={req} className="flex items-center gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 text-sm font-bold">
                    ✓
                  </span>
                  {req}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-orange-100 text-sm text-gray-500">
              <strong className="text-gray-700">Giấy tờ cần chuẩn bị:</strong>{" "}
              CCCD/CMND còn hiệu lực (chụp 2 mặt rõ nét). Một số đối tác có thể yêu cầu thêm
              ảnh selfie hoặc xác minh thu nhập tùy mức vay.
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-linear-to-r from-orange-500 to-amber-500 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { num: "30M", label: "Mức vay tối đa (VNĐ)" },
            { num: "0%", label: "Lãi suất tối thiểu/năm" },
            { num: "1 click", label: "Nhận đề xuất ngay" },
            { num: "100%", label: "Miễn phí dịch vụ" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.num}
              </div>
              <div className="text-orange-100 text-sm">{stat.label}</div>
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
            Giải đáp những thắc mắc phổ biến về VayMèo và dịch vụ vay tiền online
          </p>
          <FaqAccordion />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-orange-50 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-5xl mb-4">🐱</div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Sẵn Sàng Nhận Đề Xuất Vay Chưa?
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Chỉ cần 1 click, VayMèo sẽ kết nối bạn với các đối tác tài chính phù hợp nhất.
            Hoàn toàn miễn phí, an toàn, không cam kết ràng buộc.
          </p>
          <a
            rel="nofollow"
            href={VAYMEO_LINK}
            target="_blank"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-12 py-5 rounded-2xl text-xl transition-colors shadow-lg"
          >
            Vay Tiền Qua VayMèo →
          </a>
          <p className="text-gray-400 text-xs mt-4">
            Miễn phí 100% · Bảo mật thông tin · Không thế chấp · Giải ngân trong ngày
          </p>
        </div>
      </section>

      {/* Breadcrumb nav for SEO */}
      <nav className="bg-gray-50 border-t border-gray-100 py-3 px-4 text-sm text-gray-500">
        <div className="max-w-5xl mx-auto flex gap-2">
          <Link href="/" className="hover:text-orange-500 transition-colors">Trang chủ</Link>
          <span>/</span>
          <span className="text-gray-800">Vay Tiền Mèo – VayMèo</span>
        </div>
      </nav>
    </>
  );
}
