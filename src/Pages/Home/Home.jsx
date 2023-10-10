import { useContext } from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeClassSection from "../HomeClassSection/HomeClassSection";
import HomeExtraSection from "../HomeExtraSection/HomeExtraSection";
import HomeInstructorsSection from "../HomeInstructorsSection/HomeInstructorsSection";
import { AuthContext } from "../../Provider/AuthProvider";


const Home = () => {

    const {toggle}=useContext(AuthContext);

    console.log(toggle)
    return (
        <div className={`${toggle=== true ? 'bg-[#090909] text-white':'bg-white'} overflow-hidden`} >
            <HomeBanner></HomeBanner>

            <HomeClassSection></HomeClassSection>


            <HomeInstructorsSection></HomeInstructorsSection>

            <HomeExtraSection></HomeExtraSection>
        </div>
    );
};

export default Home;

// 