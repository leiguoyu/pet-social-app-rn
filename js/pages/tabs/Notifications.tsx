import * as React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';



const WhatNew = () => {

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
            <Text>Notifications</Text>
        </SafeAreaView>
    );
}



export default WhatNew;