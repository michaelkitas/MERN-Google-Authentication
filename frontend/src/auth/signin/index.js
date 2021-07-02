import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

function SignIn() {
  const googleAuth = async ({ profileObj }) => {
    axios({
      method: "post",
      url: "/auth/google/signin",
      data: {
        googleId: profileObj.googleId,
        email: profileObj.email,
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <GoogleLogin
      clientId="365874127278-6fae4lh5mkf6i3pue7qh1b2jmtv53mm0.apps.googleusercontent.com"
      onSuccess={googleAuth}
      onFailure={googleAuth}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default SignIn;
