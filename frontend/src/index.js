import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Router from './Router';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import configReducer from './components/Reducers/configReducer'
//middleware
import promise from 'redux-promise'
import multi from 'redux-multi'//poder fazer multi dispatch (interessante para fazer refresh como banco )
import thunk from 'redux-thunk'//poder tratar a promise que é feito quando se é utilizado em multi dispatch

//poder visualizar os stores, reducer na extensão do chrome
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__();

//aplicando aqui o middleware vou poder trabalhar request http,(chamada de 3 metodos  )
const store = applyMiddleware(thunk, multi, promise)(createStore)(configReducer, devTools);

const Aplicacao = () => (
    <Provider store={store}>
        <Router />
    </Provider>
)

ReactDOM.render(<Aplicacao />, document.getElementById('root'));
registerServiceWorker();
