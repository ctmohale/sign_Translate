import React, { useContext, useEffect, useRef, useState } from "react";
import "./Nav.css";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { CgMenuRight } from "react-icons/cg";
import { TbHome2 } from "react-icons/tb";
import { FaBeer } from "react-icons/fa";
import { BiLogOutCircle, BiUser, BiUserVoice } from "react-icons/bi";
import {
  AiOutlineDashboard,
  AiOutlineLogin,
  AiOutlineSetting,
} from "react-icons/ai";
import LoginData from "../context/login";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import AllUsers from "../context/users";
import Swal from "sweetalert2";
import { MdAdminPanelSettings } from "react-icons/md";

function Nav() {
  const { loginUser, setLoginUser }: any = useContext(LoginData);
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");
  const { users, setUsers }: any = useContext(AllUsers);
  const [loginState, setLoginState]: any = useState(false);
  const [isOpen, setIsOpen]: any = useState(false);
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

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

  //Logout
  function signOut() {
    localStorage.removeItem("user");
    setLoginUser(null);
    window.location.replace("/");
  }

  // Login
  function loginFunction() {
    var data: any = {};

    if (users != null && email != "" && password != "") {
      var userFound = false; // Flag to check if a user is found

      users.map((user_element: any) => {
        if (
          user_element.email === email &&
          user_element.password === password &&
          user_element.access_type === "user"
        ) {
          setLoginUser(user_element);

          data = JSON.stringify(user_element);
          localStorage.setItem("user", data);
          setLoginState(true);
          setIsOpen(false);
          Toast.fire({
            icon: "success",
            title: "Login successful! Welcome",
          });

          userFound = true; // Set the flag to true
          return;
        }

        if (
          user_element.email === email &&
          user_element.password === password &&
          user_element.access_type === "admin"
        ) {
          setLoginUser(user_element);

          data = JSON.stringify(user_element);
          localStorage.setItem("user", data);
          setLoginState(true);
          setIsOpen(false);
          Toast.fire({
            icon: "success",
            title: "Login successful! Welcome Admin",
          });

          userFound = true; // Set the flag to true
          window.location.replace("/admin");
          return;
        }
      });

      // Check if no user was found and print "no man"
      if (!userFound) {
        Toast.fire({
          icon: "warning",
          title: "Error, please enter correct login info...",
        });
      }
    }

    setIsOpen(false);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <IonButton fill="clear" shape="round" color="medium" routerLink="/">
            Translate
            <img
              className="nav_icon"
              src="./assets/titleLogo-removebg-preview.png"
            />
            System
          </IonButton>
          <IonButton
            className="mobile_menu"
            fill="clear"
            color="medium"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <CgMenuRight size="20" />
          </IonButton>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {loginUser && loginUser.access_type === "admin" ? (
                <li className="nav-item">
                  <IonButton
                    fill="clear"
                    shape="round"
                    routerLink="/admin"
                    color="medium"
                  >
                    <AiOutlineDashboard size="25" /> Dashboard
                  </IonButton>
                </li>
              ) : (
                <li className="nav-item">
                  <IonButton
                    fill="clear"
                    shape="round"
                    routerLink="/"
                    color="medium"
                  >
                    <TbHome2 size="25" /> Home
                  </IonButton>
                </li>
              )}
            </ul>

            {loginUser != null ? (
              <>
                {loginUser.access_type !== "admin" && (
                  <>
                    <IonButton
                      fill="clear"
                      shape="round"
                      routerLink="/settings"
                      color="medium"
                    >
                      <AiOutlineSetting size="25" /> Settings
                    </IonButton>
                    <br />
                    <IonButton
                      fill="clear"
                      shape="round"
                      routerLink="/translate"
                      color="medium"
                    >
                      <BiUserVoice size="25" /> Translate
                    </IonButton>
                  </>
                )}

                <br />
                {loginUser.access_type === "admin" ? (
                  <IonButton
                    fill="clear"
                    shape="round"
                    routerLink="/profile"
                    color="medium"
                  >
                    <MdAdminPanelSettings size="25" />{" "}
                    {loginUser.name.substring(0, 1) + " " + loginUser.surname}
                  </IonButton>
                ) : (
                  <IonButton
                    fill="clear"
                    shape="round"
                    routerLink="/profile"
                    color="medium"
                  >
                    <BiUser size="25" />{" "}
                    {loginUser.name.substring(0, 1) + " " + loginUser.surname}
                  </IonButton>
                )}

                <br />
                <IonButton
                  onClick={() => signOut()}
                  fill="clear"
                  shape="round"
                  routerLink="/"
                  color="medium"
                >
                  <BiLogOutCircle size="25" /> Sign Out
                </IonButton>
              </>
            ) : (
              <>
                <IonButton
                  id="loginModal"
                  expand="block"
                  fill="clear"
                  shape="round"
                  color="medium"
                >
                  <AiOutlineLogin size="25" /> Sign In
                </IonButton>
              </>
            )}
          </div>
        </div>
      </nav>
      <IonModal
        className="main-login-modal"
        trigger="loginModal"
        isOpen={isOpen}
        onWillDismiss={() => setIsOpen(false)}
      >
        <IonHeader className="modal_head">
          <IonToolbar className="modal_head">
            <IonButtons slot="start">
              <IonButton onClick={() => modal.current?.dismiss()}>
                Cancel
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="login_title">
            <img
              className="login_logo"
              src="./assets/titleLogo-removebg-preview.png"
            />
            <h3 className="text-secondary">Sign In Platform</h3>
          </div>
          <IonItem className="form">
            <IonLabel position="stacked">Enter email</IonLabel>
            <IonInput
              type="email"
              onInput={(e: any) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </IonItem>
          <IonItem className="form">
            <IonLabel position="stacked">Enter password</IonLabel>
            <IonInput
              type="password"
              onInput={(e: any) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </IonItem>
          <IonButton
            onClick={() => loginFunction()}
            className="btn-login ion-margin"
            fill="outline"
            color="medium"
            shape="round"
          >
            <BiUser /> &nbsp; Sign In
          </IonButton>
        </IonContent>
      </IonModal>
    </>
  );
}

export default Nav;
