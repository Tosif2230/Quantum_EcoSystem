import { BsArrowDown } from "react-icons/bs";
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
    <section className="flex justify-between">
      <div className="flex">
        <img src="/logo.png" alt="logo" className="h-35" />
        <div className="justify-center items-center mt-10">
          <h1 className="text-orange-500 text-3xl">QUANTUM</h1>
          <h2 className="text-red-800 text-xl text-right">echosystem</h2>
        </div>
      </div>
      <div className="flex justify-center">
        {ListItems.map((item) => {
          return <a className="text-stone-400 font-bold mt-10 p-3 ">{item}</a>;
        })}
      </div>
      <div className="flex flex-col items-end justify-end">
        <div>
          <button className="text-white m-2 border border-amber-500 rounded p-2">
            Sign in
          </button>
          <button className="text-white m-2 font-bold bg-linear-to-r from-orange-400 to-orange-600 rounded p-2">
            Register
          </button>
          <button className="text-white m-2 font-bold border border-white rounded p-2">
            QR
          </button>
        </div>
        <div className="px-2">
          <button className="flex p-2 text-white font-semibold rounded border-b border-b-white">
            White Paper <BsArrowDown className="m-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
