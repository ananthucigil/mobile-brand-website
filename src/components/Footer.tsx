
import {Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
 



  return (
    <footer className="bg-gray-800 text-white py-8">
        <div className="mx-auto px-4">
          <div className="mx-12 flex justify-between">
            <div className="max-w-xs">
              <h4 className="text-2xl">Quasar Mobiles</h4>
              <p>Leading innovation in mobile technology since 2010. Connecting people through cutting-edge smartphones.</p>
            </div>
            
            <div className="footer-section">
              <h4 className="text-2xl text-center">Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#support">Support</a></li>
                <li><a href="#warranty">Warranty</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="text-2xl text-center mb-2">Follow Us</h4>
              <div className="flex justify-evenly space-x-4">
                <a href="#" aria-label="Facebook"><Facebook /></a>
                <a href="#" aria-label="Twitter"><Twitter /></a>
                <a href="#" aria-label="Instagram"><Instagram /></a>
                <a href="#" aria-label="YouTube"><Youtube /></a>
              </div>
            </div>
          </div>
          <hr className='w-11/12 mx-auto border-gray-900 mt-4'/>
          <div className="text-center mt-4">
            <p>&copy; 2024 Quasar Mobiles. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;