import { IRouteMap } from '../types'
import Home from '../pages/Home';
import Sample from '../pages/Sample';
import SampleDetails from '../pages/SampleDetails';



const routersConfig: IRouteMap[] = [
    {
        name: 'Home',
        component: Home,
        options: {
            title: 'Home',
            headerShown: false
        }
    },
    {
        name: 'Sample',
        component: Sample,
        options: {
            title: 'Sample',
        }
    },
    {
        name: 'SampleDetails',
        component: SampleDetails,
        options: {
            title: 'SampleDetails',
        }
    },
];



export {
    routersConfig
}; 