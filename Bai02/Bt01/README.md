# BÀI TẬP 1: THIẾT KẾ GIAO DIỆN REACT NATIVE

## 1. Thông tin bài tập

- **Tên ứng dụng:** MyApp_V2
- **Tên đề tài:** QUẢN LÝ CỬA HÀNG BÁNH NGỌT
- **Môn học:** Xây dựng giao diện ứng dụng với React Native
- **Công nghệ:** React Native, JavaScript, Expo.
- **Công cụ:** Visual Studio Code, Node.js, Expo Go.

## 2. Giới thiệu ứng dụng

Ứng dụng QUẢN LÝ CỬA HÀNG BÁNH NGỌT được xây dựng bằng React Native nhằm giới thiệu các sản phẩm bánh và thông tin của cửa hàng.

Ứng dụng có giao diện thân thiện, dễ sử dụng, gồm trang chủ, danh sách sản phẩm và thông tin cửa hàng.

## 3. Các Component trong ứng dụng

| Component | Chức năng |
|---|---|
| App | Component gốc, kết hợp các thành phần giao diện |
| Header | Hiển thị tiêu đề ứng dụng |
| ProductItem | Hiển thị tên và giá của từng loại bánh |
| ProductList | Hiển thị danh sách 8 sản phẩm |
| StoreInfo | Hiển thị thông tin cửa hàng |
| TabBar | Thanh điều hướng giữa các màn hình |

## 4. Danh sách sản phẩm

1. Bánh kem: 150.000đ
2. Bánh bông lan: 50.000đ
3. Bánh cupcake: 30.000đ
4. Bánh tiramisu: 80.000đ
5. Bánh su kem: 25.000đ
6. Bánh flan: 15.000đ
7. Bánh macaron: 40.000đ
8. Bánh chocolate: 100.000đ

## 5. Các đoạn code Component

### 5.1. Component Header

```jsx
import React from 'react';
import { View, Text } from 'react-native';

export default function Header() {
  return (
    <View>
      <Text>QUẢN LÝ CỬA HÀNG BÁNH NGỌT</Text>
    </View>
  );
}
```

### 5.2. Component TabBar

```jsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function TabBar({ setScreen }) {
  return (
    <View>
      <TouchableOpacity onPress={() => setScreen('home')}>
        <Text>Trang chủ</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setScreen('cake')}>
        <Text>Món bánh</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setScreen('manage')}>
        <Text>Quản lý</Text>
      </TouchableOpacity>
    </View>
  );
}
```

### 5.3. Các Component còn lại

- App: Kết hợp Header, ProductList, StoreInfo và TabBar.
- ProductItem: Hiển thị thông tin một sản phẩm bánh.
- ProductList: Sử dụng danh sách sản phẩm để hiển thị 8 loại bánh.
- StoreInfo: Hiển thị thông tin liên hệ của cửa hàng.

## 6. Hình ảnh giao diện ứng dụng

### Hình 1: Giao diện trang chủ

[CHÈN ẢNH CHỤP GIAO DIỆN TRANG CHỦ TẠI ĐÂY]

### Hình 2: Giao diện danh sách sản phẩm

[CHÈN ẢNH CHỤP DANH SÁCH 8 LOẠI BÁNH TẠI ĐÂY]

### Hình 3: Giao diện thông tin cửa hàng

[CHÈN ẢNH CHỤP THÔNG TIN CỬA HÀNG TẠI ĐÂY]

### Hình 4: Giao diện các Component

[CHÈN ẢNH CODE VÀ CÁC COMPONENT TẠI ĐÂY]

## 7. Link ứng dụng Expo

- Tên ứng dụng: MyApp_V2
- Link Expo: [DÁN LINK EXPO SAU KHI CHẠY ỨNG DỤNG]

## 8. Kết quả thực hiện

Sau khi hoàn thành bài thực hành, em đã biết cách xây dựng giao diện ứng dụng bằng React Native, tạo và sử dụng các Component, tổ chức mã nguồn thành nhiều tập tin và thiết kế thanh điều hướng giữa các màn hình.

Ứng dụng QUẢN LÝ CỬA HÀNG BÁNH NGỌT đã được xây dựng nhằm đáp ứng các yêu cầu của bài thực hành.

## 9. Link GitHub

- Repository: React-Native
- Thư mục bài tập: Bai02/Bt01
- Link GitHub Bt01: [DÁN LINK GITHUB Bt01 TẠI ĐÂY]
