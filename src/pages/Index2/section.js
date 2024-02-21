import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Importing Modal
import ModalSection from '../../components/common/ModalSection';
import Backgrounds from '../../assets/images/res.png';
// import '../../assets/css/Own.css'
class Section extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
        this.callModal.bind(this)
    }

    callModal = () => {
        this.refs.child.openModal();
    }
    
    render() {
        return (
            <React.Fragment>
            {/* <section className="bg-home home-half" id="home"> */}
                {/* <div className="bg-overlay"></div> */}
                {/* <div className="home-center"> */}
                    {/* <div className="home-desc-center"> */}
                        {/* <Container> */}
                            {/* <Row className="justify-content-center"> */}
                                {/* <Col md={12}> */}
                                    {/* <div className="home-content text-white"> */}
                                        {/* <div className="watch-video mt-5"> */}
                                        {/* <Link onClick={this.callModal} to="#" className="video-play-icon-trigger text-white"> */}
                                                {/* <i className="mdi mdi-play play-icon-circle play play-icon f-30"></i> */}
                                            {/* </Link> */}
                                        {/* </div> */}
                                        {/* // <h5 className="sub-title mt-4 text-white pt-2 text-uppercase">Xeril Template</h5> */}
                                        {/* <h1 className="title mt-4 text-white text-uppercase">We're Giving Design <br/> Solution & Idea.</h1> */}
                                        {/* <div className="pt-4 mt-1"> */}
                                            {/* <Link to="#" className="btn btn-outline-white mt-2 mr-3">Get Started</Link> */}
                                            {/* <Link to="#" className="btn btn-primary ml-1 mt-2">Purchase Now</Link> */}
                                        {/* </div> */}
                                    {/* </div> */}
        
        
                                    
                                    
                                {/* </Col> */}
                            {/* </Row> */}
                        {/* </Container> */}
                        {/* Render ModalSection Component for Modal */}
                        {/* <ModalSection ref="child" channel='vimeo' videoId='99025203' /> */}
                    {/* </div> */}
                {/* </div> */}
            {/* </section> */}
            <section className="section"  id="home" style={{backgroundColor:"#EDF5FF",paddingTop:"150px"}}>
          <Container>
            <Row className="align-items-center justify-content-center">
              <Col lg={6}>
                <h1 className="display-4 font-weight-medium mb-4 text-uppercase" style={{color:"#03272E",fontSize:"60px"}}>Xircular</h1>
                <h4 className="hero-1-title font-weight-normal text-dark mb-4" style={{color:"#03272E",fontSize:"40px"}}>where ideas <br/> Become reality</h4>
                {/* <h1 className="hero-1-title font-weight-normal text-dark mb-4">where ideas</h1> */}
                {/* <p className="text-muted mb-4 pb-3">Become reality</p> */}
                {/* <Link to="#" className="btn btn-primary">Get Started <span className="ml-2 right-icon">&#8594;</span></Link> */}
              </Col>
              <Col lg={6} md={10}>
                <div className=" mt-5 mt-lg-0">
                  <img src={Backgrounds} alt="" className="img-fluid d-block mx-auto" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

            </React.Fragment>
        );
    }
}

export default Section;