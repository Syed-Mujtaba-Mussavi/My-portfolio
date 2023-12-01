import { ISkill } from "@/type";
import { FunctionComponent } from "react";

const Bar: FunctionComponent<{ value: ISkill }> = ({
  value: { Icon, name, level },
}) => {
  const bar_width = `${level}%`;
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full">
      <div
        className="flex items-center rounded-full px-4 py-1 bg-gradient-to-r from-green to-blue-600"
        style={{ width: bar_width }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};
export default Bar;
