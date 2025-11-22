import React from "react";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us on </h2>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn justify-start join-item">
            {" "}
            <CiFacebook size={20} />
            Facebook
          </button>
          <button className="btn justify-start join-item">
            <FaTwitter size={20} /> Twitter
          </button>
          <button className="btn justify-start join-item">
            <CiInstagram size={20} /> Instragram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
