
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom"



const UserLayout = () => {
  return (
    <div>
        <Nav/>
        <Outlet/>
        
    </div>
  )
}

export default UserLayout