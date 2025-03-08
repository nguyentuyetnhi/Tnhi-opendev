import { useState } from "react";

const Registration = () => {
  return (
    <header className="w-full bg-black">
      <div className="registration-container">
        <div className="left">
          <h2>REGISTRATION</h2>
          <p className="">
            For organizational and security reasons, every visitor to the FUN
            arena Cheb must register before entering the attraction. At the
            reception, your registration will be completed and you will receive
            a loyalty card which you will use for our services.
          </p>
        </div>

        <div className="right">
          <div className="step">
            <span className="number">1</span>
            <div className="step-content">
              <h3>Choose an Attraction</h3>
              <p>Choose from the attractions of the FUN arena.</p>
            </div>
          </div>

          <div className="step">
            <span className="number">2</span>
            <div className="step-content">
              <h3>
                Register <button className="click-btn">Click here</button>
              </h3>
              <p>
                You can register at the reception or by clicking the button
                above from the comfort of your home.
              </p>
              <img src="qr-code.png" alt="QR Code" className="qr-code" />
            </div>
          </div>

          <div className="step">
            <span className="number">3</span>
            <div className="step-content">
              <h3>Have Fun</h3>
              <p>
                Thank you for your online registrations. For each purchase you
                get points, which you can apply to our services and attractions
                then. We look forward to you!
              </p>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Registration;
