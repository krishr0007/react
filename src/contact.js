import React from 'react'

function contact() {
  return (
    <div className='con'>
      <div className="contact-container">
  <div className="left-col">
    {/* <img src='https://thumbs.dreamstime.com/b/aluminium-profile-windows-doors-manufacturing-structural-metal-shapes-profiles-texture-constructions-factory-background-166730613.jpg'/> */}
  </div>
  <div className="right-col">
    <div className="theme-switch-wrapper">
    {/* <label className="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div className="slider round"></div>
  </label> */}
  {/* <div className="description">Dark Mode</div> */}
</div>
    
    <h1>Contact us</h1>
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
    </div>
  )
}

export default contact


