import { Outlet } from "react-router-dom";

export default function GuestLayout(){
    return(
        <div>
        <div>
            This is only for guest 
            <Outlet/>
        </div>
        </div>
    )
}