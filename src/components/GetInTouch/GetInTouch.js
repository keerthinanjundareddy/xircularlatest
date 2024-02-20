import React, { Component } from 'react';
import { useState } from 'react';
import { Container, Row, Col, Media, FormGroup } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Images
import axios from 'axios'
import map from "../../assets/images/features/map.png";


const GetInTouch = () => {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[phone,setPhone] = useState('');
    const[message,setMessage] = useState('');


    function handleSubmit(e){
        e.preventDefault();
        
        console.log("sections",name,email,phone,message)
         
            
        
        const datas={name,email,phone,message}
        const formDatas = new FormData();
        formDatas.append("name", name);
        formDatas.append("email", email);
        formDatas.append("phone_number", phone);
        formDatas.append("message", message);


        for (var key of formDatas.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }

        const headerObject = {
            'Content-Type':'multipart/form-data',
            "Accept":"*/*",
            // "Access-Control-Allow-Origin": "*",
           


            
        }

        const formDataApi="http://sales.apprikart.com/core/api/insert_enquiry/";

        axios.post(formDataApi,formDatas,{headers: headerObject})
                .then((res) =>{
                    console.log("res",res.data)
                    console.log("result",res.data.msg)
                    if(res.data.status==="success")
                    {
                window.alert("your message will be attended soon by our team")
                    }
                    else{
                        window.alert(res.data.msg)  
                    }
               

                }).catch((err)=>{
                   
                      console.log(err)    
                      window.alert(err.message)
               
                    
                    
                })
    }

   
        return (
            <React.Fragment>
                <section className="section" id="contact">
                    <Container>
                    <SectionTitle
                        title="Grow with us"
                        // subtitle="Contact"
                        // desc="Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin."
                    />
                        <Row className="mt-5 pt-2">
                            <Col lg={5}>
                                <div className="contact-info">
                                    <div style={{backgroundImage: `url(${map})`, backgroundRepeat : "no-repeat"}} >

                                        <Media>
                                            <i className="mdi mdi-map-marker  h4" style={{color:"#f1894c"}}></i>
                                            <Media body className=" ml-4">
                                                <p className="text-muted">No 18'Chuncha',2nd floor,9th main road,
                                                    <br/>2nd block,jaynagara,bangalore 560011</p>
                                            </Media>
                                        </Media>

                                        <Media className="mt-4">
                                            <i className="mdi mdi-phone h4" style={{color:"#f1894c"}}></i>
                                            <Media body className="ml-4">
                                                <p className="text-muted">Phone: +91 9845116925</p>
                                                    {/* <br/>Fax: +954-627-9727</p> */}
                                            </Media>
                                        </Media>

                                        <Media className="media mt-4">
                                            <i className="mdi mdi-calendar-clock h4" style={{color:"#f1894c"}}></i>
                                            <Media body className="ml-4">
                                                <p className="text-muted">Monday-friday: 9.00-18.00
                                                    <br/>Saturday-Sunday: Holiday</p>
                                            </Media>
                                        </Media>

                                        <Media className="media mt-4">
                                            <i className="mdi mdi-email h4" style={{color:"#f1894c"}}></i>
                                            <Media body className="ml-4">
                                                <p className="text-muted">Email:naghma@xircular.io</p>
                                            </Media>
                                        </Media>

                                    </div>

                                </div>
                            </Col>

                            <Col lg={7}>
                                <div className="custom-form">
                                    <div id="message"></div>
                                    <form onSubmit={handleSubmit}>
                                    <AvForm name="contact-form" id="contact-form">
                                        <Row>
                                            <Col lg={12}>
                                                <FormGroup className="mt-3">
                                                <AvField
                                                    name="name"
                                                    // id="name"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your name"
                                                    // errorMessage="Enter Your Name"
                                                    // validate={{ required: { value: true } }}
                                                    onChange={(e)=>setName(e.target.value)}
                                                    value={name}
                                                    required
                                                    
                                                />
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={6}>
                                                <FormGroup className="mt-3">
                                                <AvField
                                                    name="email"
                                                    // id="email"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your email"
                                                    // errorMessage="Enter Your email"
                                                    // validate={{
                                                    //     required: { value: true },
                                                    //     email: { value: true }
                                                    // }}
                                                    onChange={(e)=>setEmail(e.target.value)}
                                                    value={email}
                                                   
                                                />
                                                </FormGroup>
                                            </Col>

                                            <Col lg={6}>
                                                <FormGroup className="mt-3">
                                                <AvField
                                                    name="number"
                                                    // id="number"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Phone number"
                                                    // errorMessage="Enter Your Phone number"
                                                    // validate={{
                                                    //     required: { value: true },
                                                    // }}
                                                    onChange={(e)=>setPhone(e.target.value)}
                                                    value={phone}
                                                    required
                                                />
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={12}>
                                                <FormGroup className="mt-3">
                                                    <input type="text" name="comments"  rows="5" className="form-control" placeholder="Your message"  onChange={(e)=>setMessage(e.target.value)}
                                                    value={message}  required />
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={12}>
                                                <div className="mt-3">
                                                <button  name="send" className="submitBnt btn btn-primary"  
                                                  >Send Message</button>
                                                    
                                                    <div id="simple-msg"></div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </AvForm>
                                    </form>
                                </div>
                            </Col>

                        </Row>

                    </Container>
                </section>
            </React.Fragment>
        );
    }


export default GetInTouch;