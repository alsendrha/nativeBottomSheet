import BottomSheet from '@gorhom/bottom-sheet';
import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
const MyBottomSheet = ({refBottomSheet}: any) => {
  const snapPoints = useMemo(() => ['25%', '50%', '70%', '100%'], []);
  return (
    <View style={styles.container}>
      <BottomSheet ref={refBottomSheet} index={1} snapPoints={snapPoints}>
        <View style={styles.contentContainer}>
          <Text style={styles.containerHeadline}>Awesome Bottom Sheet 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: '600',
    padding: 20,
  },
});

export default MyBottomSheet;
