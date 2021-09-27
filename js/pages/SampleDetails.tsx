import * as React from 'react';
import {Text, Button, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SampleDetails = ({route, navigation}) => {
  /* 2. Get the param */
  const {itemId, otherParam} = route.params;

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('SampleDetails', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button
        title="Go to Sample"
        onPress={() => navigation.navigate('Sample')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      {/* 返回最开始的页面，not push */}
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F5FCFF',
  },
});

export default SampleDetails;
