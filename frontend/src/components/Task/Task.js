import React, {Component} from 'react'
import PageHeader from '../templetes/PageHeader'
import TaskForm from '../Task/TaskForm'

class Task extends Component{
    render(){
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TaskForm />
                
            </div>
        )
    }
}

export default Task;