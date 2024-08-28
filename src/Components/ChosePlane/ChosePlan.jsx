
import './ChoosePlan.css'
import { CiCircleCheck } from "react-icons/ci";
const ChosePlan = () => {
    return (
        <div className="mt-32">
          <div className="text-center">
          <h1 className="font-bold text-2xl"><span className="text-[#CB8461]">Subscribe</span> with us now</h1> 
          <p className="text-[#808080]">by subscribing now you will be able to access the material easily <br /> and cheaply, so you will be very efficient and benefit</p>
          </div>

          {/* Plane Card */}

          <div className='mt-3 card-responsive flex justify-around'>
            <div className="plane-card">
                <h1><span className="text-xl font-bold">$50/</span>1month</h1>
                <p className="text-xl font-bold">Base</p>
                <p className="text-[#808080]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className='mt-6'>
                <div className='flex gap-2'>
                <CiCircleCheck className='mt-1'></CiCircleCheck>
                <p>Access all videos</p>
                </div>
                
                <div className='flex gap-2'>
                <CiCircleCheck className='mt-1'></CiCircleCheck>
                <p>Get Certificate</p>
                </div>
                <div className='flex gap-2'>
                <CiCircleCheck className='mt-1'></CiCircleCheck>
                <p>Chat support</p>
                </div>
                <div className='flex gap-2'>
                <CiCircleCheck className='mt-1'></CiCircleCheck>
                <p>Download material</p>
                </div>
                <div className='flex gap-2'>
                <CiCircleCheck className='mt-1'></CiCircleCheck>
                <p>Update Notification</p>
                </div>

                <button className='btn-style-4 bg-[#FDC2A5] mt-10'>Plane</button>
                </div>
            </div>

            {/* Second Plane */}

            <div className="plane-card-1 shadow-lg mt-3 ">
                <button className='btn-style-2 text-white bg-[#CB8461]'>MOST POPULAR</button>
                <h1 className='text-white'><span className="text-xl text-white font-bold">$100/</span >6month</h1>
                <p className="text-xl text-white font-bold">PRO</p>
                <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className='mt-6'>
                <div className='flex gap-2'>
                <CiCircleCheck className='mt-1 text-white'></CiCircleCheck>
                <p className='text-white'>Access all videos</p>
                </div>
                
                <div className='flex gap-2 '>
                <CiCircleCheck className='mt-1 text-white'></CiCircleCheck>
                <p className='text-white'>Get Certificate</p>
                </div>
                <div className='flex gap-2'>
                <CiCircleCheck className='mt-1 text-white'></CiCircleCheck>
                <p className='text-white'>Chat support</p>
                </div>
                <div className='flex gap-2'>
                <CiCircleCheck className='mt-1 text-white'></CiCircleCheck>
                <p className='text-white'>Download material</p>
                </div>
                <div className='flex gap-2'>
                <CiCircleCheck className='mt-1 text-white'></CiCircleCheck>
                <p className='text-white'>Update Notification</p>
                </div>

                <button className='btn-style-4 text-white bg-[#FDC2A5] mt-10'>Plane</button>
                </div>
            </div>

            {/* Third-Plane */}

            <div className="plane-card mt-3">
                <h1><span className="text-xl font-bold">$200/</span>12month</h1>
                <p className="text-xl font-bold">Enterprise</p>
                <p className="text-[#808080]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className='mt-6'>
                <div className='flex gap-2'>
                <CiCircleCheck className='mt-1'></CiCircleCheck>
                <p>Access all videos</p>
                </div>
                
                <div className='flex gap-2'>
                <CiCircleCheck className='mt-1'></CiCircleCheck>
                <p>Get Certificate</p>
                </div>
                <div className='flex gap-2'>
                <CiCircleCheck className='mt-1'></CiCircleCheck>
                <p>Chat support</p>
                </div>
                <div className='flex gap-2'>
                <CiCircleCheck className='mt-1'></CiCircleCheck>
                <p>Download material</p>
                </div>
                <div className='flex gap-2'>
                <CiCircleCheck className='mt-1'></CiCircleCheck>
                <p>Update Notification</p>
                </div>

                <button className='btn-style-4 bg-[#FDC2A5] mt-10'>Plane</button>
                </div>
            </div>
          </div>
        </div>
    );
};

export default ChosePlan;