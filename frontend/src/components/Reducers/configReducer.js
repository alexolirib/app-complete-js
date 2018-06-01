import { combineReducers } from 'redux'
import TaskReducer from './TaskReducer'

const ConfigReducer = combineReducers({
    task: TaskReducer
})

export default ConfigReducer;