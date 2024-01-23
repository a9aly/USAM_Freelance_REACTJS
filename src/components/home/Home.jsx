import Navbar from "../navbar/Navbar";
const Home = () => (
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
          Over <span className=" text-button-color">12800+</span> freelancers to
          complete your projects
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
          <img src="icon1.png" alt="icon1" className=" m-auto max-w-[100px]" />
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
          <img src="icon3.png" alt="icon3" className="m-auto max-w-[100px] " />
          <h1>Save and apply</h1>
          <h3 className=" font-thin">Apply or save and start your work</h3>
        </div>
      </div>
    </div>

    {/* Job Opportunities Section */}
    <div className="wrapper">
      <h1>
        <span className=" text-button-color">Latest</span> Job Opportunities
      </h1>
      <div className="flex flex-row-reverse gap-2">
        <span className="w-12 bg-black rounded-full p-2">
          <img src="right-arrow.svg" />
        </span>
        <span className="w-12 border-2 border-black rounded-full p-2">
          <img src="left-arrow.png" />
        </span>
      </div>
      <div className="flex flex-row">
        <div className="overflow-y-scroll h-20 flex flex-col gap-5" dir="rtl">
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
          <div dir="ltr" className="ml-5">
            Customer Service
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
);
export default Home;
