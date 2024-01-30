import { Route, Link, Routes } from 'react-router-dom';
import style from './navbar.module.css';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

const Navbar = () => {
  return (
    <nav>
      <div className={style.navbar}>
        <div className={style.logo}>
          <img src="../../p" alt="Logo" />
        </div>
        <ul className={style.navList}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </nav>
  );
};

export default Navbar;
