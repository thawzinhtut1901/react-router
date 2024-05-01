import { Outlet } from "react-router"


const AuthLayout = () => {
  return (
    <div className=" flex items-center justify-center  bg-slate-500 h-screen">
        <Outlet/>
    </div>
  )
}

export default AuthLayout