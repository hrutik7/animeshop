import React from "react";
import { connect } from "react-redux";
import CustomButton from '../custom-button/custom-button.component'
import CartItem from "../cart-item/cart-item.component";
import { withRouter } from "react-router-dom";
import './cart-dropdown.styles.scss'
import { selectCartItems } from "../../redux/Cart/Cart.selectors";
import { createStructuredSelector } from "reselect";
import {toggleCartHidden} from '../../redux/Cart/Cart.actions'

const CartDropdown = ({cartItems,history,dispatch}) =>(
    <div className="cart-dropdown">
        <div className="cart-items" >

    {   
        cartItems.length ?
        cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
        : (
        <span className="empty-message">Your Cart Is Empty</span>
        )
        
    }

</div>
        <CustomButton onClick = {() => {history.push('/checkout')
        dispatch(toggleCartHidden())    }
    }
        >
            Go Checkout
        </CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown))