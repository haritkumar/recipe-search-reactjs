import React, {Component} from 'react';
import RecipeSearch from './RecipeSearch';
import '../styles/index.css';
import RecipeList from './RecipeList';

class App extends Component{
    render(){
        return(
                <div className="App">
                       <h2>RECIPE SEARCH</h2> 
                       <RecipeSearch/>
                       <br/>
                       <RecipeList/>
                </div>    
        )
    }
}

export default App;
