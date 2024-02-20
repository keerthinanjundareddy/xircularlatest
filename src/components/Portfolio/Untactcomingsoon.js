import React from 'react'
import './Untactcomingsoon.css'
import untactlogo from '../../assets/images/Untactnew.png'
import { useNavigate } from 'react-router-dom'


function Untactcomingsoon() {
    const navigate=useNavigate();
    const handleback = () =>{
        navigate(`/`);

    }
  return (
    <>
    <div className='untactsection-full-div'>
    <div className='untact-coming-soon-section-div'>
        <div className='untact-img-div'>
        <img src={untactlogo} alt="untact" style={{width:"100%",height:"100%",objectFit:"contain"}} />
        </div>
        {/* <div className='newsite-text-div'>OUR NEW SITE IS</div> */}
    <div className='coming-soon-section'>
  
           <div className='coming-txt'>COMING SOON</div>
           <div className='soon-txt'>we are soon coming live..</div>
         
    </div>
    <div>
      
            <div className='back-to-home-btn' onClick={handleback} >Back to home</div>
           </div>
    </div>
    </div>
    </>
  )
}

export default Untactcomingsoon
