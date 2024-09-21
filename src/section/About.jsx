import React from 'react';
import Secabout1 from '../component/Secabout1';
import Secabout2 from '../component/Secabout2';
import Secabout3 from '../component/Secabout3';
import NavScrollExample from './Nav';
import Footer from '../component/Footer';

export default ()=>{
    return(
        <>
        <NavScrollExample/>
        <Secabout1/>
        <Secabout2/>
        <Secabout3/>
        <Footer/>
        </>
    )
}