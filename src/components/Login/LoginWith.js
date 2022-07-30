import React from "react";
import GoogleLogin from "react-google-login";

export default function LoginWith() {

    const responseGoogle=()=>{
        alert("It works!");
    }
  return (
   
      <GoogleLogin
        clientId="437412486193-teltte8hnfqqe2jg0fci50jb7jddoe8v.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
       
      />
   
  );
}
