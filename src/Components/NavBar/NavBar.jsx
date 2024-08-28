
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

import { GoArrowUpRight } from "react-icons/go";
import  './Style.css'
import { useState } from "react";

const NavBar = () => {

    const [activeButton, setActiveButton] = useState('');

    // Function to handle button click
    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
    };
    return (
        <div className="bg-[#245D51] mb-20">
            <Navbar className="bg-[#245D51]" >
            <h1 className="text-xl font-bold">Skill <span className="text-[#CB8461]">Shoot</span></h1>
      <Navbar>
     
        
      </Navbar>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link className="text-white" as={Link} href="#">
        Course
        </Navbar.Link>
        <Navbar.Link className="text-white" href="#">Subscribe</Navbar.Link>
        <Navbar.Link className="text-white" href="#">About</Navbar.Link>
        <Navbar.Link className="text-white" href="#">Testimonial</Navbar.Link>
        <Navbar.Link href="#">
        <button
          className={`text-white btn-size-1 ${activeButton === 'login' ? 'bg-[#CB8461] text-white' : ' '}`}
          onClick={() => handleButtonClick('login')}
        >
          Login
        </button>
      </Navbar.Link>
      <Navbar.Link href="#">
        <button
          className={`text-white btn-size-1 ${activeButton === 'register' ? 'bg-[#CB8461] ' : ''}`}
          onClick={() => handleButtonClick('register')}
        >
          Register
        </button>
      </Navbar.Link>
      </Navbar.Collapse>
      
     
      
    </Navbar> 

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
        {/* <div className="flex">
        <img className="w-8 h-8 ml-2 absolute" src="https://i.ibb.co/yFVTnPk/Group-25-1.png" alt="" />
        <div className='card-style-1 relative'>
                               <div className="flex">
                        <img className='hidden sm:block'  src="https://i.ibb.co/PZtJf1k/unsplash-WNo-Ln-Jo7t-S8.png" alt="" />
                         <h1>How to build a team <br />Today at 12 PM</h1>
                         </div>
                         <button className="bg-[#FF4F8E] px-2 btn-style ml-10">Join Now</button>
                         </div>  
         <div>
         <img src="https://i.ibb.co/2MR4tpZ/pexels-max-fischer-5212317-removebg-preview-1-1.png"
          alt="" />
           
         </div>
         <div>
         <img className="mt-10" src="https://i.ibb.co/b78HhVK/ornamen-6.png" alt="" />
         <img className="w-8 h-8 mt-52 ml-2" src="https://i.ibb.co/CBGQJs0/ornamen-5.png" alt="" />
         </div>
        </div> */}
      </div>
    </div>
        </div>
    );
};

export default NavBar;