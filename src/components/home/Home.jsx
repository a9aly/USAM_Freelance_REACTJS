import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { postJob } from "../../redux/store/PostSlice";
const Home = () => {
  const data = useSelector((state) => state.post);
  const [activeCategory, setActiveCategory] = useState("product management");
  let jobTemplate = {
    category: "Product Management",
    job_title: "",
    type: "",
    department: "",
    salary: "",
    timestamp: "",
    company: "",
    logo: "",
    no_applicants: "",
    no_jobs: "",
  };
  const [jobPost, setJobPost] = useState(jobTemplate);
  const dispatch = useDispatch();

  const handlePostEvent = (e) => {
    e.preventDefault();
    dispatch(postJob(jobPost));
  };

  return (
    <div className="flex flex-col absolute top-[15%] w-[100vw] ">
      {/*Form */}
      <form
        id="post_form"
        className="w-[80%] h-fit top-[30%] z-20 hidden border-4 border-white shadow-xl"
      >
        <h1>
          Post Your Job!
          <img
            src="close.svg"
            className=" hidden sm:inline absolute w-10 right-[5%] cursor-pointer"
            alt="close icon"
            onClick={() => {
              document.getElementById("post_form").style.display = "none";
              document.getElementById("post_form").reset();
            }}
          />
        </h1>
        <label>Category</label>
        <select
          className="capitalize h-[50px] w-full text-xl text-center mt-[10px]"
          onChange={(e) => {
            setJobPost({ ...jobPost, category: e.target.value });
          }}
        >
          {data.categories.map((category) => (
            <option key={category.name}>{category.name}</option>
          ))}
        </select>
        <label>Job Title</label>
        <input
          id="job-title"
          placeholder="ex. Product Designer"
          onChange={(e) =>
            setJobPost({ ...jobPost, job_title: e.target.value })
          }
        />
        <label>Job Type</label>
        <input
          id="type"
          placeholder="ex. Full Time"
          onChange={(e) => setJobPost({ ...jobPost, type: e.target.value })}
        />
        <label>Department</label>
        <input
          id="department"
          placeholder="ex. Head of Design"
          onChange={(e) =>
            setJobPost({ ...jobPost, department: e.target.value })
          }
        />
        <label>Salary</label>
        <input
          id="salary"
          placeholder="Range Annual ex. 34k$-45k$"
          onChange={(e) => setJobPost({ ...jobPost, salary: e.target.value })}
        />
        <label>Company Name</label>
        <input
          id="company"
          placeholder="ex. GitLab"
          onChange={(e) =>
            setJobPost({
              ...jobPost,
              company: e.target.value,
              logo: e.target.value.toLowerCase() + ".png",
            })
          }
        />
        <button className="mt-[15px]" onClick={handlePostEvent}>
          Submit
        </button>
        <button
          className="mt-[15px]"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("post_form").style.display = "none";
            document.getElementById("post_form").reset();
            setJobPost(jobTemplate);
          }}
        >
          Cancel
        </button>
      </form>

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
            <button
              className=" text-white bg-button-color p-3 ml-10"
              onClick={() =>
                (document.getElementById("post_form").style.display = "block")
              }
            >
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
            className="overflow-y-scroll h-[350px] flex flex-col gap-5 min-w-[30%] sm:min-w-fit"
            dir="rtl"
          >
            {data.categories.map((category) => (
              <div
                key={category.name}
                dir="ltr"
                className="ml-5 capitalize cursor-pointer hover:text-button-color"
                onClick={() => setActiveCategory(category.name)}
              >
                {category.name}
                <span className=" bg-pri-color mr-5 ml-5 w-7 h-7 inline-block text-center">
                  {category.no_posts}
                </span>
              </div>
            ))}
          </div>

          {/* view job */}
          <div className="job-container flex-grow ">
            {data.jobs.map((job) => {
              if (activeCategory.toLowerCase() === job.category)
                return (
                  <div className="job-card" key={job.id}>
                    <span className="block text-2xl font-bold mb-[5%] capitalize">
                      {job.job_title}
                    </span>
                    <div className="flex flex-row w-full flex-wrap">
                      <span className="block capitalize border-2 bg-button-color bg-opacity-30 rounded-full  p-[4%] m-[3%] whitespace-nowrap">
                        {job.type}
                      </span>
                      <span className="inline capitalize border-2  bg-button-color bg-opacity-30 rounded-full  p-[4%] m-[3%] whitespace-nowrap">
                        {job.department}
                      </span>
                    </div>
                    <span className="block mt-[15%] mb-[10%]">
                      {job.salary}
                    </span>
                    <span className="block">
                      <span className="inline-block border-b-2 border-white w-[60%] "></span>
                      <span className=" text-[14px] text-button-color">
                        &nbsp;{job.timestamp}
                      </span>
                    </span>
                    <div className="flex flex-row justify-between mt-[4%] w-full">
                      <img
                        src={job.logo}
                        className="w-[20%] h-[25%] mr-2 bg-white rounded-xl"
                      />
                      <span className="opacity-50">
                        {job.company}
                        <span className="block">
                          <img
                            src="users.png"
                            className=" w-[15%] inline mr-1 "
                          />
                          140-300
                        </span>
                      </span>
                      <span className="border-2 bg-jobs-number-color w-fit h-fit rounded-full p-[2%] capitalize whitespace-nowrap">
                        20 job
                      </span>
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
      </div>

      {/* Talent Section */}
      <div className="wrapper bg-pri-color h-fit">
        <h1>
          <span className=" text-button-color">Browse </span>Talent By Category
        </h1>
        <div className="talent-container pb-[150px]">
          {data.talent_category.map((talent) => (
            <div className="talent-card" key={talent.name}>
              <img src="gitlab.png" />
              <h1>
                {talent.name}
                <br />
                <div className=" font-extralight text-sm flex justify-between flex-grow">
                  <div>
                    <img
                      src="greenstar.png"
                      alt="rating-star"
                      className="!w-4"
                    />
                    <span> &nbsp; 4.85/5 </span>
                    <span>349 skills</span>
                  </div>
                </div>
              </h1>
            </div>
          ))}
          <div className="flex flex-row align-center justify-center w-[300%]">
            <div className=" border text-center  w-fit h-fit bg-button-color text-white p-5">
              More Categories
            </div>
          </div>
        </div>
      </div>

      {/*Portofilos */}
      <div className="wrapper flex flex-col w-full text-center ">
        <h2 className=" font-thin mb-0">
          Logos, Websites, book covers & more!
        </h2>
        <h1 className=" mt-2">
          Checkout The Best
          <span className=" text-button-color"> Portofilos</span> Here
        </h1>
        <div className="grid grid-flow-col">
          <div className="portofolio-card">
            <img src="person.png" />
            <h2 className=" text-left pl-5 ">Jenny Wilson</h2>
            <h3 className="text-left pl-5 font-thin">UI/UX Designer</h3>
          </div>
          <div className="portofolio-card">
            <img src="Person2.png" />
            <h2 className=" text-left pl-5">Dianne Russell</h2>
            <h3 className="text-left pl-5 font-thin">Graphic Designer</h3>
          </div>
          <div className="portofolio-card">
            <img src="Person3.png" />
            <h2 className=" text-left pl-5">Albert Flores</h2>
            <h3 className="text-left pl-5 font-thin">Developer</h3>
          </div>
        </div>
      </div>

      {/*Subscription */}
      <div className="wrapper flex flex-col w-full  items-center bg-pri-color pb-10">
        <h1>Newsletter Subscription</h1>
        <h3 className=" font-extralight mt-0">
          Subscribe to our newsletter to get new freelance work and projects
        </h3>
        <input
          className=" w-[30%] mb-5"
          placeholder="Enter your email address"
        ></input>
        <button className=" bg-button-color text-white min-w-min">
          Subscribe
        </button>
      </div>

      {/*footer*/}
      <div className="wrapper flex flex-row p-5 justify-evenly ">
        <div className="w-[15%]">
          <img src="usam.png" alt="logo" />
          <h4 className=" text-button-color">
            Powerful Freelance Marketplace System with ability to change the
            Users (Freelance & Clients)
          </h4>
          <span className="flex flex-row gap-4">
            <img
              src="instagram.svg"
              alt="instagram logo"
              className=" w-6 h-6"
            />
            <img src="twitter.svg" alt="twitter logo" className=" w-6 h-6" />
            <img src="facebook.png" alt="facebook logo" className=" w-6 h-6" />
          </span>
        </div>
        <div>
          <h3 className=" font-bold">For Clients</h3>
          <ul>
            <li>Find Freelancers</li>
            <li>Post Project</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">For Freelancers</h3>
          <ul>
            <li>Find Work</li>
            <li>Create Account</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Call Us</h3>
          <ul>
            <li>
              {" "}
              <img
                src="location.svg"
                alt="location icon"
                className=" w-4 h-4 inline-block mr-2"
              />
              Egypt
            </li>
            <li>
              {" "}
              <img
                src="phone.svg"
                alt="phone icon"
                className=" w-4 h-4 inline-block mr-2"
              />
              +0254700000000
            </li>
            <li>
              {" "}
              <img
                src="email.svg"
                alt="email icon"
                className=" w-4 h-4 inline-block mr-2"
              />
              USAM@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <span className="wrapper text-center font-extralight mb-10">
        2024 USAM. All right reserved
      </span>
    </div>
  );
};
export default Home;
