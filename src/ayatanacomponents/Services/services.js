import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Service Box
import ServiceBox from "./service-box";
// import imageone from '../../assets/images/team/team1.jpg'
// imports brands from '../../assets/images/team/c.png'

import '../../Ayatanassets/css/AyatanaOwn.css'
class Services extends Component {
    state = {
        services1 : [
           { title : "Enhanced customer experience", icon:require("../../Ayatanassets/images/Enhanced customer experience.png") ,desc : "Ayatana engage customers through physical interaction, personalized recommendations, and access to digital content for an immersive experience. " },
           { title : "	Enhanced customer insights", icon :require("../../Ayatanassets/images/Enhanced customer insights.png") , desc : "Ayatana provide valuable consumer data for targeted marketing and product improvement." },
           { title : "Reduced costs", icon : require("../../Ayatanassets/images/Reduced costs.png") , desc : "Save on showroom expenses with our phygital platform for product showcasing." },
        ],   
        services2 : [
            { title : "Physical & Virtual Experience", icon : require("../../Ayatanassets/images/Physical & Virtual Experience.png") , desc : "Ayatana offer immersive, personalized, and convenient shopping experiences by merging the physical and digital realms." },
            { title : "Increased Brand awareness", icon : require("../../Ayatanassets/images/Increased Brand awareness.png") , desc : "strategies generate buzz, create unique experiences, and enhance brand awareness, differentiation, and attention." },
            { title : "Immersive Product experience", icon :require("../../Ayatanassets/images/Immersive Product experience.png") , desc : "Fascinate customers with VR and AR experiences, encouraging innovative brand engagement."},
        

         ],
        services3 : [
            { title : "Product sampling opportunities", icon : require("../../Ayatanassets/images/Product sampling opportunities.png") , desc : "Boost brand loyalty and conversions with our targeted product sampling platform." },
            { title : "Greater reach", icon :require("../../Ayatanassets/images/Greater reach.png") , desc : "Offering high-traffic locations for brands, we provide excellent reach and accessibility to target audiences." },
            { title : "Competitive edge", icon : require("../../Ayatanassets/images/Competitive edge.png") , desc : "Stay relevant and competitive with phygital stores, offering innovative and immersive shopping experiences through cutting-edge technologies and trends." },
        ],     
    }
    render() {
        return (
            <React.Fragment>
    {/* <section className={this.props.isBgWhite === true ? "section" : "section bg-lightgray"} id="services"> */}
    <section className='section' id="services">

     {/* <section className="section bg-lightgray" id="services"> */}
        <Container>
            <SectionTitle title1="Why Ayatana" />          

            <Row >
                <ServiceBox services={this.state.services1} />                
            </Row>      

            <Row>
                <ServiceBox services={this.state.services2} />                
            </Row> 

            <Row>
                <ServiceBox services={this.state.services3} />                
            </Row>       

        </Container>
        
    </section>
            </React.Fragment>
        );
    }
}

export default Services;