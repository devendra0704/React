import Random from "./Components/Random";
import Tag from "./Components/Tag";

function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative items-center overflow-x-hidden">
      <h1 className=" rounded-lg uppercase w-11/12 text-center mt-[40px] ml-[15px] py-2 px-10 text-4xl font-bold text-white bg-violet-600">RANDOM GIF</h1>
      <div  className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>

    </div>
  );
}

export default App;
