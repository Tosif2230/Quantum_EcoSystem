import CardBackground from "../assets/Card/Frame_56.jpg";
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
      Color: "rgba(192, 163, 87, 0.3)",
      Discription: "Buy Crypto in seconds",
      CardImage: BuyBG,
      CardButton: "Buy Now",
      Paragraph:
        "Buy 70+ digital assets in seconds with card or instant bank transfer. Get up to 0.5% in crypto rewards on your purchase",
    },
    {
      Title: "Earn",
      Color: "rgba(68, 205, 118, 0.3)",
      Discription: "Earn Up to 16% Interest",
      CardImage: EarnBG,
      CardButton: "Start Earning",
      Paragraph:
        "Earn daily interest on USDT, USDC, BTC, and other popular digital assets. Top up and start growing your wealth automatically without having to do anything yourself.",
    },
    {
      Title: "Exchange",
      Color: "rgba(84, 160, 217, 0.3)",
      Discription: "Exchange Crypto with Zero Fees",
      CardImage: ExchangeBG,
      CardButton: "Exchange Now",
      Paragraph:
        "Buy and sell instantly or at your desired price from one easy-to-use interface.",
    },
    {
      Title: "Borrow",
      Color: "rgba(216, 143, 81, 0.3)",
      Discription: "Borrow Against Your Digital Assets",
      CardImage: BorrowBG,
      CardButton: "Borrow Now",
      Paragraph:
        "Get liquidity against your crypto at 0% interest with our Instant Crypto Credit Lines. Receive cash or stable coins to grow your portfolio or even finance your real estate purchase",
    },
    {
      Title: "Card",
      Color: "rgba(217, 73, 73, 0.3)",
      Discription: "Borrow Against Your Digital Assets",
      CardImage: CardBG,
      CardButton: "Get Quantum Card Now",
      Paragraph:
        "Get liquidity against your crypto at 0% interest with our Instant Crypto Credit Lines. Receive cash or stable coins to grow your portfolio or even finance your real estate purchase",
    },
  ];

  const selectedCard = listItems.find((item) => item.Title === activeCard);

  return (
    <section
      className="flex justify-center items-center bg-cover bg-center min-h-screen p-5"
      style={{ background: `url(${CardBackground})` }}
    >
      <div
        className="relative isolate overflow-hidden flex flex-col justify-center md:w-[65%] lg:w-[73%] items-center border border-[rgba(156,149,149,0.2)] rounded-xl md:rounded-4xl transition-all duration-500"
        style={{
          "--card-color": selectedCard.Color,
          backgroundColor: "rgba(24, 24, 24, 0.2)",
        }}
      >
        {/* Top-right colored corner */}
        <div
          className="absolute -top-16 -left-16 w-50 h-40 md:w-90 md:h-60 rounded-full blur-3xl opacity-60 transition-colors duration-500 -z-10"
          style={{ backgroundColor: selectedCard.Color }}
        />

        {/* Bottom-left colored corner */}
        <div
          className="absolute -bottom-16 -right-16 w-50 h-40 md:w-90 md:h-60 rounded-full blur-3xl opacity-60 transition-colors duration-500 -z-10"
          style={{ backgroundColor: selectedCard.Color }}
        />
        <div className="flex gap-1 md:gap-5 md:mt-5 lg:mt-7">
          {listItems.map((list, index) => {
            return (
              <ul>
                <li>
                  <button
                    key={index}
                    onClick={() => {
                      setActiveCard(list.Title);
                    }}
                    className="font-raleway font-medium text-[6.5px] md:text-xl border  rounded-4xl px-3 py-1 md:px-3 lg:px-6"
                  >
                    {list.Title}
                  </button>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="flex flex-col justify-center md:flex-row items-center p-5 w-full md:mt-15 md:pb-15">
          <div className="flex flex-col justify-center ">
            <h2 className="font-raleway font-bold text-[18px] md:text-[25px] lg:text-[32px] tracking-[1px] w-60 lg:w-full leading-4 lg:leading-8">
              {selectedCard.Discription}
            </h2>
            <h2 className="text-[10px] w-[80%] lg:text-[15px] lg:w-100 md:tracking-[3px] pt-2">
              {selectedCard.Paragraph}
            </h2>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:pt-5 w-45 md:w-auto my-5">
              <button className="flex flex-row justify-between items-center md:my-2 py-1 gap-2 lg:gap-5 px-3 text-[10px] lg:text-[14px] bg-amber-500 rounded-full font-raleway font-bold cursor-pointer">
                {selectedCard.CardButton}
                <div className="text-sm md:text-xl bg-white text-amber-500 rounded-full">
                  <BsArrowUpRightCircle />
                </div>
              </button>
              <button className="flex justify-between items-center md:my-2 py-1 gap-2 lg:gap-5 px-3 text-[10px] lg:text-[14px] border border-amber-500 rounded-full font-raleway font-bold cursor-pointer">
                Learn More
                <div className="text-sm md:text-xl bg-amber-500  rounded-full">
                  <BsArrowUpRightCircle />
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col px-10 md:items-end lg:px-15 m-5">
              <img src={Crypto} alt="Crypto" className="w-40 md:w-45" />
              <h1 className="font-lato text-end text-[24px] text-amber-500">
                Upto 0.5%
              </h1>
              <p className="font-lato text-end text-[14px]">In Crypto Reward</p>
            </div>
            <div className="pt-10 lg:pt-15">
              <h2 className="font-lato text-[10px] w-[80%] md:w-full lg:text-[14px]">
                Pay With Different Currencies And With Different Modes
              </h2>
              <div className="flex py-5 lg:mt-5 gap-2 lg:gap-6">
                <img
                  src={MasterCard}
                  alt="MasterCard"
                  className="h-5 md:h-auto"
                />
                <img src={Visa} alt="Visa" className="h-5 md:h-auto" />
                <img src={Apple} alt="ApplePay" className="h-5 md:h-auto" />
                <img src={Gpay} alt="Gpay" className="h-5 md:h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buy;
