"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Buttons = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
        },
      },
    });
  };

  return (
    <div>
      <div className="flex gap-2 items-center">
        {user ? (
          <div className="flex items-center gap-4">
            <Link href={"/profile"}>
              <h1>{user.name}</h1>
            </Link>

            <button
              onClick={handleSignOut}
              className="btn cursor-pointer rounded bg-red-700 text-white"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <>
            <Link href="/sign-in">
              <button className="cursor-pointer text-[12px] md:text-[16px] text-[#1d271f]">
                সাইন ইন
              </button>
            </Link>

            <Link href="/sign-up">
              <button className="cursor-pointer text-[12px] md:text-[16px] bg-[#05893e] text-white px-4 py-2 rounded-[10px]">
                সাইন আপ
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Buttons;
