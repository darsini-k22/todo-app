import React from "react";
import GoogleLogin from "react-google-login";
import { FaGoogle } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";

export default function LoginWith() {
  const handleSuccess = (googleData) => {
    console.log(googleData);
  };

  const handleFailure = (result) => {
    alert(result);
  };
  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={'single_host_origin'}
      render={renderProps => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="flex col-span-2 border-2 justify-evenly p-3 gap-2 items-center "><FcGoogle size="20px"/>Sign In With Google</button>
      )}
      clientId="437412486193-teltte8hnfqqe2jg0fci50jb7jddoe8v.apps.googleusercontent.com" />
  );
}
