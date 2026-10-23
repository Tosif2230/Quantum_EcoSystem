import Logo from "../assets/Hero/logo.png";
import Scanner from "../assets/Hero/scanner.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const ListItems = [
    { lebal: "Market", link: "/market" },
    { lebal: "Product", link: "#" },
    { lebal: "Corporates", link: "#" },
    { lebal: "Private Clients", link: "#" },
    { lebal: "Community", link: "#" },
    { lebal: "Media", link: "#" },
    { lebal: "Company", link: "#" },
  ];
  return (
    <header className="w-full bg-[rgba(13,13,13,1)] border border-black">
      <nav className="flex justify-between w-full">
        <a href="/">
          <img src={Logo} alt="logo" className="h-10 xl:h-38 w-auto " />
        </a>
        <div className="hidden xl:flex mt-10">
          {ListItems.map((item, index) => {
            return (
              <a
                key={index}
                href={item.link}
                className="text-stone-400 font-raleway font-bold text-[16px] p-4"
              >
                <div className="hover:text-stone-300 hover:underline hover:scale-[1.05] cursor-pointer">
                  {item.lebal}
                </div>
              </a>
            );
          })}
        </div>
        <div className="xl:hidden flex justify-center items-center h-15 w-15">
          <GiHamburgerMenu />
        </div>
        <div className="hidden xl:flex flex-col justify-center px-6 mt-4">
          <div className="flex flex-row gap-3 mt-8 px-2">
            <div className="flex flex-row gap-3">
              <button className="text-white hover:text-stone-300 hover:underline hover:scale-[1.05] px-3 cursor-pointer font-bold font-raleway border border-transparent [background:linear-gradient(black,black)_padding-box,linear-gradient(to_right,rgba(240,189,57,1),rgba(178,94,22,1),rgba(198,41,41,1))_border-box] rounded">
                Sign in
              </button>
              <button className="text-white hover:text-stone-300 hover:underline hover:scale-[1.05] px-3 cursor-pointer font-bold font-raleway bg-linear-to-r from-[rgba(240,189,57,1)]  to-[rgba(198,41,41,1)] rounded">
                Register
              </button>
            </div>
            <img
              src={Scanner}
              alt="scanner"
              className="size-10 hover:text-stone-300 hover:scale-[1.05] cursor-pointer"
            />
          </div>
          <div className="flex justify-end m-2 py-2">
            <button className="flex text-white hover:text-stone-300 hover:underline hover:scale-[1.05] cursor-pointer font-semibold border-b border-b-white rounded p-2">
              White Paper <IoIosArrowDown className="m-1" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

