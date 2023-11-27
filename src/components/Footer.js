import React from 'react'
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
             Get The Right Care <br/>
             At the Right Time!
          </p>
          <p className='footer-subscription-text'>
        
          </p>
          <div className='input-areas'>

          </div>
        </section>
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
               <h2> About Us </h2> 
               
            <h3>contactus@Survivalkit.com</h3>
            <br/>
            <h4>
              <a href='https://www.who.int/about/policies/publishing/data-policy/terms-and-conditions#:~:text=Subject%20to%20these%20Terms%20and%20Conditions%2C%20WHO%20grants%20to%20you,products%20for%20public%20health%20purposes.'>Terms and conditions</a></h4>
            </div>
           
          </div>
        
        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' className='social-logo'>
              </Link>
            </div>
           
            <div class='social-icons'>
              <Link
                class='social-icon-link facebook'
                to='https://www.facebook.com/'
                target='_blank'
                aria-label='Facebook'
              >
                <i class='fab fa-facebook-f' />
              </Link>
              <Link
                class='social-icon-link instagram'
                to='https://www.instagram.com/'
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
              <Link
                class='social-icon-link youtube'
                to='https://youtube.com/'
                target='_blank'
                aria-label='Youtube'
              >
                <i class='fab fa-youtube' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='https://twitter.com/'
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='https://in.linkedin.com/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i class='fab fa-linkedin' />
              </Link> 
              

            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Footer;