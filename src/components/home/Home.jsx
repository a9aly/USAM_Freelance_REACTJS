import { useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
const Home = () => {
  const data = useSelector((state) => state.post);
  return (
    <div className="flex flex-col absolute top-[15%] w-[100vw] ">
      {/* Post Projcet */}
      <div className="wrapper md:h-[40%] bg-pri-color w-full flex flex-row">
        <div className="flex flex-col w-[60%]">
          <h3>
            <img src="switch.svg" className="inline w-[2em] mr-2" />
            Find your Dream Job
          </h3>
          <h1>Freelance Jobs And Talents At Your Fingertips</h1>
          <h3>
            Connect with top freelancers and clients on our platform! find your
            perfect match for your next project
          </h3>
          <div className="flex flex-row">
            <img src="avatar.png" className="w-[40px] h-[40px]" />
            <img src="avatar.png" className="w-[40px] h-[40px]" />
            <img src="avatar.png" className="w-[40px] h-[40px]" />
            <button className=" text-white bg-button-color p-3 ml-10">
              Post Project
            </button>
          </div>
          <h3 className=" font-bold">
            Over <span className=" text-button-color">12800+</span> freelancers
            to complete your projects
          </h3>
        </div>
        <div>
          <img src="poster.png" className=" max-[640px]:pt-[100px]" />
        </div>
      </div>

      {/* Access Process */}
      <div className="p-20 max-w-[100vw]">
        <div className="flex flex-row border-2 shadow-md border-white justify-around p-[4%]">
          <div className="text-center ">
            <img
              src="icon1.png"
              alt="icon1"
              className=" m-auto max-w-[100px]"
            />
            <h1>Create Account</h1>
            <h3 className=" font-thin">
              First you have to create an account here
            </h3>
          </div>
          <div className="text-center">
            <img src="icon2.png" alt="icon2" className="m-auto max-w-[100px]" />
            <h1>Search Work</h1>
            <h3 className=" font-thin">Search the best freelance work here</h3>
          </div>
          <div className="text-center">
            <img
              src="icon3.png"
              alt="icon3"
              className="m-auto max-w-[100px] "
            />
            <h1>Save and apply</h1>
            <h3 className=" font-thin">Apply or save and start your work</h3>
          </div>
        </div>
      </div>

      {/* Job Opportunities Section */}
      <div className="wrapper mb-20">
        <h1>
          <span className=" text-button-color">Latest</span> Job Opportunities
        </h1>
        <div className="flex flex-row-reverse gap-2">
          <span className="w-12 bg-black rounded-full p-2">
            <img
              src="right-arrow.svg"
              onClick={() =>
                (document.getElementsByClassName(
                  "job-container"
                )[0].scrollLeft += 40)
              }
            />
          </span>
          <span className="w-12 border-2 border-black rounded-full p-2">
            <img
              src="left-arrow.png"
              onClick={() =>
                (document.getElementsByClassName(
                  "job-container"
                )[0].scrollLeft -= 40)
              }
            />
          </span>
        </div>
        <div className="flex flex-row w-full justify-between">
          {/* Choose Category */}
          <div
            className="overflow-y-scroll h-[300px] flex flex-col gap-5 min-w-[30%] sm:min-w-fit"
            dir="rtl"
          >
            <div dir="ltr" className="ml-5">
              Product Management
              <span className=" bg-pri-color mr-5 ml-5 w-7 h-7 inline-block text-center">
                34
              </span>
            </div>
            <div dir="ltr" className="ml-5">
              Design
            </div>
            <div dir="ltr" className="ml-5">
              Development
            </div>
            <div dir="ltr" className="ml-5">
              Marketing
            </div>
            {data.jobs.map((post) => (
              <div key={post.id} dir="ltr" className="ml-5 capitalize">
                {post.category}
                <span className=" bg-pri-color mr-5 ml-5 w-7 h-7 inline-block text-center">
                  34
                </span>
              </div>
            ))}
          </div>

          {/* view job */}
          <div className="job-container flex-grow ">
            <div className="job-card">
              <span className="block text-2xl font-bold mb-[5%]">
                Product Designer
              </span>
              <div className="flex flex-row w-full justify-between">
                <span className="block capitalize border-2 bg-button-color bg-opacity-30 rounded-full  p-[4%] m-[3%] whitespace-nowrap">
                  full time
                </span>
                <span className="inline capitalize border-2  bg-button-color bg-opacity-30 rounded-full  p-[4%] m-[3%] whitespace-nowrap">
                  Product
                </span>
              </div>
              <span className="block mt-[15%] mb-[10%]">34k$ - 45k$</span>
              <span className="block">
                <span className="inline-block border-b-2 border-white w-[60%] "></span>
                <span className=" text-[14px] text-button-color">
                  &nbsp;1hour ago
                </span>
              </span>
              <div className="flex flex-row justify-between mt-[4%] w-full">
                <img
                  src="gitlab.png"
                  className="w-[20%] h-[25%] mr-2 bg-white rounded-xl"
                />
                <span className="opacity-50">
                  GitLab{" "}
                  <span className="block">
                    <img src="users.png" className=" w-[15%] inline mr-1 " />
                    1200-3000
                  </span>
                </span>
                <span className="border-2 bg-jobs-number-color w-fit h-fit rounded-full p-[2%] capitalize whitespace-nowrap">
                  20 job
                </span>
              </div>
            </div>
            <div className="job-card"></div>
            <div className="job-card"></div>
          </div>
        </div>
      </div>

      {/* Talent Section */}
      <div className="wrapper bg-pri-color">
        <h1>
          <span className=" text-button-color">Browse </span>Talent By Category
        </h1>
      </div>
    </div>
  );
};
export default Home;
