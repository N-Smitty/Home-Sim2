import {PROP_INFO, IMG_INFO} from './constraints';


export function addPropInfo(name, address, city, state, zip) {
console.log('hit')
    return {
        type: PROP_INFO,
        payload: {
            name,
            address,
            city,
            state,
            zip
        }
    }
};

export function addImgInfo(img) {
    console.log('yasss')
    return {
        type:IMG_INFO,
        payload: {
            img
        }
    }
};


