import mockData from './data'

import {
    OPEN_EDIT,
    FETCH_DATA,
} from '../actions/types'

const initalState = {
    data: [...mockData],
    isOpenNewContact : 0
}
export default (state = initalState, actions)=>{
    switch(actions.type){
        case OPEN_EDIT:return{
            ...state,
            data: actions.payload
        };
        
        case FETCH_DATA:return{
            ...state,
            data: actions.payload
        };
        default:return state;
    }
}