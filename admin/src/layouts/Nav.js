import React from "react";
import { Link } from "react-router-dom";
import { AdminName } from "../Api/Api";
function Nav(){
return(
    <nav className="border bg-white p-4 flex justify-between items-center">
        <Link to="/Admin/">
            <h3 className="" style={{fontSize: '24px', fontWeight: 'bold', color: '#ff0000'}}>Among Us Admin Panel</h3>
        </Link>
        <div className="flex items-center space-x-4">
            <div className="flex ">
                <p type="text" placeholder="Admin name" className="bg-white p-2 rounded" ><AdminName/></p>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-among-us-icon-download-in-svg-png-gif-file-formats--red-logo-gaming-game-space-pack-sports-games-icons-2669561.png" className="w-10 h-10 rounded" alt="" />
                <p className="bg-white p-2 rounded hover:cursor-pointer">
{/*                     <Link to="/Logout">
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </Link> */}
                </p>
            </div>
        </div>
    </nav>

);
}
export default Nav;