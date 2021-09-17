import * as React from 'react';
import { View, Text, Button } from 'react-native';



const SampleDetails = ({ route, navigation }) => {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('SampleDetails', {
          itemId: Math.floor(Math.random() * 100),
        })}
      />
      <Button
        title="Go to Sample"
        onPress={() => navigation.navigate('Sample')}
      />
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
      {/* 返回最开始的页面，not push */}
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}




export default SampleDetails;