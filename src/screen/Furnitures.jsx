import React from 'react'
import Img_1 from '../assets/images/img1.png';
import Img_2 from '../assets/images/img2.png';
import Img_3 from '../assets/images/img3.png';
import Img_4 from '../assets/images/img4.png';

const Furnitures = () => {
  return (
    <div className="wedo ">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>What We Do</h2>
              <p>It is a long established fact that a reader will be distracted by the </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="row">
              <div className="col-md-6 margin_bottom">
                <div className="work">
                  <figure><img src={Img_1} alt="#" /></figure>
                </div>
                <div className="work_text">
                  <h3>Quick repair<br /><span className="blu">Total Service</span></h3>
                </div>
              </div>
              <div className="col-md-6 margin_bottom">
                <div className="work">
                  <figure><img src={Img_2} alt="#" /></figure>
                </div>
                <div className="work_text">
                  <h3>Quick repair<br /><span className="blu">Total Service</span></h3>
                </div>
              </div>
              <div className="col-md-6 margin_bottom">
                <div className="work">
                  <figure><img src={Img_3} alt="#" /></figure>
                </div>
                <div className="work_text">
                  <h3>Quick repair<br /> <span className="blu">Total Service</span></h3>
                </div>
              </div>
              <div className="col-md-6 margin_bottom">
                <div className="work">
                  <figure><img src={Img_4} alt="#" /></figure>
                </div>
                <div className="work_text">
                  <h3>Quick repair<br /><span className="blu">Total Service</span></h3>
                </div>
              </div>
            </div>
            <a className="read_more" href="#">See More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Furnitures;