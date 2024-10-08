"use client";

import { UserContext } from "@/context/UserContext";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Link from "next/link";

const Page = () => {
  const { session } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (session?.data.session) {
      router.push("/");
    }
  }, [session]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!session) return;
    const { data: authData, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (authData.user && authData.session) {
      location.reload();
    } else {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        <h1 className="font-bold text-xl">Sign In</h1>
        <form className="flex flex-col" onSubmit={onSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Password"
          />

          <button type="submit">Submit</button>
          <Link href={"/signup"} className="text-sm text-blue-500 hover:underline">
            Not registered? Create Account.
          </Link>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
