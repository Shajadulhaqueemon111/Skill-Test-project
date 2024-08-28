import "./Ratting.css"

const Rating = () => {
    return (
        <div className="mt-20">
            <div className="gap-10 flex justify-center ml-6 mx-auto">
                <img  className="w-6 h-6 hidden lg:hidden   bg-image-1" src="https://i.ibb.co/4NRGjGp/ornamen-3.png" alt="" />
              <div className=" ">
              <h1 className="text-2xl text-center font-bold">What do they<span className="text-[#CB8461]">  say?</span></h1>
              <p className="text-center">This is an honest review from members who have joined us</p>
              </div>

                <div>
                    <img className="bg-image-1  hidden lg:hidden" src="https://i.ibb.co/XSWRRZg/ornamen-4.png" alt="" />
                </div>
            </div>

            <div className="flex card-responsive bg-[#F8F8F8] justify-around mt-3">
                <div className="rating-card  hidden sm:block align-middle items-center">
                    <img className="ml-12" src="https://i.ibb.co/vzN2hS8/unsplash-p-Uhxo-Sap-PFA.png" alt="" />
                       <div className="flex ml-12 gap-2">
                       <img src="https://i.ibb.co/hYTHPPg/Star.png" alt="" />
                    <img src="https://i.ibb.co/hYTHPPg/Star.png" alt="" />
                    <img src="https://i.ibb.co/hYTHPPg/Star.png" alt="" />
                    <img src="https://i.ibb.co/hYTHPPg/Star.png" alt="" />
                       </div>
                 
                 <h1 className="ml-12">Jason Bay</h1>
                 <p>I am quite satisfied, because the skills I<br /> want or dream of can really be <br /> mastered</p>
                
                </div>
                   
                {/* Ratting-2 */}
               <div>
               <div className="rating-card bg-[#FFFFFF] align-middle items-center">
                    <img className="ml-12" src="https://i.ibb.co/vzN2hS8/unsplash-p-Uhxo-Sap-PFA.png" alt="" />
                       <div className="flex ml-12 gap-2">
                       <img src="https://i.ibb.co/hYTHPPg/Star.png" alt="" />
                    <img src="https://i.ibb.co/hYTHPPg/Star.png" alt="" />
                    <img src="https://i.ibb.co/hYTHPPg/Star.png" alt="" />
                    <img src="https://i.ibb.co/hYTHPPg/Star.png" alt="" />
                       </div>
                 
                 <h1 className="ml-12">Jason Bay</h1>
                 <p>I am quite satisfied, because the skills I<br /> want or dream of can really be <br /> mastered</p>
               
                
                </div>

                <div>
            <img src="https://i.ibb.co/Vw2fh3g/Rectangle-1457.png" alt="" />

            <div className="flex arrow-style">
                <img className="h-8 w-8" src="https://i.ibb.co/JFHgqVx/Group-48095457-1.png" alt="" />
                <img className="h-8 w-8" src="https://i.ibb.co/nRTpr1T/right.png" alt="" />
            </div>
            </div>
               </div>

                {/* Ratting-3 */}
                <div className="rating-card  hidden sm:block align-middle items-center">
                    <img className="ml-12" src="https://i.ibb.co/vzN2hS8/unsplash-p-Uhxo-Sap-PFA.png" alt="" />
                       <div className="flex ml-12 gap-2">
                       <img src="https://i.ibb.co/hYTHPPg/Star.png" alt="" />
                    <img src="https://i.ibb.co/hYTHPPg/Star.png" alt="" />
                    <img src="https://i.ibb.co/hYTHPPg/Star.png" alt="" />
                    <img src="https://i.ibb.co/hYTHPPg/Star.png" alt="" />
                       </div>
                 
                 <h1 className="ml-12">Jason Bay</h1>
                 <p>I am quite satisfied, because the skills I<br /> want or dream of can really be <br /> mastered</p>
                
                </div>
            </div>
           
        </div>
    );
};

export default Rating;