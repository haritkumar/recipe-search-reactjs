import React,{Component} from 'react';
import {connect} from 'react-redux';
import RecipeItem from './RecipeItem';
import '../styles/listitem.css';
import $ from 'jquery';

class RecipeList extends Component{
    listView(event){
        event.preventDefault();
        $('#products .item').addClass('list-group-item');
    }
    
    gridView(event){
        event.preventDefault();
        $('#products .item').removeClass('list-group-item');
        $('#products .item').addClass('grid-group-item');
    }
    render(){
        console.log("this.props",this.props);
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 my-3">
                        <div>
                            <div className="btn-group">
                                <button className="btn btn-info" id="list" onClick={this.listView}>
                                    List View
                                </button>
                                <button className="btn btn-danger" id="grid" onClick={this.gridView}>
                                    Grid View
                                </button>
                            </div>
                        </div>
                    </div>
                </div> 
                <div id="products" className="row view-group">
                {
                       this.props.recipes.map((recipe,index) =>{
                           return(
                               <RecipeItem key={index} recipe={recipe}></RecipeItem>
                           )
                       })
                   } 
                </div>
            </div>
        )
    }
}



function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps,{})(RecipeList);