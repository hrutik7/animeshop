
import './App.css';

import { Route, Switch , Redirect } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkout/checkout.component';

import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import React from 'react';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import {setCurrentUser} from './redux/User/User.actions'
import {selectCurrentUser} from './redux/User/User.selectors'


class App extends React.Component {




  unsubscribeFromAuth = null

  componentDidMount(){

    const {setCurrentUser} = this.props;
    console.log("in component did mount")
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        console.log("in if")
        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data())

          setCurrentUser({
              id : snapShot.id,
              ...snapShot.data()
            })
          },()=>{
            console.log(this.state)
        
        })
        console.log(this.state)
      }

      setCurrentUser(userAuth)

    
    
    })
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth();
    
  }

  render(){
  return (
    <div>
      <Header />
      <Switch>
       <Route exact  path="/" component={Homepage}  />
       <Route  path="/shop" component={ShopPage}  />
       <Route exact path="/checkout" component={CheckoutPage}  />
       <Route  path='/signin' render={()=>this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)}   />
       </Switch>
    </div>
  );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})




const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})


export default connect(null,mapDispatchToProps)(App);
