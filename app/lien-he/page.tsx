import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Liên Hệ FinLef",
  description:
    "Liên hệ với đội ngũ FinLef để được hỗ trợ, hợp tác đối tác hoặc góp ý về dịch vụ tư vấn tài chính.",
  alternates: { canonical: "https://finlef.com/lien-he" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Liên hệ FinLef",
  url: "https://finlef.com/lien-he",
};

const contacts = [
  {
    icon: "📧",
    title: "Email",
    value: "info@finlef.com",
    sub: "Phản hồi trong 24 giờ làm việc",
    href: "mailto:info@finlef.com",
  },
  {
    icon: "🤝",
    title: "Hợp tác đối tác",
    value: "partner@finlef.com",
    sub: "Dành cho ngân hàng & tổ chức tài chính",
    href: "mailto:partner@finlef.com",
  },
];

const topics = [
  "Câu hỏi về sản phẩm tài chính",
  "Hỗ trợ quy trình đăng ký",
  "Báo cáo thông tin sai lệch",
  "Đề xuất sản phẩm mới",
  "Hợp tác đối tác",
  "Vấn đề kỹ thuật",
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-[#00543D] text-white py-14 px-4 text-center">
        <h1 className="text-3xl font-bold mb-3">Liên Hệ Với Chúng Tôi</h1>
        <p className="text-green-100 max-w-xl mx-auto">
          Chúng tôi luôn sẵn sàng hỗ trợ bạn về sản phẩm tài chính, quy trình đăng ký, hoặc các câu hỏi khác.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left: info */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Thông tin liên hệ</h2>
            <div className="space-y-4 mb-8">
              {contacts.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all group"
                >
                  <span className="text-3xl shrink-0">{c.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-[#00543D]">{c.title}</div>
                    <div className="text-[#00543D] font-medium">{c.value}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{c.sub}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Bạn có thể hỏi về</h3>
              <ul className="space-y-2">
                {topics.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-600">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: notice */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Lưu ý quan trọng</h2>

            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                <h3 className="font-semibold text-blue-800 mb-2">🏦 Về hồ sơ đăng ký sản phẩm</h3>
                <p className="text-sm text-blue-700 leading-relaxed">
                  FinLef không phải ngân hàng. Chúng tôi không xử lý hồ sơ vay hoặc thẻ tín dụng. Nếu bạn có vấn đề về hồ sơ đã nộp, vui lòng liên hệ trực tiếp với ngân hàng bạn đã đăng ký.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-5">
                <h3 className="font-semibold text-yellow-800 mb-2">⏱️ Thời gian phản hồi</h3>
                <p className="text-sm text-yellow-700 leading-relaxed">
                  Chúng tôi thường phản hồi email trong <strong>1–2 ngày làm việc</strong>. Vui lòng cung cấp đầy đủ thông tin câu hỏi để được hỗ trợ nhanh nhất.
                </p>
              </div>

              <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
                <h3 className="font-semibold text-green-800 mb-2">🤝 Hợp tác đối tác</h3>
                <p className="text-sm text-green-700 leading-relaxed">
                  Nếu bạn đại diện cho ngân hàng hoặc tổ chức tài chính muốn hợp tác với FinLef, hãy email{" "}
                  <a href="mailto:partner@finlef.com" className="font-semibold underline">
                    partner@finlef.com
                  </a>{" "}
                  với thông tin về sản phẩm và hình thức hợp tác mong muốn.
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm mb-3">Tìm câu trả lời nhanh hơn tại:</p>
              <Link
                href="/gioi-thieu"
                className="inline-block text-[#00543D] hover:underline text-sm font-medium"
              >
                Trang Giới thiệu →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
