import { useContext } from "react";
import { firebaseAuth, FirebaseContext } from "../context/Firebase";

// eslint-disable-next-line react/prop-types
function Login({ setLoggedin, email, password, setEmail, setPassword }) {
  const firebase = useContext(FirebaseContext);
  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    setEmail("");
    setPassword("");
    firebase.loginUser(firebaseAuth, email, password);
  };

  return (
    <div className="app">
      <h1>Login</h1>
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
        <button onClick={handleLogin}>Login</button>
      </div>
      <br />
      <br />
      <span>
        {" "}
        Don&apos;t have an account?
        <a onClick={() => setLoggedin(false)} style={{ cursor: "pointer" }}>
          {" "}
          Signup
        </a>
      </span>
    </div>
  );
}

export default Login;
