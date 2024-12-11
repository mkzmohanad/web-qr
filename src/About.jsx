import NextPage from "./NextPage";
import { GoGoal } from "react-icons/go";
import { FaTasks } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function About() {

    useEffect(() => {
        AOS.init({
          duration: 700,
        });
      }, []);

    return <div className="h-full px-2 sm:p-10 flex xl:flex-row gap-16 justify-between flex-wrap mt-96 md:m-32 lg:mt-10" >

        <div className="bg-aboutColor w-full xl:w-[46%] sm:h-[400px] p-5 rounded-xl text-white" data-aos="fade-right" data-aos-easing="ease-in-sine">
            <h1 className="text-5xl font-semibold py-5 flex items-center gap-3">Vision <FaEye /> </h1>
            <p className="text-xl italic tracking-wide">To create a world where language is no longer a barrier to education, empowering Arabic-speaking learners to access and excel in global academic resources with ease and clarity.</p>
        </div>

        <div className="bg-aboutColor w-full xl:w-[46%] sm:h-[400px] p-5 rounded-xl text-white" data-aos="fade-left" data-aos-easing="ease-in-sine">
            <h1 className="text-5xl font-semibold py-5 flex items-center gap-3">Mission <FaTasks /> </h1>
            <p className="text-xl italic tracking-wide">Our mission is to harness advanced AI technologies to provide high-quality, accessible, and engaging educational content in Arabic. Through real-time video translation, dubbing, and summarization, we aim to enhance the learning experience, bridge linguistic gaps, and support students and educators in achieving their educational goals.</p>
        </div>

        <div className="bg-aboutColor w-full h-fit p-5 rounded-xl text-white mb-10" data-aos="zoom-in-down">
            <h1 className="text-5xl font-semibold py-5 flex items-center gap-3">Goal <GoGoal /> </h1>
            <p className="text-xl italic tracking-wide">ArabTutor AI bridges the educational gap for Arabic speakers by automating the translation and dubbing of educational videos. Using AI technologies like machine learning and natural language processing, it improves translation speed and accuracy, making quality education accessible to millions.</p>
        </div>

        <div className="flex justify-center w-full">
            {<NextPage title = "our team" />}
        </div>
    </div>
}
export default About;