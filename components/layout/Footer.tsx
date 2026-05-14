import Link from "next/link";
import Image from "next/image";

const productLinks = [
  { href: "/mo-the-tin-dung-online", label: "Mở thẻ tín dụng online" },
  { href: "/mo-the-tin-dung-vpbank-online", label: "↳ Thẻ tín dụng VPBank" },
  { href: "/mo-the-tin-dung-vib-online", label: "↳ Thẻ tín dụng VIB" },
  { href: "/vay-tien-online", label: "Vay tiền online" },
  { href: "/vay-tien-meo-online", label: "↳ Vay Tiền – VayMèo" },
  { href: "/vay-tien-finzone-online", label: "↳ Vay Tiền – FinZone" },
  { href: "/vay-tien-crezu-online", label: "↳ Vay Tiền – Crezu" },
  { href: "/vay-tien-f88-online", label: "↳ Vay Tiền – F88" },
  { href: "/vay-tien-cashspace-online", label: "↳ Vay Tiền – CashSpace" },
  { href: "/vay-tien-vayvnd-online", label: "↳ Vay Tiền – VayVND" },
];

const companyLinks = [
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/lien-he", label: "Liên hệ" },
];

const legalLinks = [
  { href: "/chinh-sach-bao-mat", label: "Chính sách bảo mật" },
  { href: "/dieu-khoan-su-dung", label: "Điều khoản sử dụng" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Image src="/logo.png" alt="FinLef logo" width={32} height={32} />
              <span className="text-3xl font-bold text-white">
                fin<span className="text-green-400">lef</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Thông tin tài chính tin cậy. Giúp bạn tìm và đăng ký thẻ tín dụng, vay tiền phù hợp nhất.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Sản phẩm</h4>
            <ul className="space-y-2">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Thông tin</h4>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Pháp lý</h4>
            <ul className="space-y-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 space-y-4">
          <p className="text-xs leading-relaxed">
            <strong className="text-gray-300">Tuyên bố miễn trách nhiệm:</strong> finlef.com là website cung cấp thông tin về các sản phẩm tài chính từ các ngân hàng và tổ chức tài chính. Thông tin trên trang mang tính chất tham khảo, không phải tư vấn tài chính chính thức. Người dùng cần tự đánh giá và chịu trách nhiệm với quyết định tài chính của mình.
          </p>
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} finlef.com. Bảo lưu mọi quyền. Email: info@finlef.com
          </p>
        </div>
      </div>
    </footer>
  );
}
