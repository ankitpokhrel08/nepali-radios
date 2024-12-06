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

        {/* Login Card */}
        <div
          className="relative z-10 h-[550px] w-[500px] overflow-hidden rounded-3xl bg-white bg-opacity-5
        backdrop-blur-sm shadow-lg"
        >
          <div className="mt-3 space-y-8 px-10 py-10 text-center">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3E2723] via-[#0D47A1] to-[#B71C1C] mb-6">
              Nepali Radio
            </h1>
            <div className="group relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer h-14 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none"
              />
              <label className="absolute left-2 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:h-full peer-focus:-top-7 peer-focus:h-1/2 peer-focus:pl-0 peer-focus:text-white">
                Email
              </label>
            </div>

            <div className="group relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer h-14 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none"
              />
              <label className="absolute left-2 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:h-full peer-focus:-top-7 peer-focus:h-1/2 peer-focus:pl-0 peer-focus:text-white">
                Password
              </label>
            </div>

            <button
              className="h-12 w-full rounded-3xl bg-blue-900 text-white transition-all duration-300 hover:bg-blue-800"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </div>

          <p className="text-center text-white gap-2">
            Already have an account?{" "}
            <a
              onClick={isLogin}
              className="font-semibold text-blue-300 hover:text-blue-800 cursor-pointer"
            >
              Login
            </a>
          </p>

          {/* Google Signup */}
          <a
            onClick={() => firebase.signupWithGoogle()}
            className="border-white-500 group mx-20 mb-4 mt-5 inline-flex h-12 w-[320px] items-center justify-center space-x-2 rounded-3xl border px-4 py-2 transition-colors duration-300 hover:border-blue-500 hover:bg-blue-500 focus:outline-none"
          >
            <i className="fa fa-google text-white"></i>
            <span className="text-sm font-medium text-white">
              Sign up with Google
            </span>
          </a>

          {/* GitHub Signup */}
          <a
            href="#"
            className="border-white-500 group mx-20 my-0 inline-flex h-12 w-[320px] items-center justify-center space-x-2 rounded-3xl border px-4 py-2 transition-colors duration-300 hover:border-black hover:bg-black focus:outline-none"
          >
            <i className="fa fa-twitter text-white"></i>
            <span className="text-sm font-medium text-white">Github</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Signup;
