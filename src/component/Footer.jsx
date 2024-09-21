import React from 'react';
import { Col, Row } from 'react-bootstrap';
////////icon
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AOS from 'aos';

export default ()=>{
    AOS.init();
    return(
        <>
        <Row className='mx-0' style={{backgroundColor:"#f3f5fa"}}>
            
            <Col md='3'></Col>
            
            <Col md='6' data-aos='fade-right'>
                <h4 className='h4-footer'>
                    Join Our Newsletter
                </h4>
                <p className='p-footer'>
                    Tamen quem nulla quae legam multos aute sint culpa legam noster magna
                </p>
                <div style={{display:'flex',justifyContent:"right",marginTop:"1rem"}}>
                    <input className='input-footer shadow' type="text" />
                    <button className='but-footer'>Subscribe</button>
                </div>
            </Col>
            
            <Col md='3'></Col>
        
        </Row>
        <Row style={{backgroundColor:"#fff", padding:"60px 0 30px 0"}} className='mx-0' data-aos='fade-down'>
            <Col md='1'></Col>
            
            <Col md='10'>
                <Row className='mx-0'>
                    <Col md='3' className='mb-3'>
                        <div style={{display:"flex",fontFamily:"-moz-initial"}}>
                            <h1 style={{color:"#37517e"}}>ARSHA</h1>
                        </div>
                        <p className='p-foot'>
                            A108 Adam Street <br/>
                            NY 535022, USA<br/><br/>
                            <strong>Phone:</strong> +1 5589 55488 55<br/>
                            <strong>Email:</strong> info@example.com<br/>
                        </p>
                        
                    </Col>
                    
                    <Col md='5'>
                        <Row className='mx-0'>
                            <Col md='6' className='mb-3'>
                                <h4 className='h4-foot'>Useful Links</h4>
                                <ul style={{listStyle:"none"}}>
                                    <li>
                                        <p className='li-foot'>
                                            <strong style={{color:"#47b2e4"}}>#</strong>
                                            Home
                                        </p>
                                    </li>
                                    <li>
                                        <p className='li-foot'>
                                            <strong style={{color:"#47b2e4"}}>#</strong>
                                            About us
                                        </p>
                                    </li>
                                    <li>
                                        <p className='li-foot'>
                                            <strong style={{color:"#47b2e4"}}>#</strong>
                                            Services
                                        </p>
                                    </li>
                                    <li>
                                        <p className='li-foot'>
                                            <strong style={{color:"#47b2e4"}}>#</strong>
                                            Terms of service
                                        </p>
                                    </li>
                                    <li>
                                        <p className='li-foot'>
                                            <strong style={{color:"#47b2e4"}}>#</strong>
                                            Privacy policy
                                        </p>
                                    </li>
                                </ul>
                            </Col>
                            
                            <Col md='6' className='mb-3'>
                                <h4 className='h4-foot'>Our Services</h4>
                                <ul style={{listStyle:"none"}}>
                                    <li>
                                        <p className='li-foot'>
                                            <strong style={{color:"#47b2e4"}}>#</strong>
                                             Web Design 
                                        </p>   
                                    </li>
                                    <li>
                                        <p className='li-foot'>
                                            <strong style={{color:"#47b2e4"}}>#</strong>
                                            Web Development
                                        </p>    
                                    </li>
                                    <li>
                                        <p className='li-foot'>
                                            <strong style={{color:"#47b2e4"}}>#</strong>
                                            Product Management
                                        </p>    
                                    </li>
                                    <li>
                                        <p className='li-foot'>
                                            <strong style={{color:"#47b2e4"}}>#</strong>
                                            Marketing
                                        </p>
                                    </li>
                                    <li>
                                        <p className='li-foot'>
                                            <strong style={{color:"#47b2e4"}}>#</strong>
                                            Graphic Design
                                        </p>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    
                    <Col md='4'className='mb-3'>
                        <h4 className='h4-foot'>
                            Our Newsletter
                        </h4>
                        <p className='p-foot' style={{fontSize:"18px",padding:"1vw"}}>
                            Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies
                        </p>
                        <div style={{display:"flex",justifyContent:"space-around",marginTop:"1vw"}}>
                            <button className='icon-foot' ><TwitterIcon/></button>
                            <button className='icon-foot'><FacebookOutlinedIcon/></button>
                            <button className='icon-foot'><InstagramIcon/></button>
                            <button className='icon-foot'><TelegramIcon/></button>
                            <button className='icon-foot'><LinkedInIcon/></button>
                        </div>
                    </Col>
                </Row>
            </Col>
            
            <Col md='1'></Col>
        </Row>
        <Row className='mx-0 ' style={{backgroundColor:"#37517e"}}>
            <Col md='4'>
                <h4 className='text-center mt-5 mb-3 h4-copyright' >
                    © Copyright <strong> Gp. </strong>  All Rights Reserved
                </h4>
            </Col>
            
            <Col md='4' ></Col>
            
            <Col md='4' className='text-center mt-5 mb-3'>
                <p className='h4-copyright'>Designed by <strong style={{color:"#fff"}}> Taim AL</strong></p>
            </Col>
        </Row>
        </>
    )
}