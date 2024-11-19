import React from 'react'
import VenueRings from '../assets/2.png'
import EasyFix from '../assets/1.png'
import CalmSpace from '../assets/4.png'
import Counter from '../assets/3.png'
import Travel from '../assets/5.png'
import Resturant from '../assets/6.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function Portfolio() {
  return (
    <>
      <section id="portfolio" className="portfolio">
      <h2>Our Portfolio</h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={VenueRings} alt="Portfolio Item" />
          <div className="portfolio-layer">
            <h4>VenueRings</h4>
            <h3>Wedding Venue Booking Application</h3>
            <p>React , State lifting , RESTful API</p>
            <a href="https://venue-rings-frontend.vercel.app/">
            <FontAwesomeIcon icon={faArrowUp} />
            </a>
          </div>
        </div>
       
        <div className="portfolio-box">
          <img src={EasyFix} alt="Portfolio Item" />
          <div className="portfolio-layer">
            <h4>EasyFix</h4>
            <h3>All Service Booking Application</h3>
            <p>React JS , Redux </p>
            <a href="https://easyfix-service-booking.vercel.app/">
            <FontAwesomeIcon icon={faArrowUp} />
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={CalmSpace} alt="Portfolio Item" />
          <div className="portfolio-layer">
            <h4>CalmSpace</h4>
            <h3>Mental Health Care Application</h3>
            <p>HTML , CSS & JS</p>
            <a href="https://github.com/itsbasilsaman/Mental-Health-Consultant-Application">
            <FontAwesomeIcon icon={faArrowUp} />
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={Travel} alt="Portfolio Item" />
          <div className="portfolio-layer">
            <h4>Explore Echo</h4>
            <h3>Travel booking Web Application</h3>
            <p>HTML , CSS & JS</p>
            <a href="https://github.com/itsbasilsaman/ExploreEcho">
            <FontAwesomeIcon icon={faArrowUp} />
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={Resturant} alt="Portfolio Item" />
          <div className="portfolio-layer">
            <h4>Resturant WebPage</h4>
            <h3>Resturant Application</h3>
            <p>HTML , CSS & JS</p>
            <a href="https://github.com/itsbasilsaman/Restaurant-Project-">
            <FontAwesomeIcon icon={faArrowUp} />
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={Counter} alt="Portfolio Item" />
          <div className="portfolio-layer">
            <h4>Counter</h4>
            <h3>Calculation Application</h3>
            <p>React & Redux</p>
            <a href="https://redux-counter-application-teal.vercel.app/">
            <FontAwesomeIcon icon={faArrowUp} />
            </a>
          </div>
        </div>
      </div>
    </section> 
    </>
  )
}

export default Portfolio