"use clients";
import { FunctionComponent } from "react";
import { Category } from "@/type";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let activeIcon =
    "capitalize font-bold tracking-wider cursor-pointer hover:text-green";
  if (active === value) activeIcon += " text-green";
  return (
    <li onClick={() => handlerFilterCategory(value)}>
      <span className={activeIcon}>{value}</span>
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="HTML&CSS" {...props} />
      <NavItem value="Tailwind" {...props} />
      <NavItem value="Javascript" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="next" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
