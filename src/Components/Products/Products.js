import React from 'react';
import items from './Store';
import { Link } from 'react-router-dom';
import './Products.css'

class Products extends React.Component {

    state = { itemsList: items}

    componentDidMount() {
        
        console.log("in products")
    }
    displayProducts=()=>{
        return this.state.itemsList.map((prod)=>{
           
            return (
                   
                    <div className="prod-card">
                    <div className="prod-img">
                    <img  src={prod.imageUrl} alt={prod.title}/>
                    </div>
                    <div className="prod-title">
                    {prod.title}
                    </div>
                    <div className="prod-desc">
                    {prod.size}
                    </div>
                    <div className="prod-price">
                    {prod.price}
                    </div>

                    <div>
                    <button type="button" className="ui primary button">Add to Cart</button>
                    </div>


                <Link key={prod.id} to={`/Products/${prod.id}`}> {prod.title} </Link> 
            
                </div>
               
            )
        })
    }

    render() {
        console.log(this.state)
        return (

            <div className="main-container">
                
                {this.displayProducts()} 

            </div>
        );
    }
}

export default Products;