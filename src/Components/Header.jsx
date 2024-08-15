
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/UserSlice";
import { auth } from "../Utils/Firebase";
import { toggleGptSearchView } from "../Utils/gptSlice";
import GptSearch from "./GptSearch";

     

// import { addUser } from '../Utils/UserSlice';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const user = useSelector((store)=>store.user);
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)



  const handleSignOut = () => {
    

    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch(() => {
        // An error happened.
        navigate("/error")

      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe function is called when the component is unmounted
    return () => unsubscribe;



  },[]); 



  const handleGptSearchClick = () => {
    //toggle GTP Search component visibility
    
    dispatch(toggleGptSearchView())
  }


     

  return (
    <div className="absolute w-full justify-between flex px-20 py-8 bg-gradient-to-b from-black z-20 ">
      <img
        className="w-40  "
        src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
        alt=""
      />
      {user && (
        <div className="flex ">
          <button className="py-1 px-4 m-2  bg-purple-800 text-white rounded" onClick={handleGptSearchClick}>{showGptSearch?"Home Page":"GPT Search"}</button>
        <img className="h-10 mr-3" 
          alt="usericon"
          src={user?.photoURL}
        />
        <button className="text-white font-bold" onClick={handleSignOut}>Sign Out</button>
      </div>
    )}
    </div>
  );
}

export default Header