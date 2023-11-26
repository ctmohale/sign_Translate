import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTextarea,
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
import { RiUserVoiceLine } from "react-icons/ri";

const Translate: React.FC = () => {
  const { userTranslateSetting, setSerTranslateSetting }: any =
    useContext(UserTranslateSetting);
  const { transData, setTransData }: any = useContext(TestMainData);
  const [defaultTrans, setDefultTrans]: any = useState();

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
    if (userTranslateSetting) {
      for (let index = 0; index < userTranslateSetting.length; index++) {
        setDefultTrans(userTranslateSetting[0].Language_name);
      }
    }
  }, [userTranslateSetting]);

  useEffect(() => {
    if (transData && defaultTrans) {
      translateData(transData, defaultTrans);
    }
  }, [transData]);

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

  function translateData(data: any, setting: any) {
    let set_tran_data = "";

    if (setting === "Sepedi") {
      if (data === "Hello") set_tran_data = "Dumela";
      else if (data === "Yes") set_tran_data = "Ee";
      else if (data === "I love you") set_tran_data = "Ke a go rata";
      else if (data === "No") set_tran_data = "Aowa";
      else if (data === "Thank You") set_tran_data = "Ke a leboga";
      else if (data === "Good Bye") set_tran_data = "Gabotse.";
      else if (data === "Please") set_tran_data = "Ka kgopelo.";
    }

    if (setting === "Zulu") {
      if (data === "Hello") set_tran_data = "Sawubona";
      else if (data === "Yes") set_tran_data = "yebo";
      else if (data === "I love you") set_tran_data = "Ngiyakuthanda";
      else if (data === "No") set_tran_data = "cha.";
      else if (data === "Thank You") set_tran_data = "Ngiyabonga.";
      else if (data === "Good Bye") set_tran_data = "Sala kahle.";
      else if (data === "Please") set_tran_data = "Ngiyacela";
    }

    if (setting === "English") {
      if (data === "Hello") set_tran_data = "Hello";
      else if (data === "Yes") set_tran_data = "Yes";
      else if (data === "I love you") set_tran_data = "I love you";
      else if (data === "No") set_tran_data = "No.";
      else if (data === "Thank You") set_tran_data = "Thank You.";
      else if (data === "Good Bye") set_tran_data = "Good Bye";
      else if (data === "Please") set_tran_data = "Please";
    }

    return set_tran_data;
  }

  function getSignImg(data: any) {
    //"../assets/sign/Hello.png"
    let img = "";
    if (data === "Hello") img = "../assets/sign/Hello.png";
    else if (data === "Yes") img = "../assets/sign/Yes.png";
    else if (data === "I love you") img = "../assets/sign/Hello.png";
    else if (data === "No") img = "../assets/sign/No.png";
    else if (data === "Thank You") img = "../assets/sign/Thank you.png";
    else if (data === "Good Bye") img = "../assets/sign/Good Bye.png";
    else if (data === "Please") img = "../assets/sign/Please.png";
    return img;
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Neviagtion section */}
        <Nav />

        <section className="about-section  bg-light">
          <h2 className="about-sub text-secondary pb-5">
            <BiUserVoice size="50" />
            Translate sign to text section
          </h2>

          <div className="row text-center">
            <div className="col-sm-6 mb-3 mb-sm-0">
              {/* <Detect /> */}
            </div>
            <div
              className="col-sm-6 text-secondary p-5"
              id="translation_section_id"
            >
              <IonGrid>
                <IonRow className="main_t_row">
                  <IonCol className="col_t" size="8">
                    <IonTextarea
                      id="text-inpu-da"
                      className="text-input trans text-success p-5"
                    >
                      {transData}
                    </IonTextarea>
                  </IonCol>

                  <IonCol className="col_t">
                    <br />
                    <br />
                    <img
                      className="img_data_set"
                      src={getSignImg(transData)}
                      width={100}
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
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
