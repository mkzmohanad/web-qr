import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


// eslint-disable-next-line react/prop-types
function Card({img , name , role , cardWidth , facebook , linkedIn , transition}) {
    return  <div className={`bg-aboutColor xl:w-${cardWidth} w-full px-12 py-20 rounded-2xl text-white flex flex-col items-center justify-center gap-6`}  data-aos={transition}>
        <img className="rounded-full w-48 h-48" src={`src/assets/${img}`} alt=""/>
        <h1 className="text-3xl font-bold capitalize text-center">{name}</h1>
        <h3 className="text-2xl font-semibold italic capitalize">{role}</h3>
        <div className="flex gap-4 text-3xl ">
            <a href={facebook} target="_blank">

                <FaSquareFacebook className="cursor-pointer"/>
            </a>
            <a href={linkedIn} target="_blank">
                <FaLinkedin className="cursor-pointer"/>
            </a>
        </div>
    </div>
}
export default Card;