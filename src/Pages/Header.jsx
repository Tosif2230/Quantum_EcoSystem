import Logo from "../assets/Hero/logo.png";
import Scanner from "../assets/Hero/scanner.png"
import { IoIosArrowDown } from "react-icons/io";
const Header = () => {
const ListItems = [
    "Market",
    "Product",
    "Corporates",
    "Private Clients",
    "Community",
    "Media",
    "Company",
  ];
  return (
    <header className="w-full">
      <nav className="flex justify-between w-full">
        <img src={Logo} alt="logo" className="h-38 w-auto " />
        <div className="flex mt-10">
          {ListItems.map((item, index) => {
            return (
              <a
                key={index}
                className="text-stone-400 font-raleway font-bold text-[16px] p-4"
              >
                {item}
              </a>
            );
          })}
        </div>
        <div className="flex flex-col justify-center px-6 mt-4">
          <div className="flex flex-row gap-2 mt-8 px-2">
            <div className="flex flex-row gap-2">
              <button className="text-white px-3 font-bold font-raleway border border-transparent [background:linear-gradient(black,black)_padding-box,linear-gradient(to_right,rgba(240,189,57,1),rgba(178,94,22,1),rgba(198,41,41,1))_border-box] rounded">
                Sign in
              </button>
              <button className="text-white px-3 font-bold font-raleway bg-linear-to-r from-[rgba(240,189,57,1)]  to-[rgba(198,41,41,1)] rounded">
                Register
              </button>
            </div>
            <img
              src={Scanner}
              alt="scanner"
              className="size-10"
            />
          </div>
          <div className="flex justify-end m-2 py-2">
            <button className="flex text-white font-semibold border-b border-b-white rounded p-2">
              White Paper <IoIosArrowDown className="m-1" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
