import { useState } from "react";
import Logo from "../assets/Hero/logo.png";
import Scanner from "../assets/Hero/scanner.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const ListItems = [
    { lebal: "Market", link: "/market" },
    { lebal: "Product", link: "#" },
    { lebal: "Corporates", link: "#" },
    { lebal: "Private Clients", link: "#" },
    { lebal: "Community", link: "#" },
    { lebal: "Media", link: "#" },
    { lebal: "Company", link: "#" },
  ];

  const closeMenu = () => setMenu(false);
  const navigate = useNavigate();

  // Login Function
  const hendleLogin = () => {
    navigate("/login");
  };
  // Register function
  const hendleRegister = () => {
    navigate("/signup");
  };

  return (
    <header className="relative bg-[rgba(13,13,13,1)] border border-black">
      <div className="flex justify-between w-full">
        <a href="/">
          <img
            src={Logo}
            alt="logo"
            className="h-12 md:h-20 xl:h-35 lg:h-25 w-auto"
          />
        </a>
        <nav className="hidden lg:flex xl:py-8 lg:py-5">
          {ListItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-stone-400 font-raleway font-bold
              lg:text-[10.8px] xl:text-[16px] p-4
              hover:text-stone-300 hover:underline
              hover:scale-[1.05] cursor-pointer"
            >
              {item.lebal}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex flex-col justify-center xl:px-6 lg:px-4">
          <div className="flex flex-row gap-2 xl:gap-3 xl:mt-10 lg:mt-7 px-2">
            <div className="flex flex-row gap-3 lg:text-sm">
              <button
                type="button"
                onClick={hendleLogin}
                className="hover:text-stone-300 xl:px-3 lg:px-2 cursor-pointer font-raleway font-bold border border-transparent
                [background:linear-gradient(black,black)_padding-box,linear-gradient(to_right,rgba(240,189,57,1),rgba(178,94,22,1),rgba(198,41,41,1))_border-box] rounded-lg"
              >
                Sign in
              </button>

              <button
                type="button"
                onClick={hendleRegister}
                className="hover:text-stone-300 xl:px-3 lg:px-2 cursor-pointer font-raleway font-bold
                bg-linear-to-r from-[rgba(240,189,57,1)] to-[rgba(198,41,41,1)] rounded-lg"
              >
                Register
              </button>
            </div>

            <img
              src={Scanner}
              alt="scanner"
              className="lg:size-10 hover:scale-[1.05] cursor-pointer"
            />
          </div>

          <div className="flex justify-end xl:p-1 m-1 xl:py-2 lg:py-1">
            <button className="flex hover:text-stone-300 cursor-pointern font-semibold border-b border-b-white rounded xl:p-2 lg:p-1">
              White Paper <IoIosArrowDown className="m-1" />
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMenu(!menu)}
          className="lg:hidden text-xl p-4"
        >
          {menu ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {menu && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute top-full left-0 w-full bg-[rgba(13,13,13,1)] border-t border-stone-700
          z-50"
        >
          <nav className="flex flex-col px-5 py-4">
            {ListItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                onClick={closeMenu}
                className="text-stone-400 font-raleway font-bold
                py-2 border-b border-stone-800
                hover:text-white hover:pl-2"
              >
                {item.lebal}
              </a>
            ))}

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 mt-4">
              <button
                className="font-bold py-3 border border-transparent
                [background:linear-gradient(black,black)_padding-box,linear-gradient(to_right,rgba(240,189,57,1),rgba(178,94,22,1),rgba(198,41,41,1))_border-box] rounded hover:bg-stone-800"
                onClick={closeMenu}
              >
                Sign in
              </button>

              <button
                className="font-bold py-3 rounded bg-linear-to-r from-[rgba(240,189,57,1)] to-[rgba(198,41,41,1)]"
                onClick={closeMenu}
              >
                Register
              </button>

              <div className="flex justify-between">
                <button
                  className="flex items-center justify-center gap-1 font-semibold py-3 border-b rounded px-2"
                  onClick={closeMenu}
                >
                  White Paper <IoIosArrowDown />
                </button>

                <div className="flex justify-center pt-2">
                  <img
                    src={Scanner}
                    alt="scanner"
                    className="size-10 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
