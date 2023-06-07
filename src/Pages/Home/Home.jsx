import HomeBanner from "../HomeBanner/HomeBanner";
import HomeClassSection from "../HomeClassSection/HomeClassSection";
import HomeInstructorsSection from "../HomeInstructorsSection/HomeInstructorsSection";


const Home = () => {
    return (
        <div className=" bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900-500" >
            <HomeBanner></HomeBanner>

            <HomeClassSection></HomeClassSection>


            <HomeInstructorsSection></HomeInstructorsSection>
        </div>
    );
};

export default Home;