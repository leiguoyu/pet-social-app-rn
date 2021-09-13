
import {
    Dispatch
} from 'redux';


const increment = () => {
    return { type: 'INCREMENT' };
}

const decrement = () => {
    return { type: 'DECREMENT' };
}

const incrementAsync = () => (dispath: Dispatch) => {
    setTimeout(function () {
        return dispath(increment())
    }, 1000)
}



export {
    increment,
    decrement,
    incrementAsync
}