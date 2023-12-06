"use client";
import ProjectCard from "@/components/ProjectCard";
import ProjectsNavbar from "@/components/ProjectsNavbar";
import { useState } from "react";
import { projects as projectsData } from "@/data.";
import { Category } from "@/type";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/animations";
import { animate } from "framer-motion/dom";

const Project = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const [showDetail, setShowDetail] = useState<number | null>(null);
  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }
    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };
  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
      <ProjectsNavbar
        handlerFilterCategory={handleFilterCategory}
        active={active}
      />
      <motion.div
        className="relative grid grid-cols-12 gap-4 my-3"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((project) => (
          <motion.div
            className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-gray-200 dark:bg-dark-200 rounded-lg mt-8"
            key={project.name}
            variants={fadeInUp}
          >
            <ProjectCard
              project={project}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
