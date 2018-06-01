import React, { Component } from 'react'
import Grid from '../templetes/Grid'
import IconButton from '../templetes/IconButton'
import { connect } from 'react-redux'
import { changeDescription, search, add } from '../Actions/TaskAction'
import { bindActionCreators } from 'redux'

class TaskForm extends Component {

    keyHandler = (e) =>{
        if(e.key === 'Enter'){
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()

        } else{
            if(e.key === 'Escape') {
                this.props.handleClear();
            }
        }
    }
    submit = (event) =>{
        event.preventDefault();
        this.props.add(this.props.description)
    }
    componentDidMount = () =>{
        this.props.search();
    }
    render() {
        return (
            <form className="form-inline" onSubmit={this.submit}>
                <input type="text"
                    className="form-control col-xs-12 col-sm-9 col-md-10"
                    value={this.props.description}
                    onChange={this.props.changeDescription}
                    placeholder="Adicione tarefa" />
                <Grid cols='12 3 2'>
                    <IconButton icon="plus" style="secondary" />
                </Grid >
            </form>
        )
    }
}

const mapStateToProps = state => ({ description: state.task.description })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeDescription, search, add }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);