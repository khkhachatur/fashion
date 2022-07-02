import React from 'react';

import styled from 'styled-components';

const Header = () => {
 

    const Button =styled.button`
        background:none;
        cursor: pointer;
        border:none;
        border-bottom: 1px solid #ffffff;
        border-radius:20px;
        transition: all 0.3s;
        &:hover {
            border-bottom: 1.2px solid #9901E0
    }
    `

  return (
    <div style={{
        width: '100%',
        height: '100%',
        position:'fixed',
        top:'0',
    }}>
        <div style={{
            background:'black',
            }}>
                <p style={{
                margin:'0',
                display:'flex',
                padding:'10px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color:'#ffffff',
                fontFamily:'Montserrat',
                fontSize:'24px',
                fontWeight:"300",
                }}>
                    Fashion Award Show 2022
            </p>
        <ul style={{display:'flex', gap:'20px', justifyContent:'center', margin:'0', padding:'0 0 10px 0'}}>
            <li>
                <Button>
                    <a style={{color:'#ffffff', fontSize:'18px', textDecoration:'none'}} href='#aboutUs'>About us</a>
                </Button>
            </li>
            <li>
                <Button>
                    <a style={{color:'#ffffff', fontSize:'18px', textDecoration:'none'}} href='#artist'>Artist</a>
                </Button>
            </li>
            <li>
                <Button>
                    <a style={{color:'#ffffff', fontSize:'18px', textDecoration:'none'}} href='#brands'>Brands</a>
                </Button>
            </li>
            <li>
                <Button>
                    <a style={{color:'#ffffff', fontSize:'18px', textDecoration:'none'}} href='#PNV'>Photo & Video</a>
                </Button>
            </li>
        </ul>
        </div>
      </div>

  );
};

export default Header;