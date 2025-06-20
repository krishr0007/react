import React from 'react'

function services() {
  return (
    <div>
      <section id="services" class="services section">

  
      <div class="container section-title aos-init aos-animate" data-aos="fade-up">
        <h2>Services</h2>
        <p>Our Daily services </p>
      </div>

      <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-5">

          <div class="col-xl-4 col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
            <div class="service-item">
              <div class="img">
                <img src="assets/img/services1.jpg" class="img-fluid" alt="" />
              </div>
              <div class="details position-relative">
                <div class="icon">
                  <i class="bi bi-activity"></i>
                </div>
                <a href="/openable" class="stretched-link">
                  <h3>Window </h3>
                </a>
                <p>We have all type of Window,like sliding windows, casement windows, tilt and turn windows, and fixed windows </p>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
            <div class="service-item">
              <div class="img">
                <img src="assets/img/services2.jpg" class="img-fluid" alt="" />
              </div>
              <div class="details position-relative">
                <div class="icon">
                  <i class="bi bi-broadcast"></i>
                </div>
                <a href="/doors" class="stretched-link">
                  <h3>Doors</h3>
                </a>
                <p>We have Diffrent types of Doors like:sliding doors, casement doors, folding (bi-fold) doors, and French doors</p>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="400">
            <div class="service-item">
              <div class="img">
                <img src="assets/img/services3.jpg" class="img-fluid" alt="" />
              </div>
              <div class="details position-relative">
                <div class="icon">
                  <i class="bi bi-easel"></i>
                </div>
                <a href="/kitchen" class="stretched-link">
                  <h3>Kitchen Cabinet</h3>
                </a>
                <p>we have three basic types of cabinetry: stock, semi-custom and custom cabinets.</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
    </div>
  )
}

export default services

