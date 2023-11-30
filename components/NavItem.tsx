import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
interface Props {
  activeItem: string;
  setActiveItem: Function;
  name: string;
}
const NavItem = ({ activeItem, setActiveItem, name }: Props) => {
  const router = useRouter();
  return activeItem !== name ? (
    <span
      onClick={() => setActiveItem(name)}
      className="hover:text-green cursor-pointer"
    >
      {name}
    </span>
  ) : null;
};
// const NavItem = ({ activeItem, setActiveItem, name, route }: Props) => {
//   const router = useRouter();
//   return activeItem !== name ? (
//     <Link href={route} scroll={false}>
//       <span onClick={() => setActiveItem(name)} className="hover:text-green ">
//         {name}
//       </span>
//     </Link>
//   ) : null;
// };

export default NavItem;
