import React from "react";
import { LionCsk } from "../utils/tools.js";

const Footer = () => {
  return (
    <footer className="bck_yellow">
      <div className="footer_logo">
        <LionCsk link={true} linkTo={"/"} width="80px" height="80px" />
      </div>
      <div className="footer_descl">
        Chennai Super Kings 2022. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
