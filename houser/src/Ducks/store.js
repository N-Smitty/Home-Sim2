import {createStore} from 'redux';

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0
}
    export default function reducer(state = initialState, action) {
    switch(action.type) {



    default:
    return state;    
    }
}