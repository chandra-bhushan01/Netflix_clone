import { useState } from "react";
import Header from "./Header";
import { useRef } from "react";
import { checkValidData } from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/UserSlice';
import { BG_URL, USER_AVTAR } from "../Utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //Validate the form data for login and signup
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    //Sign In/ Sign Up
    if (!isSignInForm) {
      //SignUp logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVTAR,
          })
            .then(() => {
              //Profile updated!
              const{uid,email, displayName, photoURL} = auth.currentUser; // Update user in Redux state
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("/browse"); 
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          
        })
        .catch((error) => {
          
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      //Signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
          navigate("/browse");
        })
        .catch((error) => {
          
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  const toggleSigninForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          className=""
          src={BG_URL}
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-3/12  m-36 mx-auto right-0 left-0 text-white bg-black p-10 bg-opacity-80"
        action=""
      >
        <h1 className="font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4  mt-3 w-full bg-gray-900"
          />
        )}

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

        <p className="text-red-600 mt-2 text-lg">{errorMessage}</p>

        <button
          className=" bg-red-700 p-4 mt-8 w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-2" onClick={toggleSigninForm}>
          {isSignInForm
            ? "New to Netflix? SignUp Now"
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
