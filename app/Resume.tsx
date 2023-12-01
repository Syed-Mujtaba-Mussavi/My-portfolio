import Bar from "@/components/Bar";
import { languages, tools } from "@/data.";
import React from "react";

const Resume = () => {
  return (
    <div className="px-6 py-2 ">
      {/* Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2  border-b-2 border-gray-300">
        <div className="mb-2">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Computer Science</h5>
            <p className="font-semibold">Herat University (2019 - 2023)</p>
          </div>
        </div>
        <div className="mb-2">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Frontend Developer</h5>
            <p className="font-semibold">Jeyhun (2022 - 2023)</p>
          </div>
        </div>
      </div>
      {/* languages & Tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
