import React, {Component} from 'react';
import {connect} from 'react-redux';
import RecipeItem from './RecipeItem';
import '../styles/listitem.css';

class FavoriteRecipeList extends Component{
    render(){
        console.log('this.props',this.props);
        return(
            <div>
            <h2>FAVORITE RECIPES</h2>
            <div id="products" className="row view-group">
            {
                this.props.favoriteRecipes.map((recipe,index) => {
                    return(
                        <RecipeItem key={index} recipe={recipe} favoriteButton={false}></RecipeItem>
                    )
                })
            }
            </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        favoriteRecipes: state.favoriteRecipe
    }
}

export default connect(mapStateToProps,null)(FavoriteRecipeList);