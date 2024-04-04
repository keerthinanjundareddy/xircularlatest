import React, { Component } from "react";
import { useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Animated } from "react-animated-css";
import axios from 'axios'
import phone from "../../Ayatanassets/images/Productrecomend.png"
import map from "../../Ayatanassets/images/Product visual.png"
import mail from "../../Ayatanassets/images/Product visual.png"

function  GetInTouch() {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     firstname: "",
  //     email: "",
  //     subject: "",
  //     comments: "",
  //     msgSendSuccess: false,
  //   };
  // }

  // handleSubmit = () => {
  //   let emailPattern = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);

  //   if (
  //     this.state.firstname !== "" &&
  //     this.state.email !== "" &&
  //     emailPattern.test(this.state.email) &&
  //     this.state.subject !== "" &&
  //     this.state.comments !== ""
  //   ) {
  //     this.setState({ msgSendSuccess: true });
  //     this.myFormRef.reset();

  //     setTimeout(() => {
  //       this.setState({ firstname: "" });
  //       this.setState({ email: "" });
  //       this.setState({ subject: "" });
  //       this.setState({ comments: "" });
  //       this.setState({ msgSendSuccess: false });
  //     }, 5000);
  //   }
  // };

  // onInputChangeHandlar = (event) => {
  //   const value = event.target.value;
  //   const name = event.target.name;

  //   this.setState({ [name]: value });
  // };

  // render() {
    const[name,setName]=useState("")
    const[phone,setPhone]=useState("")
    const[subject,setSubject]=useState("")
    const[message,setMessage]=useState("")
    const [phone_error, setPhone_error] = useState("");


    function handleChange(e)
    {
      e.preventDefault()
      setPhone(e.target.value);
      


      if (phone.length !== 9) {

        setPhone_error('Phone number should contain 10 digits');

      } else {
        setPhone_error('');
      }

    }

   function handleSubmit(e)
   {
    e.preventDefault();

    const formDataTwo = new FormData();
    formDataTwo.append("name", name);
        // formDatas.append("email", email);
        formDataTwo.append("phone_number", phone);
        formDataTwo.append("message", subject);
        formDataTwo.append("message", message);

        for (var key of formDataTwo.entries()) {
          console.log(key[0] + ', ' + key[1]);
      }

     

      if (phone.length !== 10) {

        setPhone_error('Phone number should contain 10 digits');

      } else {
        setPhone_error('');

        const headerObject = {
          'Content-Type':'multipart/form-data',
          "Accept":"*/*",
          // "Access-Control-Allow-Origin": "*",
        }
  
        const formDataApi="http://sales.apprikart.com/core/api/insert_enquiry/";
        
  
        axios.post(formDataApi,formDataTwo,{headers: headerObject})
                .then((res) =>{
  
                    console.log("res",res.data)
                    // window.alert(res.data.msg)
  
  
                    if(res.data.status === "success"){
  
                      window.alert("your message will be attended soon by our team!")
  
                  }else{
                      window.alert(res.data.msg)
  
                  }
  
  
                  }).catch((err)=>{
                     
                    console.log("err.message", err.message)
  
                    
  
  
                  })

      }

      
    



   } 

  
    return (
      <React.Fragment>
        <section className="section  bg-lightgray " id="contact">
          <Container>
            <Row>
              <Col sm="12">
                <div className="title-box text-center">
                  <div style={{fontSize:"30px"}}><b>Have any questions?</b></div>
                </div>
              </Col>
            </Row>

            <Row className="contact-footer">
              <Col sm="4">
                <div className="contact-footer-box text-center">
                  {/* <i className="ti-mobile" ></i> */}
                  <div style={{width:"10px",height:"10px"}}>
                  <img src={{}} style={{width:"100%",height:"100%",objectFit:"contain"}} />
                  </div>
                  <h5>+91 9900565911 </h5>
                </div>
              </Col>

              <Col sm="4">
                <div className="contact-footer-box text-center">
                  <i className="ti-map-alt"></i>
                  <h5> No 18 'Chuncha', 2nd floor,  9th main road, 2nd block, jayanagara, bangalore 560011</h5>
                </div>
              </Col>

              <Col sm="4">
                <div className="contact-footer-box text-center">
                  <i className="ti-email"></i>
                  {/* <h5>surender@renergii.com</h5> */}
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm="12">
                {/* <h4>Send us a message!</h4>
                <div id="message">
                  {this.state.msgSendSuccess ? (
                    <Animated
                      animationIn="bounceInLeft"
                      animationOut="zoomOutDown"
                      animationInDuration={1000}
                      animationOutDuration={1000}
                      isVisible={true}
                    >
                      <fieldset>
                        <div id="success_page">
                          <h3>Email Sent Successfully.</h3>
                          <p>
                            Thank you <strong>{this.state.firstname}</strong>,
                            your message has been submitted to us.
                          </p>
                        </div>
                      </fieldset>
                    </Animated>
                  ) : null}
                </div> */}
                <form onSubmit={handleSubmit}>
                <AvForm
                  name="cform"
                  id="cform"
                  className="contact-form margin-t-20"
                  // ref={(el) => (this.myFormRef = el)}
                  // onSubmit={(e) => this.handleSubmit(e)}
                >
                  <Row>
                    <Col sm="4">
                      <AvField
                        name="firstname"
                        placeholder="Your name"
                        type="text"
                        errorMessage="Enter Your Name"
                        className="form-control"
                        // validate={{ required: { value: true } }}
                        // id="name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        required
                      />
                    </Col>
                    <Col sm="4">
                      <input
                      type="number"
                        name="email"
                        placeholder="Your Phone number"
                        
                        errorMessage="Enter Your Phone number"
                        className="form-control"
                        // validate={{
                          // required: { value: true },
                          // email: { value: true },
                        // }}
                        // id="email"
                        value={phone}
                        onChange={handleChange}                    
                       
                        required
                      />
                      <label style={{color: 'red'}}>{phone_error}</label>
                    </Col>
                    <Col sm="4">
                      <AvField
                        name="subject"
                        placeholder="Your Subject"
                        type="text"
                        errorMessage="Enter Your Subject"
                        className="form-control"
                        // validate={{ required: { value: true } }}
                        // id="subject"
                        // onChange={(e) => this.onInputChangeHandlar(e)}
                        value={subject}
                        onChange={(e)=>setSubject(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="12">
                      <AvField
                        type="textarea"
                        name="comments"
                        // id="comments"
                        rows="4"
                        className="form-control"
                        placeholder="Your message"
                        // errorMessage="Enter your message."
                        // validate={{ required: { value: true } }}
                        // onChange={(e) => this.onInputChangeHandlar(e)}
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                      />
                    </Col>
                  </Row>

                  {/* <Row> */}
                    {/* <Col sm="12" className="text-right"> */}
                      {/* <input
                        type="submit"
                        id="submit"
                        name="send"
                        className="submitBnt btn  btn-custom"
                        value="Send Message"
                      /> */}
                    {/* </Col> */}
                  {/* </Row> */}

                  {/* my code */}
                  <Row>
                    <Col sm="12" className="text-right">
                      {/* <input
                        type="submit"
                        id="submit"
                        name="send"
                        className="submitBnt btn  btn-custom"
                        value="Send Message"
                      /> */}
                      <div style={{textAlign:"center"}}>
                      <button className="submit-contact-btn" >submit</button>
                      </div>
                    </Col>
                  </Row>


                  <div id="simple-msg"></div>
                </AvForm>
                </form>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
                    }


export default GetInTouch;
