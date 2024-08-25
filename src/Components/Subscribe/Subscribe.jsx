
import './Style2.css'
const Subscribe = () => {

  const imageStyle={
    height: "400px",
    width:"289px"
    
  }
    return (
        <div className=''>
        <div className=''>
        
        </div>
          <div className=" box-style mt-20 text-center justify-around  flex">
            {/* <div>
            <img className='' src="https://i.ibb.co/02BKRK7/Intersect.png" alt="" />
            </div> */}
          <div className="mt-32">
         
          <h1 className="font-bold text-2xl">Happy <span className="text-[#CB8461]">Chinese New Year</span>, 20%  <br />discount for you today</h1>
          <button className="bg-[#245D51] text-white btn">Suboscribe Course</button>
          </div>
          <div>
            <img  className='image hidden sm:block md:block lg:block' style={imageStyle}  src="https://i.ibb.co/0ByB1Dw/pexels-katerina-holmes-5905497-removebg-preview-1.png" alt="" />
          </div>
        </div>
        </div>
    );
};

export default Subscribe;