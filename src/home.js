import { color } from 'framer-motion';
import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CountUp from './components/CountUp'



function home() {
  return (
    <>

      <div className='hero dark-background'>
        <img src='assets/img/homeimg2.png' />
        <div>
          <p className='another' style={{color:"red",position:"absolute", zIndex:"999"}}><h2 className='welcome'>Welcome to,</h2><br></br>
          Shree HARikrishna Alluminium</p>
        </div>
      </div>
        <div>
        <div class="container features">
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
      </div><br></br><br></br>
      <div className='container choose'>
        <h1>Why Choose Shree Harikrishna Aluminium?</h1>
              </div>
        <h4 className='container'>
          At Shree Harikrishna Aluminium,
           we specialize in crafting high-quality aluminium doors, windows, kitchen cabinets, and a wide range of custom aluminium solutions. Our products are manufactured using only original aluminium sections, ensuring long-lasting durability and a flawless finish. We offer both anodizing and powder coating options, giving customers the freedom to choose from a variety of colors and finishes that not only enhance the look but also provide extra protection against rust, fading, and wear.With Best Servics.
        </h4>
    
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
      />                <p>Projects</p>
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
<div>
      <section id="testimonials" class="testimonials section light-background">

     
      <div class="container section-title aos-init aos-animate" data-aos="fade-up">
        <h2>Testimonials</h2>
        <div><span>Check Our</span> <span class="description-title">Testimonials</span></div>
      </div>

      <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

        <div class="row g-6">
          <div class="col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div class="testimonial-item">
              <div class="stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.</p>
              <div class="testimonial-footer">
                <div class="testimonial-author">
                  <img src="assets/img/team/team-1.jpg" alt="Author" class="img-fluid rounded-circle" loading="lazy" />
                  <div>
                    <h5>Michael Anderson</h5>
                    <span>Software Developer</span>
                  </div>
                </div>
                <div class="quote-icon">
                  <i class="bi bi-quote"></i>
                </div>
              </div>
            </div>
          </div>

         
          <div class="col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div class="testimonial-item">
              <div class="stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
              <div class="testimonial-footer">
                <div class="testimonial-author">
                  <img src="assets/img/team/team-2.jpg" alt="Author" class="img-fluid rounded-circle" loading="lazy" />
                  <div>
                    <h5>Sophia Martinez</h5>
                    <span>Marketing Specialist</span>
                  </div>
                </div>
                <div class="quote-icon">
                  <i class="bi bi-quote"></i>
                </div>
              </div>
            </div>
          </div>

          
          <div class="col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <div class="testimonial-item">
              <div class="stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum.</p>
              <div class="testimonial-footer">
                <div class="testimonial-author">
                  <img src="assets/img/team/team-3.jpg" alt="Author" class="img-fluid rounded-circle" loading="lazy" />
                  <div>
                    <h5>David Wilson</h5>
                    <span>Graphic Designer</span>
                  </div>
                </div>
                <div class="quote-icon">
                  <i class="bi bi-quote"></i>
                </div>
              </div>
            </div>
          </div>

   
          <div class="col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
            <div class="testimonial-item">
              <div class="stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis.</p>
              <div class="testimonial-footer">
                <div class="testimonial-author">
                  <img src="assets/img/team/team-1.jpg" alt="Author" class="img-fluid rounded-circle" loading="lazy" />
                  <div>
                    <h5>Emily Johnson</h5>
                    <span>UX Designer</span>
                  </div>
                </div>
                <div class="quote-icon">
                  <i class="bi bi-quote"></i>
                </div>
              </div>
            </div>
          </div>

        
         </div>
</div>
    </section>
    </div>
    </>

  );
}

export default home;