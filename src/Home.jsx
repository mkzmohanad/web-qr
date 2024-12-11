import NextPage from "./NextPage";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {

    useEffect(() => {
        AOS.init({
          duration: 2000, // Optional: Animation duration
        });
      }, []);

    return <div className="flex flex-col items-center justify-center h-dvh">

        <img className="mt-72 sm:mt-0" src="./assets/graduation-logo-removebg-preview.png" alt="" width={450} height={250} data-aos="zoom-in"/>

        <h1 className="font-semibold text-center text-3xl text-textColor italic tracking-wide leading-10 w-full md:w-1/2" data-aos="fade-up">ArabTutor AI aims to enhance accessibility and inclusivity in education by providing educational resources in Arabic, while also optimizing time efficiency through its content summarization feature.</h1>

        {<NextPage title = "about us" />}
    </div>
}
export default Home;