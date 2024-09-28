import { FiFilter } from "react-icons/fi";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Center1() {
  return (
    <div className="h-1/2 text-white">
      <section className="w-full flex h-full">
        <div className="w-1/4 px-4 p-1 h-full">
          <section className="p-4 bg-white/20 h-full rounded-[30px]">
            <div className="w-full flex justify-between items-center gap-1">
              <div className="text-lg font-semibold opacity-70">
                🔥New Trailer
              </div>
              <div className="flex gap-1 justify-between items-end">
                <div className="opacity-50 text-xs">Sort by</div>
                <div className="font-semibold opacity-70 text-sm">Today</div>
                <div className="p-1">
                  <FiFilter className="opacity-80" />
                </div>
              </div>
            </div>

            <div className="h-[90%] p-2 overflow-y-scroll scrollbar-hidden space-y-2">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden h-[43%]">
                <img
                  src="./movietrailer/1.jpg"
                  alt="The Last Kingdom: Seven Kings Must Die"
                  className="object-cover h-full w-full"
                />
                <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black to-transparent text-white w-full">
                  <div className="font-semibold text-sm">
                    The Last Kingdom: Seven Kings Must Die
                  </div>
                </div>
              </div>

              <div className="relative bg-gray-100 rounded-lg overflow-hidden h-[43%]">
                <img
                  src="./movietrailer/2.jpg"
                  alt="The Super Mario Bros. Movie"
                  className="object-cover h-full w-full"
                />
                <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black to-transparent text-white w-full">
                  <div className="font-semibold text-sm">
                    The Super Mario Bros. Movie
                  </div>
                </div>
              </div>
              <div className="relative bg-gray-100 rounded-lg overflow-hidden h-[40%]">
                <img
                  src="./movietrailer/3.jpg"
                  alt="Another Trailer"
                  className="object-cover h-full w-full"
                />
                <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black to-transparent text-white w-full">
                  <div className="font-semibold text-sm">Another Trailer</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="w-3/4 ">
          <section className="w-full h-full p-1.5">
            <div className="relative bg-gray-100 rounded-3xl overflow-hidden h-full">
              <img
                src="./movietrailer/4.jpg"
                alt="The Last Kingdom: Seven Kings Must Die"
                className="object-cover h-full w-full"
              />
              <div className="absolute top-4 left-5 p-2  text-white">
                <div className="font-semibold text-sm bg-black/50 p-2 rounded-full border border-white/50">
                  🔥New Trending
                </div>
              </div>
              <div className="absolute top-[38%] flex gap-3 left-[20%] p-2  text-white">
                <div className="font-semibold text-sm bg-black/50 p-2 rounded-full border border-white/30">
                  Animation
                </div>
                <div className="font-semibold text-sm bg-black/50 p-2 rounded-full border border-white/30">
                  Adventure
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black to-transparent text-white w-full flex flex-col gap-3">
                <section className="w-full h-full flex flex-col gap-2 p-2">
                  <div className="text-2xl font-semibold">
                    <p>Spider-Man:</p>
                    <p> Across the Spider-Verse</p>
                  </div>
                  <div className="text-sm opacity-50">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas voluptatem in iusto distinctio tempora tempore eaque
                      alias perspiciatis similique, dicta aspernatur, fugit
                      nostrum impedit ad illum. Exercitationem qui veniam
                      officiis!
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 w-[35%]  justify-between">
                      <div className="flex gap-2 justify-center items-center p-2 px-7 bg-white rounded-3xl text-black">
                        <div>
                          <AiFillPlayCircle />
                        </div>
                        <div>Watch</div>
                      </div>
                      <div className="flex gap-2 justify-center items-center p-2 border px-7 border-white/50 rounded-3xl">
                        <div>
                          <BsDownload />
                        </div>
                        <div>Download</div>
                      </div>
                      <div className="w-10 h-10 border border-white/50 rounded-full pl-3 text-lg">
                        ...
                      </div>
                    </div>
                    <div className="flex justify-center gap-5 items-center w-1/6">
                      <div className="bg-white/40 rounded-full">
                        <IoIosArrowBack className="h-[35px] p-1 w-full  opacity-50" />
                      </div>
                      <div className="bg-white/40 rounded-full">
                        <IoIosArrowForward className="h-[35px] p-1 w-full opacity-50" />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Center1;
