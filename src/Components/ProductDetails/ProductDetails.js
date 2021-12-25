import React from 'react';
import items from '../Products/Store';


class ProductsDetails extends React.Component {

    constructor(props){
        super(props);
        this.state={currentItem:''}
      
    }
    handleClick = () =>{
        this.props.history.goBack();
      }
 
    componentDidMount() {
        const id=Number(this.props.match.params.id)
        const prod=items.find((item)=>{
            return item.id===id
        })
       
          this.setState({currentItem: prod });
          console.log("prod", this.state.currentItem)
         
    }

     
       
    
     
    

    render() {
        console.log("in render", this.state.currentItem.price)
        return (
 
            <div>
                 <h2>product details</h2> 
                <h3>{this.state.currentItem.title}</h3>
               <h6>Price: {this.state.currentItem.price}</h6> 
               <img style={{width:'100px'}} src={this.state.currentItem.imageUrl} alt=""/>
                
                <div>
              <button onClick={this.handleClick}>back</button>
                </div>
            </div>
        );
    }
}

export default ProductsDetails;