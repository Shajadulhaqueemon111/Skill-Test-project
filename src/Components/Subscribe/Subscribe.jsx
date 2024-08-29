
import './Style2.css'
const Subscribe = () => {

  const imageStyle={
    height: "400px",
    width:"289px"
    
  }
    return (
        <div className='w-3/4 mx-auto'>
        <div className=''>
        
        </div>
          <div className=" box-style mt-20  text-center justify-between  flex">
       
            <div>
            <img className='.circle-6' src="https://i.ibb.co/02BKRK7/Intersect.png" alt="" />
            </div>
          <div className="mt-32">
         
          <h1 className="font-bold text-2xl">Happy <span className="text-[#CB8461]">Chinese New Year</span>, 20%  <br />discount for you today</h1>
          <button className="bg-[#245D51] text-white btn">Suboscribe Course</button>
          </div>
          <div className='flex '>
          <div>
          <img className='w-8 hidden  sm:block  h-8' src="https://i.ibb.co/ZXVWVqv/Group-574.png" alt="" />
          <img className='w-8  h-8 mt-52' src="https://i.ibb.co/KmnYgPq/Group-577.png" alt="" />
          </div>
            <img  className='image  hidden sm:block md:block lg:block' style={imageStyle}  src="https://i.ibb.co/0ByB1Dw/pexels-katerina-holmes-5905497-removebg-preview-1.png" alt="" />
            <div >
            <img className='w-8 h-8 hidden  sm:block ' src="https://i.ibb.co/4g49f4R/ornamen-2.png" alt="" />
            <img className='mt-20 hidden  sm:block ' src="https://i.ibb.co/Kj1nqgZ/Group-576.png" alt="" />
           
           <div>
           <img className='ml-60 mt-52' src="https://i.ibb.co/SfHdm0k/Intersect-2.png" alt="" />
           </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Subscribe;