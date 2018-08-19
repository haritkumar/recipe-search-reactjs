import React, {Component} from 'react';
import RecipeSearch from './RecipeSearch';
import '../styles/index.css';
import RecipeList from './RecipeList';
import FavoriteRecipeList from './FavoriteRecipeList';

class App extends Component{
    render(){
        return(
                <div className="App">
                       <h2>RECIPE SEARCH</h2> 
                       <RecipeSearch/>
                       <br/>
                       <RecipeList/>
                       <FavoriteRecipeList/>
                </div>    
        )
    }
}

export default App;
