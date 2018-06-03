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
export const markAsDone = task =>{
    return dispatch =>{
        axios.put(`${URL}/${task._id}`, {...task, done:true})
            //aqui o resp.data recebo somente o obj 
            .then(resp=>dispatch({type: 'TODO_MASKED_AS_DONE', payload: resp.data}))
            .then(resp=>dispatch(search()))
    }
}
export const markDontDone = task =>{
    return dispatch =>{
        axios.put(`${URL}/${task._id}`, {...task, done:false})
            .then(resp=>dispatch(search()))
    }
}
export const deleteElement = task =>{
    return dispatch =>{
        axios.delete(`${URL}/${task._id}`)            
            .then(resp=>dispatch(search()));
    }
}