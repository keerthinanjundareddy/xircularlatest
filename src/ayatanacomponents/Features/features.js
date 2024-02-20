import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import '../../Ayatanassets/css/style.css'
//Import Images
// import mac from "../../assets/images/mac.png";
// import watch1 from "../../assets/images/watch-1.png";
// import FeatureBox from '../common/feature-box';
// import Kioskimage from "../../assets/images/kioskimage.jpg"
// import Vrar from "../../assets/images/Vrar.JPG"
// import Qrimage from "../../assets/images/Qrimage.jpeg"
// import kiosks from "../../assets/images/kiosk-image.jpg"
// import thumb from "../../assets/images/thumb.jpg"
// import multimedia from "../../assets/images/kiosk-white.jpg"
// import thumbs from "../../assets/images/thumb(1).jpg"
// import qrcodes from "../../assets/images/qrcodes.jpg"
// import Picture1 from "../../assets/images/Picture1.png"

import '../../Ayatanassets/css/AyatanaOwn.css'


// import Scanner from "../../assets/images/Scanner.png"
// import vrnew from "../../assets/images/VR (3).png"
// import Gallery from "../../assets/images/video.png"
// import Mobilescanner from "../../assets/images/Mobile scanner.png"
// import digitalkiosk from "../../assets/images/Kiosk (1) (2).png"
// vrnew

// new images
import ai from  "../../Ayatanassets/images/c.png"
// import retailzone from  "../../assets/Ownimages/AI based Virtual Assistants.png"
import productsampling from  "../../Ayatanassets/images/Immersive Retail Experience Zones.png"
import vr from  "../../Ayatanassets/images/VR AND AR.png"
import interactivepanels from  "../../Ayatanassets/images/Kiosk (3).png"
import engaging from  "../../Ayatanassets/images/Gallery (3).png"
import digital from  "../../Ayatanassets/images/Gallery-1.png"
import samp from "../../Ayatanassets/images/Immersive Product Sampling.png"


class Features extends Component {
    render() {
        return (
            <React.Fragment>
    {/* <section className={this.props.isBgWhite === true ? "section" : "section bg-lightgray"} id="features"> */}
    <section className='section bg-lightgray' id="features" >
        <Container>
            <Row>
                <Col sm="12">
                    <div className="title-box text-center">
                        <div style={{fontSize:"30px"}}><b>Our Features</b></div>
                    </div>
                </Col>
            </Row>
            

            {/* <Row className="verticalone">
                <Col sm="5">
                    <FeatureBox
                        number="1"
                        title="Virtual reality (VR) and Augmented reality (AR) "
                        desc1="Virtual reality (VR) and Augmented reality (AR)  are immersive digital technologies 
                        that creates a completely virtual environment with the use of a headset device."
                        // desc2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        link="#"
                    />
                </Col>
                

                <Col sm={{size:6, offset : 1}}>
                    <img src={vrnew} className="img-fluid" alt="img" style={{borderRadius:"10px"}}/>
                </Col>
                
            </Row> */}
            

            {/* <Row className="verticaltwo">
                <Col sm="5">
                    <img src={digitalkiosk} className="img-fluid" alt="img" />
                </Col>
                <Col sm={{size:6, offset : 1}}>

                    <FeatureBox
                        number="2"
                        title=" Interactive Panels "
                        desc1=" They  are typically designed to be easy to use, intuitive, and visually appealing,It  is a technology-based solution that provide a self-service option to their customers." 
                        // desc2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        link="#"
                    />

                </Col>
                

            </Row> */}


            
            {/* <Row className="vertical-content features">
                <Col sm="5">
                    <FeatureBox
                        number="3"
                        title="  High-quality images and videos"
                        desc1="High-quality images and videos  refers to visual content that is produced at a high resolution  with superior image and video quality on the interactive panels.  "
                        
                        // desc2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        link="#"
                    />
                </Col>
                

                <Col sm={{size:6, offset : 1}}>
                    <img src={ Gallery} className="img-fluid" alt="img" style={{borderRadius:"10px"}} />
                </Col>
                
            </Row> */}


{/*             
            <Row className="vertical-content features">
                <Col sm="5">
                    <img src={Mobilescanner } className="img-fluid" alt="img" />
                </Col>
                <Col sm={{size:6, offset : 1}}>

                    <FeatureBox
                        number="4"
                        title="  Mobile QR code Scanner "
                        desc1= " QR code scanner is a innovative technology feature used in our digital kiosk setup to enhance the customer experience, it is a two-dimensional barcode that can be scanned using a smartphone camera to access the product information in smart phone."
                        // desc2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        link="#"
                    />

                </Col>
                

            </Row> */}


<div className='flexbox-container-two'>
      {/* <div  className='item-section'> */}
        <div className='item-section-two'>
                    <div style={{width:"100%",height:"30vh"}}><img src={ai} alt="ai" style={{width:"100%",height:"100%",objectFit:"contain"}} /></div>
                    <div style={{paddingLeft:"30px",paddingRight:"30px",paddingBottom:"30px"}}>
                    <div><b style={{textAlign:"center",fontSize:"20px"}}>AI based Virtual Assistants</b></div>
                    <div >Our proprietary AI-based virtual assistants augment sales consultants with personalized recommendations, 24/7 availability, and data-driven insights, enhancing customer engagement and boosting sales performance.</div>
                   
                    </div>
                    </div>
                    <div  className='item-section-two'>
                    <div style={{width:"100%",height:"30vh"}}><img src={productsampling } alt="ai" style={{width:"100%",height:"100%",objectFit:"contain"}} /></div>
                    <div style={{paddingLeft:"30px",paddingRight:"30px",paddingBottom:"30px"}}>
                    <div><b style={{textAlign:"center",fontSize:"20px"}}>Immersive Retail Experience Zones</b></div>
                    <div>Embark on a futuristic retail journey with our AI-powered virtual store platform, where visually stunning environments and seamless browsing, interaction, and shopping await you from the convenience of your device.</div>
                   
                    </div>
                    {/* <button className='favourite-btn' >Add to favourites</button> */}
</div>
<div className='item-section-two'>
<div style={{width:"100%",height:"30vh"}}><img src={samp } alt="ai" style={{width:"100%",height:"100%",objectFit:"contain"}} /></div>
                    <div style={{paddingLeft:"30px",paddingRight:"30px",paddingBottom:"30px"}}>
                    <div><b style={{textAlign:"center",fontSize:"20px"}}>Immersive Product Sampling</b></div>
                    <div>Engage customers with interactive virtual experiences, allowing them to visualize products and try them virtually, while also offering the tangible experience of viewing physical products on display.</div>
                   
                    </div>
                    {/* <button className='favourite-btn' >Add to favourites</button> */}
                    </div>
               {/* </div> */}
      </div>


      <div className='flexbox-container-two'>
      {/* <div  className='item-section'> */}
        <div className='item-section-two'>
                    <div style={{width:"100%",height:"30vh",padding:"30px"}}><img src={vr} alt='images' style={{width:"100%",height:"100%",objectFit:"cover"}} /></div>
                    <div style={{paddingLeft:"30px",paddingRight:"30px",paddingBottom:"30px"}}>
                    <div><b style={{textAlign:"center",fontSize:"20px"}}>VR & AR</b></div>
                    <div>We elevate phygital store experiences with our cutting-edge AR and VR integration. Engage customers in immersive experiences that bridge the gap between physical and digital realms, enhancing their interactions with products and creating memorable shopping journeys.</div>
                    {/* <div></div> */}
                    {/* <button className='favourite-btn' >Add to favourites</button> */}
                    </div>
                    </div>
                    <div  className='item-section-two'>
                    <div style={{width:"100%",height:"30vh",padding:"30px"}}><img src={interactivepanels} alt='images' style={{width:"100%",height:"100%",objectFit:"contain"}} /></div>
                    <div style={{paddingLeft:"30px",paddingRight:"30px",paddingBottom:"30px"}}>
                    <div><b style={{textAlign:"center",fontSize:"20px"}}>Interactive Panels</b></div>
                    <div>Transforming phygital stores with state-of-the-art interactive panels. Engage customers through intuitive touchscreens, dynamic content, and interactive experiences that revolutionize the way they explore and interact with products.</div>
                   
                    </div>
                    {/* <button className='favourite-btn' >Add to favourites</button> */}
</div>
<div className='item-section-two'>
<div style={{width:"100%",height:"30vh",padding:"30px"}}><img src={engaging} alt='images' style={{width:"100%",height:"100%",objectFit:"contain"}} /></div>
<div style={{paddingLeft:"30px",paddingRight:"30px",paddingBottom:"30px"}}>
                    <div><b style={{textAlign:"center",fontSize:"20px"}}>Engaging contents</b></div>
                    <div>Captivate prospective customers in our phygital stores by curating compelling brand content. Utilizing high-quality images, videos, and 3D visualizations, we create immersive experiences fostering deeper customer engagement and connection.</div>
                   
                    </div>
                  
                    </div>
               {/* </div> */}
      </div>

      <div className='flexbox-container-two'>
      {/* <div  className='item-section'> */}
        <div className='item-section-two'>
                    <div style={{width:"100%",height:"30vh",paddingTop:"10px"}}><img src={digital} alt='images' style={{width:"100%",height:"100%",objectFit:"contain"}} /></div>
                    <div style={{paddingLeft:"30px",paddingRight:"30px",paddingBottom:"30px",paddingTop:"30px"}}>
                    <div><b style={{textAlign:"center",fontSize:"20px"}}>Digital Takeaways</b></div>
                    <div>Transforming phygital stores with state-of-the-art interactive panels. Engage customers through intuitive touchscreens, dynamic content, and interactive experiences that revolutionize the way they explore and interact with products.</div>
                    {/* <div></div> */}
                    {/* <button className='favourite-btn' >Add to favourites</button> */}
                    </div>
                    </div>
                    </div>

        </Container>
        
    </section>
            </React.Fragment>
        );
    }
}

export default Features;