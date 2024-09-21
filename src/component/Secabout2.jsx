import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
////////////////img
import img from '../assets/images/about.png';
//////icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AOS from 'aos';


export default ()=>{
    AOS.init();
    const [more1,Setmore1]=useState(false)
    const [more2,Setmore2]=useState(false)
    const [more3,Setmore3]=useState(false)
    return(<>
    
    <Row className='mx-0' style={{backgroundColor:"#f3f5fa"}}>
        
        <Col md='1'></Col>
        
        <Col md='10' className='mt-5'>
            <Row className='mx-0'>
                
                <Col md='6' className='mt-5' data-aos="fade-right">
                    <h3 className='h3-about'>
                        Eum ipsam laborum deleniti<strong>  velit pariatur architecto aut nihil</strong>
                    </h3>
                    <p className='p-about2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                    </p>
                    <div className='card-5 shadow'>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <h5 className='h5-card'>
                                <strong className='h5-strong-card'>01</strong>
                                Non consectetur a erat nam at lectus urna duis?
                            </h5>
                            <button className='but-drob' onClick={()=>{ Setmore1(!more1); Setmore2(false); Setmore3(false);}}>
                                <KeyboardArrowDownIcon className='drop'  />
                            </button>
                            
                        </div>
                        {
                            more1 ? 
                            <p style={{padding:"0.5rem"}}>
                                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                            </p>:""
                        }
                    </div>
                    <div className='card-5 shadow'>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <h5 className='h5-card'>
                                <strong className='h5-strong-card'>02</strong>
                                Feugiat scelerisque varius morbi enim nunc?
                            </h5>
                            <button className='but-drob' onClick={()=>{ Setmore2(!more2); Setmore1(false); Setmore3(false);}}>
                                <KeyboardArrowDownIcon className='drop'  />
                            </button>
                            
                        </div>
                        {
                            more2 ? 
                            <p style={{padding:"0.5rem"}}>
                                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                            </p>:""
                        }
                    </div>
                    <div className='card-5 shadow'>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <h5 className='h5-card'>
                                <strong className='h5-strong-card'>03</strong>
                                Dolor sit amet consectetur adipiscing elit?
                            </h5>
                            <button className='but-drob' onClick={()=>{ Setmore3(!more3); Setmore1(false); Setmore2(false);}}>
                                <KeyboardArrowDownIcon className='drop'  />
                            </button>
                            
                        </div>
                        {
                            more3 ? 
                            <p style={{padding:"0.5rem"}}>
                                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                            </p>:""
                        }
                    </div>
                </Col>
                
                <Col md='6' className='mt-5' data-aos="fade-left">
                    <img style={{width:"100%",marginBottom:"6rem"}} src={img} alt="" />
                </Col>
            
            </Row>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>

    </>)
}