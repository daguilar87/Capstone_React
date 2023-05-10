import instagram from '../styles/images/instagram.png'
import '../styles/home.css'

const Footer = () => {
  
  return (
    <footer className="footer footer-center p-10 bg-accent text-base-content rounded relative bottom-0 flex-shrink-0">
      <div className="grid grid-flow-col gap-4">
        <a href="/" className="link link-hover">About</a> 
        <a href='/contact' className="link link-hover">Contact</a> 
      </div> 
      <div>
        <h1>Social Media</h1>
        <div className="text-center" style={{ paddingTop: '10px' }}>
          <a href='https://www.instagram.com/rgjsolutionsllc/?fbclid=IwAR3wsI1HllVjEthBW7gha7tKP6kDz_t7OqIanHdXmOVumZF_DB8ibZYL8ME'>
            <img src={instagram} alt='ig' width={20} />
          </a>
        </div>
      </div> 
      <div>
        <p className="mt-auto">Copyright © 2023 - All right reserved by RGJ Solutions LLC</p>
      </div>
    </footer>
  );
}

export default Footer;
