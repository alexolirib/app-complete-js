import React, { Component } from 'react'
import PageHeader from '../templetes/PageHeader'
import TaskForm from '../Task/TaskForm'
import TaskList from './TaskList'
import axios from 'axios'

class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: '',
            list: [],
            url: 'http://localhost:3003/api/task'
        }
    }

    handleChangeDescription = (event) => {
        //this.setState({ description: event.target.value.toUpperCase() })
        let valor = event.target.value;
        this.setState((prevState) => {
            prevState.description = valor.toUpperCase();
            return prevState;
        })
    }

    treatSubmit = e => {
        //console.log("Entrou")
        e.preventDefault();
        let obj = {
            description: this.state.description
        }
        this.setState({ list: this.state.list.concat(obj) })
        // this.setState(prevState => {
        //     prevState.list.push(obj)
        //     return prevState;
        // })

        axios.post(this.state.url, obj)
            .then(resp => this.refresh())

        this.setState({ description: ""})
        
    }

    refresh = () => {
        axios.get(this.state.url)
            .then(resp => this.setState({...this.state.list, description: '', list: resp.data}))
    }
    

    componentWillMount = () => {
        this.refresh();
    }

    handleRemove = (element) =>{
        axios.delete(`${this.state.url}/${element._id}`)
         .then(this.refresh())
            
    }

    handleDoneTrue = (element) =>{
        axios.put(`${this.state.url}/${element._id}`,{...element, done: true})
            .then(this.refresh())
    }

    handleDoneFalse = (element) =>{
        console.log("Entoru no false");
        axios.put(`${this.state.url}/${element._id}`,{...element, done: false})
            .then(this.refresh())
    }
    
    render() {
        return (
            <div>                
                <PageHeader name="Tarefas" small="Cadastro" />
                <TaskForm description={this.state.description}
                    change={this.handleChangeDescription}
                    submit={this.treatSubmit} />
                <br />
                <TaskList listTask={this.state.list}
                 delete={this.handleRemove}
                 doneTrue={this.handleDoneTrue}
                 doneFalse={this.handleDoneFalse} />
            </div>
        )
    }
}

export default Task;