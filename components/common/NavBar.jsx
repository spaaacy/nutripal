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
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" width={50} height={50} alt="NutriPal Logo" />
          <span className="font-semibold text-2xl ml-2 text-gray-800">NutriPal</span>
        </Link>

        {/* Sign In / Sign Out Links */}
        {showSignIn && (
          <div className="ml-auto">
            {session?.data.session ? (
              <button
                onClick={signOut}
                type="button"
                className="text-sm text-gray-600 hover:text-gray-900 transition underline underline-offset-4"
              >
                Sign Out
              </button>
            ) : (
              <Link href="/signin" className="text-sm text-gray-600 hover:text-gray-900 transition underline underline-offset-4">
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
