import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
function Sidebar() {
  return (
    <div className=" h-full flex justify-center items-center">
      <section className="bg-black/20 p-2 border border-white/40 rounded-full flex flex-col gap-3">
        <div className="bg-white/40 p-1 rounded-full">
          <AiOutlineHome className="h-[35px] p-1 w-full invert opacity-50" />
        </div>
        <div>
          <AiOutlineHeart className="h-[35px] p-1 w-full invert opacity-50" />
        </div>
        <div>
          <BsDownload className="h-[35px] p-1 w-full invert opacity-50" />
        </div>
        <div>
          <FiUser className="h-[35px] p-1 w-full invert opacity-50" />
        </div>
        <div>
          <FiSettings className="h-[35px] p-1 w-full invert opacity-50" />
        </div>
      </section>
    </div>
  );
}

export default Sidebar;
