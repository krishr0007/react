import React from 'react'

function slider() {
    return (
        <div>
            <div>
                <div className="container">

                    <div className="row gy-4">
                        <h1 className='productsss'>Slider Windows</h1>


                        <div className="col-lg-6  aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                            <h3>At Shree Harikrishna Aluminium </h3>
                            <img src="assets/img/sllider.png" className="img-fluid rounded-4" alt="" />
                            {/* <p>Shree Harikrishna Aluminium, established in 2008, is a trusted name in premium aluminium section work. With a strong reputation for quality craftsmanship and customer satisfaction,
                 we specialize in the fabrication and installation of powder-coated 
                 aluminium doors, windows, and kitchen cabinets. Our products are designed to
                  combine durability, modern aesthetics, and low maintenance, making them ideal 
                  for both residential and commercial spaces.
                   .</p> */}
                        </div>
                        <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="250">
                            <div className="content ps-0 ps-lg-5">
                                <p className="fst-italic">
                                    <h3>Shree Harikrishna Aluminium specializes</h3> aluminum sliding windows are
                                    crafted with precision to offer smooth, space-saving functionality ideal for
                                    modern architecture. These windows glide effortlessly on high-quality rollers,
                                    making them perfect for areas where swing space is limited. To enhance their
                                    durability and appearance, the frames are available with powder coating, a
                                    process that adds a tough, colored finish that resists chipping, fading, and
                                    corrosion. Customers can choose from a wide range of colors to match interiors and exteriors,
                                    ensuring long-lasting beauty and performance even in harsh weather conditions.                </p>
                                <ul>
                                    <li><i className="bi bi-check-circle-fill"></i> <span>A trusted name in Market For premium aluminium section work.</span></li>
                                    <li><i className="bi bi-check-circle-fill"></i> <span>Many Projects Completed</span></li>
                                </ul>
                                {/* <p>
Known for our excellent service and skilled workmanship, our team is dedicated, experienced, and customer-friendly. We handle all types of aluminium work with precision and care, delivering results that meet the highest standards. Our brand is widely recognized in the market for its reliability, durability, and elegant designs. At Shree Harikrishna Aluminium, we turn your vision into lasting, functional beauty with trust and quality you can count on.
</p> */}
                                <div className="position-relative mt-6">
                                    <img src="assets/img/slider.jpg" className="img-fluid rounded-4" alt="" />
                                    <a href=""></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default slider
