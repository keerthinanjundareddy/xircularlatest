import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Logo
// import logo from "../../assets/images/logo.png";

//Import Footer link
// import FooterLinks from "./footer-links";
import LinkSection from "./link-section";

import '../../Ayatanassets/css/AyatanaOwn.css'

import imagetwo from '../../Ayatanassets/images/Ayatana_logo_final_cropped.png';
import facebookone from '../../Ayatanassets/images/instafinals (4).png';
import instaone from '../../Ayatanassets/images/instafinals (1).png';
import twitterone from '../../Ayatanassets/images/instafinals (3).png';
import linkedinone from '../../Ayatanassets/images/instafinals (2).png';
import youtube from '../../Ayatanassets/images/black-and-white-youtube-icon 1.png';

function Footer(){
    // state = {
    //     links1 : [
    //         { link : "#", title : "Web Design" },
    //         { link : "#", title : "Graphic Design" },
    //         { link : "#", title : "Power & Energy" },
    //         { link : "#", title : "Solar Power" },
    //         { link : "#", title : "Green energy" },
    //     ],
    //     links2 : [
    //         { link : "#", title : "About Us" },
    //         { link : "#", title : "Help & Support" },
    //         { link : "#", title : "Privacy Policy" },
    //         { link : "#", title : "Terms & Conditions" },
    //         { link : "#", title : "FAQ" },
    //     ],
    //     socials : [
    //         { class : "bg-twitter", icon : "ti-twitter-alt", link : "#" },
    //         { class : "bg-dribbble", icon : "ti-dribbble", link : "#" },
    //         { class : "bg-linkedin", icon : "ti-linkedin", link : "#" },
    //         { class : "bg-googleplus", icon : "ti-google", link : "#" },
    //         { class : "bg-facebook", icon : "ti-facebook", link : "#" },
    //     ]
    // }
    function handlefacebook() {
        window.open('https://www.facebook.com/ayatanaworld', '_blank');
        
    }

    function handleinsta() {
        window.open('https://www.instagram.com/ayatanaworld/', '_blank');
        
    }

    function handlelinkedin() {
        window.open('https://www.linkedin.com/company/ayatanaworld/', '_blank');
        
    }

    function handleyoutube() {
        window.open('https://www.youtube.com/channel/UCm3EoNuOSaDIPGWV1rlr0Pw', '_blank');
        
    }

    function handletwitter() {
        window.open('https://www.youtube.com/channel/UCm3EoNuOSaDIPGWV1rlr0Pw', '_blank');
        
    }
 
        return (
            <React.Fragment>
                <footer className="footer bg-lightgray myownfooter">
                    <Container>
                        <Row>

                            {/* <Col md="4" sm="12"> */}
                                {/* <img src={logo} alt="logo" height="24" /> */}
                                {/* <div style={{color:"black",fontSize:"20px"}}>Ayatana</div> */}

                                <div className="full-footer-cont">
                               
                               <div className='footer-flex-box-container'>
                               <div>
                                <img src={ imagetwo }  style={{width:"180px",height:"120px"}} />
                                </div>
                                <div className='footer-image-container'>
                                <img src={ facebookone } width={30} height={30} className="facebook-section" onClick={handlefacebook} />
                                <img src={ instaone } width={30} height={30} className="facebook-section"  onClick={handleinsta} />
                                <img src={ linkedinone }  width={30} height={30} className="facebook-section" onClick={handlelinkedin}  />
                                <img src={ twitterone }  width={30} height={30} className="facebook-section" onClick={handletwitter}  />
                                <img src={ youtube }  width={30} height={30} className="facebook-section" onClick={handleyoutube}  />
                                </div>
                                </div>
                              
                                 <div>
                                 <hr className="" />
                                <p className="copy-rights" style={{textAlign:"center",paddingTop:"5px"}}> 2024 © Copyright Ayatana.All Rights Reserved</p>
                                </div>

                                </div>
                                
                                {/* <p className="margin-t-20">The digital marketing platform that connects small businesses with their target audience.</p> */}

                                {/* <ul className="list-inline social">
                                    {
                                        this.state.socials.map((social, key) =>
                                            <li key={key} className="list-inline-item">
                                                <Link to={social.link} className={social.class + " mr-1"}><i className={social.icon}></i></Link>
                                            </li>
                                        )
                                    }
                                </ul> */}
                            {/* </Col> */}

                            {/* <Col md={{size:3, offset : 2}} sm="6">
                                <LinkSection title="Solutions" links={this.state.links1} />
                            </Col> */}

                            {/* <Col md="6" sm="6"> */}
                               {/* Discover Phygital Santhe Website Here */}
                                 {/* <button style={{ border:"none",outline:"none",border:"1px solid #f56363",backgroundColor:"#f56363",borderRadius:"20px",color:"white",width:"300px",height:"40px"}}><a href="https://incomparable-hamster-92fd22.netlify.app/"  target="_blank" style={{color:"white"}}><b>EXPLORE PHYGITAL</b></a></button> */}
                            {/* <LinkSection title="Useful Links" links={this.state.links2}  /> */}
                            {/* </Col> */}

                        </Row>

                    </Container>
                </footer>
                {/* Render footer links */}
                {/* <FooterLinks/> */}
            </React.Fragment>
        );
    }


export default Footer;