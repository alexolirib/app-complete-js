import axios from 'axios'

const URL = 'http://localhost:3003/api/task';

export const changeDescription = event =>({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () =>{
    const request = axios.get(`${URL}?sort=-createdAt`)
    return {
        type: 'TASK_SEARCHED',
        payload: request
    }
}

export const add = (description) =>{
    return dispatch =>{
        axios.post(URL, {description})
            .then(resp => dispatch({type: 'TASK_ADD', payload: resp.data}))
            .then(resp=> dispatch(search()))
    }
}