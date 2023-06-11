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
        <div className={`${toggle=== true ? 'bg-black text-white':'bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900-500'}`} >
            <HomeBanner></HomeBanner>

            <HomeClassSection></HomeClassSection>


            <HomeInstructorsSection></HomeInstructorsSection>

            <HomeExtraSection></HomeExtraSection>
        </div>
    );
};

export default Home;

// 