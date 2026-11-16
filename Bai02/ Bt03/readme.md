# Bài tập 3. Thiết kế danh sách sản phẩm có thể tái sử dụng

## 1. Thông tin bài tập

- **Tên ứng dụng:** ProductApp
- **Công nghệ:** React Native (Expo)
- **Chủ đề:** Ứng dụng bán đồ uống.

**Link Expo:** [Dán link ứng dụng Expo tại đây.](https://snack.expo.dev/@thanhphuc79/product-app)

**Link GitHub Bt03:** [Dán link GitHub repository tại đây.](https://github.com/vothanhphuc2809-dot/React-Native-/edit/main/Bai02/%20Bt03)

## 2. Giới thiệu bài tập

Xây dựng ứng dụng ProductApp bằng React Native (Expo) với giao diện bán đồ uống.

Ứng dụng gồm 2 component:

- **App:** Hiển thị tên cửa hàng Drink Shop, khai báo danh sách 8 sản phẩm và sử dụng FlatList để hiển thị sản phẩm.
- **ProductCard:** Nhận dữ liệu từ App thông qua props và hiển thị hình ảnh, tên, giá và mô tả sản phẩm.

## 3. Cấu trúc thư mục

```text
Bt03/
├── App.js
├── components/
        └── ProductCard.js
```

## 4. Các component sử dụng

### 4.1. Component App

- Khai báo danh sách 8 sản phẩm đồ uống.
- Hiển thị tiêu đề cửa hàng Drink Shop.
- Sử dụng FlatList để kết xuất danh sách.
- Truyền dữ liệu sản phẩm sang ProductCard thông qua props.

**Code:** `App.js`

import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar
} from 'react-native';

import ProductCard from './components/ProductCard';

const products = [
  {
    id: '1',
    name: 'Trà sữa trân châu',
    price: 35000,
    description: 'Trà sữa thơm ngon kết hợp trân châu dai giòn.',
    image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=600'
  },
  {
    id: '2',
    name: 'Cà phê sữa đá',
    price: 25000,
    description: 'Cà phê nguyên chất kết hợp sữa đặc.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600'
  },
  {
    id: '3',
    name: 'Trà đào cam sả',
    price: 30000,
    description: 'Trà đào thanh mát cùng cam và sả tươi.',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600'
  },
  {
    id: '4',
    name: 'Matcha Latte',
    price: 40000,
    description: 'Matcha Nhật Bản kết hợp sữa tươi béo ngậy.',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600'
  },
  {
    id: '5',
    name: 'Nước ép cam',
    price: 30000,
    description: 'Nước cam tươi nguyên chất giàu vitamin C.',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600'
  },
  {
    id: '6',
    name: 'Sinh tố dâu',
    price: 35000,
    description: 'Sinh tố dâu tây tươi mát và thơm ngon.',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600'
  },
  {
    id: '7',
    name: 'Cappuccino',
    price: 45000,
    description: 'Cà phê espresso phủ lớp bọt sữa mềm mịn.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=600'
  },
  
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#8B4513" />

      <View style={styles.header}>
        <Text style={styles.title}>
          DRINK SHOP
        </Text>
        <Text style={styles.subtitle}>
          Thế giới đồ uống thơm ngon
        </Text>
      </View>

      <Text style={styles.heading}>
        DANH SÁCH SẢN PHẨM
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard item={item} />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    backgroundColor: '#8B4513',
    padding: 22,
    alignItems: 'center'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff'
  },
  subtitle: {
    color: '#FFE4C4',
    marginTop: 5,
    fontSize: 14
  },
  heading: {
    fontSize: 19,
    fontWeight: 'bold',
    margin: 15,
    color: '#333'
  },
  list: {
    paddingHorizontal: 15,
    paddingBottom: 20
  }
});


**Hình ảnh giao diện:**

<img width="628" height="638" alt="image" src="https://github.com/user-attachments/assets/7ec2012b-3441-4b7d-9814-4f0a0ad46175" />


### 4.2. Component ProductCard

- Nhận dữ liệu sản phẩm thông qua props.
- Hiển thị hình ảnh sản phẩm.
- Hiển thị tên, giá và mô tả sản phẩm.
- Thiết kế giao diện từng sản phẩm thành một thẻ riêng biệt.

**Code:** `components/ProductCard.js`
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

export default function ProductCard({ item }) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.description}>
          {item.description}
        </Text>

        <Text style={styles.price}>
          {item.price.toLocaleString('vi-VN')}đ
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3
  },
  image: {
    width: '100%',
    height: 170
  },
  info: {
    padding: 12
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginTop: 5
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#E67E22',
    marginTop: 8
  }
});


**Hình ảnh giao diện:**

<img width="583" height="469" alt="image" src="https://github.com/user-attachments/assets/175b3091-fc06-462b-bca3-ca0bf8bf3929" />


## 5. Kết quả chương trình

Ứng dụng hiển thị 7 sản phẩm đồ uống, mỗi sản phẩm có đầy đủ hình ảnh, tên, giá bán và mô tả. Giao diện có thể cuộn để xem toàn bộ danh sách.
