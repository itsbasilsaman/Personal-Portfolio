import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Home() {
  return (
    <>
       <section id="home" className="home">
      <div className="home-content">
        <h3>Check out my projects!</h3>
        <h1>I'm Basil Saman</h1>
        <p>Frontend Developer</p>
        <div class="social-media">
            
            <a href= "http://linkedin.com/in/itsbasilsaman" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/itsbasilsaman" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
      </div>
      <div className="home-img">
      <a href= "http://linkedin.com/in/itsbasilsaman" target="_blank">
        <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG8.png" href='' alt="Home" />
        </a>
      </div>
    </section>
    </>
  )
}

export default Home