import {SET_RECIPES, FAVORITE_RECIPES} from '../actions/index';
import {combineReducers} from 'redux';

function recipes(state=[],action){
    switch(action.type){
        case SET_RECIPES:
            return action.items;
        default:
            return state;
    }
}

function favoriteRecipe(state=[], action){
    switch(action.type){
        case FAVORITE_RECIPES:
            state = [...state, action.recipe];
            return state;
        default:
            return state;
    }
}
const rootReducers = combineReducers({recipes,favoriteRecipe});

export default rootReducers;
