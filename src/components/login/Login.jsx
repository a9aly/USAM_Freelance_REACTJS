import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/store/UserSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();
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
    <form
      className="wrapper absolute w-[90%] max-w-[600px]"
      onSubmit={handleLoginEvent}
    >
      <h1 className=" text-center">Login</h1>
      <label>Email</label>
      <input
        type="email"
        required
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Password</label>
      <input
        type="password"
        required
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br />
      <button type="submit" className="">
        {loading ? "loading.." : "Login"}
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};
export default Login;
