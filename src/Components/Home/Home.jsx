
import Banner from "../Banner/Banner";
import ChosePlan from "../ChosePlane/ChosePlan";
import Footer from "../Footer/Footer";
import ImproveSkill from "../Improve/ImproveSkill";
import PopularCourse from "../PopularCourse/PopularCourse";
import Quality from "../Quality/Quality";
import Rating from "../Rating/Rating";
import SkillShoot from "../SkillShoot/SkillShoot";
import Subscribe from "../Subscribe/Subscribe";
// import NavBar from "../NavBar/NavBar";

const Home = () => {
    return (
        <div>
          {/* <NavBar></NavBar> */}
          <Banner></Banner>
          <Subscribe></Subscribe>
          <Quality></Quality>
          <PopularCourse></PopularCourse>
          <SkillShoot></SkillShoot>
          <ImproveSkill></ImproveSkill>
          <ChosePlan></ChosePlan>
          <Rating></Rating>
          <Footer></Footer>
        </div>
    );
};

export default Home;