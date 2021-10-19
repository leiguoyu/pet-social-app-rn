import * as React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Sample = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  // 使用安全区域padding
  const insets = useSafeAreaInsets();

  const backgroundStyle = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // SafeAreaView 防止被遮挡, edges 防止横屏被遮挡
  return (
    <SafeAreaView style={backgroundStyle} edges={['top', 'left', 'right']}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.sectionContainer}>Hello Redux</Text>
        <Text style={styles.sectionContainer}>Hello React Navigation</Text>
        {/* 传参 */}
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('SampleDetails', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Sample;
