import React from 'react';
import { Col, Row } from 'react-bootstrap';
//////////////icon
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Link } from 'react-router-dom';
import AOS from 'aos';

export default ()=>{
    AOS.init();
    return(<>
    <div style={{height:"5rem"}}></div>
    <h1 className='h4-contact' data-aos="fade-down">
        ABOUT US
    </h1>
    
    <Row className='mx-0'>
                        
        <Col md='5'></Col>
                        
        <Col md='2' >
            <div style={{backgroundColor:"#47b2e4",height:"4px",marginBottom:"2rem"}}></div>
        </Col>
                        
        <Col md='5'></Col>
                    
    </Row>
    
    <Row className='mx-0'>
        
        <Col md='1'></Col>
        
        <Col md='10'>
            <Row className='mx-0'>
                
                <Col md='6' data-aos="fade-right">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div style={{display:"flex"}}>
                        <DoneAllIcon className='icon1-about'/>
                        <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </div>
                    <div style={{display:"flex"}}>
                        <DoneAllIcon className='icon1-about'/>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit
                        </p>
                    </div>
                    <div style={{display:"flex"}}>
                        <DoneAllIcon className='icon1-about'/>
                        <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </div>

                </Col>
                
                <Col md='6' data-aos="fade-left">
                    <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Link to={"/"}>
                        <button className='but-learn'>Learn More</button>
                    </Link>
                </Col>
            
            </Row>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>

    </>)
}