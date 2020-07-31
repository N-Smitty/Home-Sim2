import {PROP_INFO, IMG_INFO} from './constraints';

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0
};

    export default function reducer(state = initialState, action) {
        const {type, payload} = action;
        switch(type) {
        case PROP_INFO:
            // console.log(payload)
            // return {...state, payload}
            return Object.assign({}, state, payload);
            case IMG_INFO:
                return Object.assign({}, state, payload);
            default:
            return state;    
    }

};

