import React, {useRef} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MyBottomSheet from './src/components/MyBottomSheet';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

function App() {
  const refBottomSheet = useRef<BottomSheet>(null);

  const handleOpen = () => {
    refBottomSheet.current?.expand();
  };

  const handleClose = () => {
    refBottomSheet.current?.close();
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonStyle} onPress={handleOpen}>
          <Text>열기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={handleClose}>
          <Text>닫기</Text>
        </TouchableOpacity>
      </View>
      <MyBottomSheet refBottomSheet={refBottomSheet} />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: 100,
    height: 50,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
