import "./App.css";
import MainPart from "./components/MainPart";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute inset-0 bg-[url('/bg3.jpg')] bg-cover bg-center filter blur-md"></div>

      <div className="relative h-full w-full flex items-center  bg-black bg-opacity-30 flex-col ">
        <section className="h-1/6 w-2/3">
          <div className="h-1/3 bg-black/20  rounded-full mt-[8%]">
            <Navbar />
          </div>
        </section>
        <section className="flex w-full pt-6 h-[76%]">
          <section className="w-[13%] pl-[5%]">
            <Sidebar />
          </section>
          <section className="w-[87%] pr-[12%]">
            <MainPart />
          </section>
        </section>
      </div>
    </div>
  );
}

export default App;
