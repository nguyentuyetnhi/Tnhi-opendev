import { useState } from "react";
import QR from "../assets/QR.png";

const Registration = () => {
  return (
    <header className="w-full bg-black">
      <div className="registration-container ">
        <div className="left">
          <h2>REGISTRATION</h2>
          <p className="text">
            For organizational and security reasons, every visitor to the FUN
            arena Cheb must register before entering the attraction. At the
            reception, your registration will be completed and you will receive
            a loyalty card which you will use for our services.
          </p>
        </div>

        <div className="right">
          <div className="box ">
            <div className="step flex items-center space-x-4">
              <div className="step-content flex flex-col">
                <h3 className="no-skew" >Choose an Attraction</h3>
              </div>
            </div>
            <p className="text">
              Choose from the attractions of the FUN arena.
            </p>
          </div>
          <div className="relative bg-gray-900 p-6 flex flex-col items-center">
            <div className="step relative z-20 p-4 bg-gray-800 text-white rounded-lg w-full max-w-md">
              <div className="step-content flex justify-between items-center">
                <h3 className="no-skew text-lg font-bold">Register</h3>
                <a href="https://web.racefacer.com/kiosk/kartarenacheb/">
                  <button className=" no-skew clickcard-btn">Click here</button>
                </a>
              </div>
            </div>
            <img
              src={QR}
              alt="QR"
              className="qr-code absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/3 z-30 w-24 h-24"
            />

            <p className="text mt-4 text-center text-white">
              You can register at the reception or <br />
              by clicking the button above from the comfort of <br />
              your home.
            </p>
          </div>

          <div className="box mt-10">
            <div className="step">
              <div className="step-content">
                <h3 className="no-skew">Have Fun</h3>
              </div>
            </div>
            <p className="text">
              Thank you for your online registrations. For each purchase you
              get points, which you can apply to our services and attractions
              then. We look forward to you!
            </p>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Registration;
