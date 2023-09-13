import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

let Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  return (
    <div className="nav-Bar">
      <div className="logo-img">
        <img src={LOGO_URL} />
      </div>
      <ul className="info">
        <li>Search</li>
        <li>Home</li>
        <li>About</li>
        <li>contact us</li>
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
