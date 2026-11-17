# Study Schedule - Ứng dụng quản lý lịch học

## 1. Giới thiệu bài tập

Xây dựng ứng dụng Study Schedule bằng React Native (Expo) nhằm quản lý và hiển thị lịch học của sinh viên.

Ứng dụng có các chức năng:
- Hiển thị tên ứng dụng và tên sinh viên.
- Hiển thị lịch 7 ngày trong tuần.
- Hiển thị danh sách môn học theo từng ngày.
- Hiển thị tên môn học, giờ học, phòng học và giảng viên.
- Sử dụng màu sắc để phân biệt các môn học.
- Cho phép chọn ngày và tự động cập nhật danh sách lịch học.
- Hiển thị thông báo khi ngày được chọn không có lịch học.

## 2. Các Component sử dụng

Ứng dụng được chia thành 4 Component:

- **App.js:** Component chính, quản lý ngày được chọn, lọc và hiển thị danh sách lịch học.
- **Header.js:** Hiển thị tên ứng dụng STUDY SCHEDULE và tên sinh viên VÕ THÀNH PHÚC.
- **WeekCalendar.js:** Hiển thị 7 ngày trong tuần theo hàng ngang và cho phép chọn ngày.
- **ScheduleCard.js:** Hiển thị thông tin từng môn học gồm tên môn, giờ học, phòng học và giảng viên.

## 3. Cấu trúc thư mục

```text
StudySchedule/
│
├── App.js
│
├── components/
│   ├── Header.js
│   ├── WeekCalendar.js
│   └── ScheduleCard.js
│
├── assets/
├── package.json
└── README.md
```

## 4. Các chức năng chính

### 4.1. Hiển thị giao diện lịch học
- Thiết kế giao diện màu xanh, trắng.
- Hiển thị thông tin sinh viên.
- Hiển thị lịch học theo từng ngày.

### 4.2. Hiển thị lịch 7 ngày
- Sử dụng WeekCalendar để hiển thị từ thứ 2 đến chủ nhật.
- Ngày được chọn có màu sắc nổi bật.

### 4.3. Hiển thị danh sách môn học
- Sử dụng ScheduleCard để hiển thị từng môn học.
- Mỗi môn học có màu sắc riêng.
- Hiển thị giờ học, phòng học và giảng viên.

### 4.4. Thay đổi ngày và cập nhật lịch học
Sử dụng useState để lưu ngày được chọn:

```javascript
const [selectedDay, setSelectedDay] = useState(1);
```

Sử dụng filter() để lọc danh sách môn học theo ngày:

```javascript
const todaySchedules = schedules.filter(
  item => item.day === selectedDay
);
```

Khi người dùng nhấn chọn ngày khác, danh sách môn học sẽ tự động thay đổi tương ứng.

### 4.5. Thông báo ngày không có lịch học
Khi ngày được chọn không có môn học, ứng dụng hiển thị thông báo:

- Hôm nay không có lịch học!
- Bạn có thể nghỉ ngơi hoặc tự học nhé.

## 5. Công nghệ sử dụng

- React Native.
- Expo Snack.
- JavaScript.
- React Hooks (useState).
- StyleSheet.
- ScrollView.
- TouchableOpacity.


## 6. Kết quả đạt được

Sau khi hoàn thành, ứng dụng có thể:
- Hiển thị giao diện lịch học đẹp, dễ nhìn.
- Hiển thị đầy đủ 7 ngày trong tuần.
- Hiển thị 6 lịch học mẫu.
- Phân biệt các môn học bằng màu sắc.
- Thay đổi ngày và cập nhật danh sách môn học.
- Hiển thị thông báo khi ngày không có lịch học.

## 7. Hình ảnh giao diện ứng dụng

### 7.1. Giao diện chính

<img width="567" height="647" alt="image" src="https://github.com/user-attachments/assets/d3047394-5128-4833-bdd8-7bcbe09e033b" />


### 7.2. Giao diện lịch học theo ngày

<img width="561" height="358" alt="image" src="https://github.com/user-attachments/assets/9f8e65b6-708d-4d1c-9fae-d6e1a2fa0286" />


### 7.3. Giao diện khi thay đổi ngày

<img width="569" height="535" alt="image" src="https://github.com/user-attachments/assets/0dc45282-d02a-4799-88e0-88cdc57f96c6" />

<img width="563" height="430" alt="image" src="https://github.com/user-attachments/assets/ad322495-8e3b-41fb-958c-952517b32355" />

<img width="577" height="452" alt="image" src="https://github.com/user-attachments/assets/b565704d-da70-4444-a18f-c5cca413303f" />

<img width="572" height="448" alt="image" src="https://github.com/user-attachments/assets/86fea35f-740a-498a-a50d-9e6eee8da805" />

<img width="572" height="443" alt="image" src="https://github.com/user-attachments/assets/7623daa0-5092-4a9e-98ad-5ab2576f9f1b" />


### 7.4. Thông báo ngày không có lịch học

<img width="555" height="497" alt="image" src="https://github.com/user-attachments/assets/2a05120f-a261-43dd-9f8f-25a629d7c2fb" />

<img width="572" height="495" alt="image" src="https://github.com/user-attachments/assets/9413a679-2ff8-4eaa-a21d-5b00edab3417" />


## 8. Link ứng dụng Expo Snack

[https://snack.expo.dev/@thanhphuc79/-schedule-app](https://snack.expo.dev/@thanhphuc79/-schedule-app)

## 9. Kết luận

Thông qua bài thực hành, em đã biết cách xây dựng giao diện ứng dụng bằng React Native, chia chương trình thành các Component, sử dụng useState để quản lý trạng thái và filter() để lọc dữ liệu theo ngày.

Ứng dụng đáp ứng các yêu cầu của bài thực hành xây dựng giao diện quản lý lịch học.
