import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">

        {/* Number */}
        <div className="relative mb-6">
          <span className="text-[160px] lg:text-[200px] font-bold leading-none text-gray-100 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-[#00543D] flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
          </div>
        </div>

        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
          Trang không tồn tại
        </h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Trang bạn đang tìm kiếm đã bị xóa, đổi tên hoặc không tồn tại.
          Hãy quay lại trang chủ để khám phá các sản phẩm tài chính.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-block bg-[#00543D] hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            Về trang chủ
          </Link>
          <Link
            href="/mo-the-tin-dung-vpbank-online"
            className="inline-block border border-gray-200 hover:border-green-300 text-gray-700 hover:text-[#00543D] font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            Xem thẻ tín dụng VPBank
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400 mb-4">Hoặc truy cập nhanh</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { href: "/gioi-thieu", label: "Giới thiệu" },
              { href: "/lien-he", label: "Liên hệ" },
              { href: "/chinh-sach-bao-mat", label: "Chính sách bảo mật" },
              { href: "/dieu-khoan-su-dung", label: "Điều khoản" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-gray-500 hover:text-[#00543D] bg-gray-50 hover:bg-green-50 px-4 py-2 rounded-full transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
