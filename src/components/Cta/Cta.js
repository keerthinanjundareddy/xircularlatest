import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import SectionTitle from "../common/section-title";
import Cycle from '../../assets/images/Frames.png'

class Cta extends Component {
    render() {
        return (
            <React.Fragment>
            <section className="section "  id="cta">
            <Container>

<Container style={{fontSize:"18px"}}>
        <SectionTitle
           title ="How it works"
        //    subtitle ="We follow a four-step process to create value for our investors and our startups:"
         
            desc="We enable co-founders to build and scale successful companies, creating value for investors, customers, and the world."

            // destwo:"We follow a four-step process to create value for our investors and our startups:"
         
        />
        {/* How it works */}
        </Container>

        <Container style={{fontSize:"18px"}}>
        <SectionTitle
        //    title ="How it works"
        //    subtitle ="We follow a four-step process to create value for our investors and our startups:"
         
            desc="We follow a four-step process to create value for our investors and our startups"

            // destwo:"We follow a four-step process to create value for our investors and our startups:"
         
        />
        {/* How it works */}
        </Container>
    <Row>
        <Col lg={12}>
            {/* <div className="text-cebter">
                <h2 className="text-white text-center">Become a part of Xeril bussiness community today</h2>
                <p className=" text-white text-center mt-3">Molestias excepturi sint occaecati cupiditate non provident</p>
                <div className="text-center mt-4">
                    <div>hi</div>
                    <Link to="#" className="btn btn-primary mt-2">Get Started</Link>
                </div>
            </div> */}
            <div className='image-container'>
                <img src={Cycle} alt=""  style={{width:"100%"}}/>
            </div>
        </Col>
    </Row>
</Container>
            </section> 
            </React.Fragment>
        );
    }
}

export default Cta;