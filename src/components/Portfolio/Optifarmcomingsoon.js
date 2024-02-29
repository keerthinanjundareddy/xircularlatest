import React, { useState, useEffect } from 'react'
import './Optifarmcomingsoon.css'
import imageone from '../../assets/images/Userimages/img-1.jpg'

import isibisilogo from '../../assets/images/Userimages/store front 1200 px 1 (1).png'

import home from '../../assets/images/Userimages/home.png'


import arrow from '../../assets/images/Userimages/leftarow.png'
import { useNavigate } from 'react-router-dom';
import shopify_logo from '../../assets/images/Userimages/Group.png'

import feedback from '../../assets/images/Userimages/Group (14).png'
import videoicon from '../../assets/images/Userimages/videocam 2.png'
import linkedinicon from '../../assets/images/Userimages/linkedin-square-icon (1).png'

import datamigration from '../../assets/images/Userimages/Icon_architecture,-structure,-database,-database-structure,-database-architecture.png'
import uiux from '../../assets/images/Userimages/9860 - Photo-App.png'
import socialmedia from '../../assets/images/Userimages/CHAT.png'
import shopifyapps from '../../assets/images/Userimages/DATING APPS.png'
import seo from '../../assets/images/Userimages/Icon_search-analysis-seo.png'
import additionalofferings from '../../assets/images/Userimages/Immersive Product experience.png'
import support from '../../assets/images/Userimages/icon_chatbot,-chat-bot,-assistant,-chat,-laptop-07.png'
import tickMarkWhite from '../../assets/images/Userimages/tickMarkWhite.png'
import phone from '../../assets/images/Userimages/call.png'
import websiteconsultaion from '../../assets/images/Userimages/Frame 38.png'
import Branddesign from '../../assets/images/Userimages/Frame 40.png'
import finaldesign from '../../assets/images/Userimages/Frame 45.png'
import finalreview from '../../assets/images/Userimages/Frame 45.png'
import storedev from '../../assets/images/Userimages/Frame 41.png'
import contentupload from '../../assets/images/Userimages/Frame 42.png'
import milestone from '../../assets/images/Userimages/Frame 43.png'
import finalrevision from '../../assets/images/Userimages/Frame 39.png'
import productdelivery from '../../assets/images/Userimages/Product_sampling_opportunities_2-u6gbbFhs.png'
import ownership from '../../assets/images/Userimages/Frame 46.png'
import maintanence from '../../assets/images/Userimages/Frame 47.png'



import { Container, Row, Col } from "reactstrap";

//Import Logo
// import logo from "../../assets/images/logo.png";

//Import Footer link
// import FooterLinks from "./footer-links";
// import LinkSection from "./link-section";

import '../../Ayatanassets/css/AyatanaOwn.css'

import imagetwo from '../../assets/images/Userimages/Vector (3).png';
import facebookone from '../../Ayatanassets/images/instafinals (4).png';
import instaone from '../../Ayatanassets/images/instafinals (1).png';
import twitterone from '../../Ayatanassets/images/instafinals (3).png';
import linkedinone from '../../Ayatanassets/images/instafinals (2).png';
import youtube from '../../Ayatanassets/images/black-and-white-youtube-icon 1.png';


function Optifarmcomingsoon() {
  const [hoveredNumber, setHoveredNumber] = useState(null);
  const accordionData = [
    { title: "Accordion Demo 1", content: "Greetings of the day 1" },
    { title: "Accordion Demo 2", content: "Greetings of the day 2" },
    { title: "Accordion Demo 2", content: "Greetings of the day 2" },
    // Add more objects as needed
  ];
  const dataArray = [
    {
      heading: "TEAM MEMBER NAME",
      text: "Designation ",
      experience: "2yrs",
      image: imageone,
      linkedinicons: linkedinicon,
    },
    {
      heading: "TEAM MEMBER NAME",
      text: "Designation",
      experience: "2yrs",
      image: imageone,
      linkedinicons: linkedinicon,

    },
    {
      heading: "TEAM MEMBER NAME",
      text: "Designation",
      experience: "2yrs",
      image: imageone,
      linkedinicons: linkedinicon,
    },
    {
      heading: "TEAM MEMBER NAME",
      text: "Designation",
      experience: "2yrs",
      image: imageone,
      linkedinicons: linkedinicon,
    },
    // Add more objects as needed
  ];


  const dummyData = [
    {
      title: datamigration, heading: 'Data Migration', contenttwo: `Migrating data on Shopify can be challenging due to the limitations of the Product template, which is constrained in terms of properties.
         While Shopify provides metafields as a solution, they may not be sufficient for migrating older data structures.`, bullets: { one: 'Product and inventory data', two: 'Complete Customer data', three: 'Data verification', four: 'Inventory push on weekly basis' }
    },

    {
      title: uiux, heading: 'Customized UI/UX', contenttwo: `User experience design can be challenging with Shopify's
        liquid-based theme templates due to their limited
        customization options. Striking the right balance between
        enhancing user experience and template constraints requires
        creative solutions and a deep understanding of Shopify's
        framework. It's about making the difficult appear
        effortless, resulting in an exceptional user journey.`, bullets: { one: 'Custom user login experience', two: 'Customized Product page and listings', three: 'Revamped checkout page', four: 'Localization' }
    },

    { title: socialmedia, heading: 'Social media & market places', contenttwo: `We help you reach more audience and potential customers via social media. We have a team of experts who predominantly work on soical media stragies including market place integrations. Whether you have social media accounts or need a new ones, we handle them all.`, bullets: { one: 'TikTok shop', two: 'Instagram shop', three: 'Facebook', four: 'Zalora' } },

    { title: shopifyapps, heading: 'Featureful Shopify Apps', contenttwo: `We have developed numerous apps to help you manage and style your shopify webstore. Most of our shopify apps are available with an affordable price. Do check them out in the ` + <a href='https://apps.shopify.com/'>shopify app store</a> + ` Here are some of our awesome apps:`, bullets: { one: 'Notify', two: 'MobyApp Mobile App Builder', three: 'Form Builder', four: 'RateMe Product review App' } },

    {
      title: seo, heading: 'Seo & Tracking', contenttwo: `Our in-house experts can fastrack your webstore performance and fine-tune uisng the best strategy. We would otherwise help you integrate your available pixels on the shopify webstore for event tracking. 
        Shopify provides it's own analytical dashboard to visualize trends. SEO is another essential part of webstore performance. Shopify has a minimalistic stragey in-place for seo but we at RENRGII go beyond shopify and make your webstore more visibile to your customers.`, bullets: { one: 'Pixel tracking', two: 'Analytics', three: 'Seo' }
    },
    { title: additionalofferings, heading: 'Additional Offerings', contenttwo: `When you partner with us, why settle for less. Shopify's default notification templates may not be suitable for you and therefore we help design the email notification templates which are modern and aligned with your brand. Below are the additional offerings you can enjoy while we are at your service.`, bullets: { one: 'Server management', two: 'Third party apps installation', three: 'Weekly content import support', four: 'Notification template customizations' } },

    { title: support, heading: '24/5 priority support', contenttwo: "RENERGII is committed to providing full support anytime you require us to step in. We are happy to see you grow and we are here to help you out for every tiny issue you may have on Shopify. You can get in touch with us via the following channels:", bullets: { one: 'Email', two: 'Call', three: 'Whatsapp', four: 'Video meetings' } },
  ];
  const [hoveredCard, setHoveredCard] = useState(null);

  const [scrolled, setScrolled] = useState(false);

  const [openIndex, setOpenIndex] = useState(null);

  const faq = [
    {
      question: 'How do I get started with Shopify?',
      answer: 'You just need to get in touch with us to kickstart your ecommerce business',
    },
    {
      question: 'How long does it take to complete the store development?',
      answer: 'The store development may take around 20-25 days based on the business requirements. We will update you should we need more time to complete the development.',
    },
    {
      question: 'What are your charges?',
      answer: 'Get in touch with us to discuss about your need and we would suggest you the best plan to get started with.',
    },

    {
      question: 'How do I get a domain for my Shopify website?',
      answer: 'We would just need an account created on your name or you can share the access to your existing domain registry and we will take care the rest.',
    },
    {
      question: 'How do I upload or add products to my Shopify website?',
      answer: 'Product upload onto the Shopify website can be done manually using the Shopify admin panel. Otherwise, you can get in touch with us to help you push large product data with an additional charge.',
    },
    {
      question: 'I want mobile apps along with the Shopify website?',
      answer: 'Sure thing. We are not limited to Shopify, we at renergii provide complete software solutions. ',
    },
    {
      question: 'What are the Shopify subscription plans?',
      answer: `Shopify offers various subscription plans for all types of business requirements. Please checkout the website to learn more about their plans and pricing.`,
    },
    // Add more questions and answers as needed
  ];


  const steps = [
    {
      label: 'Website Consultation',
      description: `We will discuss the details of the selected niche, products & brand ideas. After niche discussion, we will find a suitable Shopify store template to start with.`,
      howitworks: `This step includes`,
      iconone: videoicon,
      textone: `video meeting`,
      icontwo: feedback,
      textwo: `feedback`
    },
    {
      label: 'Brand Design',
      description:
        `In this step, we shall discuss about the store design that will be aligned to your brand. We have dedicated designers to help you choose or suggest the best design for your brand.`,
    },
    {
      label: 'Final Design',
      description: `After taking the design requirements, we will come up with a design prototype to discuss with you and await for your feedback.`,
      howitworks: `This step includes`,
      icontwo: feedback,
      textwo: `feedback`
    },
    {
      label: 'Final Review',
      description: `When all the changes (if there are any required) are revised, we will deliver the final design for your approval to start the development process.`,
      howitworks: `This step includes`,
      icontwo: feedback,
      textwo: `feedback`
    },
    {
      label: 'Store Development',
      description: `When the back-end is finished, we move on to start designing the front-end. We always ensure it's responsive & suits your requirements. This step mostly includes the overall webstore site development based on the design.`,
    },
    {
      label: 'Content Upload',
      description: `Our team will begin with uploading pages, plugins, images, products, videos & more onto the shopify admin panel.`,
    },
    {
      label: 'Milestone',
      description: `All the stakeholders will have a meeting with you to discuss about the development and you will get a chance to see your store development and the first milestone.`,
      howitworks: `This step includes`,
      iconone: videoicon,
      textone: `video meeting`,
      icontwo: feedback,
      textwo: `feedback`
    },

    {
      label: 'Final Revision',
      description: `The team will work on the feedback provided in the previous step and will work towards the changes.`,
    },
    {
      label: 'Product Delivery',
      description: `After the final revision, we should be ready with the product. You will get your fully-working shopify webstore that is ready to go live for the public.`,
      howitworks: `This step includes`,
      iconone: videoicon,
      textone: `video meeting`
    },
    {
      label: 'Ownership Transfer',
      description: `At the last stage, we transfer over the ownership to you, from where you can start your e-commerce journey! :)`,
    },
    {
      label: 'Maintenance support',
      description: `We at renergii will always be happy to help you should you need help with anything while operating the shopify webstore. We have a dedicated support team to work with you on a daily basis whenever you need us to step in.`,
    },
  ];


  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));

  };

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
    window.scrollTo(0, 0);
    navigate(`/`);

  };
  const handlebackClicktwo = () => {
    // window.location.href = "/readmore";

    // window.alert("clciked")


    // Navigate to the "/readmore" path with additional details based on cardId
    window.scrollTo(0, document.body.scrollHeight);
    navigate(`/`);

  };

  

  const handleNumberHover = (number) => {
    setHoveredNumber(number);
  };

  const handleNumberLeave = () => {
    setHoveredNumber(null);
  };




   const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <div className='read-more-section' >
        <div className={`header-section ${scrolled ? 'scrolled' : ''}`} style={{ zIndex: '10000' }}>
          <div style={{ width: '100px', height: '100px', cursor: 'pointer' }} onClick={handlebackClick}>
            <img src={isibisilogo} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>


          <div  >


            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>

              <div className='back-btn' style={{ textAlign: "center", marginTop: "10px" }} onClick={handlebackClicktwo}>
                <div>
                  <img src={phone} style={{ width: '40px', height: '25px', objectFit: 'contain', paddingLeft: "1px", paddingBottom: "4px" }} />
                </div>

                <div style={{ paddingRight: "20px", paddingLeft: "1px" }} className='home-heading-xircular'>
                  contact us
                </div>
              </div>

              <div className='back-btn' style={{ marginTop: "10px" }} onClick={handlebackClick}>
                <div>
                  <img src={home} style={{ width: '40px', height: '25px', objectFit: 'contain', paddingLeft: "1px", paddingBottom: "4px" }} />
                </div>

                <div style={{ paddingRight: "20px", paddingLeft: "1px" }} className='home-heading-xircular'>
                  Home
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='banner-main-div'>

          <div className='text-card'>
            <div className='Hire-div'>
              Hire
            </div>

            <div className='expert-div'>
              Shopify Experts
            </div>

            <div className='Text-para'>
              Transform your online store with  our Shopify experts. From setup to optimization, we have got your ecommerce covered.

            </div>
          </div>

          <div>

            <div className='side-image-div'>
              <img src={shopify_logo} alt="img" className='shopify-banner-img' />
            </div>

          </div>

        </div>

        <div>

        </div>


        <div className='shopify-features-section'>
          <div className='shopify-services-heading'><b>OUR SERVICES</b></div>
          <div className="card-container-two">
            {dummyData.map((data, index) => (
              <div
                key={index}
                className="cardstwo"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className='shopifys-image-sections-container'>
                  <img src={data.title} className='imge-sec' alt={data.title} />
                </div>
                <div className='heading-sections-data' style={{ marginTop: "20px", textAlign: "center", fontSize: "20px", color: "#1E3547" }}>
                  {data.heading}
                </div>
                <div className='title-sections-dataa' style={{ opacity: hoveredCard === index ? 1 : 1, marginTop: "30px", textAlign: "left", color: "#828F99", fontSize: "16px" }}>
                  {data.contenttwo}
                </div>
                {/* Check if bullets exist and are an object before rendering */}
                <div >
                  {data.bullets && typeof data.bullets === 'object' && (
                    <ul style={{ marginTop: "20px" }}>
                      {data.bullets.one && <li style={{ color: "#828F99" }}>{data.bullets.one}</li>}
                      {data.bullets.two && <li style={{ color: "#828F99" }}>{data.bullets.two}</li>}
                      {data.bullets.three && <li style={{ color: "#828F99" }}>{data.bullets.three}</li>}
                      {data.bullets.four && <li style={{ color: "#828F99" }}>{data.bullets.four}</li>}
                    </ul>
                  )}
                </div>

              </div>
            ))}


          </div>
        </div>



{/* start of stepper section */}
{isMobile ? (
        // Mobile layout
        <>
          <div className='xircular-how-we-work-sec' style={{textAlign:"center"}}><b>How We Work</b></div>
          


          <div className='xircularhowitworks-top-sections-two'   >



<div className='full-timeline-containers' >
    <div className="timeline-mobile" >
   
      <div className="timeline-event"  id="consultation" onMouseEnter={() => handleNumberHover(1)} onMouseLeave={handleNumberLeave}>
        <div className="number" >
          <div className='xircular-home-images'>
          <img src={websiteconsultaion} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>
        </div>
        {/* <div className='bubble-three'></div> */}
        <div className='bubble-four'></div>
        <div className='num-contents-mobile'>Website Consultation</div>
        {hoveredNumber === 1 && <div className="mobile-popup-left">
          <div className='xircular-popup-heading'>Website consultation</div>
          <div className='xircular-popup-textheading'>We will discuss the details of the selected niche, products & brand ideas. After niche discussion, we will find a suitable Shopify store template to start with.</div>
          </div>}
      </div>

      <div className="timeline-event" onMouseEnter={() => handleNumberHover(2)} onMouseLeave={handleNumberLeave}>
        <div className="numbers">
        <div className='xircular-home-images'>
          <img src={Branddesign} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>
        </div>
        <div className='bubble-one'></div>
        <div className='bubble-two'></div>
        <div  className='num-contents-mobile'>Brand Design</div>
        {hoveredNumber === 2 && <div className="mobile-popup-center">
        <div className='xircular-popup-heading'>Brand Design</div>
          <div className='xircular-popup-textheading'>In this step, we shall discuss about the store design that will be aligned to your brand. We have dedicated designers to help you choose or suggest the best design for your brand.</div>
          </div>}
      </div>

      <div className="timeline-event" onMouseEnter={() => handleNumberHover(3)} onMouseLeave={handleNumberLeave}>
        <div className="number mobileyellow ">
        <div className='xircular-home-images'>
          <img src={finaldesign} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>
        </div>
        <div className='bubble-three'></div>
        <div className='bubble-four'></div>
        <div  className='num-contents-mobile'> Final Review</div>
        {hoveredNumber === 3 && <div className="mobile-popup-right">
        <div className='xircular-popup-heading'>Final Review</div>
          <div className='xircular-popup-textheading'>When all the changes (if there are any required) are revised, we will deliver the final design for your approval to start the development process.</div>
          </div>
        }
      </div>


   

     

    </div>

    {/* <hr className='first-hr' /> */}


    <div className="timeline-two-mobile" >

    
    <div className="timeline-event" onMouseEnter={() => handleNumberHover(6)} onMouseLeave={handleNumberLeave}>
        <div className="numbers mobileyellows">
        <div className='xircular-home-images'>
          <img src={milestone} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>
        </div>
        <div className='bubble-one xircularowner'></div>
        <div className='bubble-two'></div>
        <div  className='num-contents-mobile'>Milestone</div>
        {hoveredNumber === 6 && <div className="mobile-popup-left">
        <div className='xircular-popup-heading'>Milestone</div>
        <div className='xircular-popup-textheading'>All the stakeholders will have a meeting with you to discuss about the development and you will get a chance to see your store development and the first milestone.</div>
        </div>}
      </div>



      <div className="timeline-event newfour" onMouseEnter={() => handleNumberHover(5)} onMouseLeave={handleNumberLeave}>
        <div className="number">
        <div className='xircular-home-images'>
          <img src={contentupload} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>
        </div>
        <div className='bubble-three'></div>
        <div className='bubble-four'></div>
        <div className='num-contents-mobile' >Content Upload</div>
        {hoveredNumber === 5 && <div className="mobile-popup-center">
        <div className='xircular-popup-heading'>Content Upload</div>
          <div className='xircular-popup-textheading'>Our team will begin with uploading pages, plugins, images, products, videos & more onto the shopify admin panel.</div>
          </div>}
      </div>


      


      <div className="timeline-event  newfour" onMouseEnter={() => handleNumberHover(4)} onMouseLeave={handleNumberLeave}>
        <div className="numbers  ">
        <div className='xircular-home-images'>
          <img src={storedev} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>

        </div>
        <div className='bubble-one'></div>
        <div className='bubble-two'></div>
        <div  className='num-contents-mobile'>Store Development</div>
        {hoveredNumber === 4 && <div className="mobile-popup-right">
        <div className='xircular-popup-heading'>Store Development</div>
        <div className='xircular-popup-textheading'>When the back-end is finished, we move on to start designing the front-end. We always ensure it's responsive & suits your requirements. This step mostly includes the overall webstore site development based on the design.</div>
        </div>
        }
      </div>

      
   
   

    

    </div>


    
    <div className="timeline-three-mobile" >

    <div className="timeline-event" onMouseEnter={() => handleNumberHover(9)} onMouseLeave={handleNumberLeave}>
        <div className="number">
        <div className='xircular-home-images'>
          <img src={finalrevision} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>
        </div>
        <div className='bubble-three xircularowner'></div>
        <div className='bubble-four'></div>
        <div className="num-contents-mobile">Final Revision</div>
        {hoveredNumber === 9 && <div className="mobile-popup-left">
        <div className='xircular-popup-heading'>Final Revision</div>
        <div className='xircular-popup-textheading'>
        The team will work on the feedback provided in the previous step and will work towards the changes.</div>
        </div>}
      </div>
   

      {/* <div className="timeline-event" onMouseEnter={() => handleNumberHover(9)} onMouseLeave={handleNumberLeave}>
        <div className="numbers">
        <div className='xircular-home-images'>
          <img src={productdelivery} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>
        </div>
        <div className='bubble-one'></div>
        <div className='bubble-two'></div>
        <div className="num-contents-mobile">Product Delivery</div>
        {hoveredNumber === 8 && <div className="mobile-popup-center">
        <div className='xircular-popup-heading'>Product Delivery</div>
        <div className='xircular-popup-textheading'>
        After the final revision, we should be ready with the product. You will get your fully-working shopify webstore that is ready to go live for the public.</div>
        </div>}
      </div> */}


      
      {/* <div className="timeline-event" onMouseEnter={() => handleNumberHover(2)} onMouseLeave={handleNumberLeave}>
        <div className="numbers">
        <div className='xircular-home-images'>
          <img src={{}} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>
        </div>
        <div className='bubble-one'></div>
        <div className='bubble-two'></div>
        <div  className='num-contents-mobile'>Product Delivery</div>
        {hoveredNumber === 4 && <div className="mobile-popup-centers">
        <div className='xircular-popup-heading'>Product Delivery</div>
          <div className='xircular-popup-textheading'> After the final revision, we should be ready with the product. You will get your fully-working shopify webstore that is ready to go live for the public.</div>
          </div>}
      </div> */}


    {/* <div className="timeline-event " onMouseEnter={() => handleNumberHover(8)} onMouseLeave={handleNumberLeave}>
        <div className="numbers ">
        <div className='xircular-home-images'>
          <img src={productdelivery} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>

        </div>
        <div className='bubble-one'></div>
        <div className='bubble-two'></div>
        <div  className='num-contents-mobile'>Product Delivery</div>
       
        {hoveredNumber === 8 && <div className="mobile-popup-center">
        <div className='xircular-popup-heading'>Product Delivery</div>
          
          <div className='xircular-popup-textheading'>After the final revision, we should be ready with the product. You will get your fully-working shopify webstore that is ready to go live for the public.</div>
          </div>
          }
      </div> */}


<div className="timeline-event " onMouseEnter={() => handleNumberHover(8)} onMouseLeave={handleNumberLeave}>
        <div className="numbers  ">
        <div className='xircular-home-images'>
          <img src={productdelivery} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>

        </div>
        <div className='bubble-one'></div>
        <div className='bubble-two'></div>
        <div  className='num-contents-mobile'>Product Delivery</div>
        {hoveredNumber === 8 && <div className="mobile-popup-center">
        <div className='xircular-popup-heading'>Product Delivery</div>
        <div className='xircular-popup-textheading'>After the final revision, we should be ready with the product. You will get your fully-working shopify webstore that is ready to go live for the public.</div>
        </div>
        }
      </div>

      <div className="timeline-event" onMouseEnter={() => handleNumberHover(7)} onMouseLeave={handleNumberLeave}>
        <div className="number mobileyellow">
        <div className='xircular-home-images'>
          <img src={ownership} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>
        </div>
        <div className='bubble-three'></div>
        <div className='bubble-four'></div>
        <div  className='num-contents-mobile'>Ownership Transfer</div>
        {hoveredNumber === 7 && <div className="mobile-popup-right">
        <div className='xircular-popup-heading'>Ownership Transfer</div>
          <div className='xircular-popup-textheading'>At the last stage, we transfer over the ownership to you, from where you can start your e-commerce journey! :).</div>

          </div>
        
        }
      </div>

 </div>
 




 <div className="timeline-threethree-mobile" >

<div className="timeline-event" onMouseEnter={() => handleNumberHover(9)} onMouseLeave={handleNumberLeave} style={{visibility:"hidden"}}>
    <div className="number">
    <div className='xircular-home-images'>
      <img src={finalrevision} style={{width:"100%",height:"100%",objectFit:"contain"}} />
      </div>
    </div>
    <div className='bubble-three xircularowner'></div>
    <div className='bubble-four'></div>
    <div className="num-contents-mobile">Final Revision</div>
    {hoveredNumber === 9 && <div className="mobile-popup-left">
    <div className='xircular-popup-heading'>Final Revision</div>
    <div className='xircular-popup-textheading'>
    The team will work on the feedback provided in the previous step and will work towards the changes.</div>
    </div>}
  </div>




<div className="timeline-event " onMouseEnter={() => handleNumberHover(8)} onMouseLeave={handleNumberLeave} style={{visibility:"hidden"}}>
    <div className="numbers  ">
    <div className='xircular-home-images'>
      <img src={productdelivery} style={{width:"100%",height:"100%",objectFit:"contain"}} />
      </div>

    </div>
    <div className='bubble-one'></div>
    <div className='bubble-two'></div>
    <div  className='num-contents-mobile'>Product Delivery</div>
    {hoveredNumber === 8 && <div className="mobile-popup-center">
    <div className='xircular-popup-heading'>Product Delivery</div>
    <div className='xircular-popup-textheading'>After the final revision, we should be ready with the product. You will get your fully-working shopify webstore that is ready to go live for the public.</div>
    </div>
    }
  </div>

  
  <div className="timeline-event  newfour" onMouseEnter={() => handleNumberHover(10)} onMouseLeave={handleNumberLeave}>
        <div className="numbers  ">
        <div className='xircular-home-images'>
          <img src={maintanence} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>

        </div>
        {/* <div className='bubble-one'></div> */}
        <div className='bubble-two xircularownethree'></div>
        <div  className='num-contents-mobile'>Maintenance support</div>
        {hoveredNumber === 10 && <div className="mobile-popup-right">
        <div className='xircular-popup-heading'>Maintenance support</div>
        <div className='xircular-popup-textheading'>We at renergii will always be happy to help you should you need help with anything while operating the shopify webstore. We have a dedicated support team to work with you on a daily basis whenever you need us to step in.</div>
        </div>
        }
      </div>

</div>





    </div>
    </div>




        </>
      ) : (
        <>
<div className='xircular-how-we-work-sec' style={{textAlign:"center"}}><b>How We Work</b></div>
<div className='xircularhowitworks-top-sections'  >



<div className='full-timeline-containers' >
    <div className="timeline" >
   
      <div className="timeline-event"  id="consultation" onMouseEnter={() => handleNumberHover(1)} onMouseLeave={handleNumberLeave}>
        <div className="number" >
          <div className='xircular-home-images'>
          <img src={websiteconsultaion} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>
        </div>
        {/* <div className='bubble-three'></div> */}
        <div className='bubble-four'></div>
        <div className='num-contents'>Website Consultation</div>
        {hoveredNumber === 1 && <div className="popup">
          <div className='xircular-popup-heading'>Website consultation</div>
          <div className='xircular-popup-textheading'>We will discuss the details of the selected niche, products & brand ideas. After niche discussion, we will find a suitable Shopify store template to start with.</div>
          </div>}
      </div>

      <div className="timeline-event" onMouseEnter={() => handleNumberHover(2)} onMouseLeave={handleNumberLeave}>
        <div className="numbers">
        <div className='xircular-home-images'>
          <img src={Branddesign} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>
        </div>
        <div className='bubble-one'></div>
        <div className='bubble-two'></div>
        <div  className='num-contents'>Brand Design</div>
        {hoveredNumber === 2 && <div className="popup">
        <div className='xircular-popup-heading'>Brand Design</div>
          <div className='xircular-popup-textheading'>In this step, we shall discuss about the store design that will be aligned to your brand. We have dedicated designers to help you choose or suggest the best design for your brand.</div>
          </div>}
      </div>

      <div className="timeline-event" onMouseEnter={() => handleNumberHover(3)} onMouseLeave={handleNumberLeave}>
        <div className="number ">
        <div className='xircular-home-images'>
          <img src={finaldesign} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>
        </div>
        <div className='bubble-three'></div>
        <div className='bubble-four'></div>
        <div  className='num-contents'> Final Review</div>
        {hoveredNumber === 3 && <div className="popup">
        <div className='xircular-popup-heading'>Final Review</div>
          <div className='xircular-popup-textheading'>When all the changes (if there are any required) are revised, we will deliver the final design for your approval to start the development process.</div>
          </div>
        }
      </div>


      <div className="timeline-event  newfour" onMouseEnter={() => handleNumberHover(4)} onMouseLeave={handleNumberLeave}>
        <div className="numbers  yellow">
        <div className='xircular-home-images'>
          <img src={storedev} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>

        </div>
        <div className='bubble-one'></div>
        <div className='bubble-five'></div>
        <div  className='num-contents-two stores'>Store Development</div>
        {hoveredNumber === 4 && <div className="popup">
        <div className='xircular-popup-heading'>Store Development</div>
        <div className='xircular-popup-textheading'>When the back-end is finished, we move on to start designing the front-end. We always ensure it's responsive & suits your requirements. This step mostly includes the overall webstore site development based on the design.</div>
        </div>
        }
      </div>

     

    </div>

    {/* <hr className='first-hr' /> */}


    <div className="timeline-two" >
     

      <div className="timeline-event " onMouseEnter={() => handleNumberHover(8)} onMouseLeave={handleNumberLeave}>
        <div className="numbers yellow">
        <div className='xircular-home-images'>
          <img src={productdelivery} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>

        </div>
        <div className='bubble-eightyfive'></div>
        <div className='bubble-eightysix'></div>
        <div  className='num-contents-three'>Product Delivery</div>
       
        {hoveredNumber === 8 && <div className="popup">
        <div className='xircular-popup-heading'>Product Delivery</div>
          
          <div className='xircular-popup-textheading'>After the final revision, we should be ready with the product. You will get your fully-working shopify webstore that is ready to go live for the public.</div>
          </div>
          }
      </div>

      <div className="timeline-event" onMouseEnter={() => handleNumberHover(7)} onMouseLeave={handleNumberLeave}>
        <div className="number">
        <div className='xircular-home-images'>
          <img src={finalrevision} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>
        </div>
        <div className='bubble-three'></div>
        <div className='bubble-four'></div>
        <div  className='num-contents'>Final Revision</div>
        {hoveredNumber === 7 && <div className="popup">
        <div className='xircular-popup-heading'>Final Revision</div>
          <div className='xircular-popup-textheading'>The team will work on the feedback provided in the previous step and will work towards the changes.</div>

          </div>
        
        }
      </div>

      
      <div className="timeline-event" onMouseEnter={() => handleNumberHover(6)} onMouseLeave={handleNumberLeave}>
        <div className="numbers">
        <div className='xircular-home-images'>
          <img src={milestone} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>
        </div>
        <div className='bubble-one'></div>
        <div className='bubble-two'></div>
        <div  className='num-contents'>Milestone</div>
        {hoveredNumber === 6 && <div className="popup">
        <div className='xircular-popup-heading'>Milestone</div>
        <div className='xircular-popup-textheading'>All the stakeholders will have a meeting with you to discuss about the development and you will get a chance to see your store development and the first milestone.</div>
        </div>}
      </div>

      <div className="timeline-event newfour" onMouseEnter={() => handleNumberHover(5)} onMouseLeave={handleNumberLeave}>
        <div className="number">
        <div className='xircular-home-images'>
          <img src={contentupload} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>
        </div>
        <div className='bubble-fiftyfive'></div>
        <div className='bubble-fiftysix'></div>
        <div className='num-contents stores' >Content Upload</div>
        {hoveredNumber === 5 && <div className="popup">
        <div className='xircular-popup-heading'>Content Upload</div>
          <div className='xircular-popup-textheading'>Our team will begin with uploading pages, plugins, images, products, videos & more onto the shopify admin panel.</div>
          </div>}
      </div>

    

    </div>


    
    <div className="timeline-three" >
     

      <div className="timeline-event" onMouseEnter={() => handleNumberHover(9)} onMouseLeave={handleNumberLeave}>
        <div className="number">
        <div className='xircular-home-images'>
          <img src={ownership} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>
        </div>
        <div className='bubble-ninetyfive'></div>
        <div className='bubble-ninetysix'></div>
        <div className="num-contents">Ownership Transfer</div>
        {hoveredNumber === 9 && <div className="popup">
        <div className='xircular-popup-heading'>Ownership Transfer</div>
        <div className='xircular-popup-textheading'>At the last stage, we transfer over the ownership to you, from where you can start your e-commerce journey! :).</div>
        </div>}
      </div>
      <div className="timeline-event newfour" onMouseEnter={() => handleNumberHover(10)} onMouseLeave={handleNumberLeave}>
      <div className="numbers">
      <div className='xircular-home-images'>
          <img src={maintanence} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>

      </div>
        <div className='bubble-one'></div>
        {/* <div className='bubble-two'></div> */}
        <div className='num-contents stores'>Maintenance support</div>
        {hoveredNumber === 10 && <div className="popup">
        <div className='xircular-popup-heading'>Maintenance support</div>
        <div className='xircular-popup-textheading'>We at renergii will always be happy to help you should you need help with anything while operating the shopify webstore. We have a dedicated support team to work with you on a daily basis whenever you need us to step in.</div>
        </div>}
      </div>
      <div className="timeline-event" onMouseEnter={() => handleNumberHover(11)} onMouseLeave={handleNumberLeave} style={{display:"hidden",visibility:"hidden"}}>
        <div className="number">11</div>
        <div className='num-contents'>Content Upload</div>
        {hoveredNumber === 11 && <div className="popup">Our team will begin with uploading pages, plugins, images, products, videos & more onto the shopify admin panel.</div>}
      </div>
      <div className="timeline-event" onMouseEnter={() => handleNumberHover(12)} onMouseLeave={handleNumberLeave} style={{display:"hidden",visibility:"hidden"}}>
        <div className="number">11</div>
        <div className='num-contents'>Content Upload</div>
        {hoveredNumber === 11 && <div className="popup">Our team will begin with uploading pages, plugins, images, products, videos & more onto the shopify admin panel.</div>}
      </div>

      

    </div>

    
    </div>
    </div>
    </>  
      )}

            
            


            
              

            
                
                
          

        {/* end of stepper section */}




        <div className='faq-top-section'>
          <div className='faq-heading'><b>Frequently Asked Questions</b></div>
          <div className="accordions" >
            {faq.map((item, index) => (
              <div key={index} className={`accordions-items ${index === openIndex ? 'open' : ''}`}>
                <div className="accordions-questions" onClick={() => handleToggle(index)}>
                  <span>{item.question}</span>
                  <span className="arrow">{index === openIndex ? '▲' : '▼'}</span>
                </div>
                {index === openIndex && (
                  <div className="accordions-answers" style={{ color: "grey" }}>
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className='footer-top-section'>

        <footer className="footer  myownfooter">
          <Container>
            <Row>

              {/* <Col md="4" sm="12"> */}
              {/* <img src={logo} alt="logo" height="24" /> */}
              {/* <div style={{color:"black",fontSize:"20px"}}>Ayatana</div> */}

              <div className="full-footer-cont">

                <div className='footer-flex-box-container'>
                  <div>
                    <img src={imagetwo} style={{ width: "180px", height: "120px" }} />
                  </div>
                  <div className='footer-image-container'>
                    <img src={facebookone} width={30} height={30} className="facebook-section" />
                    <img src={instaone} width={30} height={30} className="facebook-section" />
                    <img src={linkedinone} width={30} height={30} className="facebook-section" />
                    <img src={twitterone} width={30} height={30} className="facebook-section" />
                    <img src={youtube} width={30} height={30} className="facebook-section" />
                  </div>
                </div>

                <div>
                  {/* <hr className="" /> */}
                  <p className="copy-rights" style={{ textAlign: "center", paddingTop: "5px" }}> 2024 © Copyright StorefrontX.All Rights Reserved</p>
                </div>

              </div>

              {/* <p className="margin-t-20">The digital marketing platform that connects small businesses with their target audience.</p> */}

              {/* <ul className="list-inline social">
                                    {
                                        this.state.socials.map((social, key) =>
                                            <li key={key} className="list-inline-item">
                                                <Link to={social.link} className={social.class + " mr-1"}><i className={social.icon}></i></Link>
                                            </li>
                                        )
                                    }
                                </ul> */}
              {/* </Col> */}

              {/* <Col md={{size:3, offset : 2}} sm="6">
                                <LinkSection title="Solutions" links={this.state.links1} />
                            </Col> */}

              {/* <Col md="6" sm="6"> */}
              {/* Discover Phygital Santhe Website Here */}
              {/* <button style={{ border:"none",outline:"none",border:"1px solid #f56363",backgroundColor:"#f56363",borderRadius:"20px",color:"white",width:"300px",height:"40px"}}><a href="https://incomparable-hamster-92fd22.netlify.app/"  target="_blank" style={{color:"white"}}><b>EXPLORE PHYGITAL</b></a></button> */}
              {/* <LinkSection title="Useful Links" links={this.state.links2}  /> */}
              {/* </Col> */}

            </Row>

          </Container>
        </footer>

      </div>

    </>
  )
}

export default Optifarmcomingsoon
