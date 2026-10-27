import BuyBG from "../assets/Card/Buy.jpg";
import EarnBG from "../assets/Card/Earn.jpg";
import ExchangeBG from "../assets/Card/Exchange.jpg";
import BorrowBG from "../assets/Card/Borrow.jpg";
import CardBG from "../assets/Card/Card.jpg";
import Crypto from "../assets/Card/GroupCry.png";
import MasterCard from "../assets/Card/mastercard.png";
import Visa from "../assets/Card/visa.png";
import Apple from "../assets/Card/apple_pay.png";
import Gpay from "../assets/Card/gpay.png";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { useState } from "react";

const Buy = () => {
  const [activeCard, setActiveCard] = useState("Buy");
  const listItems = [
    {
      Title: "Buy",
      Discription: "Buy Crypto in seconds",
      CardImage: BuyBG,
      Paragraph:
        "Buy 70+ digital assets in seconds with card or instant bank transfer. Get up to 0.5% in crypto rewards on your purchase",
    },
    {
      Title: "Earn",
      Discription: "Earn Up to 16% Interest",
      CardImage: EarnBG,
      Paragraph:
        "Earn daily interest on USDT, USDC, BTC, and other popular digital assets. Top up and start growing your wealth automatically without having to do anything yourself.",
    },
    {
      Title: "Exchange",
      Discription: "Exchange Crypto with Zero Fees",
      CardImage: ExchangeBG,
      Paragraph:
        "Buy and sell instantly or at your desired price from one easy-to-use interface.",
    },
    {
      Title: "Borrow",
      Discription: "Borrow Against Your Digital Assets",
      CardImage: BorrowBG,
      Paragraph:
        "Get liquidity against your crypto at 0% interest with our Instant Crypto Credit Lines. Receive cash or stable coins to grow your portfolio or even finance your real estate purchase",
    },
    {
      Title: "Card",
      Discription: "Borrow Against Your Digital Assets",
      CardImage: CardBG,
      Paragraph:
        "Get liquidity against your crypto at 0% interest with our Instant Crypto Credit Lines. Receive cash or stable coins to grow your portfolio or even finance your real estate purchase",
    },
  ];

  const selectedCard = listItems.find((item) => item.Title === activeCard);

  return (
    <section className="bg-[url(./src/assets/Card/frame_56.jpg)] bg-center bg-cover p-5">
      <div className="flex justify-center items-center">
        <div className="relative">
          {selectedCard && (
            <div className="flex justify-center items-center">
              <img
                src={selectedCard.CardImage}
                alt="Card"
                className="flex rounded-3xl xl:rounded-[60px] lg:rounded-[50px] md:rounded-[45px]"
              />
            </div>
          )}
          <div className="absolute flex flex-col  top-2 lg:top-10">
            <div className="flex gap-1 lg:gap-8 justify-center items-center border">
              {listItems.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveCard(item.Title);
                    }}
                      className={`text-[5px] lg:text-[20px] border rounded-2xl px-1 lg:px-3 font-raleway cursor-pointer ${activeCard === item.Title ? "border-2 border-b-amber-400 border-transparent rounded-none" : ""}`}
                  >
                    {item.Title}
                  </button>
                );
              })}
            </div>

            <div className="flex xl:mt-15 gap-10">
              <div className="flex flex-col justify-center">
                <h2 className="font-raleway lg:text-[32px] tracking-[1px] w-80">
                  {selectedCard.Discription}
                </h2>
                <h2 className="font-lato text-[15px] w-100 tracking-[3px] pt-5">
                  {selectedCard.Paragraph}
                </h2>
                <div className="flex gap-4 pt-5">
                  <button className="flex gap-5 justify-between items-center my-2 font-raleway cursor-pointer text-[14px] bg-amber-500 rounded-full px-3">
                    Buy Now
                    <BsArrowUpRightCircle className="text-xl bg-white text-amber-500 rounded-full" />
                  </button>
                  <button className="flex gap-5 items-center my-2 py-1 font-raleway cursor-pointer text-[14px] border border-amber-500 rounded-full px-3">
                    Learn More
                    <BsArrowUpRightCircle className="text-xl bg-amber-500  rounded-full" />
                  </button>
                </div>
              </div>

              <div className="">
                <div className="flex flex-col items-end px-15">
                  <img src={Crypto} alt="Crypto" className="w-45" />
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
                    <img src={MasterCard} alt="MasterCard" />
                    <img src={Visa} alt="Visa" />
                    <img src={Apple} alt="ApplePay" />
                    <img src={Gpay} alt="Gpay" />
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

export default Buy;
