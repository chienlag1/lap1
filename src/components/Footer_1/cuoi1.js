// CallUs.js

import './cuoi1.css';
import React from 'react';

// Import hình ảnh nền
import backgroundImage from './image10.jpg';
import Image1 from './image.png';
import backgroundImage1 from './giphy.png';

function CallUs() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundImage: `url(${backgroundImage1})`,
    backgroundSize: 'cover', // Để ảnh tự động phù hợp với kích thước của section
    backgroundRepeat: 'no-repeat', // Ngăn lặp lại ảnh nền
    backgroundPosition: 'center', // Căn giữa ảnh nền
  };
  

  return (
    <div className="cuoi1">
      <div className="content-left">
        <section className="callus" style={sectionStyle}>
          <div className="callus-content">
            <h2>You don’t have to see the whole staircase just take the first step</h2>
            <p>Amet in a suspendisse convallis eget, Amet in a suspendisse convallis egetAmet in a</p>
            <div className="callus-buttons">
              <button className="get">Get Started</button>
              <button className="outline">Place a Call</button>
            </div>
          </div>
        </section>
      </div>
      <div className="content-right">
        <img src={Image1} className="callus-image" alt="Image1" />
      </div>
    </div>
  );
}

export default CallUs;
