import React from 'react';
import Button from '../templetes/IconButton'

export default props => {

    const acaoExcluisao = () => {
        //console.log(props.elemento)
        props.remove(props.elemento);
    }

    const acaoMarcar = () => {
        props.doneTrue(props.elemento);
    }

    const acaoDesmarcar = () => {
        props.doneFalse(props.elemento);

    }

    return (
        <tr>
            <th scope="row">{props.id}</th>
            <td className={props.done ? 'markedDone': ''} >{props.description}</td>
            <td>

                <Button styles={"success"} onClick={acaoMarcar} icon="check" />
                <Button styles={"warning"} onClick={acaoDesmarcar} icon="undo" />
                <Button styles={"danger"} onClick={acaoExcluisao} icon="trash-o" />
            </td>
        </tr>
    )
}