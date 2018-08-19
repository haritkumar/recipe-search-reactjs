import React,{Component} from 'react';
import '../styles/listitem.css';

class RecipeItem extends Component{
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
                                {recipe.title}</h4>
                            <p className="group inner list-group-item-text">
                                {recipe.ingredients}</p>
                            <div className="row">
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

export default RecipeItem;