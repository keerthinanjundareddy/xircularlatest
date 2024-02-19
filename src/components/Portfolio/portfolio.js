import React, { Component } from 'react';
import {useState} from 'react'
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import FadeIn from 'react-fade-in';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

//Import Section Title
import SectionTitle from "../common/section-title";


import ayatana from "../../assets/images/Ayatana_logo_final 2 1 (1).png";
import untact from "../../assets/images/Frame1.png";
import Riilearn from "../../assets/images/Untact (2).png";
import optifarm from "../../assets/images/Optifarm (2).png";

//Import Images
import work1 from "../../assets/images/portfolio/img-1.jpg";
import work2 from "../../assets/images/portfolio/img-2.jpg";
import work3 from "../../assets/images/portfolio/img-3.jpg";
import work4 from "../../assets/images/portfolio/img-4.jpg";
import work5 from "../../assets/images/portfolio/img-5.jpg";
import work6 from "../../assets/images/portfolio/img-6.jpg";
// import { useHistory } from 'react-router-dom';



const Portfolio = () => {
    const navigate = useNavigate();
   
    const [data] = useState([
        { icon: ayatana, title: "Curated startup pipeline", desc: "Invest in early-stage startups with high-potential product ideas, identified and vetted by our expert team, offering investors exclusive access before they gain widespread recognition." },
        { icon: untact, title: "Techno-market exposure", desc: "Invest in startups developing and commercializing cutting-edge technologies for potential significant returns, offering investors exposure to these lucrative markets." },
        { icon: Riilearn, title: "Collaborative investment", desc: "By collaborating with top regional and global investors, we provide our investors the chance to co-invest alongside seasoned professionals in promising startup ventures." },
        { icon: optifarm, title: "Engagement", desc: "We actively support our portfolio companies, providing access to experts, guidance, and comprehensive support to drive their success." },
    ]);

    const handleAyatana = () =>{
  
        window.open("https://ayatana.netlify.app/","_blank");
    
    }


    const handleIsibisi = () =>{
  
        window.open("https://isibisi.netlify.app/","_blank");
    
    }
    

    const handleUntact = () => {
      navigate(`/Untact`);
       };


       const handleOptifarm = () => {
        navigate(`/Optifarm`);
         };

        return (
            <React.Fragment>
                <section className="section" id="portfolio">
                    <Container>
                    <SectionTitle
                        title="Portfolio"
                        // subtitle="Portfolio"
                        // desc="Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin."
                    />
                
                        {/* <Row className="mt-5 pt-2">
                            <Col lg={12}>
                                <div className="text-center">
                                    <ul className="col container-filter portfolioFilte list-unstyled mb-0" id="filter">
                                        <li className="ml-1"><Link to="#" onClick={() => this.setCategory("All")} className={this.state.displayCategory === "All" ? "categories active" : "categories"}>All</Link></li>
                                        <li className="ml-1"><Link to="#" onClick={() => this.setCategory("Brand")} className={this.state.displayCategory === "Brand" ? "categories active" : "categories"}>Brand</Link></li>
                                        <li className="ml-1"><Link to="#" onClick={() => this.setCategory("Design")} className={this.state.displayCategory === "Design" ? "categories active" : "categories"}>Design</Link></li>
                                        <li className="ml-1"><Link to="#" onClick={() => this.setCategory("Graphic")} className={this.state.displayCategory === "Graphic" ? "categories active" : "categories"}>Graphic</Link></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                
                        <div className="port portfolio-masonry mt-5">
                            <div className="portfolioContainer row">
                            { this.state.projects
                            .filter(
                                ({ category }) =>
                                this.state.displayCategory === category || this.state.displayCategory === "All"
                            )
                            .map(({ title, image, subtitle }, key) => (
                                
                                <Col lg={4} md={4} key={key} className="p-3">
                                    <FadeIn>
                                        <div className="item-box">
                                            <Link to="#" onClick={(event) => {event.preventDefault(); this.setState({ isOpen: true, photoIndex : key })}} className="cbox-gallary1 mfp-image" title="Project Name">
                                                <img className="item-container rounded" src={image} alt="work-img" />
                                                <div className="item-mask">
                                                    <div className="item-caption">
                                                        <h5 className="f-18">{title}</h5>
                                                        <p className="text-primary">{subtitle}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </FadeIn>
                                </Col>
                                
                            ))} */}
                                
                                {/* lightbox for portfolio images */}
                                {/* { isOpen && (
                                    <Lightbox
                                        mainSrc={images[photoIndex]}
                                        nextSrc={images[(photoIndex + 1) % images.length]}
                                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                        imagePadding={100}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + images.length - 1) % images.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + 1) % images.length,
                                        })
                                        }
                                        imageCaption="Project Name"
                                    />
                            ) }
                            </div>
                        </div>
                    </Container> */}


<div className='row'>
<Col lg={3} md={4}  className="p-3" >
                                    <FadeIn>
                                        <div className="item-box ayatanalogo-div" style={{border:"1px solid #F0F0F0",borderRadius:"10px",boxShadow:"1px solid #F0F0F0"}} onClick={handleAyatana}>
                                           
                                                <img className="item-container rounded" src={ayatana} alt="work-img"  />
                                                <div className="item-mask">
                                                    <div className="item-caption">
                                                        <h5 className="f-18" >Ayatana</h5>
                                                        {/* <p className="text-primary">subtitle</p> */}
                                                    </div>
                                                </div>
                                          
                                        </div>
                                        <h5 style={{textAlign:"center",marginTop:"10px",color:"#888888"}}>Ayatana</h5>
                                        <div style={{textAlign:"center"}}>
                                        {/* <a href="" >Explore here</a> */}
                                        </div>
                                    </FadeIn>
                                </Col>

                                <Col lg={3} md={4}  className="p-3">
                                    <FadeIn>
                                        <div className="item-box isibisilogo-div" style={{border:"1px solid #F0F0F0",borderRadius:"10px",boxShadow:"1px solid #F0F0F0"}} onClick={handleIsibisi}>
                                           
                                                <img className="item-container rounded" src={untact} alt="work-img"  />
                                                <div className="item-mask">
                                                    <div className="item-caption">
                                                        <h5 className="f-18">Isibisi</h5>
                                                        {/* <p className="text-primary">subtitle</p> */}
                                                    </div>
                                                </div>
                                          
                                        </div>
                                        <h5 style={{textAlign:"center",marginTop:"10px",color:"#888888"}}>Isibisi</h5>
                                        <div style={{textAlign:"center"}}>
                                        {/* <a href="" >Explore here</a> */}
                                        </div>
                                    </FadeIn>
                                </Col>

                                <Col lg={3} md={4}  className="p-3">
                                    <FadeIn>
                                        <div className="item-box untactlogo-div" style={{border:"1px solid #F0F0F0",borderRadius:"10px",boxShadow:"1px solid #F0F0F0"}} onClick={handleUntact}  >
                                           
                                                <img className="item-container rounded" src={ Riilearn } alt="work-img"  />
                                                <div className="item-mask">
                                                    <div className="item-caption">
                                                        <h5 className="f-18">Untact</h5>
                                                        {/* <p className="text-primary">subtitle</p> */}
                                                    </div>
                                                </div>
                                          
                                        </div>
                                        <h5 style={{textAlign:"center",marginTop:"10px",color:"#888888"}}>Untact</h5>
                                        <div style={{textAlign:"center"}}>
                                        {/* <a href="" >Explore here</a> */}
                                        </div>
                                    </FadeIn>
                                </Col>

                                <Col lg={3} md={4}  className="p-3">
                                    <FadeIn>
                                        <div className="item-box optifarmlogo-div" style={{border:"1px solid #F0F0F0",borderRadius:"10px",boxShadow:"1px solid #F0F0F0"}} onClick={handleOptifarm}>
                                           
                                                <img className="item-container rounded" src={optifarm} alt="work-img"  />
                                                <div className="item-mask">
                                                    <div className="item-caption">
                                                        <h5 className="f-18">OptiFarm</h5>
                                                        {/* <p className="text-primary">subtitle</p> */}
                                                    </div>
                                                </div>
                                          
                                        </div>
                                        <h5 style={{textAlign:"center",marginTop:"10px",color:"#888888"}}>OptiFarm</h5>
                                        <div style={{textAlign:"center"}}>
                                        {/* <a href="" >Explore here</a> */}
                                        </div>
                                    </FadeIn>
                                </Col>

                                </div>

                    </Container>
                </section>
            </React.Fragment>
        );
    
}

export default Portfolio;