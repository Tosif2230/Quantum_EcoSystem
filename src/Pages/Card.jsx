import { BsArrowUpRightCircle } from "react-icons/bs";

const Card = () => {
  const listItems = ["Buy", "Earn", "Exchange", "Borrow", "Card"];
  return (
    <section className="flex justify-center items-center mt-20">
      <div className="flex flex-col p-5 justify-center items-center rounded-4xl text-white border border-gray-500 text-sm gap-10">
        <div className="flex mt-2 gap-10">
          {listItems.map((item) => {
            return (
              <h1 className="border border-white rounded-full px-5 py-1 font-medium hover:bg-gray-600 cursor-pointer hover:border-b-amber-300 active::border-b">
                {item}
              </h1>
            );
          })}
        </div>
        <div className="flex gap-15 m-8 mb-20">
          <div className="flex flex-col w-90 py-10">
            <h1 className="text-3xl font-medium">Buy Cripto in seconds</h1>
            <h4 className="text-[20px] font-light mt-4">
              Buy 70+ digital assets in seconds with card or instant bank
              transfer. Get up to 0.5% in crypto rewards on your purchase
            </h4>
            <div className="flex gap-4 mt-4">
              <button className="flex gap-5 justify-between items-center my-2 text-white font-medium bg-amber-500 rounded-full px-3">
                Buy Now
                <BsArrowUpRightCircle className="text-xl bg-white text-amber-500 rounded-full" />
              </button>
              <button className="flex gap-5 items-center my-2 py-1 text-white font-medium border border-amber-500 rounded-full px-3">
                Learn More
                <BsArrowUpRightCircle className="text-xl bg-amber-500 text-white rounded-full" />
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col items-end px-15 mt-10">
              <img
                src="./src/assets/Group1.png"
                alt="Group1"
                className="size-25"
              />
              <h1 className="text-xl text-amber-500">Upto 0.5%</h1>
              <p className="text-gray-300 text-[12px]">In Crypto Reward</p>
            </div>
            <div className="mt-8">
              <h2 className="text-[13px]">
                Pay With Different Currencies And With Different Modes
              </h2>
              <div className="flex mt-5 gap-2">
                <img src="./src/assets/mastercard.png" alt="MasterCard" />
                <img src="./src/assets/visa.png" alt="Visa" />
                <img src="./src/assets/apple_pay.png" alt="ApplePay" />
                <img src="src/assets/gpay.png" alt="Gpay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
