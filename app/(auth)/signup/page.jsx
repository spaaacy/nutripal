"use client";

import { UserContext } from "@/context/UserContext";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import Link from "next/link";

const Page = () => {
  const { session } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (session?.data.session) {
      router.push("/");
    }
  }, [session]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!session || session.data.session) return;
    try {
      if (formData.password !== formData.confirmPassword) throw Error("Passwords do not match");

      const { data: authData, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;

      const response = await fetch("/api/user/create", {
        method: "POST",
        body: JSON.stringify({
          user_id: authData.user.id,
          email: formData.email,
        }),
      });

      if (response.status === 500) {
        const { error } = await response.json();
        throw error;
      }

      console.log("Account created");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main>
        <h1 className="font-bold text-xl">Sign Up</h1>
        <form className="flex flex-col" onSubmit={onSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Confirm Password"
          />
          <button type="submit">Submit</button>
          <Link href={"/signin"} className="text-sm text-blue-500 hover:underline">
            Already have an account? Sign in.
          </Link>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Page;
