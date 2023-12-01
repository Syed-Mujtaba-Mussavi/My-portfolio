import React from "react";
import { services } from "@/data.";
import ServiceCard from "@/components/ServiceCard";

const About = () => {
  console.log(services);
  return (
    <div className="flex flex-col px-6 pt-1 flex-grow">
      <h5 className="my-3 font-medium">
        My name is Syed Mujtaba, a Junior Frontend Developer and UX/UI Designer
        with approximately one year of experience in the industry. My areas of
        expertise include Adobe Photoshop, Figma, Branding, and creating
        attractive, Responsive Websites using HTML, CSS, SASS, Tailwind,
        JavaScript, ES6+, React, React Query, Next.js, Git, and GitHub.
      </h5>
      <div
        className="p-4 mt-5 bg-gray-400 flex-grow"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wider">What I offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-200 rounded-lg lg:col-span-1"
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
