"use client";
import { INavLinks } from "@/types/nav-links-type";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ data }: { data: INavLinks[] }) => {
  const pathname = usePathname();
  return (
    <div className="flex max-w-7xl mx-auto gap-4 px-4 py-4 md:gap-15">
      {data.map((link) => {
        const isActive = pathname === `/category/${link.id}`;

        return (
          <div
            key={link.id}
            className="flex flex-wrap items-center gap-2 text-[13px] md:flex-nowrap md:text-[14px]"
          >
            <Link
              href={`/category/${link.id}`}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-colors ${
                isActive
                  ? "bg-[#05893e] text-white font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <span>{link.icon}</span>
              <span>{link.nameBn}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ActiveLink;
