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
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source src="../public/Assets/Videos/video5.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="relative z-10 h-[550px] w-[500px] overflow-hidden rounded-3xl bg-white bg-opacity-10
        backdrop-blur-md shadow-lg"
      >
        <div className="mt-10 space-y-8 px-10 py-10 text-center">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3E2723] via-[#0D47A1] to-[#B71C1C] mb-6">
            Nepali Radio
          </h1>

          <div className="group relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer h-14 w-full rounded-3xl bg-gray-100 px-4 mb-8 text-sm outline-none"
            />
            <label
              className="absolute left-2 top-[-115px] flex h-full transform items-center pl-2 text-base transition-all duration-300 peer-placeholder-shown:top-4
            peer-placeholder-shown:h-full peer-focus:-top-20 peer-focus:h-1/2 peer-focus:pl-0 peer-focus:text-white"
            >
              Email
            </label>

            <div className="group relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer h-14 mb-8 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none"
              />
              <label className="absolute left-2 top-[-37px] flex h-full transform items-center pl-2 text-base transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:h-full peer-focus:-top-11 peer-focus:h-1/2 peer-focus:pl-0 peer-focus:text-white">
                Password
              </label>
              <button
                className="h-12 w-full rounded-3xl bg-blue-900 text-white transition-all duration-300 hover:bg-blue-800"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <p className="text-center mt-10 text-white gap-2">
              {" "}
              Don&apos;t have an account?
              <a
                onClick={() => setLoggedin(false)}
                className="font-semibold text-blue-500 hover:text-blue-800 cursor-pointer"
              >
                {" "}
                Signup
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
