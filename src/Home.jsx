import About from "./components/entity/About";
import Associate from "./components/entity/Associate";
import Courses from "./components/entity/Courses";
import Expertise from "./components/entity/Expertise";
import Hero from "./components/entity/Hero";
import Join from "./components/entity/Join";
import Promo from "./components/entity/Promo";
import Review from "./components/entity/Review";
import Subscription from "./components/entity/Subscription";

const Home = () => {

    return (
        <div>
            <Hero></Hero>
            <Associate></Associate>
            <Promo></Promo>
            <Expertise></Expertise>
            <Courses></Courses>
            <About></About>
            <Join></Join>
            <Subscription></Subscription>
            <Review></Review>
        </div>
    );
};

export default Home;