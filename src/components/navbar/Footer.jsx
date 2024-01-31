const Footer = () => {
  return (
    <>
      <div className="wrapper flex flex-row p-5 justify-around gap-1">
        <div className="sm:w-[15%]">
          <img src="usam.png" alt="logo" className=" w-[50%]" />
          <h4 className=" text-button-color text-xs md:text-lg">
            Powerful Freelance Marketplace System with ability to change the
            Users (Freelance & Clients)
          </h4>
          <span className="flex flex-row md:gap-4">
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
          <h3 className=" font-bold  text-center md:text-start">For Clients</h3>
          <ul className=" text-xs md:text-base">
            <li>Find Freelancers</li>
            <li>Post Project</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-center md:text-start">
            For Freelancers
          </h3>
          <ul className=" text-xs md:text-base">
            <li>Find Work</li>
            <li>Create Account</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-center md:text-start">Call Us</h3>
          <ul className=" text-xs md:text-base">
            <li>
              <img
                src="location.svg"
                alt="location icon"
                className=" w-4 h-4 inline-block mr-2"
              />
              Egypt
            </li>
            <li className=" whitespace-nowrap">
              <img
                src="phone.svg"
                alt="phone icon"
                className=" w-4 h-4 inline-block mr-2"
              />
              +0254700000000
            </li>
            <li className=" whitespace-nowrap">
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
      <span className="wrapper text-center font-extralight mb-10 block">
        2024 USAM. All right reserved
      </span>
    </>
  );
};
export default Footer;
