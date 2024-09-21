import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NavScrollExample from './Nav';
//////////////////icon
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
/////////////img
import img from '../assets/images/google.png';
import Footer from '../component/Footer';
import AOS from 'aos';

export default()=>{
    AOS.init();
    return(
        <>
        <NavScrollExample/>
        <Row className='mx-0'>
            
            <Col md='1'></Col>
            
            <Col md='10'>
                <div style={{height:"5rem"}}></div>
                <div>
                    <h4 className='h4-contact' data-aos='fade-down'>
                        CONTACT
                    </h4>
                    <Row className='mx-0'>
                        
                        <Col md='5'></Col>
                        
                        <Col md='2' >
                            <div style={{backgroundColor:"#47b2e4",height:"4px",marginBottom:"2rem"}}></div>
                        </Col>
                        
                        <Col md='5'></Col>
                    
                    </Row>
                </div>
                <p className='p-contact'>
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                </p>
                <Row className='mx-0'>
                    
                    <Col md='5' style={{marginBottom:"2rem"}} data-aos='fade-right' >
                        <div className='card-1 shadow '>
                        <div className='con-1'>
                            <LocationOnOutlinedIcon className='icon-card' style={{fontSize:"40px",padding:"5px",transition: "0.5s"}}/>
                            <div>
                                <strong>
                                    <h4 className='h4-card'>Location:</h4>
                                </strong>
                                <p className='p-card'>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>
                        <div className='con-1'>
                            <EmailOutlinedIcon className='icon-card' style={{fontSize:"40px",padding:"5px",transition: "0.5s"}}/>
                            <div>
                                <strong>
                                    <h4 className='h4-card'>Email:</h4>
                                </strong>
                                <p className='p-card'>info@example.com</p>
                            </div>
                        </div>
                        <div className='con-1'>
                            <PhoneIphoneOutlinedIcon className='icon-card' style={{fontSize:"40px",padding:"5px",transition: "0.5s"}}/>
                            <div>
                                <strong>
                                    <h4 className='h4-card'>Call:</h4>
                                </strong>
                                <p className='p-card'>+1 5589 55488 55s</p>
                            </div>
                        </div>
                        <img className='w-100 mt-3' src={img} alt="" />
                        </div>
                    </Col>
                    
                    <Col md='7' className='card-2 shadow' data-aos='fade-left'>
                        <Row className='mx-0'>
                            
                            <Col md='6'>
                                <label className='label-contact'>Your Name</label>
                                <input className='input-contact' type="text" />
                            </Col>
                            
                            <Col md='6'>
                                <label className='label-contact'>Your Email</label>
                                <input className='input-contact' type="email" />
                            </Col>
                        
                        </Row>
                        <Row className='mx-0'>
                            <Col md='12'>
                                <label className='label-contact'>Subject</label>
                                <input className='input-contact' type="text" />
                            </Col>
                        </Row>
                        
                        <Row className='mx-0'>
                           
                            <Col md='12'>
                                <label className='label-contact'>Message</label>
                                <textarea name="" id="" cols="30" rows="7" className='input-contact'></textarea>
                            </Col>
                        
                        </Row>
                        
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <button className='but-send'>Send Message</button>
                        </div>
                    </Col>
                
                </Row>
            </Col>
            
            <Col md='1'></Col>
        
        </Row>
        <Footer/>
        </>
    )
}