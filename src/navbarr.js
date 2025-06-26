import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

function navbarr() {
  return (
    
    <Navbar  id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
      <Container>
      <Link to="/" className="logo d-flex align-items-center me-auto">
          <img src="assets/img/new-logo.png" alt="Shree Harikrishna Alluminium" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <nav id="navmenu" className="navmenu">
                 <ul>
                   <li><Link to="/home">Home</Link></li>
                   <li><Link to="/about">About</Link></li>
                   <li><Link to="/services">Services</Link></li>
                   <li className="dropdown"><Link to="#"><span>Our products</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                     <ul>
       
                       <li className="dropdown"><Link to="#"><span>Windows</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                         <ul>
                           <li><Link to="/openable">Openable Window</Link></li>
                           <li><Link to="/slider">Slider Window</Link></li>
                           <li><Link to="/tilt">Tilt & Slide Windows.</Link></li>
                           <li><Link to="/staking"> Stacking Windows</Link></li>
       
                         </ul>
                       </li>
                       <li><Link to="/doors">Doors</Link></li>
                       <li><Link to="/kitchen">Kitchen Cabinet</Link></li>
                       <li><Link to="/office">Office Partition</Link></li>
                     </ul>
                   </li>
                   <li><Link to="/contact">Contact</Link></li>
                 </ul>
          </nav>
        </Navbar.Collapse>
      </Container>
      </div>
    </Navbar>
    
  );
}

export default navbarr;