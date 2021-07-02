import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

function SignUp() {
  const googleAuth = ({ profileObj }) => {
    axios({
      method: "post",
      url: "/auth/google/signup",
      data: {
        googleId: profileObj.googleId,
        email: profileObj.email,
        first_name: profileObj.givenName,
        last_name: profileObj.familyName,
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
    >
      <span>Sign Up with Google</span>
    </GoogleLogin>
  );
}

export default SignUp;
