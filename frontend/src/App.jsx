import "./App.css";
import { useEffect, useState } from "react";
import Signup from "./pages/Signup.jsx";
import Landing from "./user/Landing.jsx";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./pages/Login.jsx";
import { firebaseAuth } from "./context/Firebase.jsx";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setLoggedin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        console.log("User is already Signed In", user);
        setUser(user);
      } else {
        console.log("No user is signed in.");
        setUser(null);
      }
    });
  }, []);

  if (!user) {
    return (
      <div className="App">
        {loggedin ? (
          <Login
            setLoggedin={setLoggedin}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            setUser={setUser}
          />
        ) : (
          <Signup
            setLoggedin={setLoggedin}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        )}
      </div>
    );
  }
  if (user) {
    return (
      <>
        <Landing />
      </>
    );
  }
}

export default App;
