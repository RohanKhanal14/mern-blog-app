import { Button } from "flowbite-react";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import {  signinSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";

const GoogleAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const result = await signInWithPopup(getAuth(app), provider);
      const res = await fetch("http://localhost:8080/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        }),
      });
      const data = await res.json();
      if (res.ok){
        dispatch(signinSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      type="button"
      gradientDuoTone="pinkToOrange"
      outline
      onClick={handelGoogle}
    >
      <FaGoogle className="w-6 h-6 mr-2" /> GoogleAuth
    </Button>
  );
};

export default GoogleAuth;
