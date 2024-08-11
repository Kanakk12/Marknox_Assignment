import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development,"
        subTitle="Front-End Development,
Backend Development,
Full-Stack Development"
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="Design & build a custom website. A website needs to be easy to navigate, visually appealing, and fast in order to hold a visitor's attention and convert leads."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Application"
        subTitle=" mobile app development services deliver innovative business solutions as per your custom requirements, paving the way for seamless UX and enhanced digital presence."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="SEO"
        subTitle="improving your website to increase its visibility in Google, Microsoft Bing, and other search engines whenever people search for: Products you sell. Services you provide."
      />
    </div>
  );
};

export default MyServices;
