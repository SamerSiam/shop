import React from 'react';
import { Link } from 'react-router-dom';

const Header = ()=>{ 
return (

    <div className="ui secondary pointing menu"> 

    <Link to="/" className="item"> Home Page</Link>
    <Link to="/products" className="item"> Products</Link>
    <Link to="/cart" className="right item"> Shopping Cart <i class="shopping cart icon"></i></Link>
    </div>
);
};

export default Header;