import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="aboutImg" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Nandan Dental Clinic stands out as a beacon of excellence in dental care, where a team of highly skilled specialists caters to a variety of treatments. Each dentist is renowned in their field, ensuring that patients receive the best care possible. The clinic is distinguished not only by the quality of its services but also by its remarkably reasonable prices, making top-notch dental care accessible to all.
          </p>
          <p>The visionary behind Nandan Dental Clinic, Jyothi Thirumala, has committed herself to prioritizing patient welfare over profit. She consistently sets minimal profit margins to lower treatment costs, ensuring that every rupee spent by the patients is truly valued. This compassionate approach particularly benefits elderly patients, who often receive treatments at significantly reduced prices.</p>
          <p>Nandan Dental Clinic is a place where expertise meets empathy, offering exceptional dental services without the hefty price tag. Patients can trust that they are in good hands, receiving care that combines professionalism, affordability, and a genuine concern for their well-being.</p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;