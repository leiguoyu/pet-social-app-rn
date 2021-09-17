import { NativeStackNavigationOptions } from '@react-navigation/native-stack/lib/typescript/src/types';
export interface CounterState {
    value: number
}
export interface IRouteMap {
    name: string;
    component: React.ReactNode;
    options?: NativeStackNavigationOptions;
    [key: string]: any;
}