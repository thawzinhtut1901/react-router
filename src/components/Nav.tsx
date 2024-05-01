import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <div className="grid grid-cols-3 bg-black w-screen h-full p-4 text-white">
        <div className="col-span-1 flex items-center">Logo</div>

        <div className="col-span-1 flex items-center gap-9">
            <NavLink className={({isActive}) => 
                    isActive ? "bg-slate-300 p-2 rounded-md text-black" 
                : ""} to={"home"}>Home</NavLink>
            <NavLink className={({isActive}) => 
                    isActive ? "bg-slate-300 p-2 rounded-md text-black" 
                : ""} to={"all-books"}>All Books</NavLink>
            <NavLink className={({isActive}) => 
                    isActive ? "bg-slate-300 p-2 rounded-md text-black" 
                : ""} to={"authors"}>Authors</NavLink>
            <NavLink className={({isActive}) => 
                    isActive ? "bg-slate-300 p-2 rounded-md text-black" 
                : ""} to={"my-books"}>My Book</NavLink>
            <NavLink className={({isActive}) => 
                    isActive ? "bg-slate-300 p-2 rounded-md text-black" 
                : ""} to={"Reviews"}>Review</NavLink>
        </div>

        <div className="col-span-1 flex items-center justify-end ">
          
            <button className="pr-4">Login</button>
        </div>
    </div>
  )
}

export default Nav;