  # BÀI TẬP 1 - THIẾT KẾ GIAO DIỆN REACT NATIVE

# QUẢN LÝ CỬA HÀNG BÁNH NGỌT - SWEET CAKE

## 1. Thông tin ứng dụng

- Tên ứng dụng: MyApp_V2
- Tên đề tài: QUẢN LÝ CỬA HÀNG BÁNH NGỌT
- Công nghệ: React Native
- Ngôn ngữ lập trình: JavaScript
- Nền tảng chạy ứng dụng: Expo Snack
- Giao diện: Expo Web, Android, iOS

## 2. Giới thiệu ứng dụng

Ứng dụng SWEET CAKE được xây dựng bằng React Native trên nền tảng Expo Snack.

Ứng dụng giới thiệu các loại bánh ngọt, hiển thị giá sản phẩm, danh mục bánh và thông tin cửa hàng.

Giao diện sử dụng tông màu hồng pastel, trắng và nâu, tạo cảm giác nhẹ nhàng, thân thiện và dễ sử dụng.

## 3. Các chức năng chính

- Hiển thị tên cửa hàng SWEET CAKE.
- Hiển thị banner giới thiệu cửa hàng.
- Hiển thị danh sách 8 loại bánh.
- Phân loại sản phẩm theo danh mục.
- Hiển thị tên và giá từng sản phẩm.
- Có nút đặt bánh.
- Hiển thị thông tin cửa hàng.
- Hiển thị thông tin liên hệ và địa chỉ.

## 4. Danh sách sản phẩm

| STT | Tên sản phẩm | Giá |
|---|---|---|
| 1 | Bánh kem | 150.000đ |
| 2 | Bánh bông lan | 50.000đ |
| 3 | Bánh cupcake | 30.000đ |
| 4 | Bánh tiramisu | 80.000đ |
| 5 | Bánh su kem | 25.000đ |
| 6 | Bánh flan | 15.000đ |
| 7 | Bánh macaron | 40.000đ |
| 8 | Bánh chocolate | 100.000đ |

## 5. Các Component trong ứng dụng

| Component | Chức năng |
|---|---|
| App.js | Component chính, quản lý giao diện ứng dụng, khai báo danh sách 8 loại bánh và kết hợp các Component để hiển thị nội dung. |
| Header.js | Hiển thị phần đầu ứng dụng gồm tên cửa hàng SWEET CAKE, biểu tượng bánh và biểu tượng giỏ hàng. |
| CakeList.js | Hiển thị danh sách các loại bánh, bao gồm tên bánh và giá tiền của từng sản phẩm.|
| TabBar | Tạo thanh điều hướng gồm 3 nút Trang chủ, Món bánh và Quản lý, cho phép người dùng chuyển đổi giữa các màn hình. |
## 6. Công nghệ sử dụng

- React Native: Xây dựng giao diện ứng dụng.
- JavaScript: Xử lý dữ liệu và chức năng.
- Expo Snack: Viết code và chạy thử ứng dụng.
- StyleSheet: Thiết kế màu sắc, kích thước và bố cục giao diện.
- useState: Quản lý trạng thái danh mục sản phẩm.

## 7. Link ứng dụng Expo

**Tên ứng dụng:** MyApp_V2

**Link Expo Snack:**

[https://snack.expo.dev/@thanhphuc79/myapp_v2](https://snack.expo.dev/@thanhphuc79/myapp_v2)

## 8. Hình ảnh kết quả thực hiện

### Hình 1: Giao diện trang chủ

<img width="867" height="418" alt="image" src="https://github.com/user-attachments/assets/6a495aa5-a871-41c6-8f53-dabbe66eca4a" />


### Hình 2: Giao diện danh sách sản phẩm

<img width="825" height="593" alt="image" src="https://github.com/user-attachments/assets/7f41443e-2187-4a7a-8940-2d5948dc7b85" />


### Hình 3: Giao diện thông tin cửa hàng

<img width="792" height="259" alt="image" src="https://github.com/user-attachments/assets/c14ed20c-b174-487b-b2f6-540fbc7ab30f" />


### Hình 4: Code chương trình

 **APP.JS **

import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';

const cakes = [
  { id: 1, name: 'Bánh kem', price: '150.000đ', emoji: '🎂', category: 'Bánh kem', color: '#FCE4EC' },
  { id: 2, name: 'Bánh bông lan', price: '50.000đ', emoji: '🍰', category: 'Bánh ngọt', color: '#FFF0D9' },
  { id: 3, name: 'Bánh cupcake', price: '30.000đ', emoji: '🧁', category: 'Bánh ngọt', color: '#F9E4F5' },
  { id: 4, name: 'Bánh tiramisu', price: '80.000đ', emoji: '🍮', category: 'Bánh ngọt', color: '#EDE0D4' },
  { id: 5, name: 'Bánh su kem', price: '25.000đ', emoji: '🥐', category: 'Bánh ngọt', color: '#FFF1D6' },
  { id: 6, name: 'Bánh flan', price: '15.000đ', emoji: '🍮', category: 'Bánh ngọt', color: '#FFF0B8' },
  { id: 7, name: 'Bánh macaron', price: '40.000đ', emoji: '🍪', category: 'Bánh ngọt', color: '#E8E5FF' },
  { id: 8, name: 'Bánh chocolate', price: '100.000đ', emoji: '🍫', category: 'Bánh kem', color: '#F2DFD2' },
];

export default function App() {
  const [category, setCategory] = useState('Tất cả');

  const filteredCakes = category === 'Tất cả'
    ? cakes
    : cakes.filter(item => item.category === category);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF7F3" barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>🍰 SWEET CAKE</Text>
            <Text style={styles.headerSub}>Tiệm bánh ngọt yêu thương</Text>
          </View>
          <View style={styles.cart}>
            <Text style={{ fontSize: 23 }}>🛍️</Text>
          </View>
        </View>

        {/* BANNER */}
        <View style={styles.banner}>
          <View style={styles.bannerText}>
            <Text style={styles.bannerSmall}>CHÀO MỪNG BẠN ĐẾN</Text>
            <Text style={styles.bannerTitle}>
              Thế giới{'\n'}bánh ngọt!
            </Text>
            <Text style={styles.bannerDesc}>
              Ngọt ngào trong từng chiếc bánh ❤️
            </Text>
            <View style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>
                Tươi ngon mỗi ngày
              </Text>
            </View>
          </View>
          <Text style={styles.bannerEmoji}>🎂</Text>
        </View>

        {/* GIỚI THIỆU */}
        <View style={styles.intro}>
          <Text style={styles.introTitle}>
            Chào mừng đến với Sweet Cake!
          </Text>
          <Text style={styles.introDesc}>
            Những chiếc bánh thơm ngon được làm từ
            nguyên liệu chất lượng và tình yêu.
          </Text>
        </View>

        {/* DANH MỤC */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>🍓 Danh mục bánh</Text>
            <Text style={styles.sectionNote}>8 sản phẩm</Text>
          </View>

          <View style={styles.categories}>
            {['Tất cả', 'Bánh kem', 'Bánh ngọt'].map(item => (
              <TouchableOpacity
                key={item}
                onPress={() => setCategory(item)}
                style={[
                  styles.categoryButton,
                  category === item && styles.categoryActive
                ]}
              >
                <Text style={[
                  styles.categoryText,
                  category === item && styles.categoryTextActive
                ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* DANH SÁCH BÁNH */}
          <View style={styles.productGrid}>
            {filteredCakes.map(item => (
              <View key={item.id} style={styles.productCard}>
                <View style={[
                  styles.productImage,
                  { backgroundColor: item.color }
                ]}>
                  <Text style={styles.productEmoji}>
                    {item.emoji}
                  </Text>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>HOT</Text>
                  </View>
                </View>

                <View style={styles.productInfo}>
                  <Text style={styles.productName}>
                    {item.name}
                  </Text>

                  <Text style={styles.productPrice}>
                    {item.price}
                  </Text>

                  <TouchableOpacity
                    style={styles.buyButton}
                    onPress={() => alert('Bạn đã chọn ' + item.name)}
                  >
                    <Text style={styles.buyText}>
                      + Đặt bánh
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* ƯU ĐIỂM */}
        <View style={styles.features}>
          <Text style={styles.sectionTitle}>
            💗 Vì sao chọn chúng tôi?
          </Text>

          <View style={styles.featureRow}>
            <Text style={styles.featureIcon}>🥛</Text>
            <View>
              <Text style={styles.featureTitle}>Nguyên liệu chất lượng</Text>
              <Text style={styles.featureDesc}>
                Đảm bảo thơm ngon và an toàn.
              </Text>
            </View>
          </View>

          <View style={styles.featureRow}>
            <Text style={styles.featureIcon}>🎂</Text>
            <View>
              <Text style={styles.featureTitle}>Bánh làm mỗi ngày</Text>
              <Text style={styles.featureDesc}>
                Luôn tươi mới khi đến tay khách hàng.
              </Text>
            </View>
          </View>

          <View style={styles.featureRow}>
            <Text style={styles.featureIcon}>🚚</Text>
            <View>
              <Text style={styles.featureTitle}>Phục vụ tận tình</Text>
              <Text style={styles.featureDesc}>
                Mang niềm vui đến mọi nhà.
              </Text>
            </View>
          </View>
        </View>

        {/* THÔNG TIN CỬA HÀNG */}
        <View style={styles.store}>
          <Text style={styles.storeTitle}>
            🏠 THÔNG TIN CỬA HÀNG
          </Text>

          <Text style={styles.storeText}>
            🧁 Tên cửa hàng: Tiệm bánh ngọt
          </Text>
          <Text style={styles.storeText}>
            📞 Điện thoại: 0706372521
          </Text>
          <Text style={styles.storeText}>
            📍 Địa chỉ: Nha Trang, Khánh Hòa
          </Text>
          <Text style={styles.storeText}>
            ⏰ Giờ mở cửa: 07:00 - 22:00
          </Text>

          <View style={styles.thanks}>
            <Text style={styles.thanksText}>
              Cảm ơn quý khách đã ghé thăm! ❤️
            </Text>
          </View>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerLogo}>SWEET CAKE 🍰</Text>
          <Text style={styles.footerText}>
            Ngọt ngào trao gửi yêu thương
          </Text>
          <Text style={styles.copyright}>
            © 2026 - Quản lý cửa hàng bánh ngọt
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F6',
  },

  header: {
    paddingHorizontal: 22,
    paddingVertical: 18,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F5E7E2',
  },

  logo: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#C45B76',
    letterSpacing: 1,
  },

  headerSub: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },

  cart: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: '#FCE8EC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  banner: {
    margin: 18,
    padding: 22,
    borderRadius: 22,
    backgroundColor: '#F6CBD3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },

  bannerText: {
    flex: 1,
  },

  bannerSmall: {
    fontSize: 11,
    color: '#925266',
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  bannerTitle: {
    fontSize: 31,
    fontWeight: 'bold',
    color: '#743C50',
    marginTop: 10,
    lineHeight: 38,
  },

  bannerDesc: {
    color: '#754A59',
    fontSize: 12,
    marginTop: 9,
  },

  bannerEmoji: {
    fontSize: 75,
    marginLeft: 5,
  },

  bannerButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 15,
  },

  bannerButtonText: {
    color: '#B84D6A',
    fontWeight: 'bold',
    fontSize: 11,
  },

  intro: {
    marginHorizontal: 20,
    marginBottom: 18,
  },

  introTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#633E48',
  },

  introDesc: {
    fontSize: 13,
    color: '#888',
    lineHeight: 21,
    marginTop: 7,
  },

  section: {
    paddingHorizontal: 18,
    paddingVertical: 15,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#633E48',
  },

  sectionNote: {
    color: '#C45B76',
    fontSize: 12,
  },

  categories: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 18,
  },

  categoryButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 9,
    borderWidth: 1,
    borderColor: '#F1D9DF',
  },

  categoryActive: {
    backgroundColor: '#C45B76',
    borderColor: '#C45B76',
  },

  categoryText: {
    fontSize: 12,
    color: '#8A6871',
    fontWeight: '600',
  },

  categoryTextActive: {
    color: '#FFFFFF',
  },

  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  productCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F5E8E5',
  },

  productImage: {
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  productEmoji: {
    fontSize: 65,
  },

  badge: {
    position: 'absolute',
    top: 9,
    left: 9,
    backgroundColor: '#E9788C',
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 10,
  },

  badgeText: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  productInfo: {
    padding: 12,
  },

  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#513D40',
    minHeight: 21,
  },

  productPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#C45B76',
    marginTop: 7,
  },

  buyButton: {
    backgroundColor: '#C45B76',
    borderRadius: 10,
    paddingVertical: 9,
    alignItems: 'center',
    marginTop: 12,
  },

  buyText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },

  features: {
    backgroundColor: '#FFF0F1',
    padding: 20,
    margin: 18,
    borderRadius: 20,
  },

  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },

  featureIcon: {
    fontSize: 28,
    marginRight: 14,
  },

  featureTitle: {
    fontWeight: 'bold',
    color: '#633E48',
    fontSize: 14,
  },

  featureDesc: {
    color: '#999',
    fontSize: 12,
    marginTop: 4,
  },

  store: {
    margin: 18,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F1DDE0',
  },

  storeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B84D6A',
    marginBottom: 15,
  },

  storeText: {
    fontSize: 13,
    color: '#66565A',
    marginBottom: 12,
    lineHeight: 20,
  },

  thanks: {
    backgroundColor: '#FCE8EC',
    borderRadius: 12,
    padding: 13,
    marginTop: 8,
  },

  thanksText: {
    textAlign: 'center',
    color: '#B84D6A',
    fontWeight: 'bold',
    fontSize: 13,
  },

  footer: {
    backgroundColor: '#633E48',
    padding: 25,
    alignItems: 'center',
  },

  footerLogo: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  footerText: {
    color: '#F9DDE4',
    fontSize: 12,
    marginTop: 7,
  },

  copyright: {
    color: '#D9BFC5',
    fontSize: 10,
    marginTop: 18,
  },
});


**Các components khác **

-CakeList.js

<img width="626" height="691" alt="image" src="https://github.com/user-attachments/assets/d83a6ccc-39d7-4764-96df-a723654562de" />


-Header.js

<img width="604" height="690" alt="image" src="https://github.com/user-attachments/assets/56f5790d-8b9e-4b80-bd16-54f010f848e3" />


-TabBar.js

<img width="662" height="686" alt="image" src="https://github.com/user-attachments/assets/85d19b9b-e020-41ea-a975-7ea0cf5e9794" />



## 9. Kết quả thực hiện

Sau khi hoàn thành bài thực hành, em đã xây dựng được giao diện ứng dụng quản lý cửa hàng bánh ngọt bằng React Native và Expo Snack.

Ứng dụng có thể hiển thị danh sách sản phẩm, phân loại bánh, giá tiền và thông tin cửa hàng.

Qua bài thực hành, em hiểu cách sử dụng Component, JSX, useState và StyleSheet trong React Native.
