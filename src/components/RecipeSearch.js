import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, FormGroup, Label, Input,Button} from 'reactstrap';
import {connect} from 'react-redux';
import {setRecipes} from '../actions/index';

class RecipeSearch extends React.Component{
    constructor(){
        super();
        this.state = {
            ingredients:'',
            dish:''
        }
    }
    search(){
        let {ingredients,dish}=this.state;
        const url =`http://www.recipepuppy.com/api/?-=${ingredients}&q=${dish}`;
        console.log('url',url);
        fetch(url,{
            method: 'GET'
        }).then(response => response.json()).then(json => {
                this.props.setRecipes(json.results)
            });
    }
    render(){
        return(
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="ingredients" className="mr-sm-2">Ingredients</Label>
                        <Input type="text" name="ingredients" id="ingredients" placeholder="sweet, salty" 
                        onChange={event => this.setState({ingredients:event.target.value})}/>
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="dish" className="mr-sm-2">Dish</Label>
                        <Input type="text" name="dish" id="dish" placeholder="icecream" 
                        onChange={event => this.setState({dish:event.target.value})}/>
                    </FormGroup>
                    <Button color="primary" onClick={() => this.search()}>Search</Button>
                </Form>
                </div>
            </div>    
        )
    }
}

export default connect(null,{setRecipes})(RecipeSearch) ;