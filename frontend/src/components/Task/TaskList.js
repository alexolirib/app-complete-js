import React from 'react'
import { connect } from 'react-redux'
import List from './List'

const TaskList = props => {

    const setList = () => {
        let expre = "-";
        return props.list.map(list =>   <List key={list._id} 
            id={expre} 
            {...list} 
            elemento={list} 
            remove={props.delete}
            doneTrue={props.doneTrue}
            doneFalse={props.doneFalse}  />  )
            
        
    }
    
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">AÇÕES</th>
                </tr>
            </thead>
            <tbody>
                {setList()}
            </tbody>
        </table>
    )
}

//aqui irá mapear os stores que estam nos meus stores (reducer)
const mapStateProps = state => ({list: state.task.list})

export default connect(mapStateProps)(TaskList);