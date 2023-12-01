import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Component } from "react";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-6 my-5 px-5 lg:px-10 md:px-32">
      <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl">
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 lg:col-span-9 bg-white rounded-2xl overflow-hidden">
        <Navbar />
      </div>
    </div>
  );
}
