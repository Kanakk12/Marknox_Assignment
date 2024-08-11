import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Web Developer"
          subTitle="Ants Media"
          des="Developed a web app using React JS, Node, Express, Mongodb, HTML, CSS, 
Bootsrap, Javascript.

• Implemented responsive design principles using Bootstrap and Media 
queries to ensure website is mobile friendly. 
• Created RESTful web services using Node.js for web applications.
• Created a database using Mongodb.

 "
        />
       
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2019 - 2023"
          title="KDK Collge of Engineering"
          subTitle="Nagpur"
          des="Bachelor's in Engineering (IT)"
        />
        <ResumeCard
          badge="2023 - 2024"
          title="Fullstack Development Course"
          subTitle="Internshala Trainings"
          des="MERN stack, Frontend and Backend"
        />
       
      </div>
    </div>
  );
};

export default Education;
