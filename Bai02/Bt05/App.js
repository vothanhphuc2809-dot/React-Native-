import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView
} from 'react-native';

import ProgressCard from './components/ProgressCard';
import ActionButton from './components/ActionButton';
import AnimatedMessage from './components/AnimatedMessage';

export default function App() {
  const [progress, setProgress] = useState(0);

  const handleStart = () => {
    if (progress < 100) {
      setProgress(prev => Math.min(prev + 25, 100));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar
        backgroundColor="#2563EB"
        barStyle="light-content"
      />

      <Text style={styles.header}>LEARNING GOAL</Text>

      <Text style={styles.subtitle}>
        Theo dõi mục tiêu học tập của bạn
      </Text>

      <ProgressCard progress={progress} />

      <ActionButton
        title={
          progress === 100
            ? 'ĐÃ HOÀN THÀNH'
            : progress === 0
              ? 'BẮT ĐẦU HỌC'
              : 'TIẾP TỤC HỌC'
        }
        onPress={handleStart}
        disabled={progress === 100}
      />

      <AnimatedMessage progress={progress} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 22
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 15,
    color: '#64748B',
    marginBottom: 30,
    textAlign: 'center'
  }
});

