import { useNavigate } from "react-router-dom";
import Logo from "../assets/Hero/logo.png";

const Signup = () => {
  const navigate = useNavigate();
  const handleSignin = () => {
    navigate("/signup");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="flex justify-center gap-50 bg-[rgba(13,13,13,1)] p-5 min-h-screen">
      <div className="">
        <div className="">
          <img src={Logo} alt="Logo" className="" />
        </div>
        <div className="flex gap-5">
          <div className="w-full">
            <button
              onClick={handleLogin}
              className="hover:text-stone-300 w-full xl:px-5 lg:px-2 cursor-pointer font-raleway font-bold border border-transparent
                [background:linear-gradient(black,black)_padding-box,linear-gradient(to_right,rgba(240,189,57,1),rgba(178,94,22,1),rgba(198,41,41,1))_border-box] rounded-lg"
            >
              Login
            </button>
          </div>
          <div className="w-full">
            <button
              onClick={handleSignin}
              className="hover:text-stone-300 w-full xl:px-3 lg:px-2 cursor-pointer font-raleway font-bold
                bg-linear-to-r from-[rgba(240,189,57,1)] to-[rgba(198,41,41,1)] rounded-lg"
            >
              Register
            </button>
          </div>
        </div>

        <div className="flex items-center my-4">
          <div className="grow border-t border-gray-300"></div>
          <span className="mx-4 shrink text-gray-500">OR</span>
          <div className="grow border-t border-gray-300"></div>
        </div>
        <form action="" className="flex flex-col gap-1">
          <label>
            <h2 className="text-[12px] text-gray-600">Your e-mail</h2>
            <input
              type="email"
              className="w-full border rounded p-2"
              placeholder="email@quantumechosystem.com"
            />
          </label>
          <label>
            <h2 className="text-[12px] text-gray-600">Your password</h2>
            <input
              type="password"
              className="w-full border rounded p-2"
              placeholder="Enter your password"
            />
          </label>
          <label>
            <h2 className="text-[12px] text-gray-600">Confirm password</h2>
            <input
              type="password"
              className="w-full border rounded p-2"
              placeholder="Enter your password"
            />
          </label>
          <label className="flex gap-1">
            <input
              type="checkbox"
              name="Terms"
              id="Terms"
              required
              className="rounded accent-orange-400 cursor-pointer mb-5"
            />
            <h3 className="text-[rgba(241,234,234,0.5)] text-sm text-wrap md:w-80">
              I am 18+ and to Quentum Eco{" "}
              <span className="text-[rgb(253,149,12)] underline">
                Privacy and terms
              </span>{" "}
              of use.
            </h3>
          </label>
          <label className="flex gap-1">
            <input
              type="checkbox"
              name="promotional-email"
              id="promotional-email"
              required
              className="rounded accent-orange-400 cursor-pointer"
            />
            <h3 className="text-sm text-[rgba(241,234,234,0.5)] ">
              Recieved promotional emails.
            </h3>
          </label>
        </form>
        <div className="my-5">
          <button
            className="hover:text-stone-300 w-full py-1 md:py-2 xl:px-3 lg:px-2 font-raleway font-bold
                bg-linear-to-r from-[rgba(240,189,57,1)] to-[rgba(198,41,41,1)] rounded-lg cursor-pointer"
          >
            Creat Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
