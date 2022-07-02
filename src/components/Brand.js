import React from 'react';

const Brand = ({brandName, brandDesc, collectionName, collectionDesc}) => {
 
  return (
    <div style={{
        width: '100%',
        height: '100%',
        display:'flex',
        flexDirection:'column',
        gap:'15px'
    }}>
        <ul style={{listStyleType:'none', padding:'0', display:'flex', gap:'20px', fontFamily:'Montserrat',
            fontSize:'18px',
            fontWeight:"100",}}>
            <li><strong>Brand</strong></li>
            <li>{brandName}</li>
        </ul>

        <ul style={{listStyleType:'none', padding:'0', display:'flex', flexDirection:'column', gap:'20px',  fontFamily:'Montserrat',
            fontSize:'18px',
            fontWeight:"100",}}>
            <li><strong>Description:</strong></li>
            <li>{brandDesc}</li>
        </ul>
        
        <ul style={{listStyleType:'none', padding:'0', display:'flex', gap:'20px', fontFamily:'Montserrat',
            fontSize:'18px',
            fontWeight:"100",}}>
            <li><strong>Collection</strong></li>
            <li>{collectionName}</li>
        </ul>

        <ul style={{listStyleType:'none', padding:'0', display:'flex', gap:'20px', flexDirection:'column', fontFamily:'Montserrat',
            fontSize:'18px',
            fontWeight:"100",}}>
            <li><strong>Description:</strong></li>
            <li>{collectionDesc}</li>
        </ul>
        
    </div>

  );
};

export default Brand;