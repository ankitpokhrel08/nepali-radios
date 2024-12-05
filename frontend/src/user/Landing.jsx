/* eslint-disable react/prop-types */
function Landing({ user, signOut, firebaseAuth }) {
  return (
    <div>
      <div className="App">
        <img src={user.photoURL} alt=" " />
        <h1>Hi 👋 {user.displayName}</h1>
        <h2>Welcome to Local Host</h2>
        <h5>Account Created on: {user.metadata.creationTime}</h5>
        <button onClick={() => signOut(firebaseAuth)}>Sign Out </button>
        <span> </span>
        <span> </span>
      </div>
    </div>
  );
}

export default Landing;
