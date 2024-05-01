import { Outlet, useNavigate } from "react-router"


const MyBookPages = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-slate-500">
      <div className="bg-slate-300 p-4 w-full h-screen">
        <button onClick={() => navigate(-1)} className=" p-4 mb-2 bg-zinc-600 text-white rounded-md">back</button>

        <main className="p-4 bg-gray-600 rounded-md w-full mb-5 h-56">
            <Outlet/>
        </main>

        <div className=" w-full flex items-center gap-10">
            <article onClick={() => navigate("one")} className="h-56  w-full p-4 bg-gray-600 rounded-md">card one</article>
            <article onClick={() => navigate("two")} className="h-56  w-full p-4 bg-gray-600 rounded-md">card two</article>
            <article onClick={() => navigate("three")} className="h-56  w-full p-4 bg-gray-600 rounded-md">card three</article>
        </div>
        
        {/* <button onClick={() => navigate(0)} className=" p-4 mb-2 bg-zinc-600 text-white rounded-md">Reload</button> */}
    </div>
    </div>
  )
}

export default MyBookPages