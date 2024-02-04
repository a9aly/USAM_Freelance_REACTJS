import { postJob } from "../../redux/store/PostSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  avatar,
  close,
  poster,
  gitlab,
  github,
  switchImg,
} from "../../assets/constants";
const Post = (data) => {
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
    <>
      <form
        id="post_form"
        className="w-[80%] h-fit top-[30%] z-20 hidden border-4 border-white shadow-xl"
      >
        <h1>
          Post Your Job!
          <img
            src={close}
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
              logo: e.target.value.toLowerCase(),
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
            <img src={switchImg} className="inline w-[2em] mr-2" />
            Find your Dream Job
          </h3>
          <h1>Freelance Jobs And Talents At Your Fingertips</h1>
          <h3>
            Connect with top freelancers and clients on our platform! find your
            perfect match for your next project
          </h3>
          <div className="flex flex-row">
            <img src={avatar} className="w-[40px] h-[40px]" />
            <img src={avatar} className="w-[40px] h-[40px]" />
            <img src={avatar} className="w-[40px] h-[40px]" />
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
          <img src={poster} className=" max-[640px]:pt-[100px]" />
        </div>
      </div>
    </>
  );
};
export default Post;
