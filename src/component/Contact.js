import React from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

import HomeUrl from '../assets/images/home-border.png';
import Feature from '../assets/images/features/img-3.png';

const Contact = () => {
  return (
    <>
      <section className="section " id="contact" style={{backgroundColor:"#f0f9fa"}}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="title-box text-center   ">
                <h3 className="title-heading mt-4">Let's talk about everything!</h3>
                <img src={HomeUrl} height="15" className="mt-3" alt="" />
              </div>
            </Col>
          </Row>
          <Row className="mt-5 pt-4">
            <Col lg={6}>
              <div className="mt-4 home-img text-center">
                <div className="animation-2"></div>
                <div className="animation-3"></div>
                <img src={Feature} className="img-fluid" alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="custom-form mt-4">
                <div id="message"></div>
                <Form method="post" name="contact-form" id="contact-form">
                  <Row>
                    <Col lg={6}>
                      <FormGroup className="mt-3">
                        <Label className="contact-lable" style={{color:"black"}}>First Name</Label>
                        <Input name="name" id="name" className="form-control" type="text"  style={{backgroundColor:"#FFFFFF"}}/>
                      </FormGroup>
                    </Col>
                    <Col lg={6}>
                      <FormGroup className="mt-3">
                        <Label className="contact-lable" style={{color:"black"}}>Last Name</Label>
                        <Input name="name" id="lastname" className="form-control" type="text" style={{backgroundColor:"#FFFFFF"}} />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <FormGroup className="mt-3">
                        <Label className="contact-lable" style={{color:"black"}}>Email Address</Label>
                        <Input name="email" id="email" className="form-control" type="text" style={{backgroundColor:"#FFFFFF"}} />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <FormGroup className="mt-3">
                        <Label className="contact-lable" style={{color:"black"}}>Your Message</Label>
                        <Input type="textarea" name="comments" id="comments" rows="5" className="form-control" style={{backgroundColor:"#FFFFFF"}}/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} className="mt-3 text-right">
                      <Input
                        id="submit"
                        name="send"
                        color="primary"
                        className="submitBnt btn btn-round"
                        value="Send Message"
                        type="submit"
                        style={{ width: 'auto', color: '#fff',backgroundColor:"#1eA591" }}
                      />{' '}
                      <div id="simple-msg"></div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
