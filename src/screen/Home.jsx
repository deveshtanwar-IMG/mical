import Car from '../assets/images/car.png';
import Thr from '../assets/images/thr.png';
import Thr1 from '../assets/images/thr1.png';
import Thr2 from '../assets/images/thr2.png';
import About from './About';
import Testimonial from './Testimonial';
import Furniture from './Furnitures';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="banner_main">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container-fluid">
                <div className="carousel-caption">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="text-bg">
                        <h1>Welcome</h1>
                        <span>car repair services</span>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
                        <a href="#three-box">More Info </a> <Link to="/contactus">Contact Us</Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="text_img">
                        <figure><img src={Car} alt="#" /></figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container-fluid">
                <div className="carousel-caption">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="text-bg">
                        <h1>Welcome</h1>
                        <span>car repair services</span>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
                        <a href="#three-box">More Info </a> <Link to="/contactus">Contact Us</Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="text_img">
                        <figure><img src={Car} alt="#" /></figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container-fluid">
                <div className="carousel-caption">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="text-bg">
                        <h1>Welcome</h1>
                        <span>car repair services</span>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
                        <a href="#three-box">More Info </a> <Link to="/contactus">Contact Us</Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="text_img">
                        <figure><img src={Car} alt="#" /></figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </a>
        </div>
      </section>

      <div className="three_box" id="three-box">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="box_text">
                <h3>AUTO DIAGNOSE</h3>
                <i><img src={Thr} alt="#" /></i>
                <p>ipsum dolor sit amet, consectetur adipiscing elit, sed d veniam, adipiscing elit, sed d veniam</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box_text">
                <h3>AUTO DIAGNOSE</h3>
                <i><img src={Thr1} alt="#" /></i>
                <p>ipsum dolor sit amet, consectetur adipiscing elit, sed d veniam, adipiscing elit, sed d veniam</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box_text">
                <h3>AUTO DIAGNOSE</h3>
                <i><img src={Thr2} alt="#" /></i>
                <p>ipsum dolor sit amet, consectetur adipiscing elit, sed d veniam, adipiscing elit, sed d veniam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Furniture />
      <Testimonial />
    </>
  )
}

export default Home;