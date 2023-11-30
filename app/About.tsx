import Image from "next/image";
import React from "react";
import muj from "public/muj.png";

const About = () => {
  return (
    <div className="p-4">
      <Image src={muj} alt="muj" width={300} height={300} />
    </div>
  );
};

export default About;
