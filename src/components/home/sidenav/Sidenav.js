import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">About Me</li>
        <li className="sidenavLi">Portfolio Page</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
       
        <li className="sidenavLi">E-commerce</li>
        <li className="sidenavLi">Calculator</li>
        <li className="sidenavLi">Portfolio Websites</li>
        <li className="sidenavLi">Responsive Web Pages</li>
        <li className="sidenavLi">Twitter Clone</li>
        <li className="sidenavLi">Web Development</li>
      </ul>
     
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">+91 7498977958</li>
        <li className="sidenavLi">kanak.thool@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav