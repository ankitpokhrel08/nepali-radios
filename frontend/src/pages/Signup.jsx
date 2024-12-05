import { useContext } from "react";
import { FirebaseContext } from "../context/Firebase";

// eslint-disable-next-line react/prop-types
function Signup({ email, password, setEmail, setPassword, setLoggedin }) {
  const firebase = useContext(FirebaseContext);

  const isLogin = () => {
    setLoggedin(true);
  };

  const handleSignup = async () => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await firebase.signupUser(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error during signup:", error);
      alert(error.message);
    }
  };

  return (
    <>
      <div className="app">
        <h1>Sign Up</h1>
        <div className="form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginRight: "8px",
            }}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginRight: "8px",
            }}
          />
          <br />
          <br />
          <button onClick={handleSignup}>Sign Up</button>
        </div>
      </div>
      <p>Or</p>
      <button onClick={() => firebase.signupWithGoogle()} target="blank">
        Signup with Google
      </button>
      <br />
      <br />
      <span>
        Already have an account?
        <a onClick={isLogin} style={{ cursor: "pointer" }}>
          {" "}
          Login
        </a>
      </span>
    </>
  );
}

export default Signup;
