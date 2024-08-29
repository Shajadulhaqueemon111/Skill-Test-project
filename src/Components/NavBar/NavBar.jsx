



import { GoArrowUpRight } from "react-icons/go";
import  './Style.css'
import { useState } from "react";
// import { useState } from "react";

const NavBar = () => {

    const [activeButton, setActiveButton] = useState('');

    // Function to handle button click
    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
    };
    return (
        <div className="bg-[#245D51] mb-20">
     

     <nav className="bg-[#245D51] dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
    <h1 className="text-xl font-bold">Skill <span className="text-[#CB8461]">Sheet</span></h1>
    
    </a>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
   
        <div className="hidden sm:hidden lg:block">
        <button
            className={`text-white btn-size-1 ${activeButton === 'login' ? 'bg-[#CB8461]' : ''}`}
            onClick={() => handleButtonClick('login')}
          >
            Login
          </button>
        
        
          <button
            className={`text-white btn-size-1 ${activeButton === 'register' ? 'bg-[#CB8461]' : ''}`}
            onClick={() => handleButtonClick('register')}
          >
            Register
          </button>
        </div>
        
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
    </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white  ">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Course</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Subscribe</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Testimonial</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


           {/* <Navbar fluid rounded className="bg-[#245D51]">
      <h1 className="text-xl font-bold">
        Skill <span className="text-[#CB8461]">Shoot</span>
      </h1>
      <Navbar.Brand as={Link} to="/">
      
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link className="text-white" as={Link} to="/course">
          Course
        </Navbar.Link>
        <Navbar.Link className="text-white" as={Link} to="/subscribe">
          Subscribe
        </Navbar.Link>
        <Navbar.Link className="text-white" as={Link} to="/about">
          About
        </Navbar.Link>
        <Navbar.Link className="text-white" as={Link} to="/testimonial">
          Testimonial
        </Navbar.Link>
        <Navbar.Link href="#">
          <button
            className={`text-white btn-size-1 ${activeButton === 'login' ? 'bg-[#CB8461]' : ''}`}
            onClick={() => handleButtonClick('login')}
          >
            Login
          </button>
        </Navbar.Link>
        <Navbar.Link href="#">
          <button
            className={`text-white btn-size-1 ${activeButton === 'register' ? 'bg-[#CB8461]' : ''}`}
            onClick={() => handleButtonClick('register')}
          >
            Register
          </button>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar> */}

    <div className="mt-20 card-responsive flex justify-around">
      <div className="flex">
      <div>
      <img className="w-8 h-8 ml-2 hidden lg:hidden sm:block" src="https://i.ibb.co/yFVTnPk/Group-25-1.png" alt="" />
      <img className="w-8 h-8 mt-52 ml-2 hidden lg:hidden sm:block" src="https://i.ibb.co/CBGQJs0/ornamen-5.png" alt="" />
      </div>
      <div>
      <h1 className="text-4xl font-bold text-white">There is always <img className="image-1" src="https://i.ibb.co/9NhT8qr/Vector-1-2.png" alt="" /> <br /> something new for <br /> us to learn</h1>
      <p className="text-[#FFFFFF]">we have created more than 100+ materials on various <br /> things that will help your career, with mentors who are <br /> experienced in their fields.</p>

      <div className="flex mt-3 gap-2">
        <button className="btn bg-[#CB8461] ml-2 ">Start Journey<GoArrowUpRight></GoArrowUpRight></button>
        <img className="w-8 h-8 mt-2" src="https://i.ibb.co/FD2Lygp/bxl-instagram-alt-1-1.png" alt="" />
        <img className="w-8 h-8 mt-2"  src="https://i.ibb.co/xSvBgP8/bxl-twitter-1-1.png" alt="" />
        <img  className="w-8 h-8 mt-2" src="https://i.ibb.co/c89fMGj/bxl-discord-alt-1.png" alt="" />
        <img className="mt-10 hidden lg:hidden sm:block" src="https://i.ibb.co/b78HhVK/ornamen-6.png" alt="" />
      </div>
      </div>
      </div>

      <div className="flex lg:block sm:hidden   mt-32">
      <div className='flex  '> 
         <div>
         <img className='icon hidden sm:block w-8 h-8'  src="https://i.ibb.co/9qvGN0j/Group-25.png" alt="" />

            </div>
            <div className='bg-image'>
                <img  className="image-6 hidden sm:block ml-6 absolute " src="https://i.ibb.co/SfJngvk/pexels-max-fischer-5212321-removebg-preview-1-1.png" alt="" />    
                <div className='hidden sm:block card-style-1 relative'>
                               <div className="flex">
                        <img className='hidden sm:block w-8 h-8'  src="https://i.ibb.co/PZtJf1k/unsplash-WNo-Ln-Jo7t-S8.png" alt="" />
                         <h1>How to build a team <br />Today at 12 PM</h1>
                         </div>
                         <button className="bg-[#FF4F8E] px-2 btn-style ml-10">Join Now</button>
                         </div>       
                
                </div> 
                <div>
                   
                    <img className='mt-10 hidden sm:block icon w-8 h-8' src="https://i.ibb.co/XDcDj2W/Group-15.png" alt="" />
                    <img  className='icon hidden sm:block mt-52 w-8 h-8' src="https://i.ibb.co/Yd0MxW8/Group-24.png" alt="" />
                </div>

         </div>
       
      </div>
    </div>
        </div>
    );
};

export default NavBar;