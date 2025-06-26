import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

import CountUp from './components/CountUp'
import Button from 'react-bootstrap/Button';


function home() {
  return (
    <>
      <div className='hero'>
        <img src='assets/img/door2.png' alt='Shree Harikrishna Alluminium' />

     
          </div>
      

      <div className="container py-10 features">
        <ul className="nav nav-tabs row d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" role="tablist">
          <li className="nav-item col-3" role="presentation">
            <a className="nav-link show" data-bs-toggle="tab" data-bs-target="#features-tab-1" aria-selected="false" role="tab" tabindex="-1">
              <i className="bi bi-binoculars"></i>
              <h4 className="d-none d-lg-block">Window's</h4>
            </a>
          </li>
          <li className="nav-item col-3" role="presentation">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2" aria-selected="false" role="tab" tabindex="-1">
              <i className="bi bi-box-seam"></i>
              <h4 className="d-none d-lg-block">Door's</h4>
            </a>
          </li>
          <li className="nav-item col-3" role="presentation">
            <a className="nav-link active" data-bs-toggle="tab" data-bs-target="#features-tab-3" aria-selected="true" role="tab">
              <i className="bi bi-brightness-high"></i>
              <h4 className="d-none d-lg-block">kitchen Cabninet</h4>
            </a>
          </li>
          <li className="nav-item col-3" role="presentation">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-4" aria-selected="false" role="tab" tabindex="-1">
              <i className="bi bi-command"></i>
              <h4 className="d-none d-lg-block">Customber Care</h4>
            </a>
          </li>
        </ul>

        <div className="tab-content aos-init aos-animate success" data-aos="fade-up" data-aos-delay="200">
          <div className="tab-pane fade" id="features-tab-1" role="tabpanel">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>We use Garanted prodcuts</h3>
                <p >
                  Only genuine materials are used in manufacturing, ensuring that each window section is built to last and perform well under various environmental conditions.
                </p>
                <ul>
                  <li><i className="bi bi-check2-all"></i>
                    <spab>Shree Harikrishna Aluminium delivers reliable products that combine innovation, style, and durability.</spab>
                  </li>
                  <li><i className="bi bi-check2-all"></i> <span>Use Garanted Products</span>.</li>
                  <li><i className="bi bi-check2-all"></i> <span>A strong focus is placed on quality and authenticity</span></li>
                </ul>
                <p>
                  Shree Harikrishna Aluminium offers premium aluminium section windows that are both anodizable and powder coated, providing customers with high-quality, durable, and aesthetically pleasing solutions. These windows are crafted using original, top-grade aluminium, ensuring long-term performance, structural strength, and resistance to rust and corrosion. The anodizing process enhances the natural aluminium finish by creating a tough, protective oxide layer, while powder coating gives the flexibility to apply a wide range of colors and finishes, meeting both functional and decorative needs.
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/10.jpg" alt="Shree Harikrishna Alluminium" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="features-tab-2" role="tabpanel">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Premium Aluminium Doors by Shree Harikrishna Aluminium</h3>
                <p >
                  Shree Harikrishna Aluminium is a trusted name in the industry, offering top-quality aluminium doors that combine durability, style, and security. Known for using only original and high-grade aluminium products, the company ensures every door is built to last while maintaining a sleek, modern look.
                </p>

                <ul>
                  <li><i className="bi bi-check2-all"></i> <span>Offering top-quality aluminium doors</span></li>
                  <li><i className="bi bi-check2-all"></i> <span> Only Trusted products used </span></li>
                  <li><i className="bi bi-check2-all"></i> <span>After services also best in Market</span></li>
                </ul>
                <p>
                  In addition to quality materials, Shree Harikrishna Aluminium provides several value-added facilities such as custom design options, precise installation services, and expert
                  consultation to help you choose the best fit for your space.
                  Whether it's for residential or commercial use, their aluminium doors are engineered for strength, low maintenance, and long-term performance.</p>   </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/13.png" alt="Shree Harikrishna Alluminium" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="tab-pane fade active show" id="features-tab-3" role="tabpanel">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Stylish & Durable Aluminium Kitchen Cabinets by Shree Harikrishna Aluminium</h3>
                <p>
                  Shree Harikrishna Aluminium offers a wide range of aluminium kitchen cabinets that combine modern aesthetics with unmatched durability.
                </p>
                <ul>
                  <li><i className="bi bi-check2-all"></i> <span>The company guarantees a seamless and satisfying experience from start to finish.




                    .</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Their cabinets are termite-proof, rust-resistant, and easy to clean.</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>With expert design support and professional installation services.</span></li>
                </ul>
                <p >
                  Shree Harikrishna Aluminium ensures each cabinet is crafted with precision and attention to detail. Customers can choose from a variety of finishes, including sleek anodized and vibrant powder-coated options, to match their kitchen décor. With expert design support and professional installation services, the company guarantees a seamless and satisfying experience from start to finish.

                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/13.jpg" alt="Shree Harikrishna Alluminium" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="features-tab-4" role="tabpanel">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Excellent Customer Care & Service by Shree Harikrishna Aluminium</h3>
                <p>
                  Shree Harikrishna Aluminium is known not only for its high-quality aluminium products but also for its exceptional customer care and after-sales service. The company believes in building long-term relationships with customers by offering friendly support, clear communication, and timely assistance.
                </p>
                <p >
                 With a customer-friendly approach, we ensure quick response, clear communication, and complete assistance at every step.
                </p>
                <ul>
                  <li><i className="bi bi-check2-all"></i> <span>We believe in building relationships, not just selling products — your satisfaction is our priority.</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Our customer care team is the best in town, always ready to serve you with a smile.Our customer care team is the best in town, always ready to serve you with a smile.</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Whether it's a query, service request, or guidance, our expert support team is just a call away.</span></li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/care.png" alt="Shree Harikrishna Alluminium" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div classNameName='container'>
        <div classNameName='section-title'>
          <h2><strong>Why Choose Us?</strong></h2>
        </div>
                <p >
          At Shree Harikrishna Aluminium,
          we specialize in crafting high-quality aluminium doors, windows, kitchen cabinets, and a wide range of custom aluminium solutions. Our products are manufactured using only original aluminium sections, ensuring long-lasting durability and a flawless finish. We offer both anodizing and powder coating options, giving customers the freedom to choose from a variety of colors and finishes that not only enhance the look but also provide extra protection against rust, fading, and wear.With Best Servics.
        </p>
      </div>

      <div classNameName='container product'>
        <h1 classNameName='container'><strong></strong></h1>
      </div>
      <section>
        <div classNameName="section-title">
          <h2 style={{ textAlign: "center" }}><strong>Our Services</strong></h2>
        </div>
        <div classNameName='container'>
        <div classNameName='row'>
          <div classNameName='col-md-6 col-lg-4 '>

            <Card classNameName='h-100'>
              <Card.Img variant="top" src="assets/img/window.png" />
              <Card.Body>
                <Card.Title><h3 classNameName='products'><strong>Windows</strong></h3></Card.Title>
                <Card.Text>
                  <p>
                    Shree Harikrishna Aluminium offers a wide range of premium aluminium windows
                    designed for strength, style, and long-lasting performance.</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small classNameName="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </div>
          <div classNameName='col-md-6 col-lg-4'>
            <Card classNameName='h-100'>
              <Card.Img variant="top" src="assets/img/doors5.png" />
              <Card.Body>
                <Card.Title><h3 classNameName='products'><strong>Door's</strong></h3></Card.Title>
                <Card.Text>          
<p >
                  Shree Harikrishna Aluminium offers premium-quality aluminium doors
                  crafted using only original and high-grade materials.
               </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small classNameName="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </div>
          <div classNameName='col-md-6 col-lg-4'>
            <Card classNameName='h-100'>

              <Card.Img variant="top" src="assets/img/kitchen1.png" />
              <Card.Body>
                <Card.Title><h3 classNameName='products'><strong>Kitchen Cabninet</strong></h3></Card.Title>
                <Card.Text>
                  <p >
                    In addition to using premium materials, Shree Harikrishna Aluminium offers a range of customization facilities
                    including adjustable shelving, soft-close doors, multiple color options, and designs tailored to your space.    </p>      </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small classNameName="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            </div>
          </div>
        </div>
      </section>
      <section id="stats" className="stats section light-background">
        <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-3">
            <div className="col-lg-4 col-md-4">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-emoji-smile color-blue flex-shrink-0"></i>
                <div>
                  <CountUp
                    from={0}
                    to={1500}
                    separator=","
                    direction="up"
                    duration={2}
                    classNameName="count-up-text"

                  />
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-journal-richtext color-orange flex-shrink-0"></i>
                <div>
                  <CountUp
                    from={0}
                    to={1500}
                    separator=","
                    direction="up"
                    duration={2}
                    classNameName="count-up-text"
                  />       <p>Projects</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-headset color-green flex-shrink-0"></i>
                <div>
                  <CountUp
                    from={0}
                    to={24}
                    separator=","
                    direction="up"
                    duration={2}
                    classNameName="count-up-text"
                  />
                  <h5>24/7 </h5>
                  <p>Hours Of Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section classNameName='container'>
        <div classNameName='section-title'>
          <h2>Our Products</h2>
        </div>
        <div classNameName='row'>
          <div classNameName='col-md-6 col-lg-3 '>
            <Card classNameName='h-100'>
              <Card.Img variant="top" src="assets/img/sllider.png" />
              <Card.Body>
                <Card.Title>Slider Window</Card.Title>
                <Card.Text>
                  Aluminum sliding windows are
                  crafted with precision to offer smooth, space-saving functionality ideal for
                  modern architecture.
                </Card.Text>
                <Link to="/slider">
                  <Button variant="primary">View About Window</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div classNameName='col-md-6 col-lg-3'>
            <Card classNameName='h-100'>
              <Card.Img variant="top" src="assets/img/alldoors.png" />
              <Card.Body>
                <Card.Title>Door's</Card.Title>
                <Card.Text>
                  a wide range of aluminium doors <br></br>is expertly crafted to suit both
                  residential and commercial <br></br>needs.
                </Card.Text>
                <Link to="/doors">
                  <Button variant="primary">View About Door</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div classNameName='col-md-6 col-lg-3'>
            <Card classNameName='h-100'>
              <Card.Img variant="top" src="assets/img/cabinet.png" />
              <Card.Body>
                <Card.Title>Kitchen cabinet</Card.Title>
                <Card.Text>
                  stylish and durable aluminium kitchen cabinets are crafted to meet the needs of modern kitchens, with premium design.
                </Card.Text>
                <Link to="/kitchen">
                  <Button variant="primary">View About Kitchen</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div classNameName='col-md-6 col-lg-3'>
            <Card classNameName='h-100'>
              <Card.Img variant="top" src="assets/img/partitions.png" />
              <Card.Body>
                <Card.Title>Office partition</Card.Title>
                <Card.Text>
                  A wide range of aluminium office partitions is designed to create smart, organized, and professional workspaces.
                </Card.Text>
                <Link to="/office">
                  <Button variant="primary">View About Patition</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default home;