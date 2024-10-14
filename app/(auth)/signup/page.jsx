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
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavBar />

      <main className="flex flex-col items-center justify-center flex-grow p-6">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Your Account</h1>
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <label htmlFor="email" className="text-gray-600 font-medium">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <label htmlFor="password" className="text-gray-600 font-medium">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <label htmlFor="confirmPassword" className="text-gray-600 font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Re-enter your password"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Sign Up
            </button>
            <Link href={"/signin"} className="text-center text-blue-500 hover:underline">
              Already have an account? Sign in.
            </Link>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Page;
