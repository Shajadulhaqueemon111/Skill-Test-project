
import './qualityy.css'
const Quality = () => {
    return (
        <div className=" mt-56 card-1 flex justify-around ml-4">
           <div>
            <h1 className=" font-medium text-2xl">Why do we <span className="text-[#CB8461]">exist?</span></h1>
            <p>Because we know that many people or companies <br /> have the same problem when it comes to how <br /> difficult it is to improve their skills</p>

            <div className="flex">
                <img className='w-12 h-12 mt-6 ' src="https://i.ibb.co/chL39Kb/unsplash-d1-UPki-Fd04-A.png" alt="" />
                <div  className="mt-6  ml-2">
                    <h1 className="text-xl font-bold">Jerony Pulquosta</h1>
                    <p>CEO Skill Shoot</p>
                </div>
               
            </div>
            <hr /> 

            <div className='flex gap-4 mt-4'>
                <div>
                    <h1 className='text-xl font-bold'>100+</h1>
                    <p className='text-[#808080]'>Updated Material</p>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>150+</h1>
                    <p className='text-[#808080]'>Member Join</p>
                </div>
            </div>
            </div> 

            <div className=' mt-4'>
               <div className='flex gap-4 card-1'>
               <div>
                    <img src="https://i.ibb.co/wWW8VRp/Group-542.png" alt="" />
                    <h1 className='text-xl font-bold'>Material Limitations</h1>
                    <p>Lorem Ipsum is simply dummy <br /> text of the printing and <br /> typesetting industry.</p>
                </div>
               <div>
                    <img src="https://i.ibb.co/0QF0vjN/Group-555.png" alt="" />
                    <h1 className='text-xl font-bold'>Unprofessional Mentor</h1>
                    <p>Lorem Ipsum is simply dummy <br /> text of the printing and <br /> typesetting industry.</p>
                </div>
               </div>
               <div className='flex card-1 gap-4 mt-4'>
               <div>
                    <img src="https://i.ibb.co/k89sd4G/Group-556.png" alt="" />
                    <h1 className='text-xl font-bold'>Material Limitations</h1>
                    <p>Lorem Ipsum is simply dummy <br /> text of the printing and <br /> typesetting industry.</p>
                </div>
               <div>
                    <img src="https://i.ibb.co/jTKQHFF/Group-554.png" alt="" />
                    <h1 className='text-xl font-bold'>Unprofessional Mentor</h1>
                    <p>Lorem Ipsum is simply dummy <br /> text of the printing and <br /> typesetting industry.</p>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Quality;