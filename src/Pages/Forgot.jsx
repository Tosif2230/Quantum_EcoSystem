
import { useState } from "react";
import Logo from "../assets/Hero/logo.png";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
  const [selectedOption, setSelectedOption] = useState("email");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
  };

  const handleReset = (e) => {
    e.preventDefault();

    if (!contact.trim()) {
      alert(`Please enter your ${selectedOption}.`);
      return;
    }

    // Add your password-reset API logic here.
    console.log("Reset password using:", selectedOption, contact);
  };

  return (
    <section className="bg-black text-white md:p-5 mx-auto w-full flex justify-center min-h-screen">
      <div className="flex flex-col items-center border border-gray-500 w-[90%] md:w-[40%] m-2 p-5 rounded-2xl">
        <div className="w-full">
          <div>
            <img src={Logo} alt="Logo" className="pr-8" />
          </div>

          <h2 className="text-4xl">Forgot Password</h2>

          <h3 className="text-sm py-2">
            Find your account using {selectedOption === "email"
              ? "email address."
              : "phone number."}
          </h3>

          <div className="flex gap-2 w-full sm:w-[70%] py-2">
            <button
              type="button"
              onClick={() => {
                setSelectedOption("email");
                setContact("");
              }}
              className={`border rounded-2xl px-5 py-1 w-full text-center ${
                selectedOption === "email"
                  ? "bg-gray-600"
                  : "hover:bg-gray-600"
              }`}
            >
              Email
            </button>

            <button
              type="button"
              onClick={() => {
                setSelectedOption("phone");
                setContact("");
              }}
              className={`border rounded-2xl px-5 py-1 w-full text-center ${
                selectedOption === "phone"
                  ? "bg-gray-600"
                  : "hover:bg-gray-600"
              }`}
            >
              Phone
            </button>
          </div>

          <form onSubmit={handleReset}>
            <label  className="block w-full py-2">

              <input
                type={selectedOption === "email" ? "email" : "tel"}
                name="contact"
                id="contact"
                placeholder={`Enter your ${
                  selectedOption === "email" ? "email address" : "phone number"
                }`}
                autoComplete={
                  selectedOption === "email" ? "email" : "tel"
                }
                required
                className="border border-gray-300 bg-white text-black w-full rounded p-2"
              />
            </label>

            <button
              type="submit"
              className="border my-5 px-5 py-2 rounded-2xl w-full hover:bg-gray-600"
            >
              Reset Password
            </button>
          </form>

          <button
            type="button"
            onClick={backHome}
            className="border my-2 px-5 py-2 rounded-2xl w-full hover:bg-gray-600"
          >
            <span className="flex items-center justify-center gap-3">
              Back to home <RiArrowGoBackLine />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Forgot;
