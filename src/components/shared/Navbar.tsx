import Image from "next/image";
import Buttons from "./Buttons";
import NavLinks from "./NavLinks";
import Link from "next/link";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <div className="border-b border-gray-200  sticky top-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between ">
        <div className="flex gap-2">
          <div className=" hidden md:block bg-[#05893e] px-2.5 py-2.5 rounded-2xl ">
            <Image
              src={"/images/logo-icon.png"}
              alt="logo"
              width={30}
              height={30}
              // className="w-6 h-6 md:w-7.5 md:h-7.5"
            ></Image>
          </div>
          <div>
            <Link href={"/"}>
              <h1 className="text-[#1d271f] text-[15px] md:text-[20px] font-bold">
                বাজার দর
              </h1>
              <p className="text-[#1d271f] text-[10px] md:text-[14px]">
                {date}
              </p>
            </Link>
          </div>
        </div>

        <div>
          <Buttons></Buttons>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <NavLinks></NavLinks>
      </div>
    </div>
  );
};

export default Navbar;
