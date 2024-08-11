import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Kanak Thool</h2>
          <p className="text-base leading-6 ">
           A software designer and developer who has successfully completed BE/B.tech in IT and a software/web development internship, along with a Full Stack Development Guaranteed Placement course from Internshala Trainings. I am currently I am seeking for a software developer role with an opportunity to use my skills in developing web applications and software solutions.

          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            23
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
           Nagpur, Maharashtra
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Experience:</span>
            Software Developer
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Education:</span>
            BE(IT)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
