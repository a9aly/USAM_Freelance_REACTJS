import { useState } from "react";
import Footer from "../navbar/Footer";
import { person } from "../../assets/constants";
const FindFreelancers = () => {
  const [currType, setType] = useState("All");
  const workType = [
    "All",
    "Development & IT",
    "Design & Creative",
    "Finance & Accounting",
    "Admin & Customer Support",
    "Sales & Marketing",
    "Engineering",
    "Writing & Translation",
  ];
  return (
    <div className=" flex flex-col absolute top-[15%] w-full">
      <div className=" wrapper bg-white md:h-[1000px]">
        <h3 className=" text-gray-600 font-light">
          Find Freelancer &gt;&gt;{" "}
          <span className=" text-button-color">Find by your needed skills</span>
        </h3>

        <div className=" flex md:flex-row flex-col h-full gap-[1%]">
          {/* left Section */}
          <div className=" w-[fit] h-[60%] bg-pri-color text-xl font-thin p-5 rounded-3xl whitespace-nowrap">
            Type of work
            <ul className=" pt-2">
              {workType.map((type) => (
                <li className=" pb-3">
                  <input
                    id={type}
                    type="radio"
                    name="work-type"
                    value={type}
                    className=" w-4 h-3 inline-block mr-2"
                    checked={type == currType ? true : false}
                    onClick={() => setType(type)}
                  />
                  <label for={type} className="inline">
                    {type}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* start right section */}
          <div className=" overflow-y-auto grow grid lg:grid-cols-2 max-w-[100%] max-h-[80%]">
            {workType.map(() => (
              <div className="flex flex-col bg-white h-fit p-4 gap-5 shadow-xl m-4">
                <h1 className=" pb-0 mb-0">
                  Creative Person for Advertising
                  <span className=" font-extralight block text-lg">
                    <img
                      src={person}
                      alt="profile picture"
                      className="w-5 h-5 rounded-full inline-block mr-1"
                    />
                    Wade Wareen
                  </span>
                </h1>
                <p>
                  I'm an expert in web Development, SEO Development, Creating
                  Loading Pages, and Ad Creation. UT enim ad minim veniam, quis
                  nosturd exercitaion ullamco laboris nisi ut ailquip ex ea
                  commodo con
                </p>
                <div className=" flex flex-row justify-start gap-[3%]">
                  <span className=" bg-gray-300 md:px-6 px-2 py-1 rounded-full whitespace-nowrap">
                    Full Time
                  </span>
                  <span className=" bg-gray-300 md:px-6 px-2 py-1 rounded-full whitespace-nowrap">
                    Half Time
                  </span>
                  <span className=" bg-gray-300 md:px-6 px-2 py-1 rounded-full">
                    Hyrbrid
                  </span>
                </div>
                <div className=" flex flex-row justify-around">
                  <button className=" bg-button-color text-white md:max-w-[200px] md:text-lg md:px-[1em] md:py-[0.2em] max-w-fit text-sm p-2">
                    Schedule Meeting
                  </button>
                  <button className=" md:max-w-[200px] md:text-lg md:px-[1em] md:py-[0.2em] max-w-fit text-sm p-1">
                    Send Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default FindFreelancers;
