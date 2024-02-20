import React, { Component } from 'react';
import { Col } from "reactstrap";

import '../../Ayatanassets/css/AyatanaOwn.css'

class ServiceBox extends Component {

    render() {
        return (
            <React.Fragment>
                 <div className='flex-box-container-seven'>
                {
                   
                    this.props.services.map((service, key) =>
                    // <Col key={key} sm="4">
                        <div className="item-section-seven">


                            <div className='service-flexbox-container'>
                            <div>
                            <i className={service.icon}><img src={service.icon} alt={service.title} style={{width:"50px",height:"50px"}} /></i>
                            </div>
                            {/* <div>hi</div> */}
                           {/* <div><img src={service.icon} alt={service.title} /></div>  */}
                           <div>
                            <div style={{fontSize:"18px"}}><b>{service.title}</b></div>
                            <div  style={{fontSize:"15px"}}>{service.desc}</div>
                            </div>
                            </div>
                        </div>
                    //  </Col>
                    )
                }
                </div>
            </React.Fragment>
        );
    }
}

export default ServiceBox;