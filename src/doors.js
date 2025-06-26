import Carousel from 'react-bootstrap/Carousel';

function doors() {
  return (
    <>
      <div className='crs'>
        <Carousel data-bs-theme="dark" slide={false}>
          <Carousel.Item>

            <img
              className="d-block w-100"
              src="assets/img/door2.png"
              alt="First slide"
            />
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/img/door2.png"
              alt="Second slide"
            />
            <Carousel.Caption>
           
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/img/door3.png"
              alt="Third slide"
            />
            <Carousel.Caption>
           
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
</div>
        <div className='dr'>
          <div className='section-title'>
          <h2><strong>A premium Door's By</strong></h2></div>
          <h3>Shree Harikrishna Alluminium</h3>
          <p>
            A wide range of aluminium doors is expertly crafted to suit both residential and commercial needs. The company offers various door styles including sliding doors, hinged doors,<br></br> bi-fold doors, and partition doors, all designed for durability, strength, and aesthetic appeal. Each door is engineered using high-grade aluminium combined with plywood panels,<br></br> offering a modern look with enhanced insulation, stability, and soundproofing. The combination of aluminium and plywood provides a perfect balance between lightweight structure <br></br>and robust performance, making these doors ideal for homes, offices, showrooms, and more.
          </p>
       
      <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="250">
        <div className="content ps-0 ps-lg-5">
          <p className="fst-italic">
            We have done Many project in kutch or also in Out of kutch like Ahemdabad, Vadodara, Jamnagar And rajkot Also...
          </p>
          <ul>
            <li><i className="bi bi-check-circle-fill"></i> <span>A trusted name in Market For premium aluminium section work.</span></li>
            <li><i className="bi bi-check-circle-fill"></i> <span>Many Projects Completed</span></li>
          </ul>
          <p>
            Known for our excellent service and skilled workmanship, our team is dedicated, experienced, and customer-friendly. We handle all types of aluminium work with precision and care, delivering results that meet the highest standards. Our brand is widely recognized in the market for its reliability, durability, and elegant designs. At Shree Harikrishna Aluminium, we turn your vision into lasting, functional beauty with trust and quality you can count on.
          </p>
      
        </div>
      </div>
 </div>
    </>
  );
}


export default doors;