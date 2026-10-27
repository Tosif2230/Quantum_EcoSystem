import LinkedIn from "../assets/Footer/linkedin.png";
import Twitter from "../assets/Footer/twitter.png";
import Facebook from "../assets/Footer/facebook.png";
import Discord from "../assets/Footer/discord.png";
import FooterLogo from "../assets/Footer/FooterLogo.png";
import QRImage from "../assets/Footer/QR.png";
import ApplePay from "../assets/Footer/apple_store.png";
import GooglePay from "../assets/Footer/play_store.png";

const Footer = () => {
  const Products = [
    "Buy",
    "Earn",
    "Exchange",
    "Borrow",
    "Booster",
    "Quantum Card",
    "Referral",
    "Quentum Wallet",
  ];
  const Company = [
    "About",
    "Security",
    "Licences",
    "Quantum Prime",
    "Quantum Private",
    "Quantum Vantures",
    "Careers",
    "Affiliates",
    "Corporates",
  ];
  const Resources = [
    "Blog",
    "Media Center",
    "Help Center",
    "Contacts",
    "Sitemap",
    "Vulnerability Disclosure",
  ];
  const Legal = [
    "Privacy Policy",
    "Terms & Conditions",
    "Service Terms",
    "Borrow Terms",
    "Earn Terms",
    "Exchange Terms",
    "Defi Terms",
    "Staking Terms",
    "Quantum Card Terms",
    "Cookie Policies",
    "Affilate Terms",
  ];
  const socialIcons = [
    {
      icon: Twitter,
      alt: "Twitter",
      link: "#",
    },
    {
      icon: Facebook,
      alt: "Facebook",
      link: "#",
    },
    {
      icon: LinkedIn,
      alt: "LinkedIn",
      link: "#",
    },
    {
      icon: Discord,
      alt: "Discord",
      link: "#",
    },
  ];
  return (
    <section className="bg-[rgba(0,0,0,1)] p-5">
      <div className="lg:flex md:flex justify-center lg:py-8 md:py-6 py-4 md:px-2 md:gap-30">
        <div className="xl:flex flex-col xl:justify-center lg:justify-center items-center  md:text-center">
          <a
            href="/"
            className="flex justify-center items-center cursor-pointer"
          >
            <img
              src={FooterLogo}
              alt="FooterLogo"
              className="xl:py-6 xl:h-30 lg:h-25 md:h-15 h-9 w-auto"
            />
          </a>
          <div className="flex md:flex-col md:justify-center items-center px-4 gap-x-15">
            <div className="">
              <h1 className="text-[rgba(135,135,135,1)] capitalize font-medium text-[12px] py-2 md:mt-10">
                Mobile App
              </h1>
              <div className="">
                <img
                  src={QRImage}
                  alt="QR"
                  className="h-20 lg:h-32 lg:px-2 w-auto"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 size-20 lg:size-30 py-3">
              <button href="#" className="cursor-pointer">
                <img
                  src={ApplePay}
                  alt="Apple Play"
                  className="hover:border rounded"
                />
              </button>
              <button href="#" className="cursor-pointer">
                <img
                  src={GooglePay}
                  alt="Google Play"
                  className="hover:border rounded"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:gap-3 py-4 xl:py-6 md:py-4 px-4">
          <div className="flex flex-col">
            <h2 className="text-start font-raleway xl:text-[18px] font-semibold py-1">
              Products
            </h2>
            {Products.map((list, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className="flex text-[rgba(135,135,135,1)] text-start md:w-20 xl:py-0.5 hover:underline hover:text-stone-300 md:leading-6 leading-5"
                >
                  {list}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col ">
            <h2 className="text-start font-raleway xl:text-[18px] font-semibold py-1">
              Company
            </h2>
            {Company.map((list, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className="flex text-[rgba(135,135,135,1)]  text-start md:w-20 xl:py-0.5 hover:underline hover:text-stone-300 md:leading-6 leading-5"
                >
                  {list}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col">
            <h2 className="text-start font-raleway xl:text-[18px] font-semibold py-1">
              Resources
            </h2>
            {Resources.map((list, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className="flex text-[rgba(135,135,135,1)]  text-start md:w-30 xl:py-0.5 hover:underline hover:text-stone-300 md:leading-6 leading-5"
                >
                  {list}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col">
            <h2 className="text-start font-raleway xl:text-[18px] font-semibold py-1">
              Legal
            </h2>
            {Legal.map((list, index) => {
              return (
                <ul key={index}>
                  <li>
                    <a
                      href="#"
                      className="flex text-[rgba(135,135,135,1)] text-start md:w-30 lg:w-35 xl:py-0.5 hover:underline hover:text-stone-300  md:leading-6 leading-5"
                    >
                      {list}
                    </a>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-center p-3 lg:px-45 md:px-5.5 border-t border-gray-600">
          <h1 className="text-[rgba(135,135,135,1)] text-[12px] md:text-[14px] font-lato font-normal capitalize">
            Sign in for the latest updates
          </h1>
          <div className="flex flex-col md:flex-row gap-2 py-2 ">
            <input
              className="placeholder-[rgba(135,135,135,1)] border border-gray-600 rounded-lg p-2 font-lato text-[16px] w-70"
              type="email"
              placeholder="Enter your email"
            />
            <button className=" md:w-[28%] font-raleway text-[16px] cursor-pointer font-semibold bg-linear-to-r from-orange-400 to-orange-600 rounded">
              Sign in
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-center p-3 lg:px-45 md:px-5.5 border-t border-gray-600">
        <h1 className="font-lato font-normal text-[12px] md:text-[14px] text-[rgba(78,78,78,1)] capitalize">{`${new Date().getFullYear()} Quantum ecosystem. all rights reserved`}</h1>
        <div className="flex md:gap-8 gap-4 py-4">
          {socialIcons.map((item, index) => {
            return (
              <a key={index} href={item.link} className="">
                <img src={item.icon} alt={item.alt} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
