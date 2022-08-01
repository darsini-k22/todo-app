import React, { useEffect, Fragment, useState } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script"


import { FcGoogle } from "react-icons/fc";

export default function LoginWith() {

  const [loginData, setLoginData] = useState(localStorage.getItem('loginData') ? JSON.parse(localStorage.getItem('loginData')) : null);


  const handleSuccess = (googleData) => {
    setLoginData(1);
    localStorage.setItem('loginData', 1)
  };

  useEffect(() => {
    function start() {
      gapi.client.init({ clientId: "437412486193-t0gi9mfqe2l458oofhf5o0ttjmto3b9e.apps.googleusercontent.com", scope: "" })
    };
    gapi.load('client:auth2', start)
  }
    , [])

  const handleFailure = (result) => {
    try {
      console.log(result);

    } catch (error) {
      console.log(error.message)
    }

  };

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  }

  return (
    <Fragment>
      {loginData ? (<div>You have already logged in<button onClick={handleLogout}>Log Out</button></div>) : <GoogleLogin
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
        render={renderProps => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="flex col-span-2 border-2 justify-evenly p-3 gap-2 items-center "><FcGoogle size="20px" />Sign In With Google</button>
        )}
        isSignedIn={true}
        clientId="437412486193-t0gi9mfqe2l458oofhf5o0ttjmto3b9e.apps.googleusercontent.com" />}

    </Fragment>

  );
}
