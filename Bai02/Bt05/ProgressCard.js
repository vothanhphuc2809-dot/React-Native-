import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProgressCard({ progress }) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>📚</Text>

      <Text style={styles.title}>
        MỤC TIÊU HỌC TẬP
      </Text>

      <Text style={styles.goal}>
        Hoàn thành 4 buổi học React Native
      </Text>

      <Text style={styles.percent}>{progress}%</Text>

      <View style={styles.progressBackground}>
        <View
          style={[
            styles.progressBar,
            { width: `${progress}%` }
          ]}
        />
      </View>

      <Text style={styles.description}>
        {progress === 100
          ? 'Bạn đã hoàn thành mục tiêu!'
          : `Đã hoàn thành ${progress / 25}/4 buổi học`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 18,
    alignItems: 'center',
    width: '100%',
    elevation: 4,
    marginBottom: 25
  },
  icon: {
    fontSize: 55,
    marginBottom: 10
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 12
  },
  goal: {
    fontSize: 16,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 20
  },
  percent: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#16A34A',
    marginBottom: 12
  },
  progressBackground: {
    width: '100%',
    height: 14,
    backgroundColor: '#E2E8F0',
    borderRadius: 10,
    overflow: 'hidden'
  },
  progressBar: {
    height: 14,
    backgroundColor: '#22C55E',
    borderRadius: 10
  },
  description: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 15
  }
});

