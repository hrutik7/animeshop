import React from "react";

import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();

        this.setState({email : '' , password : ''})
    }

    handleChange = (event) =>{
            const {value ,name} = event.target

            this.setState({[name] : value})
    }


    render(){
        return(
            <div className="sign-in">
                <h2>I already Have an account</h2>
                <span>Sign In with your email address</span>


                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" label="email" value={this.state.email} handleChange={this.handleChange} required />
                   

                    <FormInput name="password" type="password" label="password" value={this.state.password} handleChange={this.handleChange} required />
                   

                    <div className="buttons">
                    
                    <CustomButton type="submit" >
                        Sign In
                    </CustomButton>

                    
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                       {/* {''} */}
                        sign in with google
                                                                                                                                                                                                                                                              {/* {''} */}
                    </CustomButton>

                    </div>
                </form>
            </div>
        )
    }
}





export default SignIn