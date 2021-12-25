
import React, { Component } from 'react'

export default class Cart extends Component {

state={cart:[]}

componentDidMount(){
    const mycart=JSON.parse(localStorage.getItem('cart'))
    this.setState({cart: mycart})
    console.log('in cart comp' ,mycart)
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

    /*****************************************************
 * Add Items to Cart
 */
   
    getQuantity=(id)=>{
        const result=this.state.cart.filter((item)=>{
            return item.id===id
        })
        console.log("result is", result, result.length)
        return result.length;
    }
    /********************************************** */

displayCart=()=>{
  
        return this.state.cart.map((prod)=>{
           const number= this.getQuantity(prod.id)
          
            return (
                   
                    <div>
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
                    $ {prod.price} X {number} = {prod.price * number}
                    
                    </div>

                    <div className="button-container">
                    <button type="button" onClick={()=>this.addToCart(prod.id)} 
                    className="ui primary button">
                        + </button>
                   

                    
                    <button type="button" onClick={()=>this.removeFromCart(prod.id)} 
                    className="ui primary button">
                        -</button>
                     </div>
                    <hr/>
            </div>

              
            
               
               
            )
        })
    
}
    render() {
       
       

        return (
            <div>
               
                {this.displayCart()}
            </div>
        )
    }
}
