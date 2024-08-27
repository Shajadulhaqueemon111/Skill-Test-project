
import './SkillShoot.css'
const SkillShoot = () => {
    return (
        <div className='flex mt-52 justify-around card-responsive'>
         <div className='flex '> 
         <div>
            <img className='mt-10 hidden sm:block icon' src="https://i.ibb.co/XDcDj2W/Group-15.png" alt="" />
            <img  className='icon hidden sm:block mt-52' src="https://i.ibb.co/Yd0MxW8/Group-24.png" alt="" />
            </div>
            <div className='bg-image'>
                <img  className="image-6 hidden sm:block ml-6 absolute" src="https://i.ibb.co/SfJngvk/pexels-max-fischer-5212321-removebg-preview-1-1.png" alt="" />    
                <div className='hidden sm:block card-style-1 relative'>
                               <div className="flex">
                        <img className='hidden sm:block'  src="https://i.ibb.co/PZtJf1k/unsplash-WNo-Ln-Jo7t-S8.png" alt="" />
                         <h1>How to build a team <br />Today at 12 PM</h1>
                         </div>
                         <button className="bg-[#FF4F8E] px-2 btn-style ml-10">Join Now</button>
                         </div>       
                
                </div> 
                <div>
                    <img className='icon hidden sm:block'  src="https://i.ibb.co/9qvGN0j/Group-25.png" alt="" />
                </div>

         </div>
         
{/* Second part */}
         <div className='mt-10 ml-4'>
          <h1 className='font-bold text-2xl'>Let us Skill Shoot</h1>
           <img src="https://i.ibb.co/P9WfdFK/Vector-1-1.png " alt="" />
           <p className='text-[#808080] mt-4'>We are a company engaged in education with the aim of <br /> improving the skills of many people <br /> and so that younger people can reach the career paths they want.

           </p>

           <div className='flex mt-10 gap-4'>
            <div >
               <div className='flex'>
               <img src="https://i.ibb.co/FbHCq5L/Group-48095520.png" alt="" />
               <p className='font-bold mt-2 ml-2'>15K People Join</p>
               </div>
               <div className='flex mt-2'>
               <img src=" https://i.ibb.co/MkvHcq9/Group-48095524.png" alt="" />
               <p className='font-bold mt-2 ml-2'>30+ Free Videos</p>
               </div>
            </div>
            <div >
               <div className='flex'>
               <img src="https://i.ibb.co/ZxLBQ9m/Group-48095522.png" alt="" />
               <p className='font-bold mt-2 ml-2'>Trusted Mentor</p>
               </div>
               <div className='flex mt-2'>
               <img src="https://i.ibb.co/S7MQ945/Group-48095526.png" alt="" />
               <p className='font-bold mt-2 ml-2'>100+ Premium Videos</p>
               </div>
            </div>
           </div>
         </div>

        </div>
    );
};

export default SkillShoot;