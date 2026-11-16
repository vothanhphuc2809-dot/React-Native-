# Bài tập 2: Thiết kế trang chủ ứng dụng học tập

## 1. Link ứng dụng Expo (Snack)

- **Link Snack Expo:** [https://snack.expo.dev/@thanhphuc79/fc6f22](https://snack.expo.dev/@thanhphuc79/learning-app)

2. Giới thiệu bài tập
Xây dựng ứng dụng LearningApp bằng React Native (Expo).

Ứng dụng có giao diện trang Home với các chức năng:
- | Header.js |  Hiển thị lời chào người dùng và thông tin sinh viên.
- | StatCard.js | Thống kê số lượng khóa học.
- | CourseCard.js | Hiển thị danh sách môn học.
- | BottomMenu.js | Thanh menu điều hướng phía dưới màn hình.
- | App.js | Kết hợp và quản lý toàn bộ giao diện trang Home.

## 3. Cấu trúc dự án

```text
Bt02/
│
├── App.js
│
├── components/
│   ├── Header.js
│   ├── StatCard.js
│   ├── CourseCard.js
│   └── BottomMenu.js
│
└── README.md
```

## 4. Mã nguồn các Component

### 4.1. Component Header.js

**Chức năng:** Hiển thị lời chào, tiêu đề và thông tin sinh viên gồm họ tên, MSSV, lớp và ngành học.

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Xin chào, Phúc! 👋</Text>
      <Text style={styles.title}>
        Chào mừng bạn quay trở lại
      </Text>

      <View style={styles.info}>
        <Text style={styles.name}>VÕ THÀNH PHÚC</Text>
        <Text style={styles.detail}>MSSV: CNTT18A22</Text>
        <Text style={styles.detail}>Lớp: CNTT18A</Text>
        <Text style={styles.detail}>
          Ngành: Công nghệ thông tin
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2563EB',
    padding: 20,
    paddingTop: 45,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  greeting: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  title: {
    color: '#DBEAFE',
    marginTop: 5,
    fontSize: 15,
  },
  info: {
    backgroundColor: '#3B82F6',
    padding: 15,
    marginTop: 20,
    borderRadius: 15,
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detail: {
    color: '#EFF6FF',
    fontSize: 14,
    marginTop: 5,
  },
});
```

### 4.2. Component StatCard.js

**Chức năng:** Hiển thị các thông tin thống kê khóa học.

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StatCard({ title, number, icon }) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    flex: 1,
    margin: 5,
    elevation: 3,
  },
  icon: {
    fontSize: 25,
  },
  number: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#2563EB',
    marginTop: 5,
  },
  title: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 5,
    textAlign: 'center',
  },
});
```

### 4.3. Component CourseCard.js

**Chức năng:** Hiển thị thông tin từng khóa học hoặc môn học.

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CourseCard({ name, teacher, progress, icon }) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>

      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.teacher}>{teacher}</Text>

        <View style={styles.progressBackground}>
          <View
            style={[styles.progress, { width: `${progress}%` }]}
          />
        </View>

        <Text style={styles.percent}>
          Tiến độ: {progress}%
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
    flexDirection: 'row',
    elevation: 2,
  },
  icon: {
    fontSize: 30,
    marginRight: 15,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  teacher: {
    color: '#64748B',
    marginTop: 4,
  },
  progressBackground: {
    height: 7,
    backgroundColor: '#E2E8F0',
    borderRadius: 10,
    marginTop: 10,
  },
  progress: {
    height: 7,
    backgroundColor: '#2563EB',
    borderRadius: 10,
  },
  percent: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 5,
  },
});
```

### 4.4. Component BottomMenu.js

**Chức năng:** Tạo thanh menu giả lập ở cuối màn hình với các mục Trang chủ, Khóa học và Cá nhân.

```javascript
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function BottomMenu() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.icon}>🏠</Text>
        <Text style={styles.active}>Trang chủ</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.icon}>📚</Text>
        <Text style={styles.text}>Khóa học</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.icon}>👤</Text>
        <Text style={styles.text}>Cá nhân</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  item: {
    alignItems: 'center',
  },
  icon: {
    fontSize: 22,
  },
  text: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 4,
  },
  active: {
    fontSize: 12,
    color: '#2563EB',
    fontWeight: 'bold',
    marginTop: 4,
  },
});
```

### 4.5. Component App.js

**Chức năng:** Là thành phần chính, kết hợp các Component Header, StatCard, CourseCard và BottomMenu để tạo thành giao diện trang Home.

```javascript
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Header from './components/Header';
import StatCard from './components/StatCard';
import CourseCard from './components/CourseCard';
import BottomMenu from './components/BottomMenu';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />

        <View style={styles.content}>
          <Text style={styles.heading}>Thống kê học tập</Text>

          <View style={styles.stats}>
            <StatCard
              icon="📚"
              number="08"
              title="Khóa học"
            />
            <StatCard
              icon="✅"
              number="05"
              title="Đã hoàn thành"
            />
            <StatCard
              icon="⏳"
              number="03"
              title="Đang học"
            />
          </View>

          <Text style={styles.heading}>Khóa học của tôi</Text>

          <CourseCard
            icon="💻"
            name="Lập trình React Native"
            teacher="Giảng viên: Nguyễn Văn A"
            progress={80}
          />

          <CourseCard
            icon="🌐"
            name="Lập trình Web"
            teacher="Giảng viên: Nguyễn Văn B"
            progress={60}
          />

          <CourseCard
            icon="🗄️"
            name="Cơ sở dữ liệu"
            teacher="Giảng viên: Nguyễn Văn C"
            progress={45}
          />

          <CourseCard
            icon="📱"
            name="Phát triển ứng dụng di động"
            teacher="Giảng viên: Nguyễn Văn D"
            progress={90}
          />
        </View>
      </ScrollView>

      <BottomMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  content: {
    padding: 15,
  },
  heading: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1E293B',
    marginTop: 15,
    marginBottom: 12,
  },
  stats: {
    flexDirection: 'row',
    marginHorizontal: -5,
  },
});
```

## 5. Hình ảnh kết quả giao diện

Sau khi chạy ứng dụng, chụp màn hình giao diện trên Expo Snack và chèn hình ảnh vào đây.

**Hình 1: Giao diện trang Home**

<img width="564" height="272" alt="image" src="https://github.com/user-attachments/assets/92d13891-0c6e-4332-93cf-79f52945c2b8" />


**Hình 2: Giao diện thống kê khóa học**

<img width="563" height="188" alt="image" src="https://github.com/user-attachments/assets/655ca129-23a4-4d42-95a8-8abf9872e442" />


**Hình 3: Giao diện danh sách Môn học và thanh menu**

<img width="1583" height="594" alt="image" src="https://github.com/user-attachments/assets/25dd439b-629f-4ba1-ae1f-ee1e81d6f465" />


## 6. Kết quả đạt được

Sau khi hoàn thành bài tập, ứng dụng LearningApp đã xây dựng được giao diện trang Home bằng React Native.

Các thành phần được chia thành những Component riêng biệt, giúp mã nguồn rõ ràng, dễ quản lý và dễ dàng chỉnh sửa.

Ứng dụng hiển thị:
- Lời chào và thông tin sinh viên.
- Thống kê khóa học.
- Danh sách các khóa học.
- Thanh menu giả lập phía dưới màn hình.

## 7. Kết luận

Thông qua bài tập này, em đã hiểu cách xây dựng giao diện bằng React Native, cách sử dụng các Component, truyền Props giữa các Component và sử dụng StyleSheet để thiết kế giao diện ứng dụng di động.
