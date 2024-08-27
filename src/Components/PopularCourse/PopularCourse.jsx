import './styles.css'
const PopularCourse = () => {


  return (
    <div className="mt-32 bg-[#245D51]">
      <div >
        <div className="flex  justify-around">
          <img
            className="h-12 w-12 mt-6"
            src="https://i.ibb.co/svFmpkn/ornamen.png"
            alt="Ornament"
          />
          <div>
            <h1 className="text-xl font-bold text-center text-white">
              Popular courses of the week
            </h1>
            <p className="text-white text-center">
              List of the most popular lists that are often <br />
              studied by our members
            </p>
          </div>
          <img
            className="h-6 w-6"
            src="https://i.ibb.co/nr2tvQr/ornamen-1.png"
            alt="Ornament"
          />
        </div>
      </div>
       
      
      <div className="flex justify-around  card-style">
        <div>
       
        </div>
        {/* First Card */}

      <div className='card-style'>
        
        <div className="card bg-base-100 w-96 justify-center align-middle shadow-xl">
       
          <figure>
        
            <img className="relative" src="https://i.ibb.co/pKZGXjq/unsplash-m2-TU2gfq-Se-E.png" alt="" />
            
          </figure>
          <div className="card-body">
          <img className="image-style absolute"  src="https://i.ibb.co/M1CJCbL/bi-play-circle-fill.png" alt="" />
          <img  className='absolute arrow-image-2' src="https://i.ibb.co/JFHgqVx/Group-48095457-1.png" alt="" />
            <h2 className="card-title">Basics of learning team management</h2>
            <img src="https://i.ibb.co/yP2xRzv/Group-589.png" alt="Teacher" />
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
              <p className='justify-end ml-32 mt-4 font-bold'>$120/25</p>
            </div>
          </div>
        </div>
      </div>

      {/* Seconsd Card */}

      <div className='card-style'>
        
        <div className="card bg-base-100 w-96 justify-center align-middle shadow-xl">
       
          <figure>
        
            <img className="relative" src="https://i.ibb.co/X2jgMXx/unsplash-m2-TU2gfq-Se-E-2.png" alt="" />
            
          </figure>
          <div className="card-body">
          <img className="image-style absolute"  src="https://i.ibb.co/pKZGXjq/unsplash-m2-TU2gfq-Se-E.png" alt="" />
            <h2 className="card-title">Basics of learning team management</h2>
            <img src="https://i.ibb.co/vBTTqVT/Group-589-3.png" alt="Teacher" />
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
              <p className='justify-end ml-32 mt-4 font-bold'>$120/25</p>
            </div>
          </div>
        </div>
      </div>


{/*  Third Card */}
      <div className='card-style'>
        
        <div className="card bg-base-100 w-96 justify-center align-middle shadow-xl">
       
          <figure>
        
            <img className="relative" src="https://i.ibb.co/QPtPVk0/unsplash-m2-TU2gfq-Se-E-1.png" alt="" />
            
          </figure>
          <div className="card-body">
          <img className="image-style absolute"  src="https://i.ibb.co/M1CJCbL/bi-play-circle-fill.png" alt="" />
          <img className='absolute arrow-image ' src="https://i.ibb.co/hRGLVXd/Group-48095453.png" alt="" />
            <h2 className="card-title">Create dynamic website with basic php</h2>
            <img src="https://i.ibb.co/QK0c0m0/Group-589-1.png" alt="Teacher" />
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
              <p className='justify-end ml-32 mt-4 font-bold'>$120/25</p>
            </div>
          </div>
        
        </div>
       
      </div>
      
      </div>
      
    </div>
  );
};

export default PopularCourse;
