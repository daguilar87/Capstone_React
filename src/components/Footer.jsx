import instagram from '../styles/images/instagram.png'
import '../styles/home.css'

const Footer = () => {
  
  return (

    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
    <div className="items-center grid-flow-col">
      <p>Copyright © 2023 - All right reserved by RGJ Solutions LLC</p>
    </div> 
    <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end ">
          <a href='https://www.instagram.com/rgjsolutionsllc/?fbclid=IwAR3wsI1HllVjEthBW7gha7tKP6kDz_t7OqIanHdXmOVumZF_DB8ibZYL8ME'>
            <img src={instagram} alt='ig' width={20} className='ml-8' />
          </a>
    </div>
  </footer>
  );
}

export default Footer;
