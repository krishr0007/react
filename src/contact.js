import React from 'react'

function contact() {
  return (
    <>
    <section>
      <div className="contact-container">
        <div className="left-col">
          {/* <img src='https://thumbs.dreamstime.com/b/aluminium-profile-windows-doors-manufacturing-structural-metal-shapes-profiles-texture-constructions-factory-background-166730613.jpg'/> */}
        </div>
        <div className=" cont right-col">
          <h1><strong>Contact us</strong></h1>
          <p>Planning to visit Indonesia soon? Get insider tips on where to go, things to do and find best deals for your next adventure.</p>

          <form id="contact-form" method="post">
            <label for="name">Full name</label>
            <input type="text" id="name" name="name" placeholder="Your Full Name" required />
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Your Email Address" required />
            <label for="message">Message</label>
            <textarea rows="6" placeholder="Your Message" id="message" name="message" required></textarea>
            <a href="javascript:void(0)"><button type="submit" id="submit" name="submit">Send</button></a>
          </form>
          <div id="error"></div>
          <div id="success-msg"></div>
        </div>
      </div>
      </section>
      <section>
<h3 className='us container visit fw-bold'>Visit Us</h3>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="h-[500px] w-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.335550857862!2d69.64047987591634!3d23.230873508521558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511f001ee84847%3A0xc8ce5191aea243ae!2sshree%20Harikrishna%20Alluminium!5e0!3m2!1sen!2sin!4v1750488245776!5m2!1sen!2sin" width="1300" height="450" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-secondary-800 mb-2">Find Us</h3>
                <p className="text-secondary-600">
                  Visit our facility to explore our product range in person. We are
                  located in Bhuj, Kutch, Gujarat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </section>
    </>
  )
}

export default contact


