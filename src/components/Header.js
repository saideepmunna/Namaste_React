import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

let Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  const status = useOnlineStatus();
  return (
    <div className="nav-Bar">
      <Link to={"/"}><div className="logo-img">
        <img src={LOGO_URL} />
      </div></Link>
      <ul className="info">
        <li>Status: {status? "✅" : "🔴"}</li>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/contact"}>contact us</Link></li>
        <li>cart</li>
        <button className="loginBtn" onClick={()=>{
          btnNameReact==="login"? setBtnNameReact("logout") : setBtnNameReact("login");
        }}>
          {btnNameReact}
        </button>
      </ul>
    </div>
  );
};

export default Header;
