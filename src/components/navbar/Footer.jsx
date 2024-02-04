import {
  email,
  facebook,
  instagram,
  location,
  phone,
  twitter,
  usam,
} from "../../assets/constants";

const Footer = () => {
  return (
    <>
      <div className="wrapper flex md:flex-row flex-col p-5 justify-around gap-1">
        <div className="md:w-[15%] w-full text-center">
          <img
            src={usam}
            alt="logo"
            className=" md:w-[50%] mx-[35%] md:mx-[20%]"
          />
          <h4 className=" text-button-color text-lg">
            Powerful Freelance Marketplace System with ability to change the
            Users (Freelance & Clients)
          </h4>
          <span className="flex flex-row md:gap-4 justify-around">
            <img src={instagram} alt="instagram logo" className=" w-6 h-6" />
            <img src={twitter} alt="twitter logo" className=" w-6 h-6" />
            <img src={facebook} alt="facebook logo" className=" w-6 h-6" />
          </span>
        </div>

        <div className=" text-center md:text-start text-lg">
          <h3 className=" font-bold">For Clients</h3>
          <ul>
            <li>Find Freelancers</li>
            <li>Post Project</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className=" text-center md:text-start text-lg">
          <h3 className="font-bold">For Freelancers</h3>
          <ul>
            <li>Find Work</li>
            <li>Create Account</li>
          </ul>
        </div>

        <div className="text-center md:text-start text-lg ">
          <h3 className=" font-bold">Call Us</h3>
          <ul>
            <li>
              <img
                src={location}
                alt="location icon"
                className=" w-4 h-4 inline-block mr-2"
              />
              Egypt
            </li>
            <li className=" whitespace-nowrap">
              <img
                src={phone}
                alt="phone icon"
                className=" w-4 h-4 inline-block mr-2"
              />
              +0254700000000
            </li>
            <li className=" whitespace-nowrap">
              <img
                src={email}
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
