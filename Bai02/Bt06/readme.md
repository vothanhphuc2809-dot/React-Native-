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
- Hiển thị thông tin
