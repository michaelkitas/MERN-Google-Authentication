import React, { useEffect, useState } from "react";
import axios from "axios";

function Homepage() {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState();

  useEffect(async () => {
    const profile = await axios.get("/profile");
    setUser(profile.data);
    setLoading(false);
  }, []);

  if (isLoading) return "Loading...";
  else {
    return (
      <div>
        <p>Email: {user.email}</p>
        <p>First Name: {user.first_name}</p>
        <p>Last Name: {user.last_name}</p>
      </div>
    );
  }
}

export default Homepage;
