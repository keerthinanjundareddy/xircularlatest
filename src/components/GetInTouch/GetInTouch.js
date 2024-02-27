import React, { Component } from 'react';
import { useState } from 'react';
import { Container, Row, Col, Media, FormGroup } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Images
import axios from 'axios'
import map from "../../assets/images/features/map.png";
import close from '../../assets/images/closeblackicon.png'


const GetInTouch = () => {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[phone,setPhone] = useState('');
    const[message,setMessage] = useState('');
    // const[popup,setPopup]=useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const[errmsg,setErrmsg]=useState('');
    const[namerrmsg,setNamerrmsg]=useState('');
    const[phonerrmsg,setPhonerrmsg]=useState('');
    const[successmsg,setSuccessmsg]=useState('');
    const[emailmsg,setEmailmsg]=useState('');
    const[msgerr,setMsgerr]=useState('');
 


    function handleMsgChange(e) {
        // Clear the message error message when the user starts typing
        setMsgerr('');
        setMessage(e.target.value);
    }

    function handleEmailChanges(e){
        setEmailmsg('');
        setEmail(e.target.value);
    }

    function handlePhone(e){
        setPhonerrmsg('');
        setPhone(e.target.value);
    }

   function handlenameChanges(e){
        setNamerrmsg('');
        setName(e.target.value)
    }
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

        const formDataApi="https://sales.apprikart.com/core/api/insert_enquiry/";

        if (name.trim() === '') {
            setNamerrmsg("Name cannot be empty");
            return; // Stop form submission if name is empty
        }


        const nameRegex = /^[A-Za-z]+$/;
        if (!nameRegex.test(name)) {
            setNamerrmsg("Name should contain  only alphabets");
            return; // Stop form submission if name contains non-alphabetic characters
        }



        if (email.trim() === '') {
            setEmailmsg("Email cannot be empty");
            return; // Stop form submission if name is empty
        }



        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailmsg("Invalid email format");
            return; // Stop form submission if email format is invalid
        }

        if (phone.trim() === '') {
            setPhonerrmsg("phoneNumber cannot be empty");
            return; // Stop form submission if name is empty
        }

        const phoneRegex = /^(\+\d{1,2})?[-\s]?\d{10}$/;
        if (!phoneRegex.test(phone)) {
            setPhonerrmsg("phoneNumber must contain 10 digits");
            return; // Stop form submission if phone number format is invalid
        }


        if (message.trim() === '') {
            setMsgerr("Message cannot be empty");
            return; // Stop form submission if name is empty
        }
     
     
      
        axios.post(formDataApi,formDatas,{headers: headerObject})
                .then((res) =>{
                    console.log("res",res.data)
                    console.log("result",res.data.msg)
                    setNamerrmsg(" ");
                setPhonerrmsg(" ");
                    if(res.data.status==="success")
                    {
                // window.alert("your message will be attended soon by our team");
                setIsOpen(true);
                setSuccessmsg("Your message will be attended soon by our team!")
                // setErrmsg("your message will be attended soon by our team"); 
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
               
               
                    }
                    if (res.data.msg === "name can not be empty") {
                        setNamerrmsg("Name cannot be empty");
                    } else {
                        setNamerrmsg("");
                    }

                    if (res.data.msg==="phone_number can not be empty") {
                        setPhonerrmsg("phone number cannot be empty")

                    }
                    else{
                        setPhonerrmsg("");
                        setNamerrmsg("");
                    }
                      
                })
            }
                            


                        
                  
                    
               


   
        return (
            <React.Fragment>
                <section className="section" id="contact"  style={{backgroundColor:"#f0f9fa"}}>
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
                                                <p className="text-muted">Email:vidhya@xircular.io</p>
                                            </Media>
                                        </Media>

                                    </div>

                                </div>
                            </Col>

                            <Col lg={7}>
                                <div className="custom-form">
                                    <div id="message"></div>
                                    <form onSubmit={handleSubmit}  >
                                    <AvForm name="contact-form" id="contact-form">
                                        <Row>
                                            <Col lg={12}>
                                                <div className="mt-3">
                                                <div>
                                                    <input 
                                                  style={{backgroundColor:"white",color:"black"}}
                                                    name="name"
                                                    // id="name"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your name"
                                                    // errorMessage="Enter Your Name"
                                                    // validate={{ required: { value: true } }}
                                                    // onChange={(e) => {
                                                    //     const enteredName = e.target.value;
                                                    //     // Ensure only alphabetic characters
                                                    //     if (/^[A-Za-z]*$/.test(enteredName) || enteredName === '') {
                                                    //         setName(enteredName);
                                                    //         setNamerrmsg(""); // Clear name error message
                                                    //     } else {
                                                    //         setNamerrmsg("Name should only contain alphabets");
                                                    //     }
                                                    // }}
                                                    onChange={handlenameChanges}
                                                    value={name}
                                                    // required
                                                    />
                                           
                                                </div>
                                                <div style={{color:"red",fontSize:"14px"}}>{namerrmsg}</div>
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={6}>
                                                <div className="mt-3" >
                                                <div>
                                                    <input 
                                                style={{backgroundColor:"white"}}
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
                                                    // onChange={(e)=>setEmail(e.target.value)}
                                                    onChange={handleEmailChanges}
                                                    value={email}
                                                   
                                                />
                                                </div>
                                                <div style={{color:"red",fontSize:"14px"}}>{emailmsg}</div>
                                                </div>
                                            </Col>

                                            <Col lg={6}>
                                                <div className="mt-3">
                                                <div>
                                                    <input 
                                                  style={{backgroundColor:"white"}}
                                                    name="number"
                                                    // id="number"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Phone number"
                                                    // errorMessage="Enter Your Phone number"
                                                    // validate={{
                                                    //     required: { value: true },
                                                    // }}
                                                   
                                                    onChange={handlePhone}
                                                    value={phone}
                                                    // required
                                                />
                                                </div>
                                                <div style={{color:"red",fontSize:"14px"}}>{phonerrmsg}</div>
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={12}>
                                                <div className="mt-3">
                                                    <input type="text" name="comments"  rows="5" className="form-control" placeholder="Your message"  onChange={handleMsgChange}
                                                    value={message}   style={{backgroundColor:"white"}} required />
                                                </div>
                                                <div style={{color:"red",fontSize:"14px"}}>{msgerr}</div>
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
                      {
                    isOpen &&  (
                   <>

                        {/* <div className="backdrop-blur" onClick={() => setIsOpen(false)}   /> */}
                        <div className="popup-container" >
                          {/* Popup content */}
                          <div className="popup-content" style={{display:"flex",flexDirection:"column",}} >
                            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                              
                            <div ></div>
                            {/* <div className="close-button"  onClick={() => setIsOpen(false)}> */}
                           {/* <img src={close}  style={{paddingTop:"10px",paddingRight:"10px",width:"40px",height:"40px"}} alt="close-icon" className='close-section-popup'/> */}
                            {/* </div> */}
                            </div>
                            <div className='popup-content-text-two' style={{textAlign:"center"}}><b>Thank you!!</b></div>
                            <div className='popup-content-text' style={{color:"black"}}> {successmsg}</div>
                            <button onClick={() => setIsOpen(false)} className='xircular-ok-btn'>OK</button>
                            {/* <div className='popup-title'>text</div> */}
                          </div>
                        </div>

                        </>
        
        
                     ) }
                </section>
            </React.Fragment>
        );
    }


export default GetInTouch;