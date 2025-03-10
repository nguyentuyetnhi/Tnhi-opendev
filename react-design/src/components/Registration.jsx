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
                <h3 >Choose an Attraction</h3>
              </div>
            </div>
            <p className="text">
              Choose from the attractions of the FUN arena.
            </p>
          </div>
          <div className="relative">
            <img
              src={QR}
              alt="QR"
              className="  relative qr-code absolute top-10 right-0 transform translate-x-1/2 -translate-y-1/2  z-20"
            />
            <div className="step absolute z-10 p-4 bg-gray-800 text-white rounded-lg">
              <div className="step-content flex justify-between items-center">
                <h3 className="text-lg font-bold">Register</h3>
                <button className="clickcard-btn bg-red-500 text-white px-3 py-2 rounded-md">
                  Click here
                </button>
              </div>
            </div>
            <p className="text mt-2">
              You can register at the reception or by<br /> clicking the button above from the comfort of<br />your home.
            </p>
          </div>


          <div className="box">
            <div className="step">
              <div className="step-content">
                <h3>Have Fun</h3>
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
