import React from 'react'
import Menu from '../templetes/Menu'

import PageHeader from '../templetes/PageHeader'

export default props => (
    <div className='container'>
        <Menu />
        <PageHeader name="SOBRE" small="NÓS" />

        <h2>Nossa História</h2>
        <p>Lorem ipsum dolor sit....</p>
        <h2>Missão e visão</h2>
        <p>Lorem ipsum dolor sit....</p>
        <h2>Imprensa</h2>
        <p>Lorem ipsum dolor sit....</p>
    </div>
)

