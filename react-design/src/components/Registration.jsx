import { useState } from "react";
import QR from "../assets/QR.png";

const Registration = () => {
  return (
    <header className="w-full bg-black">
      <div className="registration-container ">
        <div className="left">
          <h2 className="ml-20">REGISTRATION</h2>
          <p className="text">
            For organizational and security reasons, every visitor to the FUN
            arena Cheb must register before entering the attraction. At the
            reception, your registration will be completed and you will receive
            a loyalty card which you will use for our services.
          </p>
        </div>

        <div className="right">
          <div className="box flex items-center space-x-2">
            <span className=" number text-blue-500 text-3xl  basis-1/5  font-bold">1</span>

            <div className="step flex items-center space-x-4 basis-4/5 ">
              <div className="step-content flex flex-col bg-gray-800 px-4 py-2 rounded-lg">
                <h3 className="no-skew text-gray-200">Choose an Attraction</h3>
              </div>
            </div>
          </div>
          <p className="text-gray-400">
            Choose from the attractions of the FUN arena.
          </p>

          <div className="box  ">
            <span className=" number text-blue-500 text-3xl font-bold">2</span>
            <div className="step flex items-center space-x-4">
              <div className="step-content flex flex-col">
                <h3 className="no-skew" >Register</h3>
                <a href="https://web.racefacer.com/kiosk/kartarenacheb/">
                  <button className="no-skew clickcard-btn px-2 py-1 text-sm">Click here</button>
                </a>
              </div>
            </div>
            <p className="text ">
              You can register at the reception or <br />
              by clicking the button above from the comfort of <br />
              your home.
            </p>
          </div>
          <img
            src={QR}
            alt="QR"
            className="qr-code absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/3 z-30 w-24 h-24"
          />



          <div className="box mt-10">
            <span className=" chuso text-blue-500 text-3xl font-bold basis-1/5 ">3</span>
            <div className="step basis-4/5 ">
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
