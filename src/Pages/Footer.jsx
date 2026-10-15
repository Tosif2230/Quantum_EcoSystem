import LinkedIn from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
import Facebook from "../assets/facebook.png";
import Discord from "../assets/discord.png";

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
      <div className="flex justify-between items-center p-3 px-40 py-5">
        <div className="flex flex-col justify-center items-center">
          <img
            src="./src//assets/FooterLogo.png"
            alt="FooterLogo"
            className="py-5"
          />
          <div className="flex flex-col">
            <h1 className="text-[rgba(135,135,135,1)] capitalize text-center text-[12px] py-2 mt-10">
              Mobile App
            </h1>
            <img src="./src/assets/QR.png" alt="QR"  className="" />
            <img src="./src/assets/apple_store.png" alt="Apple Play" className="mt-1" />
            <img src="./src/assets/play_store.png" alt="Google Play" className="mt-2" />
          </div>
        </div>
        <div className="flex gap-6 py-2">
          <div className="flex flex-col">
            <h1 className="text-white font-medium text-[15px] mb-2">Products</h1>
            {Products.map((list) => {
              return (
                <a
                  href="#"
                  className="flex flex-col text-[rgba(135,135,135,1)] w-25 py-0.5"
                >
                  {list}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col">
            <h1 className="text-white font-medium text-[15px] mb-2">Company</h1>
            {Company.map((list) => {
              return (
                <a
                  href="#"
                  className="flex flex-col text-[rgba(135,135,135,1)] w-25 py-0.5"
                >
                  {list}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col">
            <h1 className="text-white font-medium text-[15px] mb-2">Resources</h1>
            {Resources.map((list) => {
              return (
                <a
                  href="#"
                  className="flex flex-col text-[rgba(135,135,135,1)] w-25 py-0.5 "
                >
                  {list}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col">
            <h1 className="text-white font-medium text-[15px] mb-2">Legal</h1>
            {Legal.map((list) => {
              return (
                <a
                  href="#"
                  className="flex flex-col text-[rgba(135,135,135,1)] w-30  py-0.5"
                >
                  {list}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center p-3 px-40 border border-t-gray-700">
          <h1 className="text-[rgba(135,135,135,1)] capitalize">
            Sign in for the latest updates
          </h1>
          <div className="flex gap-2 px-4">
            <input
              className="placeholder-[rgba(135,135,135,1)] border border-gray-600 rounded-l p-2 text-xl w-100"
              type="email"
              placeholder="Enter your email"
            />
            <button className="text-white w-[20%] text-xl font-semibold bg-linear-to-r from-orange-400 to-orange-600 rounded">
              Sign in
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-3 px-40 border border-t-gray-700">
        <h1 className="text-sm text-[rgba(78,78,78,1)] capitalize">{`${new Date().getFullYear()} Quantum ecosystem. all rights reserved`}</h1>
        <div className="flex gap-8 m-4">
          {socialIcons.map((item, index) => {
            return (
              <a key={index} href={item.link} className="text-white">
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
