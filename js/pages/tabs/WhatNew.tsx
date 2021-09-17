import * as React from 'react';
import { View, Text, Button, } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';



const WhatNew = ({ navigation }) => {

    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView
            style={{
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
            edges={['top', 'left', 'right']}
        >
            <Text>What's New</Text>
            <Button
                title="Go to Sample"
                onPress={() => navigation.navigate('Sample')}
            />
        </SafeAreaView>
    );
}



export default WhatNew;