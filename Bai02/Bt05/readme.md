# Learning Goal App – Bt05

## 1. Giới thiệu bài tập

Xây dựng ứng dụng **Learning Goal App** bằng React Native (Expo) nhằm theo dõi tiến độ thực hiện mục tiêu học tập.

Ứng dụng giúp người dùng theo dõi số buổi học đã hoàn thành, cập nhật phần trăm tiến độ và hiển thị thông báo khi hoàn thành mục tiêu.

## 2. Yêu cầu bài tập

- Tạo ứng dụng theo dõi mục tiêu học tập hoặc rèn luyện.
- Có thẻ hiển thị tiến độ.
- Có nút bắt đầu thực hiện mục tiêu.
- Có thông báo khi hoàn thành mục tiêu.
- Khi nhấn nút, một thành phần phải xuất hiện, phóng to hoặc di chuyển có hiệu ứng.
- Tách giao diện thành 3 Component: `ProgressCard`, `ActionButton`, `AnimatedMessage`.

## 3. Công nghệ sử dụng

- React Native.
- Expo Snack.
- JavaScript.
- React Hooks: `useState`, `useEffect`, `useRef`.
- Animated API để tạo hiệu ứng chuyển động.
- StyleSheet để thiết kế giao diện.

## 4. Cấu trúc thư mục

```text
Bt05
│
├── App.js
├── ActionButton.js
├── AnimatedMessage.js
├── ProgressCard.js
├── package.json
└── README.md
```

## 5. Chức năng các Component

### 5.1. App.js

- Là Component chính của ứng dụng.
- Quản lý trạng thái tiến độ học tập bằng `useState`.
- Xử lý sự kiện khi người dùng nhấn nút.
- Tăng tiến độ mỗi lần nhấn thêm 25%.
- Kết nối và hiển thị 3 Component còn lại.

### 5.2. ProgressCard.js

- Hiển thị thẻ mục tiêu học tập.
- Hiển thị nội dung mục tiêu hoàn thành 4 buổi học React Native.
- Hiển thị phần trăm tiến độ.
- Hiển thị thanh tiến độ và số buổi học đã hoàn thành.

### 5.3. ActionButton.js

- Tạo nút bắt đầu học.
- Cho phép người dùng tiếp tục cập nhật tiến độ.
- Khi đạt 100%, nút chuyển sang trạng thái đã hoàn thành và không thể nhấn tiếp.

### 5.4. AnimatedMessage.js

- Hiển thị thông báo động khi người dùng nhấn nút.
- Sử dụng `Animated.spring()` để tạo hiệu ứng phóng to.
- Sử dụng `Animated.timing()` để tạo hiệu ứng xuất hiện và di chuyển.
- Hiển thị lời động viên khi đang thực hiện mục tiêu.
- Hiển thị lời chúc mừng khi hoàn thành 100%.

## 6. Cách chạy chương trình

### Bước 1. Mở ứng dụng

Truy cập Expo Snack:

https://snack.expo.dev/

### Bước 2. Tạo các tập tin

Tạo các tập tin:
- `App.js`
- `ActionButton.js`
- `AnimatedMessage.js`
- `ProgressCard.js`

Nhập code tương ứng vào từng tập tin.

### Bước 3. Chạy chương trình

- Nhấn nút Save để lưu chương trình.
- Chọn Web hoặc Android để xem kết quả.
- Chờ Expo Snack biên dịch và hiển thị ứng dụng.

**Link ứng dụng Expo Snack:** 

[[Thêm link Expo Snack của bài Bt05 tại đây]](https://snack.expo.dev/@thanhphuc79/animate-app)

## 7. Kết quả thực hiện

Ứng dụng hiển thị giao diện Learning Goal với mục tiêu hoàn thành 4 buổi học React Native.

Khi nhấn nút BẮT ĐẦU HỌC hoặc TIẾP TỤC HỌC:
- Lần 1: Tiến độ đạt 25%.
- Lần 2: Tiến độ đạt 50%.
- Lần 3: Tiến độ đạt 75%.
- Lần 4: Tiến độ đạt 100%.

Trong quá trình cập nhật tiến độ, thông báo xuất hiện với hiệu ứng phóng to và di chuyển. Khi đạt 100%, ứng dụng hiển thị thông báo CHÚC MỪNG và nút ĐÃ HOÀN THÀNH.

## 8. Hình ảnh kết quả

### Hình 1. Giao diện ứng dụng

<img width="978" height="647" alt="image" src="https://github.com/user-attachments/assets/503048ed-3946-4d14-a034-3cb313fb64fd" />


### Hình 2. Tiến độ học tập

<img width="956" height="646" alt="image" src="https://github.com/user-attachments/assets/3b02954d-4929-4580-bc2c-a0a39f530662" />

<img width="964" height="650" alt="image" src="https://github.com/user-attachments/assets/8417b522-881d-41d6-add3-e43ce82fd528" />

<img width="968" height="646" alt="image" src="https://github.com/user-attachments/assets/6fab0446-c71b-4791-ae34-dc691f207d42" />

<img width="958" height="635" alt="image" src="https://github.com/user-attachments/assets/b1149e2b-c596-482f-927b-ce086e55bb7c" />


### Hình 3. Thông báo hoàn thành

<img width="962" height="641" alt="image" src="https://github.com/user-attachments/assets/5969af00-87f0-4bb0-8374-0970edcbde58" />


## 9. Kết luận

Thông qua bài thực hành, đã xây dựng được ứng dụng Learning Goal bằng React Native (Expo).

Ứng dụng đáp ứng các yêu cầu của bài tập: hiển thị thẻ tiến độ, nút bắt đầu, thông báo hoàn thành, sử dụng hiệu ứng Animated và tách giao diện thành 3 Component riêng biệt.

Qua đó, thực hành được cách sử dụng Component, Props, State, React Hooks và Animated API trong React Native.
