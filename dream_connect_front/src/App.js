import React, {Component} from 'react';
import Header from "./Components/navigation/Header" // Header
import Footer from "./components/navigation/Footer" // Footer
import Sneakers from "./assets/images/ads/sneakers.jpg";
import Brownies from "./assets/images/ads/brownies.png";
import Eye from "./assets/images/dream-eye.png";
import Night from "./assets/images/night.jpg";
import Together from "./assets/images/together.jpeg";
import Osaka from "./assets/images/osaka-skyline.jpg";
import Morning from "./assets/images/early-morning.jpg";
import Logo from "./assets/images/logo1.png";
import Radium, {StyleRoot} from 'radium'; // CSS and styling for fade animations
import Zoom from 'react-reveal/Zoom'; // Zoom animation
import Intro from "./assets/images/animation-intro.mp4"; // Intro animations
import zoomIn from 'react-animations/lib/zoom-in'; // 4 second zoom in/pulse
const styles = {
  zoomIn: {
      animation: 'x 4s',
      animationName: Radium.keyframes(zoomIn, 'zoomIn') // used for StyleRoot components
    }
}

export default class App extends Component {

  render() {

    return (
            <div>
              <Header />
              <main>
                {/* <!-- Full Page Intro --> */}
                <header>
                  <div className="overlay"></div>
                    <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                        <source src={Intro} type="video/mp4" />
                    </video>
                    <div className="container w-100 h-100">
                      <div className="float-left mr-auto mt-5 col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                          <img className="logo1 mt-5 img-fluid" src={Logo} alt="Dream Connect" />
                      </div>
                      <div className="text-white text-center float-right ml-auto mt-5 col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                          <StyleRoot> {/* Fade In */}
                            <h1 style={styles.zoomIn} className="font-weight-bold text-light mb-0 pt-md-5 pt-5 mt-5">DreamConnect</h1>
                          </StyleRoot>
                            <hr className="hr-light w-100" />
                        </div>
                    </div>
                  </header>

                <section id="projects" className="home-card text-dark text-center py-5">
                  {/* <!-- Container --> */}
                  <div className="container p-5">
                    {/* <!-- Section heading --> */}
                    <h2 className="h1-responsive font-weight-bold">News</h2>
                    {/* <!-- Section description --> */}
                    <p className="text-black w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit est laborum.</p>
                    
                    <h3 className="text-dark"><i className="fa fa-arrow-down"></i></h3>
                    {/* <!-- Grid row 1 --> */}
                    <div className=" row text-center py-5">

                        {/* <!-- Grid column --> */}
                        <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
                            {/* <!--Featured image--> */}
                            <div className="view overlay rounded">
                              <Zoom> {/*Zoom In */}
                                <img src={Eye} className="news-img img-fluid mx-auto" alt="Dream Connect" />
                                <a href="#btn1">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                              </Zoom>
                            </div>
                            {/* <!-- Excerpt--> */}
                            <div className="card-body pb-0">
                                <h4 className="font-weight-bold my-3">Title of the news</h4>
                                <p className="text-black">Temporibus autem quibusdam et aut officiis debitis aut rerum
                                    necessitatibus saepe eveniet ut et voluptates repudiandae.
                                </p>
                            </div>
                        </div>

                        {/* <!-- Grid column --> */}
                        <div className="col-lg-4 col-md-6 mb-md-0 mb-4">
                            {/* <!--Featured image--> */}
                            <div className="view overlay rounded">
                              <Zoom>
                                <img src={Together} className="news-img img-fluid mx-auto" alt="Dream Connect" />
                                <a href="#btn2">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                              </Zoom>
                            </div>
                            {/* <!-- Excerpt--> */}
                            <div className="card-body pb-0">
                                <h4 className="font-weight-bold my-3">Title of the news</h4>
                                <p className="text-black">Temporibus autem quibusdam et aut officiis debitis aut rerum
                                    necessitatibus saepe eveniet ut et voluptates repudiandae.
                                </p>
                            </div>
                        </div>

                        {/* <!-- Grid column --> */}
                        <div className="col-lg-4 col-md-6">
                            {/* <!--Featured image--> */}
                            <div className="view overlay rounded">
                              <Zoom>
                                <img src={Night} className="news-img img-fluid mx-auto" alt="Dream Connect" />
                                <a href="#btn3">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                              </Zoom>
                            </div>
                            {/* <!-- Excerpt--> */}
                            <div className="card-body pb-0">
                                <h4 className="font-weight-bold my-3">Title of the news</h4>
                                <p className="text-black">Temporibus autem quibusdam et aut officiis debitis aut rerum
                                    necessitatibus saepe eveniet ut et voluptates repudiandae.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Grid row 2--> */}
                    <div className="row text-center py-5">

                        {/* <!-- Grid column --> */}
                        <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
                            {/* <!--Featured image--> */}
                            <div className="view overlay rounded">
                              <Zoom>
                                <img src={Morning} className="news-img img-fluid mx-auto" alt="Dream Connect" />
                                <a href="#btn1">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                              </Zoom>
                            </div>
                            {/* <!-- Excerpt--> */}
                            <div className="card-body pb-0">
                                <h4 className="font-weight-bold my-3">Title of the news</h4>
                                <p className="text-black">Temporibus autem quibusdam et aut officiis debitis aut rerum
                                    necessitatibus saepe eveniet ut et voluptates repudiandae.
                                </p>
                            </div>
                        </div>

                        {/* <!-- Grid column --> */}
                        <div className="col-lg-4 col-md-6 mb-md-0 mb-4">
        
                            {/* <!-- Excerpt--> */}
                            <div className="card-body pb-0">
                                <h4 className="font-weight-bold my-3">Title of the news</h4>
                                <p className="text-black">Temporibus autem quibusdam et aut officiis debitis aut rerum
                                    necessitatibus saepe eveniet ut et voluptates repudiandae.
                                </p>
                            </div>
                        </div>

                        {/* <!-- Grid column --> */}
                        <div className="col-lg-4 col-md-6">
                            {/* <!--Featured image--> */}
                            <div className="view overlay rounded">
                              <Zoom>
                                <img src={Osaka} className="news-img img-fluid mx-auto" alt="Dream Connect" />
                                <a href="#btn3">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                              </Zoom>
                            </div>
                            {/* <!-- Excerpt--> */}
                            <div className="card-body pb-0">
                                <h4 className="font-weight-bold my-3">Title of the news</h4>
                                <p className="text-black">Temporibus autem quibusdam et aut officiis debitis aut rerum
                                    necessitatibus saepe eveniet ut et voluptates repudiandae.
                                </p>
                            </div>
                        </div>
                    </div>
                  </div>
                </section>
                {/* Ads */}
                <div className="d-flex justify-content-center flex-wrap">
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={Sneakers} style={{ maxHeight: '100px' }} className='img-fluid  m-3' alt='ads' />
                        <img src={Brownies} style={{ maxHeight: '100px' }} className='img-fluid  m-3' alt='ads' />
                        <p className="mx-auto pt-5 mt-5">Don't miss the Black Friday sales</p>
                    </div>
                </div>
              </main>
              <Footer />
            </div>
    )
  }
}