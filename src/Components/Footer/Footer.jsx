
import './Footer.css'
const Footer = () => {
    return (
        <div className="bg-[#286054]">
           <div className="text-center ">
           <h1 className="text-2xl font-bold text-white">Subscribe to get notified about update</h1>
           <p className="text-white">Smart Jackpots that you may love this anytime & anywhere</p>
           </div>

           <div className="flex card-responsive  justify-around mt-3">
            <img className="footer-image" src="https://i.ibb.co/6Jr4h6D/Vector-15.png" alt="" />
           <div className="mt-2 flex card-responsive">
           <input className=" w-52 h-12" type="text" name="" id="" placeholder="Enter your email"/>
         <div>
         <button className="btn bg-[#CC8663]">Subscribe</button>
         </div>
           </div>

            <img className="footer-image" src="https://i.ibb.co/GJN091z/Group-162529.png" alt="" />
           </div>


           <div className="flex card-responsive justify-between p-4 mt-20">
            <h1 className="text-xl font-bold"> Skill<span className="text-[#CC8663]"> Shoot</span></h1>

            <div className="flex card-responsive gap-2 text-white">
                <a href="">Home</a>
                <a href="">Course</a>
                <a href="">Subscribe</a>
                <a href="">Aboute</a>
                <a href="">Technology</a>
            </div>
           </div>
        </div>
    );
};

export default Footer;