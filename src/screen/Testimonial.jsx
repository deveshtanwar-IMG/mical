import React from 'react'
import Img_1 from '../assets/images/tes.jpg';
import Img_2 from '../assets/images/tes1.jpg';

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>Testimonial</h2>
              <p>It is a long established fact that a reader will be distracted by the </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div id="carouselExampleIndicators" className="carousel slide testimonial_Carousel" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="carousel-caption ">
                      <div className="row">
                        <div className="col-md-6 margin_boot">
                          <div className="test_box">
                            <i><img src={Img_1} alt="#" /></i>
                            <h4>JCKOLO</h4>
                            <span>(It is a long )</span>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                          </div>
                        </div>
                        <div className="col-md-6 margin_boot">
                          <div className="test_box">
                            <i><img src={Img_2} alt="#" /></i>
                            <h4>ROCOYO</h4>
                            <span>(It is a long )</span>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="carousel-caption">
                      <div className="row">
                        <div className="col-md-6 margin_boot">
                          <div className="test_box">
                            <i><img src={Img_1} alt="#" /></i>
                            <h4>JCKOLO</h4>
                            <span>(It is a long )</span>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                          </div>
                        </div>
                        <div className="col-md-6 margin_boot">
                          <div className="test_box">
                            <i><img src={Img_2} alt="#" /></i>
                            <h4>ROCOYO</h4>
                            <span>(It is a long )</span>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="carousel-caption">
                      <div className="row">
                        <div className="col-md-6 margin_boot">
                          <div className="test_box">
                            <i><img src={Img_1} alt="#" /></i>
                            <h4>JCKOLO</h4>
                            <span>(It is a long )</span>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                          </div>
                        </div>
                        <div className="col-md-6 margin_boot">
                          <div className="test_box">
                            <i><img src={Img_2} alt="#" /></i>
                            <h4>ROCOYO</h4>
                            <span>(It is a long )</span>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;