import React, { Component } from 'react';
import { Container, Row,Col } from "reactstrap";

//Import Blog Box
import CounterBox from "./counter-box";
import productrec from "../../Ayatanassets/images/Productrecomend.png"
import productvis from "../../Ayatanassets/images/Product visual.png"
import cus from "../../Ayatanassets/images/Customer support.png"

class Counter extends Component {
    state = {
        counters : [
            { icon : "ti-timer", end : 10, postfix : "k+", isPostfix : true, title : "Working Hours" },
            { icon : "ti-briefcase", end : 548, title : "Completed Projects" },
            { icon : "ti-user", end : 89, title : "No. of Clients" },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className="section  " id="counter">
                    <Container>
                    {/* <Row> */}
                {/* <Col sm="12"> */}
                    <div className="text-center"  style={{textAlign:"center",fontSize:"30px",marginBottom:"40px"}}>
                        <b >Mission</b>
                    </div>
                {/* </Col> */}
                {/* </Row> */}
                {/* <Row> */}
                {/* <Col sm="12"> */}
                    {/* <div className="text-center"> */}
                        <div  style={{fontSize:"18px"}} >We help brands create Phygital stores that combine the physical and digital worlds to create a more immersive, engaging, and efficient shopping experience for customers. We use AI to power a variety of phygital experiences, including:</div>
                    {/* </div> */}
                {/* </Col> */}
                {/* </Row> */}



                <div className='flexbox-container-three'>
      {/* <div  className='item-section'> */}
        <div className='item-section-three'>
                    {/* <div style={{width:"100%",height:"30vh"}}><img src={ai} alt="ai" style={{width:"100%",height:"100%",objectFit:"contain"}} /></div> */}
                    {/* <div style={{paddingLeft:"30px",paddingRight:"30px",paddingBottom:"30px"}}> */}
                    <div className='content-flexbox-container'>
                    <div ><img src={productrec} alt="icons" /></div>
                    <div>
                    <div style={{fontSize:"18px"}} ><b>	Product recommendations</b></div>
                    <div style={{fontSize:"15px"}}>We use AI to recommend products that customers are likely to love.</div>
                    </div>
                    </div>
                   
                    {/* </div> */}
                    </div>
                    <div  className='item-section-three'>
                    {/* <div style={{width:"100%",height:"30vh"}}><img src={productsampling } alt="ai" style={{width:"100%",height:"100%",objectFit:"contain"}} /></div> */}
                    {/* <div style={{paddingLeft:"30px",paddingRight:"30px",paddingBottom:"30px"}}> */}
                    <div className='content-flexbox-container-two'>
                    <div ><img src={productvis} alt="icons" /></div>
                    <div>
                    <div style={{fontSize:"20px"}}><b >Product Visualization</b></div>
                    <div style={{fontSize:"15px"}}>We use AI to create virtual experiences that allow customers to try products before they buy them. It could be Virtual try-on of clothes, Furniture visualization at home, Car 360 views to name few.</div>
                    </div>
                    </div>
                    {/* </div> */}
                    {/* <button className='favourite-btn' >Add to favourites</button> */}
</div>
<div className='item-section-three'>
{/* <div style={{width:"100%",height:"30vh"}}><img src={samp } alt="ai" style={{width:"100%",height:"100%",objectFit:"contain"}} /></div> */}
                    {/* <div style={{paddingLeft:"30px",paddingRight:"30px",paddingBottom:"30px"}}> */}
                    <div className='content-flexbox-container-three'>
                    <div><img src={cus} alt="icons" /></div>
                    <div>
                    <div style={{fontSize:"20px"}} ><b>Customer service</b></div>
                    <div style={{fontSize:"15px"}}>We use AI to answer customer questions, resolve customer complaints, and provide other customer service support.</div>
                    </div>
                    </div>
                    {/* </div> */}
                    {/* <button className='favourite-btn' >Add to favourites</button> */}
                    </div>
               {/* </div> */}
      </div>


      <Row>
                {/* <Col sm="12"> */}
                    <div >
                        <div  style={{fontSize:"18px",textAlign:"center"}} className='bottoms-section'>We believe in phygital retail and help brands create unforgettable shopping experiences</div>
                        </div>
                {/* </Col> */}
                </Row>


         
            
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Counter;