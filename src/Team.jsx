import Card from "./Card";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NextPage from "./NextPage";

function Team() {

    // useEffect(() => {
    //     AOS.init({
    //       duration: 3000, // Optional: Animation duration
    //     });
    //   }, []);

    return  <section className="h-fit px-2 mt-16 sm:px-10 flex items-center justify-center flex-col gap-16">
        <div className="xl:w-1/3 w-full flex justify-center">
            {<Card img = "doc.jpg" name="Dr.Mohammed Abd elFattah" role = "project supervisor" linkedIn = "" facebook = "" cardWidth = "full" transition="fade-up" />}
        </div>
        <div className="xl:w-1/3 w-full flex justify-center">
            {<Card img = "noura.jpg" name="Eng.Nowraa" role = "Teaching assistant" linkedIn = "" facebook = "" cardWidth = "full" transition="zoom-in-up"/>}
        </div>
        <div className="w-full flex flex-col xl:flex-row gap-7 xl:gap-5 items-center justify-between">

            {<Card img = "ahsraf.png" name="Mohamed Ashraf" role = "AI" linkedIn = "https://www.linkedin.com/in/mohamed-ashraf-a51002265/" facebook = "https://www.facebook.com/mohamedashraf.esmail" cardWidth = "[30%]" transition="flip-left"/>}

            {<Card img = "ezz.png" name="Ezz Eldin Elsharkawy" role = "AI + Team Leader" linkedIn = "https://www.linkedin.com/in/ezz-eldin-elsharkawy-69071723a/" facebook = "https://www.facebook.com/profile.php?id=100011293651331" cardWidth = "[30%]" transition="flip-up"/>}

            {<Card img = "mego.png" name="Mohamed Magdy" role = "AI" linkedIn = "https://www.linkedin.com/in/mmohamedmagdy/" facebook = "https://www.facebook.com/profile.php?id=100071144183755" cardWidth = "[30%]" transition="flip-right"/>}

        </div>
        <div className="w-full flex flex-col xl:flex-row gap-7 xl:gap-10 items-center justify-center">
            {<Card img = "omar.png" name="Omar Fathy" role = "Fluter" linkedIn = "https://www.linkedin.com/in/omar-fathy-3ab882253/" facebook = "https://www.facebook.com/profile.php?id=100071711035941" cardWidth = "[30%]" transition="zoom-out-right"/>}

            {<Card img = "mkz.png" name="Mohanad Shohdy" role = "Full Stack" linkedIn = "https://www.linkedin.com/in/mohanad-shohdy" facebook = "https://www.facebook.com/nody.sun.7" cardWidth = "[30%]" transition="zoom-out-left"/>}
        </div>

        <div className="flex justify-center w-full">
            {<NextPage title = "first discussion" />}
        </div>
    </section>
}
export default Team;