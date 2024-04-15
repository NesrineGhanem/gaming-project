import {Link} from 'react-router-dom' ;
import './Header.css';
import logo from '../../assests/images/logo.png';
import Navitem,{NavitemDropDown} from '../../components/Navitem/Navitem';

const Header =()=>{
    return(
        
            <div className="navbar navbar-expand-lg navbar-dark bg-dark text-white cyborg-navbar ">
  <div className="container">
    <a className="navbar-brand" href="/">
      <img src={logo} alt="logo"/>
    </a>


    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse " id="mainmenu">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Navitem>
          
          <Link to="/" className="nav-link active" >Home</Link>
        </Navitem>

        <Navitem>
          <a className="nav-link" href="/#">Browse</a>
        </Navitem>

        <NavitemDropDown>
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Details
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </NavitemDropDown>

        <Navitem>
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Streams</a>
        </Navitem>

        <Navitem>
        
        <Link to="/Profile" className="nav-link" >Profile</Link>

        </Navitem>
        
      </ul>
     
    </div>
  </div>
</div>
        
    )
}

export default Header;