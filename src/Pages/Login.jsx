import { useNavigate } from "react-router-dom";
import Logo from "../assets/Hero/logo.png";
import { RiArrowGoBackLine } from "react-icons/ri";

const Login = () => {
  const navigate = useNavigate();
  const handleSignin = () => {
    navigate("/signup");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleForgot = () => {
    navigate("/forgot");
  };
  const backHome = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center gap-50 bg-[rgba(13,13,13,1)] p-5 min-h-screen">
      <div className="">
        <div className="">
          <img src={Logo} alt="Logo" className="" />
        </div>
        {/* <div>
          <h2 className="text-4xl text-center">Welcome Back</h2>
        </div> */}
        <div className="flex gap-5">
          <div className="w-full">
            <button
              onClick={handleLogin}
              className="hover:text-stone-300 w-full xl:px-5 lg:px-2 cursor-pointer font-raleway font-bold
                  bg-linear-to-r from-[rgba(240,189,57,1)] to-[rgba(198,41,41,1)] rounded-lg"
            >
              Login
            </button>
          </div>
          <div className="w-full">
            <button
              onClick={handleSignin}
              className="hover:text-stone-300 w-full xl:px-5 lg:px-2 cursor-pointer font-raleway font-bold border border-transparent
                  [background:linear-gradient(black,black)_padding-box,linear-gradient(to_right,rgba(240,189,57,1),rgba(178,94,22,1),rgba(198,41,41,1))_border-box] rounded-lg"
            >
              Register
            </button>
          </div>
        </div>

        <div class="flex items-center my-4">
          <div class="grow border-t border-gray-300"></div>
          <span class="mx-4 shrink text-gray-500">OR</span>
          <div class="grow border-t border-gray-300"></div>
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
        </form>
        <div className="my-5">
          <button
            className="hover:text-stone-300 w-full py-1 md:py-2 xl:px-3 lg:px-2 font-raleway font-bold
                  bg-linear-to-r from-[rgba(240,189,57,1)] to-[rgba(198,41,41,1)] rounded-lg cursor-pointer"
          >
            Log In
          </button>
        </div>
        <div className="my-5">
          <button
            onClick={handleForgot}
            className="hover:text-stone-300 w-full py-1 md:py-2 xl:px-3 lg:px-2 cursor-pointer font-raleway font-bold border border-transparent
                  [background:linear-gradient(black,black)_padding-box,linear-gradient(to_right,rgba(240,189,57,1),rgba(178,94,22,1),rgba(198,41,41,1))_border-box] rounded-lg"
          >
            Forgot Password
          </button>
        </div>
        <button
          type="button"
          onClick={backHome}
          className="hover:text-stone-300 w-full py-1 md:py-2 xl:px-3 lg:px-2 cursor-pointer font-raleway font-bold border border-transparent
                  [background:linear-gradient(black,black)_padding-box,linear-gradient(to_right,rgba(240,189,57,1),rgba(178,94,22,1),rgba(198,41,41,1))_border-box] rounded-lg"
        >
          <span className="flex items-center justify-center gap-3">
            Back to home <RiArrowGoBackLine />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Login;
