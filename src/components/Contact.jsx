import React from 'react'

function Contact() {
  return (
    <>
      <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form>
        <div className="input-box">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
        </div>
        <textarea placeholder="Your Message"></textarea>
        <button className="btn-send-message">Send Message</button>
      </form>
    </section> 
    </>
  )
}

export default Contact