import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Giới Thiệu Về FinLef – Thông Tin Tài Chính Minh Bạch",
  description:
    "FinLef là nền tảng thông tin tài chính độc lập. Chúng tôi giúp người dùng tìm và đăng ký thẻ tín dụng, vay tiền phù hợp nhất.",
  openGraph: {
    title: "Giới Thiệu Về FinLef",
    description:
      "Thông tin thẻ tín dụng & vay tiền minh bạch, độc lập.",
    url: "https://finlef.com/gioi-thieu",
  },
  alternates: { canonical: "https://finlef.com/gioi-thieu" },
};

const values = [
  {
    icon: "🔍",
    title: "Minh bạch",
    desc: "Chúng tôi công khai tất cả thông tin về phí, lãi suất và điều kiện. Không giấu điều khoản, không phóng đại lợi ích.",
  },
  {
    icon: "⚖️",
    title: "Khách quan",
    desc: "Mọi thông tin dựa trên dữ liệu thực tế từ ngân hàng. Thứ hạng sản phẩm phản ánh chất lượng và phù hợp với nhu cầu người dùng.",
  },
  {
    icon: "👤",
    title: "Lấy người dùng làm trung tâm",
    desc: "Mọi quyết định về sản phẩm đều dựa trên câu hỏi: 'Điều này có thực sự giúp ích cho người dùng không?'",
  },
  {
    icon: "📚",
    title: "Giáo dục tài chính",
    desc: "Ngoài giới thiệu sản phẩm, chúng tôi cung cấp kiến thức tài chính để bạn đưa ra quyết định thông minh hơn.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#00543D] text-white overflow-hidden">
        <Image
          src="/images/about.jpg"
          alt="Đội ngũ FinLef"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="relative max-w-3xl mx-auto text-center py-16 px-4">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Về FinLef</h1>
          <p className="text-green-100 text-lg leading-relaxed">
            Chúng tôi giúp mọi người đưa ra quyết định tài chính thông minh hơn
            thông qua thông tin minh bạch và tư vấn độc lập.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Sứ mệnh của chúng tôi</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          FinLef được thành lập với mục tiêu đơn giản: giúp mọi người tiếp cận
          thông tin tài chính một cách dễ dàng, minh bạch và không thiên vị.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Trong lĩnh vực tài chính, thông tin thường bị che giấu trong các điều khoản
          phức tạp và phí ẩn. FinLef tổng hợp và trình bày rõ ràng để bạn
          không cần phải là chuyên gia tài chính mới hiểu được sản phẩm bạn đăng ký.
        </p>
        <p className="text-gray-600 leading-relaxed">
          FinLef có quan hệ đối tác với các ngân hàng và tổ chức tài chính,
          cho phép chúng tôi cung cấp thông tin và dịch vụ hoàn toàn miễn phí với người dùng.
        </p>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Giá trị cốt lõi</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Lưu ý quan trọng</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <p className="text-gray-700 leading-relaxed">
            Thông tin trên FinLef mang tính chất tham khảo và không phải tư vấn tài
            chính chuyên nghiệp. Người dùng cần tự đánh giá khả năng tài chính trước
            khi đăng ký bất kỳ sản phẩm nào.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-50 py-12 px-4 text-center">
        <p className="text-gray-600 mb-4">Có câu hỏi hoặc muốn hợp tác với FinLef?</p>
        <Link
          href="/lien-he"
          className="inline-block bg-[#00543D] hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
        >
          Liên hệ với chúng tôi
        </Link>
      </section>
    </div>
  );
}
