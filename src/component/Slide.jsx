import React from 'react';
import { Col, Row } from 'react-bootstrap';
/////////////images
import img1 from '../assets/images/clients/client-1.png';
import img2 from '../assets/images/clients/client-2.png';
import img3 from '../assets/images/clients/client-3.png';
import img4 from '../assets/images/clients/client-4.png';
import img5 from '../assets/images/clients/client-5.png';
import img6 from '../assets/images/clients/client-6.png';
import AOS from 'aos';

export default ()=>{
    AOS.init();
    const data=[
        {img:img1},
        {img:img2},
        {img:img3},
        {img:img4},
        {img:img5},
        {img:img6},
    ]
    return(<>
    <Row className='mx-0' style={{backgroundColor:"#f3f5fa"}}>
        
        <Col md='1'></Col>
        
        <Col md='10' data-aos='fade-up'>
            <Row className='mx-0'>
                {data.map((e)=>{
                    return(
                        <>
                        <Col md='2' xs='6'>
                            <img className='img-client' src={e.img} alt="" />
                        </Col>
                        </>
                    )
                })}
            </Row>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>
    </>)
}