import { BsArrowUpRightCircle } from "react-icons/bs";

const Card = () => {
  const listItems = ["Buy", "Earn", "Exchange", "Borrow", "Card"];
  return (
    <section className="bg-[url(./src/assets/Card/frame_56.jpg)] bg-center bg-cover">
      <div className="flex justify-center">
        <div className="relative">
          <img
            src="src\assets\Card\Group_Card1.jpg"
            alt="Card"
            className="py-20"
          />
          <div className="absolute flex flex-col justify-center items-center w-full top-30">
            <div className="flex gap-10 ">
              {listItems.map((item,index) => {
                return (
                  <h2 key={index} className="border border-white rounded-full px-5 py-1 font-raleway text-[16px] cursor-pointer">
                    {item}
                  </h2>
                );
              })}
            </div>

            <div className="flex mt-30 gap-10">
              <div className="flex flex-col justify-center">
                <h2 className="font-raleway text-[32px] tracking-[1px]">
                  Buy Crypto in seconds
                </h2>
                <h2 className="font-lato text-[15px] w-100 tracking-[3px] pt-5">
                  Buy 70+ digital assets in seconds with card or instant bank
                  transfer. Get up to 0.5% in crypto rewards on your purchase
                </h2>
                <div className="flex gap-4 pt-5">
                  <button className="flex gap-5 justify-between items-center my-2 font-raleway text-[14px] bg-amber-500 rounded-full px-3">
                    Buy Now
                    <BsArrowUpRightCircle className="text-xl bg-white text-amber-500 rounded-full" />
                  </button>
                  <button className="flex gap-5 items-center my-2 py-1 font-raleway text-[14px] border border-amber-500 rounded-full px-3">
                    Learn More
                    <BsArrowUpRightCircle className="text-xl bg-amber-500  rounded-full" />
                  </button>
                </div>
              </div>

              <div className="">
                <div className="flex flex-col items-end px-15">
                  <img
                    src="./src/assets/Card/GroupCry.png"
                    alt="Crypto"
                    className="w-45"
                  />
                  <h1 className="font-lato text-[24px] text-amber-500">
                    Upto 0.5%
                  </h1>
                  <p className="font-lato text-[14px]">In Crypto Reward</p>
                </div>
                <div className="pt-15">
                  <h2 className="font-lato text-[14px]">
                    Pay With Different Currencies And With Different Modes
                  </h2>
                  <div className="flex mt-5 gap-6">
                    <img src="./src/assets/mastercard.png" alt="MasterCard" />
                    <img src="./src/assets/visa.png" alt="Visa" />
                    <img src="./src/assets/apple_pay.png" alt="ApplePay" />
                    <img src="src/assets/gpay.png" alt="Gpay" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
