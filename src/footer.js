import React from 'react'

function footer() {
  return (
    <div>
      <footer id="footer" className="footer dark-background">

<div className='container'>
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 footer-about">
          <a href="/home" className="logo d-flex align-items-center">
            <span className=" sitename">Shree Harikrishna Alluminium</span>
          </a>
          <div className="footer-contact pt-3">
            <p>Near Laxmi Marble, Bhuj-mirjapar Highway</p>
            <p>Bhuj-Kutch</p>
            <p className="mt-3"><strong>Phone:</strong> <span>+91 9016769763</span></p>
            <p><strong>Email:</strong> <span>harikrishna@gmail.com</span></p>
          </div>
          <div className="social-links d-flex mt-4">
            <a href=""><i className="bi bi-twitter-x"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="bi bi-chevron-right"></i> <a href="/home">Home</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="/about">About us</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="/services">Services</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><i className="bi bi-chevron-right"></i> <a href="/openable">openable Window</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="/Slider">Slider Window</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="/door">Door's</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="/kitchen">Kitchen Cabinet</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="/office">Office partition</a></li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-12 footer-newsletter">
          <h4>Our </h4>
          <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
          <form action="forms/newsletter.php" method="post" className="php-email-form">
            <div className="newsletter-form">
                <input type="email" name="email" /><input type="submit" value="Subscribe" />
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your subscription request has been sent. Thank you!</div>
         
        </div>
</form>
      </div>
    </div>

    <div className="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong className="px-1 sitename">Shree Harikrishna Alluminium</strong> <span>All Rights Reserved</span></p>
 
 
      </div>
  
</div>
  </footer>
  
    </div>
    
  )
}

export default footer;


