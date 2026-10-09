import Image from "next/image";

const Banner = () => {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="px-4">
      <div className="bg-white border border-gray-200 rounded-[25px] mt-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-5">
        <div>
          <span className="text-[#05893e] font-bold text-[14px] bg-[#05893e11] rounded-full  px-3 p-1">
            {formattedDate}
          </span>
          <div className="space-y-3 mt-2">
            <h1 className="text-[#1d271f] text-[30px] font-bold">
              আজকের বাজারের দাম এক নজরে
            </h1>
            <p className="text-[#878c87] text-[15px] max-w-162.5">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>
            <a href="#allProducts">
              <button className="cursor-pointer bg-[#05893e] text-white px-4 p-2 rounded-[10px]">
                সব পণ্য দেখুন
              </button>
            </a>
          </div>
        </div>

        <div>
          <Image
            src={"/images/bazar-hero.png"}
            alt="bazar hero"
            width={300}
            height={300}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
