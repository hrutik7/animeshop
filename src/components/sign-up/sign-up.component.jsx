import React from "react";

import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";

import { auth,createUserProfileDocument } from "../../firebase/firebase.utils";

import './sign-up.styles.scss'

class SignUp extends React.Component {

    constructor(){
        super();


        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        console.log('handle submit is called')
        const {displayName,email,password,confirmPassword} = this.state
        
        if(confirmPassword !== password ){
            alert("password don't match")

            return;
        }

        try{
            const {displayName,email,password,confirmPassword} = this.state
            console.log("im below try")
            // const {user} = await auth.createUserWithEmailAndPassword(email,password)
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            
            console.log('docs')
           await createUserProfileDocument(user,{displayName})

           this.setState({
            displayName : '',
            email  : '',
            password : '',
            confirmPassword : ''
        })
        }catch(error){
                console.log(error)
        }

    }

    handleChange = event =>{
        console.log("handlechange is called")
        const {name,value} =event.target
        this.setState({[name] : value})
    }


    render(){

        const {displayName,email,password,confirmPassword} = this.state
        return(
            <div className="sign-up"> 
            <h2 className="title">I do not have a account </h2>
            <span>sign up with your email and password</span>

            <form className="sign-up-form" onSubmit={this.handleSubmit} action="">
                <FormInput
                    type="text"
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
               />

               

                <FormInput
                    type="email"
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required
               />

               

                <FormInput
                    type="password"
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='password'
                    required
               />

               

                <FormInput
                    type="password"
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='confirm Password'
                    required
               />

               <CustomButton type="submit"> SIGN UP </CustomButton>
            </form>
            </div>
        )
    }
}





export default SignUp;