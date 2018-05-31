import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Router from './Router';
import { createStore} from 'redux'
import { Provider } from 'react-redux'

import Task from './components/Task/Task'
import Menu from './components/templetes/Menu'
import taskReducer from './components/Reducers/TaskReducer'

const store = createStore(taskReducer);

const Aplicacao = ()=>(
    <Provider>
        <Router />
    </Provider>
)

ReactDOM.render(<Aplicacao />, document.getElementById('root'));
registerServiceWorker();
