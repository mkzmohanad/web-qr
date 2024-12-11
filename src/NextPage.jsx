import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import './index.css'

// eslint-disable-next-line react/prop-types
function NextPage({title}) {
    return  <div className="mt-10 nextPage">
        <div className="flex flex-col items-center justify-center text-3xl ">
            <h1>{title}</h1>
            <MdKeyboardDoubleArrowDown  />
        </div>
    </div>
}
export default NextPage;