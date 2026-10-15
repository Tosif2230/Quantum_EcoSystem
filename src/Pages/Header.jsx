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
    <nev className="flex flex-col border-amber-50 border">
      <div className="flex justify-between">
        <img src="/logo.png" alt="logo" className="h-42 w-auto px-2" />
        <div className="flex mt-10">
          {ListItems.map((item) => {
            return (
              <a className="text-stone-400 font-semibold text-[18px] p-5">
                {item}
              </a>
            );
          })}
        </div>
        <div className="flex flex-col justify-center px-6  mt-4">
          <div className="flex flex-row gap-2 mt-8 px-2">
            <div className="flex flex-row gap-2">
              <button className="text-white px-3 font-semibold  border border-amber-500 rounded">
                Sign in
              </button>
              <button className="text-white px-3 m-0 font-semibold bg-linear-to-r from-orange-400 to-orange-600 rounded">
                Register
              </button>
            </div>
            <img
              src="./src/assets/scanner.png"
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
      </div>

      <div></div>
    </nev>
  );
};

export default Header;
