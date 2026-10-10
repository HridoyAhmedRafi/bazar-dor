import { IMarquee } from "@/types/marquee-links-type";
import ProductCard from "@/components/home/ProductCard";

const Products = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data: IMarquee[] = await res.json();

  return (
    <div className="bg-red-500">
      <div className="w-full mt-10 max-w-7xl mx-auto px-4 pb-10 ">
        <h1 className="font-bold text-[18px]">সব পণ্য</h1>
        <p className="text-gray-600">
          মোট {data.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 ">
          {data
            .sort((a, b) => b.change.pct - a.change.pct)
            .map((upProducts) => (
              <ProductCard key={upProducts.id} upProducts={upProducts} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
