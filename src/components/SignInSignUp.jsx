import React from 'react';
import SignIn from './SignIn';
import Register from './Register';

import '../styles/sign-in-and-sign-up.styles.scss'

const SignInSignUp=()=>(
    <div className='sign-in-and-sign-up'>
    <SignIn/>
    <Register/>
    </div>
);

export default SignInSignUp;