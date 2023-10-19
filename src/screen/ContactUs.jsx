import Map from '../assets/images/map.jpg';
import '../App.css';
import '../responsive.css'
import { useFormik } from 'formik';
import { formValidation } from '../schema';
import { newsletterValidation } from '../schema/newsletter';

const ContactUs = () => {

   const inititalValues = {
      name: "",
      email: "",
      phone: "",
   }

   const contactFormik = useFormik({
      initialValues: inititalValues,
      validationSchema: formValidation,
      onSubmit: (value, action) => {
         console.log(value)
         action.resetForm();
      }
   })

   const newsletterFormik = useFormik({
      initialValues: {email: ""},
      validationSchema: newsletterValidation,
      onSubmit: (value, action) => {
         console.log("newsletterformik",value)
         action.resetForm();
      }
   })
   return (
      <footer id="contact">
         <div className="footer">
            <div className="container">
               <div className="row">
                  <div className="col-md-4">
                     <div className="titlepage">
                        <h2>Contact Us</h2>
                     </div>
                  </div>
                  <div className="col-md-8">
                     <ul className="location_icon">
                        <li><a href="#"><i className="fa fa-location-dot" aria-hidden="true"></i></a> Locations</li>
                        <li><a href="#"><i className="fa fa-volume-control-phone" aria-hidden="true"></i></a> +71 9087654321</li>
                        <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a>Demo@gmail.com</li>
                     </ul>
                  </div>
                  <div className="col-md-6">
                     <form id="request" className="main_form" onSubmit={contactFormik.handleSubmit}>
                        <div className="row">
                           <div className="col-md-12 ">
                              <input className="contactus" placeholder="Full Name" type="type" name="name"
                                 value={contactFormik.values.name}
                                 onChange={contactFormik.handleChange}
                                 onBlur={contactFormik.handleBlur} />
                              {contactFormik.errors.name && contactFormik.touched.name ? <p className='error-msg'>{contactFormik.errors.name}</p> : null}
                           </div>
                           <div className="col-md-12">
                              <input className="contactus" placeholder="Email" type="type" name="email"
                                 value={contactFormik.values.email}
                                 onChange={contactFormik.handleChange}
                                 onBlur={contactFormik.handleBlur} />
                              {contactFormik.errors.email && contactFormik.touched.email ? <p className='error-msg'>{contactFormik.errors.email}</p> : null}
                           </div>
                           <div className="col-md-12">
                              <input className="contactus" placeholder="Phone Number" type="type" name="phone"
                                 value={contactFormik.values.phone}
                                 onChange={contactFormik.handleChange}
                                 onBlur={contactFormik.handleBlur} />
                              {contactFormik.errors.phone && contactFormik.touched.phone ? <p className='error-msg'>{contactFormik.errors.phone}</p> : null}
                           </div>
                           <div className="col-md-12">
                              <textarea className="textarea" placeholder="Message">
                                 Message </textarea>
                           </div>
                           <div className="col-sm-col-xl-6 col-lg-6 col-md-6 col-sm-12 send_resp">
                              <button className="send_btn">Send</button>
                           </div>
                           <div className="col-sm-col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <ul className="social_icon">
                                 <li><a href="#"><i className="fa-brands fa-facebook-f" aria-hidden="true"></i></a></li>
                                 <li><a href="#"><i className="fa-brands fa-x-twitter" aria-hidden="true"></i></a></li>
                                 <li><a href="#"><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i></a></li>
                                 <li><a href="#"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a></li>
                              </ul>
                           </div>
                        </div>
                     </form>
                  </div>
                  <div className="col-md-6">
                     <div className="map">
                        <figure><img src={Map} alt="map" /></figure>
                     </div>
                     <form className="bottom_form"  onSubmit={newsletterFormik.handleSubmit}>
                        <h3>Newsletter</h3>
                        <input className="enter" placeholder="Enter your email" type="text" name="email"
                           value={newsletterFormik.values.email}
                           onChange={newsletterFormik.handleChange}
                           onBlur={newsletterFormik.handleBlur}
                        />
                        <button className="sub_btn" type='submit'>subscribe</button>
                        {newsletterFormik.errors.email && newsletterFormik.touched.email ? <p className='error-msg'>{newsletterFormik.errors.email}</p> : null}
                     </form>
                  </div>
               </div>
            </div>
            <div className="copyright">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <p>Copyright 2019 All Right Reserved By <a href="https://html.design/"> Free  html Templates</a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default ContactUs;