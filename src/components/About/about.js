import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

// import { Container, Row } from "reactstrap";
import {  Col } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import AboutBox from "./about-box";
import BestSkills from "./bestSkills";
import Backgrounds from '../../assets/images/nos.png';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                { icon : "mdi mdi-monitor", title : "Web design", desc : "Aliquam tempor an tidunt liberonon feugiat quam risu tortor." },
                { icon : "mdi mdi-nfc-variant", title : "Development", desc : "Aliquam tempor an tidunt liberonon feugiat quam risu tortor.", isLight : true },
                { icon : "mdi mdi-lightbulb-on-outline", title : "Branding", desc : "Aliquam tempor an tidunt liberonon feugiat quam risu tortor.-" },
            ]
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <section className="sections " id="about">
                    {/* <Container>
                        <SectionTitle
                            title="About Agency"
                            subtitle="WHO WE ARE?"
                            desc="Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin."
                        />

                        <Row className="mt-5 pt-2">
                            <AboutBox data={this.state.data} />
                        </Row>
                    </Container> */}


<Container>
                <Row className="align-items-center justify-content-center">
                  <Col lg={6}>
                    <h1 className="display-4 font-weight-medium mb-4">About Xircular</h1>
                    {/* <h1 className="hero-1-title font-weight-normal text-dark mb-4">We Help You To Boost Your Business</h1> */}
                    <p className="text-muted mb-4 pb-3">Xircular, a venture studio is like a magical workshop where deep tech and commerce startups dreams come to life with a sprinkle of enchantment.We believe that deeptech has the potential to solve some of the world's most pressing problems. By partnering with exceptional founders, we are helping to make that vision a reality.</p>
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

                {/* <BestSkills/> */}
            </React.Fragment>
        );
    }
}

export default About;