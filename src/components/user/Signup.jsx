import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../navbar/Footer";
import { facebook_blue, google, signup_bg } from "../../assets/constants";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handleLoginEvent = (e) => {
    e.preventDefault();
    navigate("/");
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
                src={signup_bg}
                alt="signup form img"
                className=" object-cover w-full h-full"
              />
            </div>

            <div className=" flex-grow pr-2 flex flex-col justify-between">
              <h3 className=" text-center">
                Welcome To USAM Let's create an account now
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

              {/*username*/}
              <label>Username</label>
              <input
                type="username"
                required
                placeholder="Enter Your Username"
                value={username}
                onChange={(e) => {
                  console.log(e.target.value);
                  setUsername(e.target.value);
                }}
                className=" rounded-full pl-4"
              />
              <br />

              {/*Password*/}
              <label>Password</label>
              <input
                type="password"
                required
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-full pl-4"
              ></input>
              <br />

              {/*Email*/}
              <label>Email</label>
              <input
                type="email"
                required
                value={email}
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-full pl-4"
              ></input>
              <br />
              <button
                type="submit"
                className=" self-end bg-black text-white p-3 "
              >
                Continue
              </button>
              <span className="text-center">
                Already have an account?
                <span className="text-white"> Login Now</span>
              </span>
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
export default Signup;
