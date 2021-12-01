import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SectionList,
  Alert,
} from 'react-native';
import {
  Assets,
  Spacings,
  View,
  TextField,
  Text,
  Button,
} from 'react-native-ui-lib';
import DialogScreen from '~/js/components_presentation/DialogScreen';

const AddNewPetStep4 = ({navigation}) => (
  <View style={styles.container} bg-white>
    <View flex style={styles.main}>
      <View marginT-50 style={styles.form}>
        <Text style={styles.textBackground}>NEWPET</Text>
        <Text style={styles.textWelcome}>性别</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'space-between',
  },
  form: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  textBackground: {
    position: 'absolute',
    color: '#f7f7fb',
    fontSize: 72,
    fontWeight: 'bold',
  },
  textWelcome: {
    color: '#1d1e2c',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
    marginBottom: 41,
  },
});

export default AddNewPetStep4;
