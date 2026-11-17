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

