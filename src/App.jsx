import {
  FindFreelancers,
  FindWork,
  Home,
  Login,
  Signup,
  Navbar,
  NoPage,
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="find-freelancers" element={<FindFreelancers />} />
          <Route path="find-work" element={<FindWork />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
