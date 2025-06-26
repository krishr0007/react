function services() {
  return (
    <div>
      <section id="services" className="services section">
        <div className="container section-title aos-init aos-animate" data-aos="fade-up">
          <h2 className='serviceses'>Services</h2>
          <p>Our Daily services </p>
        </div>

        <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

          <div className="row gy-5">

            <div className="col-xl-4 col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
              <div className="service-item">
                <div className="img">
                  <img src="assets/img/services1.jpg" className="img-fluid" alt="" />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-activity"></i>
                  </div>
                  <a href="/openable" className="stretched-link">
                    <h3>Window </h3>
                  </a>
                  <p>We have all type of Window,like sliding windows, casement windows, tilt and turn windows, and fixed windows </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
              <div className="service-item">
                <div className="img">
                  <img src="assets/img/door1.png" className="img-fluid" alt="" />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast"></i>
                  </div>
                  <a href="/doors" className="stretched-link">
                    <h3>Doors</h3>
                  </a>
                  <p>We have Diffrent types of Doors like:sliding doors, casement doors, folding (bi-fold) doors, and French doors</p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="400">
              <div className="service-item">
                <div className="img">
                  <img src="assets/img/services3.jpg" className="img-fluid" alt="" />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-easel"></i>
                  </div>
                  <a href="/kitchen" className="stretched-link">
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

