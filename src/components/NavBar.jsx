import { Link } from "react-router-dom";
import AXON from "../assets/images/logo/uplogo2.svg";
import { CgChart } from "react-icons/cg";
import { MdLocalPhone } from "react-icons/md";
import Hero from "./Hero";
import {
  HiOutlineCursorClick,
  HiFingerPrint,
  HiOutlineCubeTransparent,
} from "react-icons/hi";
import { GrPowerReset } from "react-icons/gr";



const NavBar = () => {
  const navlinks = [
    // { name: "Services",
    //   link : "/services" },

    {
      name: "Products & Solutions",
      link : "/products",
      status: true,
      lists: [
        {
          icon: <CgChart />,
          title: "TAX MANAGEMENT SOLUTIONS",
          sub: "GET A BETTER UNDERSTANDNG OF YOUR TRAFFIC",
        },

        {
          icon: <HiOutlineCursorClick />,
          title: "health pro",
          sub: "speak directly to your customers",
        },

        {
          icon: <HiFingerPrint />,
          title: "biometric voter management system",
          sub: "your customers' data will be safe and secure",
        },

        {
          icon: <HiOutlineCubeTransparent />,
          title: "axon cubes pos solution",
          sub: "connect with third-party tools",
        },

        {
          icon: <GrPowerReset />,
          title: "axon payroll",
          sub: "build strategic funnels that will convert",
        },
      ],
    },

    // { name: "Portfolio",
    // link : "/portfolio" },

    // {
    //   name: "Our Company",
    //   link : "/company",
    //   status: true,

    //   lists: [{ title: "AXON" }, { title: "CAREER" }],
    // },

    // {
    //   name: "About us",
    //   link : "/about-us",
    //   status: true,
    //   lists: [{ title: "WHO WE ARE " }, { title: "Our TEAM" }],
    // },
  ];

  
  return (
    <div className="">
      <div className="">
      <div className="hidden lg:flex justify-between py-2 lg:mx-[200px]">
<Link to={'/'}>
<img src={AXON} alt="" className="w-[100px] " />
</Link>

<div>
  <Link to={'/contact-us'} className="btn bg-white text-primary capitalize border-gray-600 shadow-lg hover:bg-primary hover:text-white">
    Contact us
  </Link>
</div>
      </div>
      <div className="navbar lg:bg-primary bg-base-100 md:bg-blue-50">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40 md:w-[300px] uppercase">
        

        {
          navlinks.map((navlink,index)=> (
            <li tabIndex={0}>
              <Link to={navlink.link}>{navlink.name}
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
              </Link>

              <ul>
                {navlink.lists.map((list,index) => (
                  <li key={index} className="bg-white text-[8px] ">
                    <Link to={'/'}>{list.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))
        }
        
        <li><Link to={'/services'}>Services</Link></li>
          

        <li><Link to={'/portfolio'}>Portfolio</Link></li>
       
          <li tabIndex={0}>
          <Link  className="justify-between">
            our company
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </Link>
          <ul className="p-2 bg-white">
            <li><Link to={'/company'}>At Axon</Link></li>
            <li><Link to={'/company'}>Careers</Link></li>
          </ul>
        </li>

        
          <li tabIndex={0}>
          <a className="justify-between">
            About US
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2 bg-white">
            <li><Link to={'/about-us'}>Who we are</Link></li>
            <li><Link>Our Team</Link></li>
          </ul>
        </li>
      </ul>
    </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

    <li tabIndex={0}>
        <Link className="text-white font-bold uppercase hover:text-secondary hover:bg-primary">
          Product & Solutions
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul className="p-2 bg-base-100 uppercase">
          <li><Link>TAX MANAGEMENT SOLUTIONS</Link></li>
          <li><Link>health pro</Link></li>
          <li><Link>biometric voter management system</Link></li>
          <li><Link>axon cubes pos solution</Link></li>
          <li><Link>axon payroll</Link></li>
         
        </ul>
      </li>
     
      <li className="text-white font-bold uppercase hover:text-secondary hover:bg-primary"><Link to={'/services'}>Services</Link></li>
      <li className="text-white font-bold uppercase hover:text-secondary hover:bg-primary"><Link to={'/portfolio'}>Portfolio</Link></li>
      <li tabIndex={0}>
        <Link  className="text-white font-bold uppercase hover:text-secondary hover:bg-primary">
          Our Company
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul className="p-2 bg-base-100 uppercase">
          <li><Link to={'/company'}>at axon</Link></li>
          <li><Link to={'/company'}>Careers</Link></li>
          
         
        </ul>
      </li>

      <li tabIndex={0}>
        <Link className="text-white font-bold uppercase hover:text-secondary hover:bg-primary">
         About us
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul className="p-2 bg-base-100 uppercase">
          <li><Link to={'/about-us'}>who we are</Link></li>
          <li><Link to={'/about-us'}>our team</Link></li>
          
         
        </ul>
      </li>
      
    </ul>
  </div>
  <div className="navbar-end">
    <div className="flex lg:hidden">
    <Link to={'/'} className="">
      <img src={AXON} alt="" className="sm:w-24 md:w-[180px]" />
    </Link>
    </div>

    
  </div>
</div>
    </div>
    </div>
  );
};

export default NavBar;
