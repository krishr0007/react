import React from 'react'

function footer() {
  return (
    <div>
      <footer id="footer" className="footer dark-background">

<div className=' foot container'>
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 footer-about">
          <a href="/home" className="logo d-flex align-items-center">
          <img src="assets/img/new-logo.png" alt="" />
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
            <li><i className="bi bi-chevron-right"></i> <a href="/term">Terms of service</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="/privacy">Privacy policy</a></li>
          </ul>
        </div>

        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><i className="bi bi-chevron-right"></i> <a href="/openable">openable Window</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="/Slider">Slider Window</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="/doors">Door's</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="/kitchen">Kitchen Cabinet</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="/office">Office partition</a></li>
          </ul>
        </div>
        
<section className="col-lg-4 col-md- ">
        <div className="container mx-auto px-2">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="h-[500px] w-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.335550857862!2d69.64047987591634!3d23.230873508521558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511f001ee84847%3A0xc8ce5191aea243ae!2sshree%20Harikrishna%20Alluminium!5e0!3m2!1sen!2sin!4v1750488245776!5m2!1sen!2sin" width="1300" height="250" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
       
             
              </div>
            </div>
      
        </div>
      </section>
      </div>
    </div>

    <div className="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong className="px-1 sitename">Shree Harikrishna Alluminium</strong> <span>All Rights Reserved</span></p>
 
 
      </div>
  

  </footer>
  
    </div>
    
  )
}

export default footer;


