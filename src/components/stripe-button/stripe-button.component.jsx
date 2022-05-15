import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51KzHSJSIRDq8uWw139Xxd6d4WTjVfvJl6U9CLQ2KrR677VHw0O4QPtIFU0MAwEMe6Ay8SznHMI88dMAec9oYpWgG00lWiEE3kv'
    
   const onToken = token => {
        console.log(token)
        alert('Payment Succesful')
    }

    return(
        <StripeCheckout 
            label="Pay Now"
            name="JERSY"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    )

}


export default StripeCheckoutButton;