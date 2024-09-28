import { RiDashboardLine } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiFillLock } from "react-icons/ai";
import { FiRefreshCw } from "react-icons/fi";
import { FiArrowDownCircle } from "react-icons/fi";
import { BsUpload } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";
function Navbar() {
  return (
    <div className="w-full h-full flex">
      <div className="w-[14%] flex justify-around items-center h-full px-2">
        <div>
          <RiDashboardLine className="h-[35px] p-1 w-full invert opacity-50" />
        </div>
        <div className="bg-white/40 rounded-full">
          <IoIosArrowBack className="h-[35px] p-1 w-full invert opacity-50" />
        </div>
        <div className="bg-white/40 rounded-full">
          <IoIosArrowForward className="h-[35px] p-1 w-full invert opacity-50" />
        </div>
      </div>

      <section className="w-2/3 flex items-center justify-between bg-black/35 my-[9px] rounded-full px-3 mx-2">
        <div className="text-white/50 font-semibold font-serif p-2">./</div>
        <section className="flex">
          <div>
            <AiFillLock className="h-[35px] p-2 w-full invert opacity-50" />
          </div>
          <div className="text-white/50 font-medium py-2">itzSouvik.com</div>
        </section>
        <div>
          <FiRefreshCw className="h-[35px] p-2 w-full invert opacity-50" />
        </div>
      </section>

      <div className="w-[18%] flex justify-around items-center h-full px-2">
        <div>
          <FiArrowDownCircle className="h-[35px] p-1 w-full invert opacity-50" />
        </div>
        <div>
          <BsUpload className="h-[35px] p-1 w-full invert opacity-50" />
        </div>
        <div>
          <AiOutlinePlus className="h-[35px] p-1 w-full invert opacity-50" />
        </div>
        <div>
          <FiCopy className="h-[35px] p-1 w-full invert opacity-50" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
