import React from 'react'
import {Link} from 'react-router-dom';
import {arrow} from '../assets/icons'
 
const InfoBox = ({text, link, btnText}) =>(
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
       <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
       Hi, this is <span className='font-semibold'>Aditi</span>
       <br />
       A FrontEnd developer!!
       </h1>  
      ),
      2:(
        <InfoBox
            text ="depressed soul"
            link = "/about"
            btnText = "Trying hard to survive"
        />
      ),
      3: (
        <InfoBox
            text ="depressed soul"
            link = "/about"
            btnText = "Trying hard to survive"
        />
      ),
      4: (
        <InfoBox
            text ="depressed soul"
            link = "/about"
            btnText = "Trying hard to survive"
        />
      ),
    
}


const Homeinfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default Homeinfo