import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function ItemBox(props) {
  let { item, handleDelete } = props;
  const leftSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      <TouchableWithoutFeedback onPress={handleDelete}>
        <View style={styles.deleteBox}>
          <Animated.Text style={{ transform: [{ scale: scale }] }}>
            Delete
          </Animated.Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <Swipeable renderLeftActions={leftSwipe}>
      <View style={styles.container}>
        <Text>My name is {item.name}</Text>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: SCREEN_WIDTH,
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  deleteBox: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
});
