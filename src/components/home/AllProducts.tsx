import { IMarquee } from "@/types/marquee-links-type";
import HomePageProducts from "../shared/ProductSection";

const AllProducts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data: IMarquee[] = await res.json();

  return (
    <div className="mt-10 max-w-7xl mx-auto px-4 pb-10">
      <HomePageProducts data={data}></HomePageProducts>
    </div>
  );
};

export default AllProducts;
