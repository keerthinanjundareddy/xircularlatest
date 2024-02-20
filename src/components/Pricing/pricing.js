import React, { Component } from 'react';
import { Container, Row } from "reactstrap";
import { Col } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Pricing
// import PricingBox from './pricing-box';
import { ReactComponent as Money } from "../../assets/images/money.svg"

import '../../assets/css/Own.css'
class Pricing extends Component {
    // state = {
    //     pricings : [
    //        { title : "Classic", price : 27, duration : "Week",
    //             features : [
    //                 { title : "Customizad Plans" },
    //                 { title : "Billing Report" },
    //                 { title : "Access to Asana" },
    //             ]
    //         },
    //         { title : "Popular", price : 79, duration : "Month", isNew : true,
    //             features : [
    //                 { title : "Customizad Plans" },
    //                 { title : "Billing Report" },
    //                 { title : "Access to Asana" },
    //             ]
    //         },
    //         { title : "Ultimate", price : 99, duration : "Years",
    //             features : [
    //                 { title : "Customizad Plans" },
    //                 { title : "Billing Report" },
    //                 { title : "Access to Asana" },
    //             ]
    //         },
    //     ]
    // }
    state = {
        data : [
            { icon : require("../../assets/images/012-money.png") , title : "Funding", desc : "We provide our startups with the capital they need to bring their ideas to life." },
            { icon : require("../../assets/images/Brillliant Mind@2x.png"), title : "Talent", desc : "We provide inhouse talents and also help connect our startups to get the first MVP aand scaling." },
            { icon : require("../../assets/images/Hand shake@2x.png"), title : "	Partnerships", desc : "We help our startups build relationships with key players in the ecosystem." },
             { icon :require("../../assets/images/036-like.png"), title : "Validation", desc : "We provide our startups with the feedback and support they need to refine their ideas and make them successful." },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className="section " id="pricing" style={{backgroundColor:"#EDF5FF"}}>
                    {/* <Container>
                    <SectionTitle
                        title="OUR PRICING"
                        subtitle="OFFERS"
                        desc="Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin."
                    />

                        <Row className="mt-5 pt-2">
                            <PricingBox pricings={this.state.pricings} />
                        </Row>
                    </Container> */}
                   
                   {/* <div>What We Offer</div>
                   <div style={{textAlign:"center"}}> Xircular provides a comprehensive suite of support and expertise to help our partners succeed.We believe that by providing our partners with the full support and expertise they need, we can help them build and scale successful companies.</div> */}

<Container style={{fontSize:"18px"}}>
                        <SectionTitle
                            title="What we Offer"
                            // subtitle="About Xircular"
                            desc="Xircular provides a comprehensive suite of support and expertise to help our startups succeed.
                           "
                         
                        />
                       

                        {/* <Row className="mt-5 pt-2">
                            <AboutBox data={this.state.data} />
                        </Row> */}
                    </Container>

                     <div className="xircular-flexbox-container" >
                            {/* <AboutBox data={this.state.data} /> */}
                            {/* <PricingBox pricings={this.state.data} /> */}
                      {     this.state.data.map((data, key) =>{
                            return( <div className='xircular-item-section' key={key}  >
                            {/* <div className={data.isLight === true ? " box-shadow rounded text-center mt-4" : "  box-shadow rounded text-center mt-4"}  > */}
                                <i className={data.icon + " text-primary"}><img src={data.icon} alt="money-icon" style={{width:"50px"}} /></i>
                                {/* <img>{data.icon}</div> */}
                                <h5 className="f-18 mt-3">{data.title}</h5>
                                {/* <div className="lighlight-border mt-3"></div> */}
                                <p className="text-muted mt-3 mb-0">{data.desc}</p>
                                
                                {/* <p className="text-muted mt-3 mb-0">{data.de}</p> */}
                            {/* </div> */}
                        </div>)
                           
    })}
                        </div>
                        <Container style={{fontSize:"18px"}}>
                        <SectionTitle
                            // title="What we Offer"
                            // subtitle="About Xircular"
                            desc="
                            We believe that by providing our startups/cofounder with the full support and expertise they need, we can help them build and scale successful companies."
                         
                        />
                              </Container>
                        
                </section>
            </React.Fragment>
        );
    }
}

export default Pricing;