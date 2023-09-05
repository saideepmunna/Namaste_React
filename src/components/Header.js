import { LOGO_URL } from "../utils/constants";

let Header = () => {
    return (
      <div className="nav-Bar">
        <div className="logo-img">
          <img src= {LOGO_URL} />
        </div>
        <ul className="info">
          <li>Search</li>
          <li>Home</li>
          <li>About</li>
          <li>contact us</li>
          <li>cart</li>
        </ul>
      </div>
    );
  };

  export default Header;