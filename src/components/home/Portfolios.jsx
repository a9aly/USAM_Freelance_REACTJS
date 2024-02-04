const Portfolios = () => {
  return (
    <div className="wrapper flex flex-col w-full text-center h-[fit] pb-[50px] ">
      <h2 className=" font-thin mb-0">Logos, Websites, book covers & more!</h2>
      <h1 className=" mt-2">
        Checkout The Best
        <span className=" text-button-color"> Portofilos</span> Here
      </h1>
      <div className="grid md:grid-flow-col grid-flow-row justify-items-center h-fit">
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
  );
};
export default Portfolios;
