import React from 'react'
import List from './List'

const TaskList = props => {

    const setList = () => {
        let expre = "-";
        return props.listTask.map(list =>   <List key={list._id} 
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

export default TaskList;