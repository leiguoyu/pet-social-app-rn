import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routersConfig } from '../config/router';



const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerTintColor: '#1d1e2c',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: '#1d1e2c'
                },
                headerShown: false
            }}
        >
            {Object.keys(routersConfig).map((key, i) => {
                const item = routersConfig[key];
                return (
                    <Stack.Screen
                        name={item.name}
                        component={item.component}
                        options={item.options}
                        key={`${i}`}
                    />
                );
            })}
        </Stack.Navigator>
    );
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;