// import { useState } from "react";
// import { CgMenuGridR } from "react-icons/cg";
// import { GoArrowUpRight } from "react-icons/go";
// import  './Style.css'
// const NavBar = () => {
//     const [activeButton, setActiveButton] = useState(null);

//     const handleButtonClick = (button) => {
//         setActiveButton(button);
//     };

//     const imageStyle={
//         height:"20px",
//         width:"20px"
//     }
//     const imageStyle2={
//         height:"10px",
        
//     }
//     const imageStyle3={
//          height:"30px",
//         width:"30px"
        
//     }
//     const imageStyle4={
//          height:"400px",
//         width:"300px"
        
//     }
//     const boxStyle4={
       
//         height: "500px",
        
        
        
//     }
//     return (
//         <div  className="bg-[#245D51]">
//             <div style={boxStyle4}>

//                 <nav  className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//                     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//                         <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">

//                             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Slill<span className="text-[#CB8461]">Shoot</span></span>
//                         </a>
//                         <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//                             <div className="hidden md:block gap-6 text-white ">
//                                 <a
//                                     className={`btn ${activeButton === 'login' ? 'bg-[#CB8461]' : ''}`}
//                                     onClick={() => handleButtonClick('login')}
//                                 >
//                                     Login
//                                 </a>
//                                 <a
//                                     className={`btn ${activeButton === 'register' ? 'bg-[#CB8461]' : ''}`}
//                                     onClick={() => handleButtonClick('register')}
//                                 >
//                                     Register
//                                 </a>
//                             </div>
//                             <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
//                                 <span className="sr-only">Open main menu</span>
//                                 <CgMenuGridR className="text-xl"></CgMenuGridR>
//                             </button>
//                         </div>
//                         {/* <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
//                             <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//                                 <li>
//                                     <a href="/" className="block py-2 px-3  bg-blue-700 rounded md:bg-transparent dark:hover:text-white md:p-0 " aria-current="page">Home</a>
//                                 </li>
//                                 <li>
//                                     <a href="/course" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Course</a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Subscribe</a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Testimonial</a>
//                                 </li>

//                             </ul>


//                         </div> */}
//                     </div>

       
//                     <div className="flex items-center  justify-around">
//                        <div className="">
//                       <img className="bg-[#F88C3D] card-style-5  hidden md:block sm:block lg:hidden" src="https://i.ibb.co/ZB3tZph/bxs-pencil-1.png" alt="" />
//                        <h1 className="text-3xl text-white">There is always <br /> <img className="" style={imageStyle2} src="https://i.ibb.co/Q8zZJ0F/Vector-1.png" alt="" /> something new for <br /> us to learn</h1>
                       
//                        <p>we have created more than 100+ materials on various <br /> things that will help your career, with mentors who are <br /> experienced in their fields.</p>


//                    {/* part -----3 */}

//                        <div className="flex  gap-2">
                      
//                        <img  style={imageStyle3} className="bg-[#23BDEE] card-style-5  hidden lg:hidden mr-3 mt-6" src="https://i.ibb.co/7j0nQPs/Vector-6.png" alt="" />
//                       <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
//                       <button className="btn  bg-[#CB8461]">Start Journey <GoArrowUpRight/></button>
//                       <div className="flex  gap-4 ml-2">
//                       <img className="mt-2" style={imageStyle} src="https://i.ibb.co/cFkghkR/Vector-2.png" alt="" />
//                        <img className="mt-2" style={imageStyle} src="https://i.ibb.co/BTr7z06/Vector-3.png" alt="" />
//                        <img className="mt-2" style={imageStyle} src="https://i.ibb.co/BTPbQn4/Vector-5.png" alt="" />
//                       </div>
//                       </div>
                      
//                        <img style={imageStyle3} className="bg-[#7252A4] card-style-5  hidden lg:hidden md:block mt-12 " src="https://i.ibb.co/xJfqg5f/bx-play-circle-1.png" alt="" />
//                        </div>
//                        </div>
                         

//        {/* part ----------4 */}


//                        <div className="flex  card-style-4">
//                         <img style={imageStyle3} className="bg-[#F88C3D] hidden  md:block mt-6" src="https://i.ibb.co/ZB3tZph/bxs-pencil-1.png" alt="" />

//                        <div  className="">
//                        <div>
//                        <img style={imageStyle4} className="hidden md:block " src="https://i.ibb.co/nR7P1Qk/pexels-max-fischer-5212317-removebg-preview-1.png" alt="" />
//                        </div>
//                         <div className="card-style">
//                           <div className="flex">
//                           <img  src="https://i.ibb.co/PZtJf1k/unsplash-WNo-Ln-Jo7t-S8.png" alt="" />
//                           <h1>Learn basic ui ux design <br />Today at 12 PM</h1>
//                           </div>
//                           <button className="bg-[#FF4F8E] px-2 btn-style ml-10">Join Now</button>
//                           </div>
                          
//                        </div>
//                        <div>
//             <img style={imageStyle3} className="bg-[#7252A4] hidden md:block mt-32 mr-20" src="https://i.ibb.co/xJfqg5f/bx-play-circle-1.png" alt="" />
//             <img  style={imageStyle3} className="bg-[#23BDEE] hidden md:block mt-40" src="https://i.ibb.co/7j0nQPs/Vector-6.png" alt="" />
//             </div>
//                        </div>
//                     </div>
//                 </nav>

//             </div>

//         </div>
//     );
// };

// export default NavBar;