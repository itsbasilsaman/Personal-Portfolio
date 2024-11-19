import React from 'react'

function Services() {
  return (
    <>
       <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="services-box">
          <i className="fas fa-cogs"></i>
          <h3>Service One</h3>
          <p>Service description goes here.</p>
        </div>
        <div className="services-box">
          <i className="fas fa-briefcase"></i>
          <h3>Service Two</h3>
          <p>Service description goes here.</p>
        </div>
        <div className="services-box">
          <i className="fas fa-handshake"></i>
          <h3>Service Three</h3>
          <p>Service description goes here.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Services