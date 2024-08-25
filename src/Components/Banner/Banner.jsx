

const Banner = () => {

    const imageStyle={
       
        width:"80px"
    }
    return (
        <div className="mt-30">
            <img src="" alt="" />
           <h1 className="text-center text-2xl font-bold">Trusted more than <span className="text-[#CB8461]">100+</span> in the world</h1> 
           <p className="text-center items-center">they have asked us more than 3 times to teach their employees <br /> about various things. to improve their skills</p>

           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 text-center justify-center items-center gap-2 ml-32 mt-6">
            <img style={imageStyle}  src=" https://i.ibb.co/mv7FchJ/image-11.png" alt="" />
            <img style={imageStyle} src="https://i.ibb.co/4138QzY/image-12.png" alt="" />
            <img style={imageStyle} src="https://i.ibb.co/f01sXZp/image-13.png" alt="" />
            <img style={imageStyle} src="https://i.ibb.co/k3Ggd1M/image-14.png" alt="" />
            <img style={imageStyle} src="https://i.ibb.co/Y31nP0P/image-15.png" alt="" />
           </div>
        </div>
    );
};

export default Banner;