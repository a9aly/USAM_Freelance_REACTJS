import {
  FindFreelancers,
  FindWork,
  Home,
  Login,
  Signup,
  Navbar,
  NoPage,
  Cart,
  FreelancerProfile,
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/USAM_Freelance_REACTJS">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="find-freelancers" element={<FindFreelancers />} />
          <Route path="find-work" element={<FindWork />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<FreelancerProfile />}></Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
