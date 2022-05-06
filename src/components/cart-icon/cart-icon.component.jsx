import React from "react";
import {connect} from 'react-redux'
import { selectCartItems, selectCartItemsCount } from "../../redux/Cart/Cart.selectors";
import {toggleCartHidden} from '../../redux/Cart/Cart.actions' 
import {ReactComponent as ShoppingIcon} from '../../Assests/shoppingbag.svg'
import './cart-icon.styles.scss'
import { createStructuredSelector } from "reselect";



const CartIcon = ({toggleCartHidden,itemCount}) =>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count"> {itemCount} </span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})


const mapStateToProps = createStructuredSelector({

    itemCount : selectCartItemsCount

})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)


