import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Profile = () => (
  <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
    <Text>Profile</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F5FCFF',
  },
});

export default Profile;
