import React, { Component } from "react";
import { Container, Row,Col} from "reactstrap";

//Import Components
import SectionTitle from "../../ayatanacomponents/common/section-title";

//Import Team Box
import TeamBox from "./team-box";
import '../../Ayatanassets/css/AyatanaOwn.css'

//Import Images
// import team1 from "../../assets/images/team/team1.jpg";
// import team2 from "../../assets/images/team/team2.jpg";
// import team3 from "../../assets/images/team/team3.jpg";

class OurTeam extends Component {
  state = {
    members: [
      {
        id: 1,
        name: "Andrew Sparks",
        // image: team1,
        post: "CEO/Founder",
        desc:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        socials: [
          { class: "bg-twitter", icon: "ti-twitter-alt", link: "#" },
          { class: "bg-dribbble", icon: "ti-dribbble", link: "#" },
          { class: "bg-linkedin", icon: "ti-linkedin", link: "#" },
        ],
      },
      {
        id: 2,
        name: "Hubert Brandt",
        // image: team2,
        post: "CTO/Co-Founder",
        desc:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        socials: [
          { class: "bg-googleplus", icon: "ti-google", link: "#" },
          { class: "bg-facebook", icon: "ti-facebook", link: "#" },
          { class: "bg-linkedin", icon: "ti-linkedin", link: "#" },
        ],
      },
      {
        id: 3,
        name: "David Downs",
        // image: team3,
        post: "Web Designer",
        desc:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        socials: [
          { class: "bg-twitter", icon: "ti-twitter-alt", link: "#" },
          { class: "bg-dribbble", icon: "ti-dribbble", link: "#" },
          { class: "bg-linkedin", icon: "ti-linkedin", link: "#" },
        ],
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="section bg-lightgray" id="team">
          <Container>


          <Row>
                <Col sm="12">
                    <div className="title-box text-center">
                        <div  className="event-sect" ><b> Upcoming Events</b></div>

                        <div  className="comming-sec">COMING SOON</div>
                        
                        <div  className="phygital-hed"><b>PHYGITAL RETAIL EVENT</b></div>

                        <div className="know-hed">To Know More</div>
                          {/* <button style={{ border:"none",outline:"none",border:"1px solid #f56363",backgroundColor:"#f56363",borderRadius:"20px",color:"white",width:"300px",height:"40px"}}><a href="https://incomparable-hamster-92fd22.netlify.app/"  target="_blank" style={{color:"white"}}><b>EXPLORE PHYGITAL</b></a></button> */}

                        <button  className="click-hed" style={{color:"white",cursor:"pointer"}}><a href="http://ayatana.world/zestzone" target="_self" style={{color:" #f56363",cursor:"pointer"}} >Click here</a></button>
                    </div>
                </Col>
            </Row>

            {/* <div style={{textAlign:"center",fontSize:"30px"}}><b>OUR UPCOMING EVENTS</b></div> */}

            {/* <div style={{textAlign:"center",fontSize:"20px"}}>Phygital santhe</div> */}

            {/* <div style={{textAlign:"center",}}>Comming soon </div> */}

            {/* <div style={{textAlign:"center"}}>Read more</div> */}


            {/* <div style={{textAlign:"center"}}>Discover Phygital Santhe Website Here </div> */}
                                 {/* <button style={{ border:"none",outline:"none",border:"1px solid #f56363",backgroundColor:"#f56363",borderRadius:"20px",color:"white",width:"300px",height:"40px",textAlign:"center"}}><a href="https://incomparable-hamster-92fd22.netlify.app/"  target="_parent" style={{color:"white"}}><b>EXPLORE PHYGITAL</b></a></button>  */}
             {/* <SectionTitle title1="Our Creative" title2="Team" />  */}

            <Row>
              {/* <TeamBox members={this.state.members} /> */}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default OurTeam;
