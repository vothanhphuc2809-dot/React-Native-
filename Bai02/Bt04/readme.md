# BÀI THỰC HÀNH 04 – MultiScreenApp

## 1. Giới thiệu bài tập

Xây dựng ứng dụng MultiScreenApp bằng React Native (Expo).

Ứng dụng sử dụng Stack Navigation để chuyển đổi giữa các màn hình và Tab Navigation để điều hướng giữa Trang chủ, Danh sách và Cá nhân.

### Các chức năng của ứng dụng:
- Hiển thị giao diện Trang chủ.
- Hiển thị danh sách 4 khóa học.
- Chọn một khóa học để xem thông tin chi tiết.
- Hiển thị mã khóa học, tên khóa học, giảng viên và mô tả.
- Có nút quay lại danh sách khóa học.
- Chuyển đổi giữa 3 màn hình Trang chủ, Danh sách và Cá nhân.

## 2. Link ứng dụng Expo

- **Link Expo:** [DÁN_LINK_EXPO_CỦA_BẠN_VÀO_ĐÂY](https://snack.expo.dev/@thanhphuc79/-multiscreen-app)

## 3. Cấu trúc thư mục

```text
MultiScreenApp
│
├── App.js
│
├── screens
│   ├── HomeScreen.js
│   ├── ListScreen.js
│   ├── DetailScreen.js
│   └── ProfileScreen.js
│
└── package.json
```

## 4. Các dòng code trong bài

### 4.1. File App.js

Chức năng: Kết hợp Stack Navigation và Tab Navigation để điều hướng giữa các màn hình.

import React from 'react';
import { Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2563EB'
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerTitleAlign: 'center',
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#777777',
        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 5
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: 'bold'
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Trang chủ',
          tabBarLabel: 'Trang chủ',
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>🏠</Text>
        }}
      />

      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          title: 'Danh sách khóa học',
          tabBarLabel: 'Danh sách',
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>📚</Text>
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Cá nhân',
          tabBarLabel: 'Cá nhân',
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>👤</Text>
        }}
      />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainTabs"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2563EB'
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: 'Chi tiết khóa học' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


### 4.2. File HomeScreen.js

Chức năng: Hiển thị giao diện trang chủ và lời giới thiệu ứng dụng.

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>📚</Text>

      <Text style={styles.title}>
        LEARNING APP
      </Text>

      <Text style={styles.subtitle}>
        Chào mừng bạn đến với ứng dụng học tập!
      </Text>

      <Text style={styles.description}>
        Khám phá các khóa học và nâng cao kiến thức
        của bạn mỗi ngày.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('List')}
      >
        <Text style={styles.buttonText}>
          Xem danh sách khóa học →
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  icon: {
    fontSize: 70,
    marginBottom: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 15
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15
  },
  description: {
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 30
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 12
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  }
});


### 4.3. File ListScreen.js

Chức năng: Hiển thị danh sách 4 khóa học, tên giảng viên và cho phép chọn khóa học để xem chi tiết.


import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';

const courses = [
  {
    id: 'KH01',
    name: 'Lập trình React Native',
    teacher: 'VÕ THÀNH PHÚC',
    description: 'Học xây dựng ứng dụng di động bằng React Native.'
  },
  {
    id: 'KH02',
    name: 'Lập trình Node.js',
    teacher: 'HÀ VĂN SÂM',
    description: 'Học xây dựng ứng dụng máy chủ bằng Node.js.'
  },
  {
    id: 'KH03',
    name: 'Cơ sở dữ liệu',
    teacher: 'NGUYỄN QUỐC HUY',
    description: 'Tìm hiểu SQL Server và quản lý dữ liệu.'
  },
  {
    id: 'KH04',
    name: 'Thiết kế giao diện',
    teacher: 'NGUYỄN TRUNG DUY TÂN',
    description: 'Học thiết kế giao diện ứng dụng đẹp và thân thiện.'
  }
];

export default function ListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        DANH SÁCH KHÓA HỌC
      </Text>

      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate('Detail', {
                course: item
              })
            }
          >
            <Text style={styles.name}>
              📖 {item.name}
            </Text>

            <Text style={styles.teacher}>
              Giảng viên: {item.teacher}
            </Text>

            <Text style={styles.more}>
              Xem chi tiết →
            </Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
  style={styles.backButton}
  onPress={() => navigation.navigate('Home')}
>
  <Text style={styles.backText}>
    ← Quay lại trang chủ
  </Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    padding: 15
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2563EB',
    textAlign: 'center',
    marginBottom: 20
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1D4ED8',
    marginBottom: 10
  },
  teacher: {
    fontSize: 15,
    color: '#475569'
  },
  more: {
    fontSize: 14,
    color: '#2563EB',
    fontWeight: 'bold',
    marginTop: 12
  },
  backButton: {
    backgroundColor: '#64748B',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center'
  },
  backText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15
  }
});


### 4.4. File DetailScreen.js

Chức năng: Hiển thị thông tin chi tiết của khóa học được chọn và có nút quay lại danh sách.

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { course } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🎓</Text>

      <Text style={styles.title}>
        CHI TIẾT KHÓA HỌC
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>
          Mã khóa học:
        </Text>
        <Text style={styles.value}>
          {course.id}
        </Text>

        <Text style={styles.label}>
          Tên khóa học:
        </Text>
        <Text style={styles.value}>
          {course.name}
        </Text>

        <Text style={styles.label}>
          Giảng viên:
        </Text>
        <Text style={styles.value}>
          {course.teacher}
        </Text>

        <Text style={styles.label}>
          Mô tả khóa học:
        </Text>
        <Text style={styles.value}>
          {course.description}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>
          ← Quay lại danh sách
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    padding: 20
  },
  icon: {
    fontSize: 55,
    textAlign: 'center',
    marginBottom: 10
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2563EB',
    textAlign: 'center',
    marginBottom: 25
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    marginBottom: 25
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2563EB',
    marginTop: 12,
    marginBottom: 5
  },
  value: {
    fontSize: 16,
    color: '#334155'
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16
  }
});


### 4.5. File ProfileScreen.js

Chức năng: Hiển thị thông tin cá nhân của sinh viên.

import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.avatar}>👤</Text>

      <Text style={styles.title}>
        THÔNG TIN CÁ NHÂN
      </Text>

      <View style={styles.card}>
        <Text style={styles.info}>
          Họ tên: Võ Thành Phúc
        </Text>

        <Text style={styles.info}>
          Lớp: CNTT18A
        </Text>

        <Text style={styles.info}>
          Ngành: Công nghệ thông tin
        </Text>

        <Text style={styles.info}>
          Ứng dụng: Learning App
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  avatar: {
    fontSize: 75,
    marginBottom: 15
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 20
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    width: '100%',
    elevation: 2
  },
  info: {
    fontSize: 16,
    marginBottom: 15
  }
});


### 4.6. File package.json

Chức năng: Khai báo các thư viện cần thiết để chạy ứng dụng và sử dụng Navigation.

{
  "dependencies": {
    "react-native-screens": "~4.16.0",
    "@react-navigation/native": "*",
    "@react-navigation/native-stack": "*",
    "react-native-safe-area-context": "~5.6.0",
    "@react-navigation/bottom-tabs": "*"
  }
}

## 5. Kết quả thực hiện

### 5.1. Giao diện Trang chủ

Hiển thị thông tin giới thiệu ứng dụng và thanh điều hướng phía dưới.

<img width="795" height="645" alt="image" src="https://github.com/user-attachments/assets/77d80ca3-c832-4713-98d6-665eeb4c5c1c" />


### 5.2. Giao diện Danh sách khóa học

Hiển thị danh sách 4 khóa học và thông tin giảng viên.

<img width="792" height="574" alt="image" src="https://github.com/user-attachments/assets/df76e0b4-bac0-494c-830f-34c1058ab6d4" />


### 5.3. Giao diện Chi tiết khóa học

Khi nhấn vào một khóa học, ứng dụng hiển thị mã khóa học, tên khóa học, giảng viên và mô tả.

<img width="794" height="643" alt="image" src="https://github.com/user-attachments/assets/4fa1dfbf-b094-4077-b672-b8b91eaf3ef7" />


### 5.4. Giao diện Cá nhân

Hiển thị thông tin cá nhân của sinh viên.

<img width="791" height="583" alt="image" src="https://github.com/user-attachments/assets/a0141856-5de6-473a-a90d-bb77445761a4" />


## 6. Kết quả đạt được

Sau khi hoàn thành bài thực hành, ứng dụng đã thực hiện được:

- Xây dựng ứng dụng MultiScreenApp bằng React Native (Expo).
- Sử dụng Stack Navigation để chuyển màn hình.
- Sử dụng Tab Navigation gồm Trang chủ, Danh sách và Cá
