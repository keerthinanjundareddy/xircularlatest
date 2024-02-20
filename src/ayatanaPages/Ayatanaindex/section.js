import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import Carousel from 'react-bootstrap/Carousel';
// import carousel1 from "../../assets/images/Gallery (1).png";
// import carousel2 from "../../assets/images/Gallery (1).png";
// import carousel3 from "../../assets/images/Carosel 4.png";
// import carousel1 from '../images/Gallery (1).png';
// import carousel2 from '../images/Gallery (1).jpg';
// import carousel3 from '../images/Gallery (1).png';

//Importing Modal
import ModalSection from '../../ayatanacomponents/common/ModalSection';

//Import Image
// import img1 from "../../assets/images/bg-home.jpg";

import Backgrounds from '../../Ayatanassets/images/ye.png'

class Section extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            height:window.innerHeight
        }
        this.setFullScreen.bind(this);
        this.callModal.bind(this);
    }

    callModal = () => {
        this.refs.child.openModal();
    }

    setFullScreen = () => {
        var topSectionEl = document.getElementById('home-fullscreen');
        if(topSectionEl.clientHeight>0) {
            var windowHeight = window.innerHeight;
            this.setState({ 
                height: windowHeight
            });
        }
    }

    componentDidMount(){
        this.setFullScreen();
        window.addEventListener("resize", this.setFullScreen);
    }

    componentWillUnmount(){
        window.addEventListener("resize", this.setFullScreen);
    }
    
    render() {
        return (
            <React.Fragment>
            <section className=" sections bg-lightgray" id="home"  >
                 <div className="home-fullscreen" id="home-fullscreen" style={{height:"100%"}}>
                    <div style={{textAlign:"center",paddingTop:"20px",paddingBottom:"20px",fontSize:"30px"}}><b>About Us</b></div>

                {/* <Container> */}
                    
                    {/* <Row> */}
                        {/* <Col md="12"> */}
                            {/* <div className="home-fullscreen" id="home-fullscreen" style={{height : this.state.height+"px"}}> */}
                                {/* <div className="full-screen"> */}
                                    {/* <div className="home-wrapper home-wrapper-alt" style={{backgroundColor:"white"}} > */}

                                       
                                    <Container>
                <Row className=" " style={{paddingBottom:'20px'}}>
               
                  <Col lg={6} >
                    {/* <h1 className="display-4 font-weight-medium mb-4">Ayatana</h1> */}
                    {/* <h1 className="display-4 font-weight-medium mb-4">Phygital perfection:where innovation meets experience</h1> */}
                    {/* <h2 className="display-4 font-weight-medium mb-4"></h2> */}
                    {/* <h1 className="hero-1-title font-weight-normal text-dark mb-4">We Help You To Boost Your Business</h1> */}
                    {/* <p className="text-muted mb-4 pb-3">Ayatana is a phygital retail platform that uses AI to blend the physical and digital worlds. We offer brands a comprehensive suite of tools and capabilities to optimize their operations and engage customers in groundbreaking ways. */}
                    {/* Whether you are a small boutique or a global brand, our platform can help you connect with your customers on a deeper level and achieve remarkable business results. Join us on this exciting journey as we redefine the future of retail through the fusion of physical and digital realms, guided by the power of AI.</p> */}
                    {/* <p className="text-muted mb-4 pb-3"></p> */}

                    {/* <h1>Welcome to the future of shopping. Welcome to Ayatana!</h1> */}

                    {/* <Link to="#" className="btn btn-primary">Get Started <span className="ml-2 right-icon">&#8594;</span></Link> */}


                    <h2  style={{fontSize:"25px",color:""}}>AYATANA </h2>
                                              
                                              <div className="">Ayatana is a phygital retail platform that uses AI to blend the physical and digital worlds. We offer brands a comprehensive suite of tools and capabilities to optimize their operations and engage customers in groundbreaking ways.</div> <br />
                                              <div className="" >Whether you are a small boutique or a global brand, our platform can help you connect with your customers on a deeper level and achieve remarkable business results. Join us on this exciting journey as we redefine the future of retail through the fusion of physical and digital realms, guided by the power of AI.</div><br />
                                              <h3 style={{color:"#8F8F8F"}}>Welcome to the future of shopping. Welcome to Ayatana!</h3>
                                              
                  </Col>

                  <Col lg={6} md={10}>
                    <div className=" mt-0 mt-lg-0" >
                      <img src={Backgrounds} alt="" className="img-fluid d-block mx-auto" />
                    </div>
                  </Col>
                  
                </Row>
              </Container>

                                    {/* </div> */}
                                {/* </div> */}
                            {/* </div> */}
                        {/* </Col> */}
                    {/* </Row> */}
                    {/* Render ModalSection Component for Modal */}
                    {/* <ModalSection ref="child" channel='vimeo' videoId='99025203' /> */}
                {/* </Container> */}
                </div>
            </section>
            </React.Fragment>
        );
    }
}

export default Section;