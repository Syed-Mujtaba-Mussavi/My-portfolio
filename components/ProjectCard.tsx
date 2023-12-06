"use client";
import { IProject } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FunctionComponent } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/animations";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | number;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
    id,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        width="300"
        height="150"
        className="cursor-pointer rounded-lg"
        onClick={() => setShowDetail(id)}
      />
      <p className="my-2 text-center">{name}</p>

      {showDetail === id && (
        <div className="absolute grid md:grid-cols-2 top-0 left-0 z-10 h-auto p-2 md:p-10 w-full gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark-100 rounded-lg">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div variants={fadeInUp} className="border-4 border-gray-100">
              <Image
                src={image_path}
                alt={name}
                width={300}
                height={150}
                className="cursor-pointer w-[100%]"
                layout="responsive"
              />
            </motion.div>
            <motion.div
              className="flex justify-center my-4 space-x-3"
              variants={fadeInUp}
            >
              <Link
                href={github_url}
                target="_blank"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </Link>
              <Link
                href={deployed_url}
                target="_blank"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Link</span>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <button
            className="absolute rounded-full top-3 right-3 p-1 focus:outline-none bg-gray-200 dark:bg-dark-200"
            onClick={() => setShowDetail(null)}
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
