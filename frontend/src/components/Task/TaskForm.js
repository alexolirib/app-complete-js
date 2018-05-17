import React from 'react'
import Grid from '../templetes/Grid'

export default props => (
    <form className="form-inline">
        <input type="text" className="form-control col-xs-12 col-sm-9 col-md-10"
             placeholder="Adicione tarefa" />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button"><i className="fa fa-plus"></i></button>
            </div>
    </form>
)