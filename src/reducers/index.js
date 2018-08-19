import {SET_RECIPES} from '../actions/index';
import {combineReducers} from 'redux';

function recipes(state=[],action){
    switch(action.type){
        case SET_RECIPES:
            return action.items;
        default:
            return state;
    }
}

const rootReducers = combineReducers({recipes});

export default rootReducers;
