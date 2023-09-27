import {
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { API, Auth } from "aws-amplify";
import { useEffect, useRef, useState, useContext } from "react";
import { BiUserPlus, BiUserVoice } from "react-icons/bi";
import { CreateUserInput, CreateUserMutation } from "../API";
import { GraphQLQuery } from "@aws-amplify/api";
import * as mutations from "../graphql/mutations";
import Swal from "sweetalert2";
import UserTranslateSetting from "../context/translateSettings";
import Detect from "../components/Detect";
import TestMainData from "../context/textData";

const Translate: React.FC = () => {
  const { userTranslateSetting, setSerTranslateSetting }: any =
    useContext(UserTranslateSetting);
  const { transData, setTransData }: any = useContext(TestMainData);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const videoRef: any = useRef(null);

  useEffect(() => {
    // Access the user's webcam
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        // Assign the webcam stream to the video element
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error("Error accessing the webcam:", error);
      });

    // Cleanup the webcam stream when the component unmounts
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream: any = videoRef.current.srcObject;
        const tracks: any = stream.getTracks();
        tracks.forEach((track: any) => track.stop());
      }
    };
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Neviagtion section */}
        <Nav />

        <section className="about-section  bg-light">
          <h2 className="about-sub text-secondary pb-5">
            <BiUserVoice size="50" />
            Translate vioce to text section
          </h2>

          <div className="row text-center">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <Detect />
            </div>
            <div
              className="col-sm-6 text-secondary p-5"
              id="translation_section_id"
            >
              <IonItem>
                <IonSelect
                  aria-label="Fruit"
                  interface="popover"
                  placeholder="Select translation language "
                >
                  <IonSelectOption value="English">English</IonSelectOption>
                  <IonSelectOption value="Sepedi">Sepedi</IonSelectOption>
                  <IonSelectOption value="Zulu">Zulu</IonSelectOption>
                </IonSelect>
              </IonItem>
              <b className="text-danger">
                <textarea
                  className="text-input"
                  value={transData}
                  rows={10}
                ></textarea>
              </b>
            </div>
          </div>
        </section>

        {/* Footer section */}
        <section className="footer-section">
          <Footer />
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Translate;
