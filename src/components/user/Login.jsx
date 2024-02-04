import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/store/UserSlice";
import { useNavigate } from "react-router-dom";
import Footer from "../navbar/Footer";
import { facebook_blue, google, login_bg } from "../../assets/constants";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error } = useSelector((state) => state.user);

  const handleLoginEvent = (e) => {
    e.preventDefault();
    let userCredentials = {
      email,
      password,
    };
    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {
        setEmail("");
        setPassword("");
        navigate("/");
      } else {
        setEmail("Hi ");
        setPassword("Hi");
        navigate("/");
      }
    });
  };

  return (
    <div className="flex flex-col absolute top-[15%] w-[100vw] ">
      <div className="relative h-[1100px] w-[100%]">
        <form
          className=" w-[90%] h-[90%] bg-gradient-to-tr  from-gradient-0-color via-gradient-1-color to-gradient-2-color rounded-3xl border-0"
          onSubmit={handleLoginEvent}
        >
          <div className="flex flex-col md:flex md:flex-row gap-[5%] w-[100%] h-[100%]">
            <div className=" self-center md:w-[40%] h-[100%] ">
              <img
                src={login_bg}
                alt="login form img"
                className=" object-cover w-full h-full"
              />
            </div>

            <div className=" flex-grow pr-2 flex flex-col justify-between">
              <h3 className=" text-center">
                Welcome To USAM if you have an account login now
              </h3>
              <span className="text-center block text-white text-xl">
                Or connect with
                <img
                  src={facebook_blue}
                  alt="facebok logo"
                  className=" ml-4 mr-2 w-5 h-5 inline align-middle rounded-full"
                />
                &nbsp;
                <img
                  src={google}
                  alt="google logo"
                  className="w-5 h-5 inline align-middle bg-white rounded-full"
                />
              </span>
              <label>Username</label>
              <input
                type="email"
                required
                placeholder="Enter Your Username"
                value={email}
                onChange={(e) => {
                  console.log(e.target.value);
                  setEmail(e.target.value);
                }}
                className=" rounded-full pl-4"
              />
              <br />
              <label>Password</label>
              <input
                type="password"
                required
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-full pl-4"
              ></input>
              <span className="">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="inline-block w-4 float-left p-0 mt-0 mr-2 "
                />
                <span className="inline float-left pt-3"> Remember me</span>
                <span className=" inline float-right pt-3">
                  Forgot Password?
                </span>
              </span>
              <br />
              <button type="submit" className=" self-end bg-black text-white">
                {loading ? "loading.." : "Login"}
              </button>
              <span className="text-center">
                Don't have an account{" "}
                <span className="text-white">Register Now</span>
              </span>
              {error && <div>{error}</div>}
            </div>
          </div>
        </form>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};
export default Login;
