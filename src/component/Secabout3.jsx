import React from 'react';
import { Col, Row } from 'react-bootstrap';
///////////////image
import img from '../assets/images/skills.png';
import AOS from 'aos'

export default ()=>{
    AOS.init();
    return(<>
    <Row className='mx-0'>
        
        <Col md='1'></Col>
        
        <Col md='10' className='mt-5'>
            <Row className='mx-0'>
                
                <Col md='6' className='mt-5' data-aos='fade-right'>
                    <img style={{width:"100%"}} src={img} alt="" />
                </Col>
                
                <Col md='6' className='mt-5' data-aos='fade-left'>
                    <h1 className='h1-about2'>
                        Voluptatem dignissimos provident quasi corporis voluptates
                    </h1>
                    <p className='p-about2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <p className='p-slider'>HTML</p>
                        <p className='p-slider'>100%</p>
                    </div>
                    <div className='con-slider shadow'>
                        <div className='inner-slider1'></div>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <p className='p-slider'>CSS</p>
                        <p className='p-slider'>90%</p>
                    </div>
                    <div className='con-slider shadow'>
                        <div className='inner-slider2'></div>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <p className='p-slider'>JAVASCRIPT</p>
                        <p className='p-slider'>75%</p>
                    </div>
                    <div className='con-slider shadow'>
                        <div className='inner-slider3'></div>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <p className='p-slider'>PHOTOSHOP</p>
                        <p className='p-slider'>55%</p>
                    </div>
                    <div className='con-slider shadow ' style={{marginBottom:"7rem"}}>
                        <div className='inner-slider4'></div>
                    </div>
                </Col>
            
            </Row>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>

    </>)
}