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
    <section>
      <div className="flex justify-between px-50 py-10">
        <div className="flex flex-col justify-center items-center">
          <img
            src={FooterLogo}
            alt="FooterLogo"
            className="py-6 h-30"
          />
          <div className="flex flex-col">
            <h1 className="text-[rgba(135,135,135,1)] capitalize text-center text-[12px] py-2 mt-10">
              Mobile App
            </h1>
            <img src={QRImage} alt="QR" className="" />
            <img
              src={ApplePay}
              alt="Apple Play"
              className="mt-3"
            />
            <img
              src={GooglePay}
              alt="Google Play"
              className="mt-3"
            />
          </div>
        </div>
        <div className="flex gap-10 py-8">
          <div className="flex flex-col">
            <h1 className="font-raleway text-[18px] font-semibold mb-2">
              Products
            </h1>
            {Products.map((list, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className="flex flex-col text-[rgba(135,135,135,1)] w-25 py-0.5"
                >
                  {list}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col">
            <h1 className="font-raleway text-[18px] font-semibold mb-2">
              Company
            </h1>
            {Company.map((list, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className="flex flex-col text-[rgba(135,135,135,1)] w-25 py-0.5"
                >
                  {list}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col">
            <h1 className="font-raleway text-[18px] font-semibold mb-2">
              Resources
            </h1>
            {Resources.map((list, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className="flex flex-col text-[rgba(135,135,135,1)] w-25 py-0.5 "
                >
                  {list}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col font-lato">
            <h1 className="font-raleway text-[18px] font-semibold mb-2">
              Legal
            </h1>
            {Legal.map((list, index) => {
              return (
                <ul key={index}>
                  <li>
                    <a
                      href="#"
                      className="flex flex-col text-[rgba(135,135,135,1)] w-35 py-0.5"
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
        <div className="flex justify-between items-center p-3 px-50 border-t border-gray-600">
          <h1 className="text-[rgba(135,135,135,1)] font-lato font-normal capitalize">
            Sign in for the latest updates
          </h1>
          <div className="flex gap-2 py-2">
            <input
              className="placeholder-[rgba(135,135,135,1)] border border-gray-600 rounded-lg p-2 font-lato text-[16px] w-70"
              type="email"
              placeholder="Enter your email"
            />
            <button className=" w-[28%] font-raleway text-[16px] font-semibold bg-linear-to-r from-orange-400 to-orange-600 rounded">
              Sign in
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-3 px-50 border-t border-gray-600">
        <h1 className="font-lato font-normal text-[16px] text-[rgba(78,78,78,1)] capitalize">{`${new Date().getFullYear()} Quantum ecosystem. all rights reserved`}</h1>
        <div className="flex gap-8 py-4">
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
