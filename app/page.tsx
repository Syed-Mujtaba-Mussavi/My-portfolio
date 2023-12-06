import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-6 my-5 px-5 lg:px-10 md:px-32 dark:text-white">
      <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl dark:shadow-custom-dark">
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 lg:col-span-9 bg-white dark:bg-dark-500 rounded-2xl overflow-hidden dark:shadow-custom-dark">
        <Navbar />
      </div>
    </div>
  );
}
