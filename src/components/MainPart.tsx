import Center1 from "./main components/Center1";
import Center2 from "./main components/Center2";
import CenterNav from "./main components/CenterNav";

function MainPart() {
  return (
    <div className="h-full">
      <section className="bg-black/30 p-5 h-full border border-white/50 rounded-[50px]">
        <div className=" h-full">
          <CenterNav />
          <Center1 />
          <Center2 />
        </div>
      </section>
    </div>
  );
}

export default MainPart;
