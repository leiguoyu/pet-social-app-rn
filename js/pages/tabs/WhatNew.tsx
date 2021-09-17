import * as React from 'react';
import { View, Text, Button, } from 'react-native';



const WhatNew = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>What's New</Text>
            <Button
                title="Go to Sample"
                onPress={() => navigation.navigate('Sample')}
            />
        </View>
    );
}



export default WhatNew;