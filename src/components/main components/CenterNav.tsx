import { FiSearch } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

function CenterNav() {
  return (
    <div className="h-[10%]">
      <section className="w-full flex h-full">
        <div className="w-1/4 px-5 h-full flex items-center">
          <section className="flex bg-black/20 border gap-1 border-white/40 justify-center items-center rounded-full w-full p-1 px-2">
            <div>
              <FiSearch className="h-[30px] p-1 w-full invert opacity-50" />
            </div>
            <div className="p-1 w-full invert opacity-80">Search movies</div>
          </section>
        </div>

        <div className="w-3/5">
          <section className="h-full text-white  w-full flex justify-around items-center">
            <div className=" opacity-80 bg-white/30 p-2 px-8 rounded-full">
              Movies
            </div>
            <div className=" opacity-80">TV Series</div>
            <div className=" opacity-80">Animations</div>
            <div className=" opacity-80">Mistery</div>
            <div className=" opacity-80">More</div>
            <div className="bg-white/20 p-2 rounded-full relative">
              <div className="h-[10px] w-[10px] bg-green-400 absolute rounded-full -top-0.5 left-8" />
              <FiBell className="h-[30px] p-1 w-full opacity-50" />
            </div>
          </section>
        </div>

        <div className="w-[15%] pr-4 h-full flex items-center">
          <section className="flex gap-2 bg-white/20 justify-center items-center rounded-full px-2 w-full">
            <div className="w-1/4">
              <img src="./avatar.jpeg" alt="avatar" className="rounded-full" />
            </div>
            <div className="w-[55%] ">
              <h1 className="text-white/70 font-semibold text-lg">Souvik</h1>
              <p className="text-white/50  text-md">Developer</p>
            </div>
            <div className="w-1/5">
              <IoIosArrowDown className="h-[30px] p-1 w-full invert opacity-50" />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default CenterNav;
