import { useSelector } from "react-redux";
import { useState } from "react";
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
  const handlePostEvent = (e) => {
    e.preventDefault();
    console.log(jobPost);
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
              logo: e.target.value + ".png",
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
              if (activeCategory === job.category)
                return (
                  <div className="job-card" key={job.id}>
                    <span className="block text-2xl font-bold mb-[5%] capitalize">
                      {job.job_title}
                    </span>
                    <div className="flex flex-row w-full flex-wrap lg:flex-nowrap">
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
                          {job.no_applicants}
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
      <div className="wrapper bg-pri-color">
        <h1>
          <span className=" text-button-color">Browse </span>Talent By Category
        </h1>
      </div>
    </div>
  );
};
export default Home;
