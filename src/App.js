import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Header from "./components/Header";
import Contact from "./components/Contact";
import SignInSignUp from "./components/SignInSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

import { setCurrentUser } from "./redux/user/userAction";

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     currentUser: null
  //   };
  // }

  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //console.log(userAuth);
      if (userAuth) { const userRef = await createUserProfileDocument(userAuth); 
        userRef.onSnapshot(snapShot => { 
          setCurrentUser({ id: snapShot.id, ...snapShot.data()});
        }); 
      } else {
        setCurrentUser(userAuth); // <== This one here
      }
    }); 
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
