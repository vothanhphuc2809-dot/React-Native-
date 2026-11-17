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

