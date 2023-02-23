import "./Certificate.scss";
import React from "react";

const Certificate = ({ data }) => {
  return (
    <div className="certificate-container">
      <div className="certificate-details-container">
        <h1 className="certificate-title">
          Certificate of {data.certificate_type}
        </h1>
        <p className="certificate-about">
          THIS CERTIFICATE IS PROUDLY PRESENTED FOR HONOROBLE ACHIVEMENT TO
        </p>
        <h1 className="person-name">{data.name}</h1>
        <h3 className="date-of-completion">
          AWARDED THIS DAY OF{" "}
          <span className="highlight-date">{data.date_of_completion} </span>
        </h3>
        <p className="course-name">
          For successfully completing the course of
          <span className="highlight"> {data.course}</span>
        </p>
      </div>
      <div className="certificate-presenters-container">
        <div className="each-certificate-presenter-container">
          <img
            src={data.jevelin_logo}
            alt="/"
            className="each-certificate-presenter"
          />
        </div>
        <div className="each-certificate-presenter-container">
          <img
            src={data.google_logo}
            alt="/"
            className="each-certificate-presenter"
          />
        </div>
        <div className="each-certificate-presenter-container">
          <img
            src={data.amazon_logo}
            alt="/"
            className="each-certificate-presenter"
          />
        </div>
        <div className="signature-container">
          <p className="about-signature">Presented by</p>
          <img src={data.signature} alt="/" className="signature" />
        </div>
      </div>
    </div>
  );
};
export default Certificate;
