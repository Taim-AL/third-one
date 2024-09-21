import React from 'react';
import AOS from 'aos'

export default ({icon , titel , about})=>{
    AOS.init();
    return (<>
    
    <div style={{padding:"1.5rem"}} className='shadow card-7' >
        {icon}
        <h4 className='h4-card1'>{titel}</h4>
        <p className='p-card1'>{about}</p>
    </div>
    </>)
}