import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function FirstDiscussion() {
    useEffect(() => {
        AOS.init({
          duration: 2000, // Optional: Animation duration
        });
      }, []);

    return  <section className="h-fit ">
        <div className="flex flex-col items-center gap-12 mt-16  text-textColor text-center">
            <h1 className="text-2xl font-bold capitalize" data-aos="zoom-in">{`We are happily announcing that we have completed the first project graduation's discussion at: `} <span className=" line-through">2024-10-29</span> </h1>

            <h3 className="text-2xl italic font-semibold"data-aos="zoom-in">{`Presentation used in the first project graduation's discussion: `} <a className="underline" href="https://prezi.com/view/231g9OkkJSPMtIJ2pzXB/" target="_blank">Team Presentation</a></h3>

            <img className="w-full h-[1000px]" src="/src/assets/team.jpg" alt="" data-aos="fade-up"/>
        </div>
    </section>
}
export default FirstDiscussion;