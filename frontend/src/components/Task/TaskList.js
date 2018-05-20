import React from 'react'
import List from './List'

const TaskList = props => {

    const setList = () => {
        const test = [{ descriprion: "testando", id: 1 },{ descriprion: "aaaaaaaaaaaaaaa", id: 2 }]
        return test.map(list => <List {...list}/>)
            
        
    }

    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Descrição</th>
                </tr>
            </thead>
            <tbody>
                {setList()}
            </tbody>
        </table>
    )
}

export default TaskList;