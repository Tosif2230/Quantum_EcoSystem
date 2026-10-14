import { BsArrowUpRightCircle } from "react-icons/bs";

function Hero() {
  return (
    <section className="flex flex-col items-start border border-amber-50 px-70">
      <div className="flex border border-amber-50 my-5">
        <div className="bg-black border border-white">
          <div className="border border-amber-50">
            <h1 className="text-white text-7xl font-semibold ">
            Buy & <br />
            Earn Interest
          </h1>
          <h2 className="text-white text-[30px] font-light">
            on BTC, USDT and Other Digital Assets
          </h2>
          <p className="text-white text-[20px] font-light pt-1">
            Grow your crypto wealth and keep it secure with us.
          </p>
          </div>
          <div className="flex gap-10">
            <button className="flex items-center my-2 py-1 gap-20 text-white font-medium bg-linear-to-r from-orange-400 to-orange-600 rounded-full px-3">
              Get Started <BsArrowUpRightCircle />
            </button>
            <button className="flex items-center my-2 py-1 gap-20 text-white font-medium border border-amber-500 rounded-full px-3">
              Get A Demo
              <BsArrowUpRightCircle className="bg-amber-500  rounded-full " />
            </button>
          </div>
        </div>
        <img
          src="/Group.png"
          alt="Group"
          className="h-40 w-auto border border-amber-50"
        />
      </div>

      <div className="flex justify-center border border-amber-50 gap-2 mt-10">
        <div className="m-1 text-black bg-stone-900 pt-2 text-center rounded-xl hover:bg-stone-600">
          <h1 className="text-white text-3xl">$130 Bn+</h1>
          <p className="text-stone-600 hover:text-stone-900 text-sm p-2">
            Processed in 5+ Years
          </p>
        </div>
        <div className="m-1 text-black bg-stone-900 pt-2 text-center rounded-xl hover:bg-stone-600">
          <h1 className="text-white text-3xl">6 Mn+</h1>
          <p className="text-stone-600 hover:text-stone-900 text-sm p-2">
            User available Worldwide
          </p>
        </div>
        <div className="m-1 text-black bg-stone-900 pt-2 text-center rounded-xl hover:bg-stone-600">
          <h1 className="text-white text-3xl">70+</h1>
          <p className="text-stone-600 hover:text-stone-900 text-sm p-2">
            Supported cryptocurrencies
          </p>
        </div>
        <div className="m-1 text-black bg-stone-900 pt-2 text-center rounded-xl hover:bg-stone-600">
          <h1 className="text-white text-3xl">200+</h1>
          <p className="text-stone-600 hover:text-stone-900 text-sm p-2">
            Available jurisdiction
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
