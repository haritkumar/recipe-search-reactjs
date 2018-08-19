import React,{Component} from 'react';
import '../styles/listitem.css';
import {favoriteRecipes} from '../actions/index';
import {connect} from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';

class RecipeItem extends Component{
    constructor(){
        super();
        this.state={
            favorited:false
        }
    }

    favorite(recipe){
            this.props.favoriteRecipes(recipe);
            this.setState({favorited: true});
    }
    render(){
        let { recipe } = this.props;
        return(
            <div className="item col-xs-4 col-lg-4">
                    <div className="thumbnail card">
                        <div className="img-event">
                            <img className="group list-group-image img-fluid" src={recipe.thumbnail} alt=""/>
                        </div>
                        <div className="caption card-body">
                            <h4 className="group card-title inner list-group-item-heading">
                                {recipe.title} 
                                    {this.state.favorited?
                                        <i className="fa fa-star"></i>
                                    :
                                        <i className="fa fa-star-o"></i>
                                }
                                </h4>
                            <p className="group inner list-group-item-text">
                                {recipe.ingredients}</p>
                            <div className="row">
                            {this.state.favorited?
                            <div></div>
                            :
                            <div className="col-xs-12 col-md-6">
                                <button onClick={() => this.favorite(recipe)} className="btn btn-primary">ADD TO FAVORITE</button>
                            </div>
                            }
                                <div className="col-xs-12 col-md-6">
                                    <a target="blank" className="btn btn-success" href={recipe.href}>Go to Dish</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
        )
    }
}

export default connect(null,{favoriteRecipes})(RecipeItem);