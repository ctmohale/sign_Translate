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
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { API, Auth } from "aws-amplify";
import { useEffect, useRef, useState, useContext } from "react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { CreateUserInput, CreateUserMutation } from "../API";
import { GraphQLQuery } from "@aws-amplify/api";
import * as mutations from "../graphql/mutations";
import Swal from "sweetalert2";
import { PiUsersThreeFill } from "react-icons/pi";
import UserTranslateSetting from "../context/translateSettings";
import MainTranslate from "../context/translateLanguages";
import LoginData from "../context/login";
import { FaHandsWash } from "react-icons/fa";
import { TbLanguageKatakana } from "react-icons/tb";
import { AiFillDashboard } from "react-icons/ai";
import AllUsers from "../context/users";

const Admin: React.FC = () => {
  const { userTranslateSetting, setSerTranslateSetting }: any =
    useContext(UserTranslateSetting);
  const [loginState, setLoginState]: any = useState(false);
  const { allTransLate, setAllTransLate }: any = useContext(MainTranslate);
  const [lngD, setlngD]: any = useState("");
  const [lngID, setLngID]: any = useState("");
  const { loginUser, setLoginUser }: any = useContext(LoginData);
  const { users, setUsers }: any = useContext(AllUsers);

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


  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Neviagtion section */}
        <Nav />

        <section className="about-section  bg-light">
          <br />
          <br />
          <div className="row text-center">
            <IonGrid>
              <IonRow>
                <IonCol>
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <IonButton
                        fill="clear"
                        color="success"
                        className="nav-link active"
                        aria-current="page"
                        routerLink="/admin"
                      >
                        <AiFillDashboard size="22" />
                        Dashboard
                      </IonButton>
                    </li>
                    <li className="nav-item">
                      <IonButton
                        fill="clear"
                        color="medium"
                        className="nav-link"
                        aria-current="page"
                        routerLink="/users"
                      >
                        <PiUsersThreeFill size="22" />
                        Users
                      </IonButton>
                    </li>
                    <li className="nav-item">
                      <IonButton
                        fill="clear"
                        color="medium"
                        className="nav-link"
                        aria-current="page"
                        routerLink="/gesture"
                      >
                        <FaHandsWash size="22" />
                        Gesture
                      </IonButton>
                    </li>
                  </ul>
                </IonCol>

                <IonCol size="12">
                  <div className="row p-4">
                    <div className="col-sm-4 mb-3 mb-sm-0">
                      <IonCard className="card" routerLink="/users">
                        <div className="card-body text-secondary">
                          <span className="text-success">
                            <PiUsersThreeFill size={150} />
                          </span>
                          <h1>Registered Users </h1>
                          <b>Total : {users && users.length} users </b>
                        </div>
                      </IonCard>
                    </div>
                    <div className="col-sm-4">
                      <IonCard routerLink="/gesture" className="card">
                        <div className="card-body text-secondary">
                          <span className="text-success">
                            {" "}
                            <FaHandsWash size={150} />
                          </span>
                          <h1>Sign Gesture </h1>
                          <b>Report</b>
                        </div>
                      </IonCard>
                    </div>

                    <div className="col-sm-4">
                      <IonCard routerLink="/profile" className="card">
                        <div className="card-body text-secondary">
                          <span className="text-success">
                            <MdOutlineAdminPanelSettings size="150" />
                          </span>
                          <h1>Admin Profile</h1>
                          {loginUser.surname && (
                            <b>
                              {loginUser.name.substring(0, 1) +
                                " " +
                                loginUser.surname}
                            </b>
                          )}
                        </div>
                      </IonCard>
                    </div>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
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

export default Admin;
