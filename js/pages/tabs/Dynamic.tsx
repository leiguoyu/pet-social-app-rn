import * as React from 'react';
import {Alert, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, View, ActionBar} from 'react-native-ui-lib';

const Dynamic = ({navigation}) => (
  <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
    <StatusBar backgroundColor={Colors.blue60} barStyle={'dark-content'} />
    <View style={styles.absoluteContainer}>
      <ActionBar
        actions={[
          {label: 'Delete', onPress: () => Alert.alert('delete'), red30: true},
          {label: 'Replace Photo', onPress: () => Alert.alert('replace photo')},
          {label: 'Edit', onPress: () => Alert.alert('edit')},
        ]}
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  absoluteContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});

export default Dynamic;
