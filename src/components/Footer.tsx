import React from "react";
import "./Footer.css";
import { IonButton } from "@ionic/react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <div className="row footer-section p-5">
      <div className="col-sm-4">
        <h5 className="text-secondary">Company</h5>
        <p>
          Translate
          <img
            className="nav_icon"
            src="./assets/titleLogo-removebg-preview.png"
          />
          System
        </p>
      </div>
      <div className="col-sm-4">
        <h5 className="text-secondary">About Us</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </p>
      </div>
      <div className="col-sm-4 text-center">
        <h5 className="text-secondary">Social Media Section</h5>
        <IonButton
          className="btnFooter"
          fill="clear"
          color="medium"
          shape="round"
        >
          <BsFacebook size="25" />
        </IonButton>
        <IonButton
          className="btnFooter"
          fill="clear"
          color="medium"
          shape="round"
        >
          <AiFillInstagram size="25" />
        </IonButton>
        <IonButton
          className="btnFooter"
          fill="clear"
          color="medium"
          shape="round"
        >
          <IoLogoWhatsapp size="25" />
        </IonButton>
      </div>
    </div>
  );
}

export default Footer;
