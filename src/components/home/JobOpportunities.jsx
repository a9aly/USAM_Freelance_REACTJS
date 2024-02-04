import { useState } from "react";
import { left_arrow, right_arrow, users } from "../../assets/constants";
const JobOpportunities = (data) => {
  const [activeCategory, setActiveCategory] = useState("product management");

  return (
    <div className="wrapper mb-20">
      <h1>
        <span className=" text-button-color">Latest</span> Job Opportunities
      </h1>
      <div className="flex flex-row-reverse gap-2">
        <span className="w-12 bg-black rounded-full p-2">
          <img
            src={right_arrow}
            onClick={() =>
              (document.getElementsByClassName(
                "job-container"
              )[0].scrollLeft += 40)
            }
          />
        </span>
        <span className="w-12 border-2 border-black rounded-full p-2">
          <img
            src={left_arrow}
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
                  <span className="block mt-[15%] mb-[10%]">{job.salary}</span>
                  <span className="block">
                    <span className="inline-block border-b-2 border-white w-[60%] "></span>
                    <span className=" text-[14px] text-button-color">
                      &nbsp;{job.timestamp}
                    </span>
                  </span>
                  <div className="flex flex-row justify-between mt-[4%] w-full">
                    <img
                      src={
                        window.location.pathname +
                        "src/assets/constants/" +
                        job.logo
                      }
                      className="w-[20%] h-[25%] mr-2 bg-white rounded-xl"
                    />
                    <span className="opacity-50">
                      {job.company}
                      <span className="block">
                        <img src={users} className=" w-[15%] inline mr-1 " />
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
  );
};
export default JobOpportunities;
