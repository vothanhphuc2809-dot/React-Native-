
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

