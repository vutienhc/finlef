import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính Sách Bảo Mật",
  description:
    "Chính sách bảo mật của finlef.com – cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn.",
  alternates: { canonical: "https://finlef.com/chinh-sach-bao-mat" },
};

const UPDATED = "12/05/2025";
const EMAIL = "info@finlef.com";

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Chính Sách Bảo Mật</h1>
        <p className="text-gray-400 text-sm mb-10">Cập nhật lần cuối: {UPDATED}</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Giới thiệu</h2>
            <p>
              finlef.com ("chúng tôi", "của chúng tôi") tôn trọng quyền riêng tư của bạn và cam kết bảo vệ thông tin cá nhân mà bạn chia sẻ với chúng tôi. Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin đó khi bạn sử dụng website finlef.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Thông tin chúng tôi thu thập</h2>
            <h3 className="font-semibold text-gray-800 mb-2">2.1 Thông tin bạn cung cấp trực tiếp</h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Họ tên, địa chỉ email khi liên hệ với chúng tôi</li>
              <li>Thông tin trong form đăng ký tư vấn (nếu có)</li>
            </ul>
            <h3 className="font-semibold text-gray-800 mb-2">2.2 Thông tin thu thập tự động</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Địa chỉ IP, loại trình duyệt, thiết bị sử dụng</li>
              <li>Trang bạn truy cập, thời gian truy cập, đường dẫn điều hướng</li>
              <li>Dữ liệu từ cookies và công nghệ theo dõi tương tự</li>
              <li>Nguồn truy cập (công cụ tìm kiếm, mạng xã hội, quảng cáo)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Mục đích sử dụng thông tin</h2>
            <p className="mb-3">Chúng tôi sử dụng thông tin thu thập để:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Cung cấp và cải thiện dịch vụ thông tin tài chính</li>
              <li>Phân tích hành vi người dùng để tối ưu trải nghiệm</li>
              <li>Đo lường hiệu quả quảng cáo (Google Ads, Facebook Ads)</li>
              <li>Phát hiện và ngăn chặn hoạt động gian lận</li>
              <li>Tuân thủ các nghĩa vụ pháp lý</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Cookies và công nghệ theo dõi</h2>
            <p className="mb-3">
              FinLef sử dụng cookies và các công nghệ tương tự. Bạn có thể kiểm soát cookies thông qua cài đặt trình duyệt.
            </p>
            <h3 className="font-semibold text-gray-800 mb-2">Các loại cookie chúng tôi sử dụng:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Cookie thiết yếu:</strong> Cần thiết để website hoạt động đúng</li>
              <li><strong>Cookie phân tích:</strong> Google Analytics để phân tích lưu lượng truy cập</li>
              <li><strong>Cookie quảng cáo:</strong> Google Ads, Facebook Pixel để đo lường và tối ưu quảng cáo</li>
              <li><strong>Cookie đối tác:</strong> Theo dõi lượt chuyển đổi từ các liên kết đến trang ngân hàng</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Chia sẻ thông tin với bên thứ ba</h2>
            <p className="mb-3">Chúng tôi <strong>không bán</strong> thông tin cá nhân của bạn. Chúng tôi có thể chia sẻ thông tin với:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Đối tác ngân hàng/tài chính:</strong> Khi bạn click liên kết và được chuyển đến trang đăng ký của đối tác, họ sẽ thu thập thông tin theo chính sách riêng của họ</li>
              <li><strong>Nhà cung cấp dịch vụ phân tích:</strong> Google Analytics, Google Ads, Meta (Facebook) Pixel</li>
              <li><strong>Cơ quan pháp luật:</strong> Khi có yêu cầu hợp pháp</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Bảo mật thông tin</h2>
            <p>
              Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức phù hợp để bảo vệ thông tin của bạn, bao gồm kết nối HTTPS, giới hạn quyền truy cập nội bộ và theo dõi bảo mật thường xuyên. Tuy nhiên, không có phương thức truyền tải qua internet nào là an toàn tuyệt đối.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Quyền của bạn</h2>
            <p className="mb-3">Bạn có quyền:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Yêu cầu truy cập thông tin cá nhân chúng tôi đang lưu về bạn</li>
              <li>Yêu cầu chỉnh sửa thông tin không chính xác</li>
              <li>Yêu cầu xóa thông tin của bạn</li>
              <li>Từ chối nhận email tiếp thị (nếu có)</li>
              <li>Tắt cookies theo dõi qua cài đặt trình duyệt</li>
            </ul>
            <p className="mt-3">
              Để thực hiện các quyền trên, liên hệ chúng tôi qua email: <strong>{EMAIL}</strong>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Link đến trang web bên thứ ba</h2>
            <p>
              Website của chúng tôi chứa liên kết đến các trang web của ngân hàng và đối tác. Khi bạn click vào những liên kết này, bạn sẽ rời khỏi FinLef và chính sách bảo mật của họ sẽ áp dụng. Chúng tôi không chịu trách nhiệm về nội dung và cách xử lý dữ liệu của các trang web đó.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Thay đổi chính sách</h2>
            <p>
              Chúng tôi có thể cập nhật chính sách này theo thời gian. Phiên bản mới nhất sẽ luôn có trên trang này với ngày cập nhật rõ ràng. Việc tiếp tục sử dụng website sau khi thay đổi đồng nghĩa với việc bạn chấp nhận chính sách mới.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Liên hệ</h2>
            <p>
              Nếu có câu hỏi về chính sách bảo mật, vui lòng liên hệ:
            </p>
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
