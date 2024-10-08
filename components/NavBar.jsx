"use client";

import { UserContext } from "@/context/UserContext";
import { supabase } from "@/utils/supabase";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";

const NavBar = () => {
  const { session } = useContext(UserContext);
  const router = useRouter();
  const pathname = usePathname();
  const showSignIn = pathname !== "/signin" && pathname !== "/signup";

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      location.reload();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav>
      <div className="flex items-center bg-gray-800 py-2 px-8 text-white">
        <Link href="/" className="flex items-center justify-center">
          <Image src="/logo.png" width={50} height={50} alt="logo" />
          <span className="font-semibold text-2xl ml-2">CalSync</span>
        </Link>

        {showSignIn && (
          <div className="ml-auto">
            {session?.data.session ? (
              <button onClick={signOut} type="button" className="hover:underline">
                Sign Out
              </button>
            ) : (
              <Link href="/signin" className="hover:underline">
                Sign In
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
