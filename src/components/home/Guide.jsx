const Guide = () => {
  return (
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
  );
};
export default Guide;
