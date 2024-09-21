import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';

export default ()=>{
    AOS.init();
    return(<>
    <Row className='mx-0 sec2services'>
        
        <Col md='1'></Col>
        
        <Col md='10' >
            <Row className='mx-0'>
                
                <Col md='9' data-aos='fade-right'>
                    <h3 className='h3-4'>
                        Call To Action
                    </h3>
                    <p className='ps-4'>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Col>
                
                <Col md='3' data-aos='fade-left' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Link to={"/"}>
                        <button className='but-call'>Call To Action</button>
                    </Link>
                </Col>
            
            </Row>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>
    </>)
}