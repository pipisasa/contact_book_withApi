import axios from 'axios'

import {
    OPEN_EDIT,
    FETCH_DATA,
} from './types'

export const openEdit = (index, Data)=>{
    const data = [...Data];
    data.forEach((item,i)=>{
        i===index ? data[i].isEdit=!data[i].isEdit : item.isEdit=false;
    })
    return {
        type: OPEN_EDIT,
        payload: data
    }
}

export const fetchData = async ()=>{
    const response = await axios.get('http://192.168.88.222:3000/contacts');
    // console.log(response.data)
    return {
        type: FETCH_DATA,
        payload: response.data
    }
}