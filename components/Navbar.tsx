"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import NavItem from "./NavItem";
import Project from "@/app/project";
import Resume from "@/app/resume";
import About from "@/app/About";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/project") setActiveItem("Project");
    if (pathname === "/resume") setActiveItem("Resume");
  }, [pathname]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-5 py-3 my-3">
        <span className="text-xl font-bold border-b-4 border-green text-green md:text-2xl">
          {activeItem}
        </span>
        <div className="flex space-x-5 text-lg">
          <NavItem
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            name="About"
          />
          <NavItem
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            name="Projects"
          />
          <NavItem
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            name="Resume"
          />
        </div>
      </div>
      <div className="mt-5">
        {/* About Component */}
        {activeItem === "About" && (
          <div>
            <About />
          </div>
        )}
        {/* Projects Component */}
        {activeItem === "Projects" && (
          <div>
            <Project />
          </div>
        )}

        {/* Resume Component */}
        {activeItem === "Resume" && (
          <div>
            <Resume />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
