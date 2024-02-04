import { dribble, facebook_blue, github, linkedin, person, twitter_blue } from "../../assets/constants";
import Footer from "../navbar/Footer";
const FreelancerProfile = () => {
  return (
    <div className="flex flex-col absolute top-[15%] w-full">
      <div className="wrapper h-fit bg-pri-color flex md:flex-row flex-col md:gap-0 gap-5 pb-[2%]">
        {/* Left Section */}
        <div className=" md:w-[70%] md:mr-[5%] md:mt-[1%] md:mb-[1%] bg-white flex flex-col justify-around p-[3%] items-center min-h-[600px]">
          <img
            src={person}
            alt="profile picture"
            className=" rounded-full w-auto h-[30%] align-middle object-cover"
          />
          <div className=" flex flex-col items-center">
            <span className=" text-xl font-bold block">Leslie Alexander</span>
            <span className=" text-l font-extralight">UI/UX Designer</span>
            <div className="flex flex-row justify-around w-5 gap-5">
              <img src={facebook_blue} alt="facebook logo" />
              <img src={twitter_blue}alt="twitter logo" />
              <img src={dribble} alt="dribble logo" />
              <img src={linkedin} alt="linkedin logo" />
              <img src={github} alt="github logo" />
            </div>
          </div>

          <button className="bg-button-color text-white text-center">
            Hire Now
          </button>
          <div className="flex flex-row w-full justify-between whitespace-nowrap">
            <div className=" font-bold">
              Weekly Salary{" "}
              <span className="block font-extralight">500$ per week</span>
            </div>
            <div className="font-bold">
              Availability{" "}
              <span className="block font-extralight"> 10 hrs per day</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-[4%] md:flex-grow md:mb-[1%] md:mt-[1%] flex flex-col bg-white">
          <h1>Overview</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nisi
            et autem officia consectetur cumque accusantium neque saepe
            inventore necessitatibus, similique doloremque, tempore, aliquid
            ducimus excepturi cum id. In quo ducimus ipsum accusamus quae
            laudantium, distinctio explicabo iure necessitatibus quod. Esse
            repellat enim odit neque voluptas dolorem modi nisi quaerat.
          </p>
          <div className=" flex flex-row justify-between">
            <div className="flex flex-col gap-5">
              <h1 className="text-xl md:text-[2em]">Employment History</h1>
              <div>
                <span className="block font-extralight">2010-2015</span>
                <span className="block">Product Designer</span>
                <span className="block text-button-color">@ Google</span>
              </div>
              <div>
                <span className="block font-extralight">2015-2017</span>
                <span className="block">UI/UX Designer</span>
                <span className="block text-button-color">@ Amazon</span>
              </div>
              <div>
                <span className="block font-extralight">2018-2020</span>
                <span className="block">UI/UX Developer</span>
                <span className="block text-button-color">@ Value</span>
              </div>
              <div>
                <span className="block font-extralight">2020-Now</span>
                <span className="block">UI/UX Designer</span>
                <span className="block text-button-color">@ Fawry</span>
              </div>
            </div>
            <div className=" flex flex-col">
              <div className=" flex flex-col gap-4">
                <h1 className=" text-xl md:text-[2em]">Education</h1>
                <div>
                  <span className="block font-extralight">1996-2010</span>
                  <span className="block">Student</span>
                  <span className="block text-button-color">
                    @ Azhar School
                  </span>
                </div>
                <div>
                  <span className="block font-extralight">2010 - 2014</span>
                  <span className="block">Student</span>
                  <span className="block text-button-color">
                    @ Cairo University
                  </span>
                </div>
              </div>
              <div>
                <h1 className=" text-xl md:text-[2em]">Projects</h1>
                <p>
                  <span className=" text-button-color">50 </span>Projects
                  related to product design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default FreelancerProfile;
