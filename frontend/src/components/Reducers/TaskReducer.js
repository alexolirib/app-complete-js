import { combineReducers } from 'redux'

const TaskReducer = combineReducers({
    task: ()=>({
        description: 'ler livro',
        list: [{
            _id: 1,
            description:'pagar fatura',
            done: true
        },{
            _id: 2,
            description:'ensinar crianças',
            done: false
        },{
            _id: 3,
            description:'cozinhas',
            done: false
        }]
    })
})

export default TaskReducer;