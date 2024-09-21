import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NavScrollExample from './Nav';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
/////////////////////////images
import img from '../assets/images/hero-img.png';
import Slide from '../component/Slide';
import Footer from '../component/Footer';
import AOS from 'aos';

export default ()=>{
    AOS.init();
    return(
        <>
        <NavScrollExample/>
        <div style={{height:"8rem",backgroundColor:"#37517e"}}></div>
        <Row className='mx-0 home-con' >
            
            <Col md='1'></Col>
            
            <Col md='5' style={{marginTop:"5rem"}} data-aos="fade-right">
                <h1 className='h1-home'>
                    Better Solutions For Your Business
                </h1>
                <h2 className='h2-home'>
                    We are team of talented designers making websites with Bootstrap
                </h2>
                <div style={{marginBottom:"8rem"}}>
                    <button className='but1-home'>Get Started</button>
                    <button className='but2-home'><PlayCircleOutlinedIcon style={{fontSize:"2rem",transition:"0.5s"}} className='icon-video'/> Watch Video</button>
                </div>
            </Col>
            
            <Col md='5' data-aos="fade-left">
                <div className='img1-con'>
                    <img className='img-1' src={img} alt="" />
                </div>
            </Col>
            
            <Col md='1'></Col>
        
        </Row> 
        <Slide/>
        <Footer/>
        </>
    )
}