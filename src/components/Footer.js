import React from 'react';
import TextAnimation from './TextAnimation';

const Header = () => {
 
  return (
    <div style={{
        width: '100%',
        height: '100%',
    }}>
        <footer style={{
            background:'black',
            position:'fixed',
            width:'100%',
            left:'0',
            bottom:'0',
            }}>
                <p style={{padding:'10px'}}><TextAnimation/></p>
        </footer>
    </div>

  );
};

export default Header;