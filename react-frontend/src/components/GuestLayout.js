import {Outlet} from "react-router-dom";

export default function GuestLayout(){
    return(
        <div>
            For the guest
            <Outlet/>
        </div>
    )
}