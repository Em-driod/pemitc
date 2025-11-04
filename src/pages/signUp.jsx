import React from "react";

const SignUp = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <h3>Sign Up</h3>
        <input type="email" placeholder="Email" style={{ margin: "10px 0", padding: "10px" }} />
        <input type="password" placeholder="Password" style={{ margin: "10px 0", padding: "10px" }} />
        <input type="password" placeholder="Confirm Password" style={{ margin: "10px 0", padding: "10px" }} />
        <button type="submit" style={{ padding: "10px", backgroundColor: "blue", color: "white", border: "none", cursor: "pointer" }}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
