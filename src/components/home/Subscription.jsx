const Subscription = () => {
  return (
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
  );
};
export default Subscription;
