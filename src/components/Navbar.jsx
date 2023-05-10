import logo1 from '../styles/images/logo1.png'
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
        <li><a href='/contact'>Contact</a></li>
        <li><a href='/'>About</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a  className="center" href='/' ><img src={logo1} alt='logo' width= '100' height='50'/></a>
  </div>
</div>
    )
};

export default Navbar;