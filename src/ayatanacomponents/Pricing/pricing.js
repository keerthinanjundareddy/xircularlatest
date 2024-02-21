import React,{useState,useEffect} from 'react';
// import { Container, Row, Col } from "reactstrap";

//Import Section Title
// import SectionTitle from "../common/section-title";

//Import Pricing
// import PricingBox from './pricing-box';
import '../../Ayatanassets/css/AyatanaOwn.css'

// import '../../assets/css/New.scss'
// import Carousel from 'react-bootstrap/Carousel';
import one from "../../Ayatanassets/images/Carosel 15 (4).png";
import two from "../../Ayatanassets/images/Carosel 13 (3).png";
import three from "../../Ayatanassets/images/Carosel 14 (3).png";

// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
// import shopify_logo from '../assets/images/Group.png'
import home from '../../Ayatanassets/images/home.png'
import phone from '../../Ayatanassets/images/phone.png'
import ayatanalogo from '../../Ayatanassets/images/Ayatana_logo_final_cropped.png'
function Pricing(){
  const [scrolled, setScrolled] = useState(false);
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
    // Temporarily add extra padding to the bottom of the body to increase scrollable area
    const originalPaddingBottom = document.body.style.paddingBottom;
    document.body.style.paddingBottom = "400px"; // Adjust the "100px" as needed to scroll a bit further
  
    // Scroll to the new bottom of the page
    window.scrollTo(0, document.body.scrollHeight);
  
    // Wait for the scroll to finish (adjust delay as needed)
    setTimeout(() => {
      // Navigate to the desired location
      navigate(`/`);
  
      // Optionally, remove the added padding to restore original page length
      document.body.style.paddingBottom = originalPaddingBottom;
    }, 150); // Adjust timing as needed
  };
  
    
        return (
            <React.Fragment>
            <div className={`header-section ${scrolled ? 'scrolled' : ''}`} style={{ zIndex: '100' }}>
          <div style={{ width: '100px', height: '100px', cursor: 'pointer' }} onClick={handlebackClick}>
            <img src={ayatanalogo} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
    <section className="section-five" id="pricing" style={{marginTop:"50px"}} >
      
    {/* <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel"> */}
    <div id="carouselExampleLight" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div className='cone'>
        <img class="d-block w-100 "src={one} alt="First slide" className='cm-one'  />
        </div>
      </div>
      <div class="carousel-item">
      <div className='ctwo'>
        <img class="d-block w-100 " src={two} alt="Second slide" className='cm-two' />
        </div>
      </div>
      <div class="carousel-item">
      <div className='cthree'>
        <img class="d-block w-100 "   src={three} alt="Third slide" className='cm-three'  />
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  </div>
       {/* </div> */}
    </section>
    </React.Fragment>
           
        )
        
    }


export default Pricing;