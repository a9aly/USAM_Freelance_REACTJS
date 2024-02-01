import Footer from "../navbar/Footer";

const Cart = () => {
  return (
    <div className="absolute top-[15%] flex flex-col w-full">
      <div className=" wrapper  h-fit bg-pri-color pb-5">
        <h3 className=" font-light text-gray-600">
          Choose Project &gt;&gt;{" "}
          <span className=" text-button-color"> Pay Fees</span>
        </h3>

        <div className=" flex md:flex-row flex-col h-fit w-full gap-[5%]">
          {/* Left Section */}
          <div className=" md:w-[60%] bg-white flex flex-col p-5 rounded-2xl">
            <h1>Checkout</h1>
            <h3 className=" font-bold">Cart Type</h3>
            <div className=" md:flex md:flex-row grid grid-cols-2 h-[15%] gap-[5%]">
              <div className=" border-2 md:w-[20%] h-40 md:h-full">
                <img
                  src="paypal.svg"
                  alt="paypal"
                  className=" h-[80%] w-[100%] translate-x-[5%] translate-y-[10%]"
                />
              </div>
              <div className=" border-2 md:w-[20%] h-40  md:h-full ">
                <img
                  src="americanexpress.svg"
                  alt="americanexpress"
                  className="w-[100%] h-[100%]"
                />
              </div>
              <div className=" border-2 md:w-[20%] h-40 md:h-full">
                <img src="visa.svg" alt="visa" className="w-[100%] h-[100%]" />
              </div>
              <div className="border-2  md:w-[20%] h-40 md:h-full">
                <img
                  src="mastercard.svg"
                  alt="mastercard"
                  className="w-[60%] translate-x-[30%] py-[10%] translate-y-[50%] sm:translate-y-[5%] "
                />
              </div>
            </div>
            <div>
              <label for="card-name">Enter Name on Card</label>
              <input
                id="card-name"
                placeholder="Name on Card"
                type="text"
                className=" border-2 border-gray-300 rounded-full p-3 "
              />
              <label for="card-number">Card Number</label>
              <input
                id="card-number"
                placeholder="Enter Card Number"
                type="text"
                className=" border-2 border-gray-300 rounded-full p-3 "
              />
              <div className=" flex md:flex-row flex-col justify-between">
                <span className=" md:w-[48%]">
                  <label for="expiration-date">Expiration Date (MM/YY)</label>
                  <input
                    id="expiration-date"
                    type="text"
                    placeholder="Enter Expiration Date"
                    className=" border-2 border-gray-300 rounded-full p-3 "
                  />
                </span>
                <span className=" md:w-[48%] ">
                  <label for="cvc">CVC</label>
                  <input
                    id="cvc"
                    type="text"
                    placeholder="Enter CVC"
                    className=" border-2 border-gray-300 rounded-full p-3 "
                  />
                </span>
              </div>
              <span>
                <input
                  type="checkbox"
                  id="save-card-info"
                  className=" inline-block w-4 m-2 h-4"
                />
                <label for="save-card-info" className=" inline">
                  Save my information for faster checkout
                </label>
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div className=" relative min-w-[30%] md:h-[800px]  h-[400px]">
            <div className=" absolute md:top-[20%] top-[5%] bg-[#CDD7BC] w-full md:h-[60%] h-full flex flex-col rounded-xl p-4 justify-between">
              <h2>Summary</h2>

              <div className=" flex flex-row gap-[5%]">
                <img
                  src="cart-bg.jpg"
                  alt="school picture"
                  className="w-[40%] rounded-2xl"
                />
                <div className=" flex flex-col gap-[5%]">
                  <div className=" block-inline">
                    <img
                      src="profile.png"
                      alt="profile icon"
                      className=" w-4 bg-blue-100 inline"
                    />
                    <span className=" inline text-[#057D6A] font-extrabold">
                      Individual
                    </span>
                  </div>
                  <p className=" text-[#858782]">Lorem ipsum dollar..</p>
                  <div className=" font-bold">
                    <span className=" text-5xl ">$24 </span>/ MONTH
                  </div>
                </div>
              </div>

              <hr
                style={{ color: "gray", backgroundColor: "gray", height: 2 }}
              />
              <div className=" flex flex-row justify-between mx-4 text-[#858782] font-extrabold">
                <span>Subtotal</span> <span>$51.38</span>
              </div>
              <hr
                style={{ color: "gray", backgroundColor: "gray", height: 2 }}
              />

              <div className=" flex flex-row justify-between mx-4 text-[#858782] font-extrabold">
                <span>Coupon Discount</span> <span>0%</span>
              </div>
              <hr
                style={{ color: "gray", backgroundColor: "gray", height: 2 }}
              />
              <div className=" flex flex-row justify-between mx-4 text-[#858782] font-extrabold">
                <span>Tax</span> <span>5</span>
              </div>
              <hr
                style={{ color: "gray", backgroundColor: "gray", height: 2 }}
              />
              <div className=" flex flex-row justify-between mx-4 font-extrabold">
                <span>Total</span> <span>$56.38</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" block w-full relative h-fit p-[15%] md:p-[3%]">
          <button className=" absolute left-[40%] bg-button-color text-white">
            Confirm
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Cart;
