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

        let description = this.state.description
        axios.post(this.state.url, obj)
            .then(resp => console.log("funcionou"))

        this.setState({ description: "" })
    }

    refresh = () => {
        axios.get(this.state.url)
            .then(resp => {
                for (let data of resp.data) {
                    this.setState(prevState => {
                        prevState.list.push(data);
                        return prevState;
                    })
                }
            });
    }

    componentWillMount = () => {
        this.refresh();
    }

    render() {
        return (
            <div>                
                <PageHeader name="Tarefas" small="Cadastro" />
                <TaskForm description={this.state.description}
                    change={this.handleChangeDescription}
                    submit={this.treatSubmit} />
                <br />
                <TaskList />
            </div>
        )
    }
}

export default Task;