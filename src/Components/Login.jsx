import React, { useState } from 'react'
import Header from './Header'
const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  
  const toggleSigninForm = ()=>{
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form
        className="absolute w-3/12  m-36 mx-auto right-0 left-0 text-white bg-black p-10 bg-opacity-80"
        action=""
      >
        <h1 className="font-bold text-3xl">{isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm&&(
          <input
            type="text"
            placeholder="Full Name"
            className="p-4  mt-3 w-full bg-gray-900"
          />)

        }

        <input
          type="Email"
          placeholder="Email Address"
          className="p-4  mt-3 w-full bg-gray-900"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 mt-3 w-full bg-gray-900"
        />
        <button className=" bg-red-700 p-4 mt-8 w-full">Sign In</button>
        <p className="py-2" onClick={toggleSigninForm}>{ isSignInForm?"New to Netflix? SignUp Now":"Already Registered? Sign In"}</p>
      </form>
    </div>
  );
}

export default Login