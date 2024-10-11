import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Create from "./Create";

function App() {
  const {search,pathname}=useLocation();
  // console.log(search,pathname);
  return (
    <>
    <div className="h-screen w-screen">

      {(pathname != '/' || search.length > 0) && (
        <Link to="/" className="text-xl text-orange-300 mb-3 px-4 py-3 my-3 border-2 border-cyan-300 rounded-lg absolute left-[15%] top-[1%]">Home</Link>
      )}
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/details/:id" element={ <Details/> }/>
        <Route path="/Create" element={ <Create/> }/>
      </Routes>
    </div>
    </>
  );
}

export default App;
