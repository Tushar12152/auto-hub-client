import { Link } from "react-router-dom";
import Responsive from "./../Container/Responsive";
const Footer = () => {
  return (
    <div>
      <Responsive>
        <footer className="footer p-10 bg-neutral text-neutral-content">
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/login'>Login</Link>
            <Link to='/sellCar'>sell</Link>
           
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </Responsive>
    </div>
  );
};

export default Footer;
