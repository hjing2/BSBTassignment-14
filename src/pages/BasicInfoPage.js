// src/pages/BasicInfoPage.js
import React from 'react';

const BasicInfoPage = () => {
  return (
    <section className="basic-info">
      {/* <h1>About Me</h1> */}
      <div className="info-container">
        <div className="text-info">
          <p>Name: Haodan Jing</p>
          <p>Email: jinghaodan@gmail.com</p>
          <p>Location: Winnipeg, MB R3T 2K8</p>
          <p>Phone: +1 6133015029</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/haodan-jing-39389310a/">Profile</a></p>
        </div>
        <div className="image-container">
          <img src="https://media.licdn.com/dms/image/D4E03AQGOr4fRi3lQmg/profile-displayphoto-shrink_800_800/0/1699080559142?e=1728518400&v=beta&t=_jzrSwakZwotaRV2Rg1zQoOt6iPMdAuvCyrxtWDHrEQ" alt="Haodan Jing" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default BasicInfoPage;
