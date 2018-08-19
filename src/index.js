import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducers from './reducers/index';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FavoriteRecipeList from './components/FavoriteRecipeList';

const store = createStore(rootReducers);
store.subscribe(() => console.log("store",store.getState()));
ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact={true} path='/' component={App}></Route>
            <Route path='/favorites' component={FavoriteRecipeList}></Route>
        </Switch>
    </BrowserRouter>
</Provider>
,document.getElementById("root"));