import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều Khoản Sử Dụng",
  description:
    "Điều khoản sử dụng dịch vụ finlef.com – quy định về việc sử dụng nền tảng thông tin tài chính của chúng tôi.",
  alternates: { canonical: "https://finlef.com/dieu-khoan-su-dung" },
};

const UPDATED = "12/05/2025";
const EMAIL = "info@finlef.com";

export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Điều Khoản Sử Dụng</h1>
        <p className="text-gray-400 text-sm mb-10">Cập nhật lần cuối: {UPDATED}</p>

        <div className="space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Chấp nhận điều khoản</h2>
            <p>
              Khi truy cập và sử dụng website finlef.com, bạn đồng ý bị ràng buộc bởi các điều khoản và điều kiện sử dụng này. Nếu không đồng ý với bất kỳ điều khoản nào, vui lòng không sử dụng website của chúng tôi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Tính chất dịch vụ</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-4">
              <p className="font-semibold text-gray-800 mb-2">⚠️ Quan trọng – Không phải tư vấn tài chính</p>
              <p className="text-sm">
                finlef.com là nền tảng cung cấp thông tin về sản phẩm tài chính. Thông tin trên website <strong>không phải</strong> là tư vấn tài chính, đầu tư, pháp lý hay thuế chuyên nghiệp. Bạn nên tham khảo chuyên gia tài chính có chuyên môn trước khi đưa ra quyết định tài chính quan trọng.
              </p>
            </div>
            <p>
              FinLef có quan hệ đối tác với các ngân hàng và tổ chức tài chính được liệt kê trên website. Dịch vụ thông tin của FinLef hoàn toàn miễn phí với người dùng.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Độ chính xác của thông tin</h2>
            <p className="mb-3">
              Chúng tôi nỗ lực đảm bảo thông tin trên FinLef là chính xác và cập nhật. Tuy nhiên:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Lãi suất, phí và điều kiện sản phẩm có thể thay đổi theo thời gian mà không báo trước</li>
              <li>Thông tin chính xác nhất luôn là từ trang web chính thức của ngân hàng/tổ chức tài chính</li>
              <li>FinLef không đảm bảo kết quả duyệt hồ sơ – việc phê duyệt do ngân hàng quyết định</li>
              <li>Chúng tôi không chịu trách nhiệm cho bất kỳ tổn thất nào phát sinh từ việc sử dụng thông tin trên website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Điều kiện sử dụng</h2>
            <p className="mb-3">Bạn đồng ý:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Chỉ sử dụng website cho mục đích hợp pháp</li>
              <li>Không cố gắng truy cập trái phép vào hệ thống</li>
              <li>Không sao chép, phân phối nội dung mà không có sự cho phép</li>
              <li>Không sử dụng công cụ tự động để thu thập dữ liệu (scraping)</li>
              <li>Cung cấp thông tin chính xác khi điền form liên hệ</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Quyền sở hữu trí tuệ</h2>
            <p>
              Toàn bộ nội dung trên FinLef bao gồm văn bản, hình ảnh, logo, thiết kế và code là tài sản của finlef.com và được bảo vệ bởi luật sở hữu trí tuệ. Bạn không được sao chép, tái bản hay sử dụng thương mại mà không có sự đồng ý bằng văn bản từ chúng tôi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Giới hạn trách nhiệm</h2>
            <p className="mb-3">
              Trong phạm vi pháp luật cho phép, finlef.com không chịu trách nhiệm về:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Quyết định tài chính của người dùng dựa trên thông tin từ website</li>
              <li>Tổn thất tài chính phát sinh từ việc sử dụng sản phẩm được giới thiệu</li>
              <li>Sự gián đoạn hoặc lỗi kỹ thuật của website</li>
              <li>Nội dung và hoạt động của các trang web bên thứ ba được liên kết</li>
              <li>Việc ngân hàng từ chối hồ sơ đăng ký</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Liên kết bên ngoài</h2>
            <p>
              Website có thể chứa liên kết đến các trang web của ngân hàng, tổ chức tài chính và đối tác. FinLef không kiểm soát và không chịu trách nhiệm về nội dung, chính sách bảo mật hay hoạt động của các trang web đó.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Thay đổi dịch vụ</h2>
            <p>
              FinLef có quyền thay đổi, tạm ngừng hoặc chấm dứt dịch vụ bất kỳ lúc nào mà không cần báo trước. Chúng tôi cũng có thể cập nhật điều khoản này; phiên bản mới nhất luôn được đăng tại trang này.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Luật áp dụng</h2>
            <p>
              Điều khoản này được điều chỉnh theo pháp luật hiện hành. Mọi tranh chấp phát sinh sẽ được giải quyết tại tòa án có thẩm quyền.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Liên hệ</h2>
            <p>Nếu có câu hỏi về điều khoản sử dụng, vui lòng liên hệ:</p>
            <div className="mt-3 bg-gray-50 rounded-xl p-4 text-sm">
              <p><strong>finlef.com</strong></p>
              <p>Email: {EMAIL}</p>
              <p>Website: https://finlef.com</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
