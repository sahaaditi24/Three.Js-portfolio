import React from 'react'
import {Link} from 'react-router-dom';

const InfoBox = ({ text, link, btnText}) =>(
    <div className='info-box'>
        <p className="font-medium sm: text-xl text-center">{text}</p>
        <Link to = {link}>
            {btnText}
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
           Hi, this is <span className='font-semibold'>Aditi</span> 
           <br/>
                A hopeless girl from no-where!
        </h1>
        
    ),
    2: (
    <InfoBox
        text ="Totally demotivated in life"
        link = "/about"
        btnTech = "Just surviving" 
        
    />
    ),
    3: (
        <h1>3</h1>
    ),
    4: (
        <h1>4</h1>
    )

}



const Homeinfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default Homeinfo