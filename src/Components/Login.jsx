import { useState } from 'react'
import Header from './Header'
import { useRef } from 'react';
import { checkValidData } from '../Utils/Validate';



const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const[errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const handleButtonClick = ()=>{
    //Validate the form data for login and signup
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    //Sign In/ Sign Up
    

  }
  
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
      <form onSubmit={(e)=>{e.preventDefault()}}
        className="absolute w-3/12  m-36 mx-auto right-0 left-0 text-white bg-black p-10 bg-opacity-80"
        action=""
      >
        <h1 className="font-bold text-3xl">{isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm&&(
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4  mt-3 w-full bg-gray-900"
          />)

        }

        <input
        ref={email}
          type="Email"
          placeholder="Email Address"
          className="p-4  mt-3 w-full bg-gray-900"
        />

        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-4 mt-3 w-full bg-gray-900"
        />

        <p className='text-red-600 mt-2 font-bold text-lg' >{errorMessage}</p>

        <button className=" bg-red-700 p-4 mt-8 w-full" onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>

        <p className="py-2" onClick={toggleSigninForm}>{ isSignInForm?"New to Netflix? SignUp Now":"Already Registered? Sign In"}</p>
      </form>
    </div>
  );
}

export default Login