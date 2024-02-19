import React, { Component } from 'react';
import { Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
} from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Images
import img1 from "../../assets/images/users/img-1.jpg";
import img2 from "../../assets/images/users/img-2.jpg";
import img3 from "../../assets/images/users/img-3.jpg";
// import one from  "../../assets/images/•_Collaborative investment(1).png";
// import two from  "../../assets/images/•_Engagemen.png";
// import three from  "../../assets/images/•_Techno-market exposure.png";
// import four from  "../../assets/images/Curated-startup-pipeline 1.png";

import '../../assets/css/Own.css'

class Clients extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         items : [
    //             { id : 1, image: img1, title : "Jennifer Shapiro", subtitle : "Frontend", desc : "The European languages are members of the same family Their separate existence is a myth For science, music, sport, etc, europe their languages common words." },
    //             { id : 2, image: img2, title : "Brandon Carney", subtitle : "Designer", desc : "The European languages are members of the same family Their separate existence is a myth For science, music, sport, etc, europe their languages common words." },
    //             { id : 3, image: img3, title : "William Mooneyhan", subtitle : "Developer", desc : "The European languages are members of the same family Their separate existence is a myth For science, music, sport, etc, europe their languages common words." },
    //         ],
    //         activeIndex : 0
    //     }
    //     this.onExiting = this.onExiting.bind(this);
    //     this.onExited = this.onExited.bind(this);
    //     this.next = this.next.bind(this);
    //     this.previous = this.previous.bind(this);
    //     this.goToIndex = this.goToIndex.bind(this);
    // }
    
    // onExiting(){
    //     this.animating = true;
    // }

    // onExited() {
    //     this.animating = false;
    // }

    // next() {
    //     if (this.animating) return;
    //     const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    //     this.setState({ activeIndex : nextIndex });
    //   }

    // previous() {
    //     if (this.animating) return;
    //     const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    //     this.setState({ activeIndex : nextIndex });
    // }
    
    // goToIndex(newIndex) {
    //     if (this.animating) return;
    //     this.setState({ activeIndex : newIndex });
    // }    

    // componentDidMount(){
    //     var e1=document.getElementsByClassName("carousel-indicators");
    //     var e2=e1[0].getElementsByTagName("li");
    //     var img = [];
    //     for(var i=0; i<this.state.items.length; i++){
    //         img[i] = document.createElement('img'); 
    //         img[i].className="testi-img img-fluid rounded mx-auto d-block";
    //         img[i].src=this.state.items[i].image;
    //         e2[i].appendChild(img[i]);
    //     }
    // }

    state = {
        data : [
            { icon : require("../../assets/images/Curated-startup-pipeline 1 (2).png") , title : "Curated startup pipeline", desc : "Invest in early-stage startups with high-potential product ideas, identified and vetted by our expert team, offering investors exclusive access before they gain widespread recognition." },
            { icon : require("../../assets/images/•_Techno-market exposure (2).png"), title : "Techno-market exposure", desc : "Invest in startups developing and commercializing cutting-edge technologies for potential significant returns, offering investors exposure to these lucrative markets." },
            { icon : require("../../assets/images/cc.png"), title : "Collaborative investment", desc : "By collaborating with top regional and global investors, we provide our investors the chance to co-invest alongside seasoned professionals in promising startups ventures." },
             { icon :require("../../assets/images/•_Engagement (2).png"), title : "Engagement", desc : "We actively support our portfolio companies, providing access to experts, guidance, and comprehensive support to drive their success." },
        ]
    }

    render() {
        // const slides = this.state.items.map((item, key) => {
            // return(
        //         <CarouselItem
        //             //tag = "div"
        //             key = {key+1}
        //             onExiting = {this.onExiting()}
        //             onExited = {this.onExited()}
        //         >
        //                                     <div className="testimonial-box text-center mt-4">
        //                                         <div className="testimonial-title p-2 rounded">
        //                                             <p className=" text-white mt-4">{item.desc}</p>
        //                                         </div>
        //                                         <i className="mdi mdi-format-quote-close text-primary display-3"></i>
        //                                         <h5 className="text-white f-18">{item.title}</h5>
        //                                         <p className="text-white-50 mb-0">{item.subtitle}</p>
        //                                     </div>
        //         </CarouselItem>
        // )}
        // );

        return (
            <React.Fragment>
                <section className="section  " id="testimonial" style={{backgroundColor:"#EDF5FF"}}>
                    {/* <div className=""></div> */}
                    {/* <Container> */}
                    {/* <SectionTitle
                        title="TESTIMONIALS"
                        desc="Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin."
                        isLight={true}
                    /> */}

                        {/* <Row className="mt-5 pt-2">
                            <Col lg={12}> */}
                                {/* <Carousel
                                    activeIndex = {this.state.activeIndex}
                                    next = {this.next}
                                    previous = {this.previous}
                                > */}
                                    {/* <CarouselIndicators items={this.state.items} activeIndex = {this.state.activeIndex} onClickHandler = {this.goToIndex}  /> */}
                                        {/* Render Slides Variable(Which Contains Carousel Items) */}
                                        {/* {slides} */}
{/* 
                                    <CarouselControl direction="prev" onClickHandler = {this.previous} >
                                        <span className="carousel-control-prev-icon" ></span>
                                        <span className="sr-only">Previous</span>
                                    </CarouselControl>
                                    <CarouselControl direction="next" onClickHandler = {this.next} >
                                        <span className="carousel-control-next-icon" ></span>
                                        <span className="sr-only">Next</span>
                                    </CarouselControl> */}

                                {/* </Carousel> */}



                            {/* </Col>
                        </Row> */}


<Container style={{fontSize:"18px"}}>
                        <SectionTitle
                            title="INVESTORS"
                            // subtitle="About Xircular"
                            desc="Xircular startups with strategic investors who share our vision of building a more prosperous and equitable products through deeptech innovation. "
                         
                        />
           </Container>
           <Container style={{fontSize:"18px"}}>
                        
                            
                            <div style={{textAlign:"center"}}>Our investors benefit from</div>
                         
                        
           </Container>

           {/* comment my work */}
    {/* <section class="section software-about" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="softwere-about-box text-center p-3">
                        <div class="softwere-about-icon">
                            <i class="pe-7s-light"><img src={four} alt="images" style={{width:"70px"}}/></i>
                        </div>
                        <h4 class="f-15 text-uppercase letter-spacing_2 mt-4">	Curated startup pipeline</h4>
                        <p class="text-muted mt-4">Invest in early-stage startups with high-potential product ideas, identified and vetted by our expert team, offering investors exclusive access before they gain widespread recognition</p>
                    </div>
                </div>

                <div class="col-lg-3">
                    <div class="softwere-about-box text-center p-3">
                        <div class="softwere-about-icon">
                            <i class="pe-7s-portfolio"><img src={three} alt="images"  style={{width:"70px"}} /></i>
                        </div>
                        <h4 class="f-15 text-uppercase letter-spacing_2 mt-4">	Techno-market exposure</h4>
                        <p class="text-muted mt-4">Invest in startups developing and commercializing cutting-edge technologies for potential significant returns, offering investors exposure to these lucrative markets.</p>
                    </div>
                </div>


                
                <div class="col-lg-3">
                    <div class="softwere-about-box text-center p-3">
                        <div class="softwere-about-icon">
                            <i class="pe-7s-portfolio"><img src={one} alt="images"  style={{width:"70px"}}/></i>
                            
                        </div>
                        <h4 class="f-15 text-uppercase letter-spacing_2 mt-4">		Engagement</h4>
                        <p class="text-muted mt-4">We actively support our portfolio companies, providing access to experts, guidance, and comprehensive support to drive their success.</p>
                    </div>
                </div>

                <div class="col-lg-3">
                    <div class="softwere-about-box text-center p-3">
                        <div class="softwere-about-icon">
                            <i class="pe-7s-like2"><img src={two} alt="images" style={{width:"70px"}} /></i>
                        </div>
                        <h4 class="f-15 text-uppercase letter-spacing_2 mt-4">	Collaborative investment</h4>
                        <p class="text-muted mt-4">By collaborating with top regional and global investors, we provide our investors the chance to co-invest alongside seasoned professionals in promising startup ventures.</p>
                    </div>

                    
                    
                </div>
            </div>
        </div>
    </section> */}
    {/* end of my comment */}




    <div className="flexbox-container" >
                            {/* <AboutBox data={this.state.data} /> */}
                            {/* <PricingBox pricings={this.state.data} /> */}
                      {     this.state.data.map((data, key) =>{
                            return( <div className='item-section' key={key}  >
                            {/* <div className={data.isLight === true ? "about-box box-shadow rounded text-center mt-4" : "about-box box-shadow rounded text-center mt-4"}  style={{backgroundColor:"white"}} > */}
                                <i className={data.icon + " text-primary"}><img src={data.icon} alt="money-icon" style={{width:"60px"}} /></i>
                                {/* <img>{data.icon}</div> */}
                                <h5 className="f-18 mt-3">{data.title}</h5>
                                {/* <div className="lighlight-border mt-3"></div> */}
                                <p className="text-muted mt-3 mb-0">{data.desc}</p>
                                
                                {/* <p className="text-muted mt-3 mb-0">{data.de}</p> */}
                            {/* </div> */}
                        </div>)
                           
    })}
                        </div>

                    {/* </Container> */}
                </section>
            </React.Fragment>
        );
    }
}

export default Clients;