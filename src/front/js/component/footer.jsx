import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

export const Footer = () => {
  return (
    <footer className=" bg-dark text-center text-white w-100 d-flex-inline align-items-end mt-100vh ">
      <div className="p-4 pb-0 ">
        <section className="mb-4 col-3 d-flex justify-content-between mx-auto">
          <FacebookShareButton url={"https://casaarte.herokuapp.com"}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>

          <TwitterShareButton url={"https://casaarte.herokuapp.com"}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>

          <WhatsappShareButton url={"https://casaarte.herokuapp.com"}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
          <LinkedinShareButton url={"https://casaarte.herokuapp.com"}>
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>

          <EmailShareButton url={"https://casaarte.herokuapp.com"}>
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
        </section>
      </div>
      <div>
        <h6 className="text-uppercase fw-bold mb-4">Contact:</h6>
      </div>
      <div className="container d-xl-inline-flex d-lg-inline-flex justify-content-between">
        <div className="col-sm-12 col-md-6 col-lg-3">
          <p>
            <i className="fas fa-home me-3 text-secondary"></i> Montevideo,
            Rincon 123, UY
          </p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            casaarte@gmail.com
          </p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <p>
            <i className="fas fa-phone me-3 text-secondary"></i> +598 2 111 1111
          </p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <p>
            <i className="fas fa-print me-3 text-secondary"></i> +598 2 111 1112
          </p>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright: Casa Arte
      </div>
    </footer>
  );
};
