import { INavLinks } from "@/types/nav-links-type";
import Link from "next/link";

const NavLinks = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
  );
  const data = await res.json();
  const links: INavLinks[] = data;

  return (
    <div className="py-4 flex max-w-7xl mx-auto px-4 gap-4 ">
      {links.map((link) => (
        <div
          key={link.id}
          className="flex flex-wrap md:flex-nowrap items-center gap-2 text-[13px] md:text-[14px]"
        >
          <Link href={`/category/${link.id}`}>
            <span>{link.icon}</span>
            <p>{link.nameBn}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
