import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (

    <section id="hero" class="d-flex align-items-center">

      <div class="container">
        <div class="row">
          <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            <h1>Better Solutions For Your Business</h1>
            <h2>We are team of talented designers making websites with Bootstrap</h2>
            <div class="d-flex justify-content-center justify-content-lg-start">
              <Link to="/register" class="btn-get-started bg-light scrollto">Get Started</Link>
              <Link to="/register" class="btn-get-started bg-light scrollto">Get Started</Link>
            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
            <img src="images/img/hero-img.png" class="img-fluid animated" alt="" />
          </div>
        </div>
      </div>

    </section>

  )
}

export default Header