import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebookF, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' bg-black text-white'>
            <footer className=" footer sm:footer-horizontal bg-base-200 text-base-content p-10  bg-black text-white">
  <aside>
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current">
    </svg>
    <h1 className='text-white text-xl -mt-14 mb-2 font-semibold'>CS — Ticket System</h1>
    <p className='-mt-2'>A ticket system is a software application <br/>
    designed to create, manage, and track tickets<br/>
     digital records that represent tasks, events,<br/>
    or customer requests. Each ticket contains <br/>
     important information such as the requester’s 
     <br/>details, issue or event description, priority, and status.
    </p>
  </aside>
  <nav>
    <h6 className="text-white text-xl">Company</h6>
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Our Mission</a>
    <a className="link link-hover">Contact saled</a>
  </nav>
  <nav>
    <h6 className="text-white text-xl">Services</h6>
    <a className="link link-hover">Products & Services</a>
    <a className="link link-hover">Customer Stories</a>
    <a className="link link-hover">Download Apps</a>
  </nav>
  <nav>
    <h6 className="text-white text-xl">Information</h6>
    <a className="link link-hover">Terms & Conditions</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Join Us</a>
  </nav>
  <nav>
    <h6 className=" text-white text-xl">Social Links</h6>
    <ul className="list-none p-0 m-0">
        <li className="flex items-center mb-4">
          <FaTwitter className="mr-3 text-white" />
          <span>@CS — Ticket System</span>
        </li>
        <li className="flex items-center mb-4">
          <FaLinkedin className="mr-3 text-white" />
          <span>@CS — Ticket System</span>
        </li>
        <li className="flex items-center mb-4">
          <FaFacebookF className="mr-3 text-white" />
          <span>@CS — Ticket System</span>
        </li>
        <li className="flex items-center">
          <FaEnvelope className="mr-3 text-white" />
          <span>support@cst.com</span>
        </li>
      </ul>
  </nav>
   </footer>
   <p className="border-t border-gray-700 mt-8 pt-4 pb-6 text-center text-sm text-white"> © {new Date().getFullYear()} CS &mdash;Ticket System. All right reserved.</p>
           
        </div>
    );
};

export default Footer;