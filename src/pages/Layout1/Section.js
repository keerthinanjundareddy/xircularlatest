import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from 'axios';
import '../../isibisiassets/css/Own.css'
// import HomeUrl from '../../assets/images/home-border.png';
import HomeUrl from '../../isibisiassets/images/home-border.png'
import isibisilogo from '../../isibisiassets/Userimages/isibisi-removebg-preview.png'
import home from '../../isibisiassets/Userimages/home.png'
import { useNavigate } from 'react-router-dom';
import phone from '../../Ayatanassets/images/phone.png'

const Section = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [homeData, setHomeData] = useState([]);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  const [scrolled, setScrolled] = useState(false);

  const baseUrl = 'https://strapi.ayatana.world';
  // const baseUrltwo='http://localhost:4000'

  useEffect(() => {
    axios.get(`${baseUrl}/api/websitehome`).then((response) => {
      console.log("homedata",response.data)
      setHomeData(response.data.docs);
      console.log()
    }).catch((error) => {
      console.error("Error fetching API data:", error);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Set a threshold value based on your design
      const threshold = 50;

      // Update the state based on scroll position
      setScrolled(scrollY > threshold);
    };
    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const navigate = useNavigate();
  const handlebackClick = () => {
    // window.location.href = "/readmore";

    // window.alert("clciked")


    // Navigate to the "/readmore" path with additional details based on cardId
    navigate(`/`);

  };
  const handlebackClicktwo = () => {
    // window.location.href = "/readmore";

    // window.alert("clciked")


    // Navigate to the "/readmore" path with additional details based on cardId
    window.scrollTo(0, document.body.scrollHeight);
    navigate(`/`);

  };

  return (
    <React.Fragment>
    
    <div className={`header-section ${scrolled ? 'scrolled' : ''}`} style={{ zIndex: '100' }}>
          <div style={{ width: '100px', height: '100px', cursor: 'pointer' }} onClick={handlebackClick}>
            <img src={isibisilogo} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>

        
          <div  >
         

         <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>

          <div className='back-btn' style={{textAlign:"center",marginTop:"10px"}}  onClick={handlebackClicktwo}>
          <div>
              <img src={phone } style={{ width: '40px', height: '25px', objectFit: 'contain',paddingLeft:"1px",paddingBottom:"4px"}} />
            </div>
          
            <div style={{paddingRight:"20px",paddingLeft:"1px"}} className='home-heading-xircular'>
           contact us
            </div>
          </div>

          <div className='back-btn' style={{marginTop:"10px"}} onClick={handlebackClick}>
            <div>
              <img src={home } style={{ width: '40px', height: '25px', objectFit: 'contain',paddingLeft:"1px",paddingBottom:"4px"}} />
            </div>
          
            <div style={{paddingRight:"20px",paddingLeft:"1px"}} className='home-heading-xircular'>
            Home
            </div>
          </div>
          </div>
        </div>
        </div>

      <section className="" id="home" style={{position:"relative",paddingTop:"100px",paddingBottom:"100px",backgroundColor:"#f0f9fa"}} >
        <div className="home-center">
          <div className="home-desc-center">
            <Container>
            {homeData && homeData.map((item) => (
                <Row key={item.id} className="align-items-center">
                  <Col lg={6}>
                    <div className="home-content">
                      <p className="mb-0">{item.Heading}</p>
                      {item.Heading && (
                      <img src={HomeUrl} height="15" alt="" />
                      )}
                      <h1 className="home-title mt-4">{item.subHeadingOne}<br />{item.subHeadingTwo}</h1>
                      <p className="text-muted mt-4 f-20">{item.Description}</p>
                      {/* {item.watchvideotext && (
                        <div className="mt-4 pt-2">
                          <button className="video-play-icon text-dark watch-intro" onClick={openVideo}>
                            <i className="mdi mdi-play-circle-outline text-dark mr-2 " ></i>{item.watchvideotext}
                          </button>
                        </div>
                      )} */}
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="home-img">
                    {item.imageSection && (
      <img src={item.imageSection &&  item.imageSection.url} className="img-fluid" alt={item.imageSection.url} />
    )}
                    </div>
                  </Col>
                </Row>
            ))}
            
            </Container>
          </div>
          {isVideoOpen && (
            <div className="video-modal">
              <div className="video-overlay" onClick={closeVideo}></div>
              <div className="video-content">
              {homeData[0]?.videoSection?.url && (
                <div>
                <button className="close-video-btn" onClick={closeVideo}>
                  <i className="mdi mdi-close"></i>
                </button>
               
                <video controls width="100%" height="100%" onClick={closeVideo}>
                  <source src={ baseUrl + homeData[0]?.videoSection?.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
       
    </React.Fragment>
  );
};

export default Section;
