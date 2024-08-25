import Banner from "../Banner/Banner";
import Quality from "../Quality/Quality";
import Subscribe from "../Subscribe/Subscribe";
// import NavBar from "../NavBar/NavBar";

const Home = () => {
    return (
        <div>
          {/* <NavBar></NavBar> */}
          <Banner></Banner>
          <Subscribe></Subscribe>
          <Quality></Quality>
        </div>
    );
};

export default Home;