export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
}
export const listPost: Post[] = [
  {
    id: "1",
    title: "Bắt đầu với React",
    excerpt: "Giới thiệu về React và cách khởi tạo dự án đầu tiên...",
    content:
      "React là thư viện JavaScript phổ biến để xây dựng giao diện người dùng. Nó cho phép bạn tạo ứng dụng theo dạng component, dễ tái sử dụng và bảo trì. Khi mới bắt đầu, bạn có thể dùng Vite hoặc Create React App để khởi tạo dự án nhanh chóng. React giúp đơn giản hóa việc quản lý UI động và logic phức tạp.",
  },
  {
    id: "2",
    title: "Sử dụng TailwindCSS",
    excerpt: "Tailwind giúp bạn viết CSS nhanh chóng và tiện lợi hơn...",
    content:
      "TailwindCSS là framework CSS tiện lợi dựa trên utility classes. Thay vì viết CSS riêng, bạn có thể kết hợp các class dựng sẵn trực tiếp trong JSX. Điều này giúp phát triển UI nhanh hơn và dễ dàng duy trì sự nhất quán. Bạn cũng có thể tùy chỉnh theme và cấu hình theo nhu cầu dự án.",
  },
  {
    id: "3",
    title: "Giới thiệu về React Router",
    excerpt: "Điều hướng trong React với React Router DOM một cách dễ dàng...",
    content:
      "React Router DOM giúp tạo ứng dụng một trang (SPA) với điều hướng linh hoạt. Nó hỗ trợ nested routes, params, và điều hướng động. Bạn có thể sử dụng Link hoặc NavLink để di chuyển giữa các trang mà không cần reload. Đây là công cụ quan trọng khi xây dựng ứng dụng web phức tạp.",
  },
  {
    id: "4",
    title: "Quản lý state với Redux",
    excerpt: "Redux giúp quản lý state tập trung, dễ dàng mở rộng ứng dụng...",
    content:
      "Redux là thư viện quản lý state phổ biến trong hệ sinh thái React. Nó lưu toàn bộ state của ứng dụng trong một store duy nhất. Thông qua actions và reducers, bạn có thể kiểm soát logic cập nhật state rõ ràng. Redux đặc biệt hữu ích cho ứng dụng lớn, nơi nhiều component cần chia sẻ dữ liệu.",
  },
  {
    id: "5",
    title: "Hooks trong React",
    excerpt: "useState, useEffect và các hook phổ biến trong React...",
    content:
      "Hooks giúp bạn viết logic linh hoạt trong function component. useState cho phép quản lý state, trong khi useEffect xử lý side effects như fetch API. Ngoài ra, bạn còn có useContext, useReducer, useMemo để tối ưu hiệu suất và tổ chức code. Hooks thay thế cho class component trong hầu hết trường hợp hiện nay.",
  },
  {
    id: "6",
    title: "TypeScript với React",
    excerpt: "TypeScript giúp viết code React an toàn và dễ bảo trì hơn...",
    content:
      "TypeScript bổ sung kiểu dữ liệu tĩnh cho JavaScript, giúp bạn tránh nhiều lỗi runtime. Khi kết hợp với React, bạn có thể định nghĩa props, state và hooks một cách rõ ràng. Điều này cải thiện trải nghiệm phát triển và làm cho dự án dễ mở rộng. Các IDE cũng hỗ trợ gợi ý code và kiểm tra lỗi tốt hơn.",
  },
  {
    id: "7",
    title: "Context API trong React",
    excerpt: "Truyền dữ liệu giữa các component mà không cần props drilling...",
    content:
      "Context API là công cụ tích hợp sẵn của React để chia sẻ dữ liệu toàn cục. Thay vì truyền props qua nhiều cấp component, bạn có thể sử dụng Provider và Consumer. Điều này giúp code gọn gàng và dễ hiểu hơn. Context API thường dùng cho theme, ngôn ngữ, hoặc thông tin người dùng đăng nhập.",
  },
];
