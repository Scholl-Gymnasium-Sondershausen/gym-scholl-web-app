import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";
import AboutComponent from '../../component/About/Index';
import Data from '../../data.json';
const click = (event) => {
    event.preventDefault();
}

class About extends Component {
    render() {
        return (
            <Fragment>
            {/* <!-- ===== Icon__box ===== -->                                             */}
                <section id="about" className="about-area  p-top-110 p-bottom-120">
                    <div className="container">
                        <div className="row">
                        {
                            Data[0].about.map((item, key) => {
                                return <AboutComponent key={key} img={item.imgSrc} title={item.title} content={item.content} author={item.author} />
                            })
                        }
                        </div>{/*<!-- End: row -->*/}
                    </div>{/*<!-- End: container -->*/}
                </section>
                {/* <!-- End: section --> */}

                {/* <!-- ===== Branding ===== --> */}
                <section id="brand" className="brand-area">
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-lg-6 col-sm-12">
                                <img src="/assets/img/About.png" alt="img" className="img-fluid wow fadeInUp" />
                            </div>
                            {/* <!-- End: col+ --> */}

                            <div className="col-lg-5 offset-lg-1 col-sm-12">
                                <div className="">
                                    <div className="card border-0 wow fadeInUp
                                        slow
                                        ">
                                        <div className="card-body bg-transparent p-0">
                                            <Link to="/" onClick={click}>
                                                <h2 className="card-title m-0"><span>Schule</span> & <span>Wissenschaft</span> das sind Wir.</h2>
                                            </Link>
                                            <p className="card-text  p-top-40 p-bottom-30">Wir wollen Neugier wecken und junge Menschen für die Schule und Wissenschaft begeistern.</p>
                                            <Link to="/"  onClick={click} className="btn btn-primary btn-lg  gradient">
                                                Mehr erfahren
                                            </Link>
                                        </div>
                                    </div>
                                </div>{/*<!-- End: jumbotron -->*/}
                            </div>
                        </div>{/*<!-- End: row -->*/}
                    </div>{/*<!-- End: container -->*/}
                </section>
                {/* <!-- End: section -->
                <!-- ===== update  Popup Video ===== --> */}

                <div id="popup_video" className="p-top-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="atbdb_content_module_contents">
                                    <div className="video-wrapper">
                                        <figure>
                                            <img src="/assets/img/video2.png" alt="" />
                                            <figcaption>
                                            <Link to="https://www.youtube.com/watch?v=RYZA__2b-_M" className="video-iframe play-btn popup-youtube">
                                                <span className="fas fa-play"></span>
                                            </Link>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>{/*<!-- end: col+ -->*/}
                        </div>{/*<!-- end: row -->*/}
                    </div>{/*<!-- end: container -->*/}
                </div>
                {/*<!-- end: div -->*/}
                {/*<!-- ===== Card__two ===== --></div>*/}
            </Fragment>
        )
    }
}
export default About;
