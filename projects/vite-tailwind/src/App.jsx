import "./App.css";

function App() {
  return (
    // <div className="">
    //   <div className="p-4 border border-black rounded-md bg-yellow-300 text-red-700 text-center mt-2 grid grid-cols-1">
    //     1
    //   </div>
    //   <div className="p-4 border border-black rounded-md bg-red-700 text-yellow-300 text-center mt-2 grid grid-cols-1">
    //     2
    //   </div>
    // </div>
    <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-2">
      <div className="p-4 border border-black rounded-md bg-yellow-300 text-red-700 text-center mt-2">
        01
      </div>
      <div className="p-4 border border-black rounded-md bg-yellow-300 text-red-700 text-center mt-2">
        01
      </div>
      <div className="p-4 border border-black rounded-md bg-yellow-300 text-red-700 text-center mt-2">
        01
      </div>
      <div className="p-4 border border-black rounded-md bg-yellow-300 text-red-700 text-center mt-2">
        01
      </div>
      <div className="p-4 border border-black rounded-md bg-yellow-300 text-red-700 text-center mt-2 col-span-full md:col-span-1">
        01
      </div>
    </div>
  );
}

export default App;
