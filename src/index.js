import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    
    <Provider store = { createStoreWithMiddleware(reducers)} >
    	<div className = 'container'>
       
          < App  />
       
       </div>
    </ Provider>

, document.getElementById('root'));


