import React from 'react'
import './Untactcomingsoon.css'
import untactlogo from '../../assets/images/Untactnew.png'


function Untactcomingsoon() {
  return (
    <div className='untact-coming-soon-section-div'>
        <div className='untact-img-div'>
        <img src={untactlogo} alt="untact" style={{width:"100%",height:"100%",objectFit:"contain"}} />
        </div>
        <div className='newsite-text-div'>OUR NEW SITE IS</div>
    <div className='coming-soon-section'>
  
           <div className='coming-txt'>COMING</div>
           <div className='soon-txt'>SOON</div>
    </div>
    </div>
  )
}

export default Untactcomingsoon
