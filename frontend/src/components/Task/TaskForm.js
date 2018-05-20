import React from 'react'
import Grid from '../templetes/Grid'
import IconButton from '../templetes/IconButton'

export default props => (
    <form className="form-inline" onSubmit={props.submit}>

        <input type="text"
            className="form-control col-xs-12 col-sm-9 col-md-10"
            value={props.description}
            onChange={props.change}
            placeholder="Adicione tarefa" />
        <Grid cols='12 3 2'>
            <IconButton icon="plus" />
        </Grid >
    </form>
)