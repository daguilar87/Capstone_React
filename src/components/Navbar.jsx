import Slide from 'react-reveal/Slide';

const Navbar = () => {
    return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href='/'>Homepage</a></li>
        <li><a href='/services'>Services</a></li>
        <li><a href='/contact'>Contact</a></li>
        <li><a href='/aboutus'>About</a></li>
      </ul>
    </div>
  </div>
  <Slide top>
  <div className="navbar-center" style={{ position: 'relative', left: '-90px' }}>
  <a href="/" className="btn btn-ghost normal-case text-xl">RGJ Solutions</a>
</div>
</Slide>
</div>
    )
};

export default Navbar;