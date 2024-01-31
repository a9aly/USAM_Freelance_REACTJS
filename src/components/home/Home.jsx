import { useSelector } from "react-redux";
import Footer from "../navbar/Footer";
import Subscription from "./Subscription";
import Portfolios from "./Portfolios";
import Category from "./Category";
import JobOpportunities from "./JobOpportunities";
import Guide from "./Guide";
import Post from "./Post";

const Home = () => {
  const data = useSelector((state) => state.post);

  return (
    <div className="flex flex-col absolute top-[15%] w-[100vw] ">
      {/*Post Form Section */}
      <Post {...data} />
      {/* Guide Section */}
      <Guide />
      {/* Job Opportunities Section */}
      <JobOpportunities {...data} />

      {/* Browse Category Section */}
      <Category {...data} />

      {/*Portfolios */}
      <Portfolios />

      {/*Subscription */}
      <Subscription />

      {/*footer*/}
      <Footer />
    </div>
  );
};
export default Home;
