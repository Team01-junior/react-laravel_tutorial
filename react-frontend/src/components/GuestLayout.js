import {Outlet} from "react-router-dom";

export default function Guestlayout(){
    return (
        <div>
            <div>
                <Outlet />
            </div>

        </div>
    )
}