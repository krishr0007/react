import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CountUp from './components/CountUp'
import Button from 'react-bootstrap/Button';

function home() {
  return (
    <>
      <div className='hero dark-background'>
        <img src='assets/img/homeimg2.png' />
        <div>
          <p className='another' style={{ color: "white", position: "absolute", zIndex: "999", fontWeight: 'bold' }}><h2 className='welcome'>Welcome to,</h2></p><br></br>
          <strong><h3 className='anothers' style={{ color: "white", position: "relative", zIndex: "999", fontWeight: 'bold' }}>Shree Harikrishna Alluminium</h3></strong>
        </div>
      </div>

      <div class="container py-10 features">
        <ul class="nav nav-tabs row d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" role="tablist">
          <li class="nav-item col-3" role="presentation">
            <a class="nav-link show" data-bs-toggle="tab" data-bs-target="#features-tab-1" aria-selected="false" role="tab" tabindex="-1">
              <i class="bi bi-binoculars"></i>
              <h4 class="d-none d-lg-block">Window's</h4>
            </a>
          </li>
          <li class="nav-item col-3" role="presentation">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2" aria-selected="false" role="tab" tabindex="-1">
              <i class="bi bi-box-seam"></i>
              <h4 class="d-none d-lg-block">Door's</h4>
            </a>
          </li>
          <li class="nav-item col-3" role="presentation">
            <a class="nav-link active" data-bs-toggle="tab" data-bs-target="#features-tab-3" aria-selected="true" role="tab">
              <i class="bi bi-brightness-high"></i>
              <h4 class="d-none d-lg-block">kitchen Cabninet</h4>
            </a>
          </li>
          <li class="nav-item col-3" role="presentation">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-4" aria-selected="false" role="tab" tabindex="-1">
              <i class="bi bi-command"></i>
              <h4 class="d-none d-lg-block">Customber Care</h4>
            </a>
          </li>
        </ul>

        <div class="tab-content aos-init aos-animate success" data-aos="fade-up" data-aos-delay="200">
          <div class="tab-pane fade" id="features-tab-1" role="tabpanel">
            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>We use Garanted prodcuts</h3>
                <p class="fst-italic">
                  Only genuine materials are used in manufacturing, ensuring that each window section is built to last and perform well under various environmental conditions.
                </p>
                <ul>
                  <li><i class="bi bi-check2-all"></i>
                    <spab>Shree Harikrishna Aluminium delivers reliable products that combine innovation, style, and durability.</spab>
                  </li>
                  <li><i class="bi bi-check2-all"></i> <span>Use Garanted Products</span>.</li>
                  <li><i class="bi bi-check2-all"></i> <span>A strong focus is placed on quality and authenticity</span></li>
                </ul>
                <p>
                  Shree Harikrishna Aluminium offers premium aluminium section windows that are both anodizable and powder coated, providing customers with high-quality, durable, and aesthetically pleasing solutions. These windows are crafted using original, top-grade aluminium, ensuring long-term performance, structural strength, and resistance to rust and corrosion. The anodizing process enhances the natural aluminium finish by creating a tough, protective oxide layer, while powder coating gives the flexibility to apply a wide range of colors and finishes, meeting both functional and decorative needs.
                </p>
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/10.jpg" alt="" class="img-fluid" />
              </div>
            </div>
          </div>

          <div class="tab-pane fade" id="features-tab-2" role="tabpanel">
            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Premium Aluminium Doors by Shree Harikrishna Aluminium</h3>
                <p class="fst-italic">
                  Shree Harikrishna Aluminium is a trusted name in the industry, offering top-quality aluminium doors that combine durability, style, and security. Known for using only original and high-grade aluminium products, the company ensures every door is built to last while maintaining a sleek, modern look.
                </p>

                <ul>
                  <li><i class="bi bi-check2-all"></i> <span>Offering top-quality aluminium doors</span></li>
                  <li><i class="bi bi-check2-all"></i> <span> Only Trusted products used </span></li>
                  <li><i class="bi bi-check2-all"></i> <span>After services also best in Market</span></li>
                </ul>
                <p>
                  In addition to quality materials, Shree Harikrishna Aluminium provides several value-added facilities such as custom design options, precise installation services, and expert
                  consultation to help you choose the best fit for your space.
                  Whether it's for residential or commercial use, their aluminium doors are engineered for strength, low maintenance, and long-term performance.</p>   </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/11.jpg" alt="" class="img-fluid" />
              </div>
            </div>
          </div>

          <div class="tab-pane fade active show" id="features-tab-3" role="tabpanel">
            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Stylish & Durable Aluminium Kitchen Cabinets by Shree Harikrishna Aluminium</h3>
                <p>
                  Shree Harikrishna Aluminium offers a wide range of aluminium kitchen cabinets that combine modern aesthetics with unmatched durability.
                </p>
                <ul>
                  <li><i class="bi bi-check2-all"></i> <span>The company guarantees a seamless and satisfying experience from start to finish.




                    .</span></li>
                  <li><i class="bi bi-check2-all"></i> <span>Their cabinets are termite-proof, rust-resistant, and easy to clean.</span></li>
                  <li><i class="bi bi-check2-all"></i> <span>With expert design support and professional installation services.</span></li>
                </ul>
                <p class="fst-italic">
                  Shree Harikrishna Aluminium ensures each cabinet is crafted with precision and attention to detail. Customers can choose from a variety of finishes, including sleek anodized and vibrant powder-coated options, to match their kitchen décor. With expert design support and professional installation services, the company guarantees a seamless and satisfying experience from start to finish.

                </p>
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/13.jpg" alt="" class="img-fluid" />
              </div>
            </div>
          </div>

          <div class="tab-pane fade" id="features-tab-4" role="tabpanel">
            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Excellent Customer Care & Service by Shree Harikrishna Aluminium</h3>
                <p>
                  Shree Harikrishna Aluminium is known not only for its high-quality aluminium products but also for its exceptional customer care and after-sales service. The company believes in building long-term relationships with customers by offering friendly support, clear communication, and timely assistance.
                </p>
                <p class="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i class="bi bi-check2-all"></i> <span>Their work culture reflects honesty, dedication, and a commitment to customer satisfaction.</span></li>
                  <li><i class="bi bi-check2-all"></i> <span>customer-friendly nature</span></li>
                  <li><i class="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                </ul>
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/logo4.jpg" alt="" class="img-fluid" />
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className='container'>
        <h2 className='choose'>Why Choose Shree Harikrishna Aluminium?</h2>

        <h4>
          At Shree Harikrishna Aluminium,
          we specialize in crafting high-quality aluminium doors, windows, kitchen cabinets, and a wide range of custom aluminium solutions. Our products are manufactured using only original aluminium sections, ensuring long-lasting durability and a flawless finish. We offer both anodizing and powder coating options, giving customers the freedom to choose from a variety of colors and finishes that not only enhance the look but also provide extra protection against rust, fading, and wear.With Best Servics.
        </h4>
      </div>



      <div className='container product'>
        <h1 className='container'>Our Products</h1>
      </div>

      <CardGroup>
        <Card>
          <Card.Img variant="top" src="assets/img/window.png" />
          <Card.Body>
            <Card.Title><h1 className='products'>Windows</h1></Card.Title>
            <Card.Text>
              <h5>
                Shree Harikrishna Aluminium offers a wide range of premium aluminium windows
                designed for strength, style, and long-lasting performance.</h5>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="assets/img/doors5.png" />
          <Card.Body>
            <Card.Title><h1 className='products'>Door's</h1></Card.Title>
            <Card.Text>            <h5>

              Shree Harikrishna Aluminium offers premium-quality aluminium doors
              crafted using only original and high-grade materials.
            </h5>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="assets/img/card3.png" />
          <Card.Body>
            <Card.Title><h1 className='products'>Kitchen Cabninet</h1></Card.Title>
            <Card.Text>
              <h5>
                In addition to using premium materials, Shree Harikrishna Aluminium offers a range of customization facilities
                including adjustable shelving, soft-close doors, multiple color options, and designs tailored to your space.    </h5>      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <section id="stats" class="stats section light-background">
        <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-3">
            <div class="col-lg-4 col-md-4">
              <div class="stats-item d-flex align-items-center w-100 h-100">
                <i class="bi bi-emoji-smile color-blue flex-shrink-0"></i>
                <div>
                  <CountUp
                    from={0}
                    to={1500}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text"

                  />
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="stats-item d-flex align-items-center w-100 h-100">
                <i class="bi bi-journal-richtext color-orange flex-shrink-0"></i>
                <div>
                  <CountUp
                    from={0}
                    to={1500}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text"
                  />    +            <p>Projects</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="stats-item d-flex align-items-center w-100 h-100">
                <i class="bi bi-headset color-green flex-shrink-0"></i>
                <div>
                  <CountUp
                    from={0}
                    to={24}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text"
                  />
                  <h5>24/7 </h5>
                  <p>Hours Of Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='produuct'>
        <CardGroup>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="assets/img/sllider.png" />
            <Card.Body>
              <Card.Title>Slider Window</Card.Title>
              <Card.Text>
                Aluminum sliding windows are
                crafted with precision to offer smooth, space-saving functionality ideal for
                modern architecture.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="assets/img/alldoors.png" />
            <Card.Body>
              <Card.Title>Door's</Card.Title>
              <Card.Text>
                a wide range of aluminium doors is expertly crafted to suit both
                residential and commercial needs.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', height: '20rem' }}>
            <Card.Img variant="top" src="assets/img/cabinet.png" />
            <Card.Body>
              <Card.Title>Kitchen cabinet</Card.Title>
              <Card.Text>
                stylish and durable aluminium kitchen cabinets are crafted to meet the needs of modern kitchens, with premium design.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="assets/img/partitions.png" />
            <Card.Body>
              <Card.Title>Office partition</Card.Title>
              <Card.Text>
                A wide range of aluminium office partitions is designed to create smart, organized, and professional workspaces.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </>

  );
}

export default home;