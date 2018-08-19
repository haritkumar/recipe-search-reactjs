import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducers from './reducers/index';

const store = createStore(rootReducers);
store.subscribe(() => console.log("store",store.getState()));
ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById("root"));