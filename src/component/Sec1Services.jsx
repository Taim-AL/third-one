import React from 'react';
import Card1 from './Card1';
////////////icon
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import { Col, Row } from 'react-bootstrap';
import AOS from 'aos';

export default ()=>{
    AOS.init();
    const data = [
        {
            icon:<SportsBasketballOutlinedIcon style={{color:"#47b2e4",fontSize:"50px",paddingBottom:"10px"}}/>,
            titel:"Lorem Ipsum",
            about:"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
        },
        {
            icon:<DescriptionOutlinedIcon style={{color:"#47b2e4",fontSize:"50px",paddingBottom:"10px"}}/>,
            titel:"Sed ut perspici",
            about:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        },
        {
            icon:<WatchLaterOutlinedIcon style={{color:"#47b2e4",fontSize:"50px",paddingBottom:"10px"}}/>,
            titel:"Magni Dolores",
            about:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
        },
        {
            icon:<ContentCopyRoundedIcon style={{color:"#47b2e4",fontSize:"50px",paddingBottom:"10px"}}/>,
            titel:"Nemo Enim ",
            about:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
        },
    ]
    return(<>
    <div style={{height:"5rem"}}></div>
    <Row className='mx-0'>
        
        <Col md='1'></Col>
        
        <Col md='10'>
            <div>
                <h4 className='h4-contact' data-aos='fade-down'>
                    SERVICES
                </h4>
                <Row className='mx-0'>
                        
                    <Col md='5'></Col>
                        
                    <Col md='2' >
                        <div style={{backgroundColor:"#47b2e4",height:"4px",marginBottom:"2rem"}}></div>
                    </Col>
                        
                    <Col md='5'></Col>
                    
                </Row>
            </div>
            <p className='p-contact' style={{marginBottom:"2rem"}}>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
            <Row className='mx-0' data-aos='fade-left'>
                {data.map((e)=>{
                    return(
                        <>
                        <Col md='3' style={{marginBottom:"3rem"}}>
                            <Card1 icon={e.icon} titel={e.titel} about={e.about}/>
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