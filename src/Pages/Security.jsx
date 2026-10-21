import { MdArrowOutward } from "react-icons/md";
const Security = () => {
  return (
    <div className=" bg-[url(src/assets/Security_Img/Frame_59.jpg)] bg-cover bg-center">
      <div className=" relative max-w-200 m-auto py-25">
        <img
          src="./src\assets\Security_Img\Group_1171275436.png"
          alt="Security Image"
          className=""
        />
        <div className="flex flex-col right-0 absolute w-90 items-end text-end top-22.25 ">
          <h2 className="text-[24px] ">Sustainable Mode</h2>
          <p className="mt-3 text-[16px]">
            Our proven real-time risk engine and strict collateralization
            requirements ensure we generate earnings in a safe way.
          </p>
          <button className="flex relative top-5.5 justify-end items-center my-2 px-2 gap-3 font-raleway rounded-full border-3 border-[#e89f18]">
            Learn More
            <MdArrowOutward className="bg-[#e6ce46] rounded-full" />
          </button>
        </div>
        <div className="flex flex-col absolute w-90  text-start bottom-16">
          <h2 className="text-[24px] ">Custodial Insurance</h2>
          <p className="mt-3 text-[16px]">
            All digital assets benefit from insurance from our custody partners such as Ledger Vault and Fireblocks.
          </p>
          <button className="flex relative top-5.5 items-center my-2 px-2 w-34 gap-3 font-raleway rounded-full border-3 border-[#e89f18]">
            Learn More
            <MdArrowOutward className="bg-[#e6ce46] rounded-full" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Security;
