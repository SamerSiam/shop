import React from 'react';
import items from './Store';
import { Link } from 'react-router-dom';
import './Products.css'


class Products extends React.Component {

    state = { itemsList: items, cart:[]}

    componentDidMount() {
        //API CALL
    }

   
/*****************************************************
 * Add Items to Cart
 */
    addToCart=(id)=>{
               
        const tempItem =this.state.itemsList.find((item=>{
            return item.id ===id;
        }))
        this.setState(prevState=>({
            cart: [...prevState.cart,tempItem]
        }))
        localStorage.setItem('cart', JSON.stringify(this.state.cart))
        console.log(this.state)

    }

    /*****************************************************
 * Remove Items from Cart
 */
removeFromCart=(id)=>{
    console.log("remove", id)

    const myCart=[...this.state.cart]
       
    for (let i=0; i< myCart.length; i++)
    {
        if (myCart[i].id===id)
        {
            myCart.splice(i,1)
        }
    }
    this.setState({cart:myCart})
    
   

}
 /*************************************************************************************************************
  * Display Products Function */   
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
                    $ {prod.price}
                    </div>

                    <div>
                    <button type="button" onClick={()=>this.addToCart(prod.id)} 
                    className="ui primary button">
                        Add to Cart</button>
                    </div>
                    <br/> 
                    <div>
                    <button type="button" onClick={()=>this.removeFromCart(prod.id)} 
                    className="ui primary button">
                        Remove Item</button>
                    </div>


                <Link key={prod.id} to={`/Products/${prod.id}`}> {prod.title} </Link> 
            
                </div>
               
            )
        })
    }

    render() {
        localStorage.setItem('cart', JSON.stringify(this.state.cart))
        console.log(this.state)
        console.log(localStorage)
        
        return (

            <div className="main-container">
                
                {this.displayProducts()} 
            <div className="total">
                {this.state.cart.length}
            </div>
            </div>
        );
    }
}

export default Products;