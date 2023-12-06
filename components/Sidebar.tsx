import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import Image from "next/image";
import muj from "public/muj.png";
import Link from "next/link";
import Button from "./Button";
import ThemeSwitcher from "./ThemeSwitcher";
const Sidebar = () => {
  return (
    <div>
      <Image
        src={muj}
        alt="mujtaba pic"
        width="128"
        height="128"
        className="mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-normal tracking-wider font-kaushan">
        <span className="text-green">Mujtaba</span> Mussavi
      </h3>
      <p
        className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200
       rounded-full"
      >
        Web Developer
      </p>
      <Link
        href="/cv/Muj-resume.pdf"
        className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full flex items-center justify-center"
        download="Muj-resume.pdf"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </Link>
      {/* social icons */}
      <div className="flex items-center justify-around my-5 w-9/12 mx-auto text-green-500 md:w-full">
        <Link href="https://github.com/Syed-Mujtaba-Mussavi">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </Link>
        <Link href=" https://www.linkedin.com/in/syed-mujtaba-mussavi-19441025b/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </Link>
        <Link href="">
          <AiFillTwitterCircle className="w-8 h-8 cursor-pointer" />
        </Link>
      </div>
      {/* Address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Herat, Afghanistan</span>
        </div>
        <p className="my-2">mujtabasadat07800@gmail.com</p>
        <p className="my-2">0780097801</p>
      </div>
      {/* email button */}
      <Button />
      <ThemeSwitcher />
    </div>
  );
};

export default Sidebar;
