import Card from 'react-bootstrap/Card';
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

function about() {
  return (
    <>
    <section id="about" className="about">
      <div className="container">
        <div className="row gy-4">
          <div className="product">
            <div className="section-title">
            <h2><strong>About Us</strong></h2>
          </div>
          </div>
          <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <h3>Shree Harikrishna Aluminium </h3>
            <img src="assets/img/1.jpg" className="img-fluid rounded-4 mb-4 imgg" alt="" />
            <p>Shree Harikrishna Aluminium, established in 2008, is a trusted name in premium aluminium section work. With a strong reputation for quality craftsmanship and customer satisfaction, we specialize in the fabrication and installation of powder-coated aluminium doors, windows, and kitchen cabinets. Our products are designed to combine durability, modern aesthetics, and low maintenance, making them ideal for both residential and commercial spaces. The powder-coated finish ensures long-lasting protection against corrosion, fading, and wear. At Shree Harikrishna Aluminium, we take pride in delivering faithful service and reliable solutions tailored to your needs.</p>
          </div>
          <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="250">
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
                We have done Many project in kutch or also in Out of kutch like Ahemdabad, Vadodara, Jamnagar And rajkot Also...
              </p>
              <ul>
                <li><i className="bi bi-check-circle-fill" style={{ color: '#0000FF' }}></i> <span>A trusted name in Market For premium aluminium section work.</span></li>
                <li><i className="bi bi-check-circle-fill" style={{ color: '#0000FF' }}></i> <span>Many Projects Completed</span></li>
              </ul>
              <p>
                Known for our excellent service and skilled workmanship, our team is dedicated, experienced, and customer-friendly. We handle all types of aluminium work with precision and care, delivering results that meet the highest standards. Our brand is widely recognized in the market for its reliability, durability, and elegant designs. At Shree Harikrishna Aluminium, we turn your vision into lasting, functional beauty with trust and quality you can count on.
              </p>
              <div className="position-relative mt-4">
                <img src="assets/img/2.jpg" className="img-fluid rounded-4" alt="" />
              </div>
            </div>
          </div>
        </div>
</div>
</section>
<div className='container'>
<section>
  <div className='section-title'>
  <h2>Why Choose US?</h2></div>
  <div className='row'>
          <div className='col-md-6 col-lg-4 '>
 <Card style={{ width: '25rem', height: "15rem" }}>
      <Card.Body>
       <FiUsers style={{ width: '25rem', height: "5rem" ,color: "#483d8b"}} /><br></br>
        <Card.Title><br></br>Customer satisfaction</Card.Title>
        <Card.Text>
         Our customer-first approach <br></br>ensures that we meet and exceed 
         expectations with every product we deliver.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='col-md-6 col-lg-4'>
    <Card style={{ width: '25rem', height: "15rem", }}>
      <Card.Body>
        <FaRegClock style={{ width: '25rem', height: "5rem" ,color: "#483d8b"}} />
        <Card.Title><br></br>20+ Year Experience</Card.Title>
        <Card.Text> 
         We Use Only Garanted Products.we've perfected our manufacturing techniques and product designs.
        </Card.Text>
     
      </Card.Body>
    </Card>
    </div>
    
    <div className='col-md-6 col-lg-4'>
    <Card style={{ width: '25rem', height: "15rem" }}>
      <Card.Body>
         <FaRegThumbsUp style={{ width: '25rem', height: "5rem",color: "#483d8b"}} />
        <Card.Title><br></br>Trusted Brand</Card.Title>
        <Card.Text>
        Shree Harikrishna Alluminium has beacome a Trusted Name in Gujarat.
        known for reliability and excellence in Alluminium products.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    </section>
    </div>
</>
  )
}

export default about
