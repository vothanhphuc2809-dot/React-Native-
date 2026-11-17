import React, { useEffect, useRef } from 'react';
import {
  Text,
  StyleSheet,
  Animated
} from 'react-native';

export default function AnimatedMessage({ progress }) {
  const scale = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    if (progress > 0) {
      scale.setValue(0);
      opacity.setValue(0);
      translateY.setValue(20);

      Animated.parallel([
        Animated.spring(scale, {
          toValue: 1,
          friction: 4,
          useNativeDriver: true
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true
        })
      ]).start();
    } else {
      scale.setValue(0);
      opacity.setValue(0);
      translateY.setValue(20);
    }
  }, [progress]);

  if (progress === 0) return null;

  return (
    <Animated.View
      style={[
        styles.message,
        {
          opacity,
          transform: [
            { scale },
            { translateY }
          ]
        }
      ]}
    >
      <Text style={styles.icon}>
        {progress === 100 ? '🎉🏆' : '📖✨'}
      </Text>

      <Text style={styles.title}>
        {progress === 100
          ? 'CHÚC MỪNG!'
          : 'TIẾP TỤC CỐ GẮNG!'}
      </Text>

      <Text style={styles.description}>
        {progress === 100
          ? 'Bạn đã hoàn thành mục tiêu học tập!'
          : `Bạn đã hoàn thành ${progress / 25}/4 buổi học!`}
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  message: {
    backgroundColor: '#DCFCE7',
    padding: 22,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 25,
    width: '100%'
  },
  icon: {
    fontSize: 45,
    marginBottom: 10
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#15803D'
  },
  description: {
    fontSize: 15,
    color: '#166534',
    textAlign: 'center',
    marginTop: 10
  }
});

