import {
  IonAlert,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { API, Auth } from "aws-amplify";
import { useContext, useEffect, useRef, useState } from "react";
import { FaUserPen } from "react-icons/fa6";
import {
  CreateUserInput,
  CreateUserMutation,
  DeleteUserInput,
  DeleteUserMutation,
  UpdateUserInput,
  UpdateUserMutation,
} from "../API";
import { GraphQLQuery } from "@aws-amplify/api";
import * as mutations from "../graphql/mutations";
import Swal from "sweetalert2";
import LoginData from "../context/login";
import { MdAdminPanelSettings } from "react-icons/md";
import { TbLanguageKatakana } from "react-icons/tb";
import { FaHandsWash } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { AiFillDashboard } from "react-icons/ai";

const Profile: React.FC = () => {
  //User details
  const [name, setName]: any = useState("");
  const [surname, setSurname]: any = useState("");
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");
  const [address, setAddress]: any = useState("");
  const [postal, setPostal]: any = useState("");
  const [cell, setCell]: any = useState("");
  const [idNumber, setIdNumber]: any = useState("");
  const { loginUser, setLoginUser }: any = useContext(LoginData);

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

  useEffect(() => {
    if (loginUser != null) {
      setEmail(loginUser.email);
      setPassword(loginUser.password);
      setName(loginUser.name);
      setSurname(loginUser.surname);
      setAddress(loginUser.address);
      setPostal(loginUser.postal_code);
      setCell(loginUser.cell_phone_no);
      setIdNumber(loginUser.id_number);
    }
  }, [loginUser]);

  //Create a new user
  async function updateUser() {
    //
    if (
      validationRules(name, "Name") === true &&
      validationRules(surname, "Surname") === true &&
      validationRules(cell, "Cell") === true &&
      validationRules(postal, "Postal code") === true &&
      validationRules(idNumber, "ID") === true &&
      validationRules(address, "Address") === true
    ) {
      const userDetails: UpdateUserInput = {
        id: loginUser.id,
        name: name,
        surname: surname,
        password: password,
        address: address,
        postal_code: postal,
        id_number: idNumber,
        cell_phone_no: cell,
      };

      const updateUser = await API.graphql<GraphQLQuery<UpdateUserMutation>>({
        query: mutations.updateUser,
        variables: { input: userDetails },
      });

      if (updateUser.data) {
        Toast.fire({
          icon: "success",
          title: "User updated successfully!",
        });
      }
    }
  }

  function validationRules(data: any, type: any) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regPassword = /^[A-Za-z]\w{6,16}$/;
    //Names
    if (type === "Name" || type === "Surname") {
      if (data.length < 2) {
        Toast.fire({
          icon: "warning",
          title: type + " must be at least 2 letters!",
        });

        return false;
      }
    }

    //Cell
    if (type === "Cell") {
      if (data.length < 10 || data.length > 10) {
        Toast.fire({
          icon: "warning",
          title: type + " must be 10 numbers",
        });

        return false;
      }
    }

    //Postal code
    if (type === "Postal code") {
      if (data.length < 2 || data.length > 4) {
        Toast.fire({
          icon: "warning",
          title: type + " must be > 2 and < 4 numbers",
        });

        return false;
      }
    }

    //ID number
    if (type === "ID") {
      if (data.length < 13 || data.length > 13) {
        Toast.fire({
          icon: "warning",
          title: type + " must be 13 numbers",
        });

        return false;
      }
    }

    // Postal code
    if (type === "Address") {
      if (data.length < 2) {
        Toast.fire({
          icon: "warning",
          title: type + " must be at least 2 letters!",
        });

        return false;
      }
    }

    return true;
  }

  //Delete user profile

  async function deleteUser() {
    const userDetails: DeleteUserInput = {
      id: loginUser.id,
    };

    const deleteUserData = await API.graphql<GraphQLQuery<DeleteUserMutation>>({
      query: mutations.deleteUser,
      variables: { input: userDetails },
    });

    Toast.fire({
      icon: "warning",
      title: "User profile deleted successfully!",
    });

    localStorage.removeItem("user");
    setLoginUser(null);

    setInterval(() => {
      window.location.replace("/");
    }, 3000);
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Neviagtion section */}
        <Nav />

        <section className="about-section  bg-light">
          {loginUser && loginUser.access_type === "admin" ? (
            <h2 className="about-sub text-secondary pb-2">
              <MdAdminPanelSettings size="30" /> Admin profile section
            </h2>
          ) : (
            <h2 className="about-sub text-secondary pb-2">
              User profile section
            </h2>
          )}
          {loginUser && loginUser.access_type === "admin" && (
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
          )}

          {loginUser != null ? (
            <>
              <div className="row text-center">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <IonItem>
                    <IonInput
                      label="Name"
                      onInput={(e: any) => setName(e.target.value)}
                      value={name}
                      labelPlacement="floating"
                      placeholder="Enter text"
                    ></IonInput>
                  </IonItem>

                  <IonItem>
                    <IonInput
                      label="Surname"
                      value={surname}
                      onInput={(e: any) => setSurname(e.target.value)}
                      labelPlacement="floating"
                      placeholder="Enter text"
                    ></IonInput>
                  </IonItem>

                  <IonItem disabled>
                    <IonInput
                      label="Email"
                      type="email"
                      value={email}
                      onInput={(e: any) => setEmail(e.target.value)}
                      labelPlacement="floating"
                      placeholder="Enter text"
                    ></IonInput>
                  </IonItem>

                  <IonItem disabled>
                    <IonInput
                      label="Password"
                      type="password"
                      value={password}
                      onInput={(e: any) => setPassword(e.target.value)}
                      labelPlacement="floating"
                      placeholder="Enter text"
                    ></IonInput>
                  </IonItem>

                  <IonItem>
                    <IonInput
                      label="Address"
                      onInput={(e: any) => setAddress(e.target.value)}
                      value={address}
                      labelPlacement="floating"
                      placeholder="Enter text"
                    ></IonInput>
                  </IonItem>

                  <IonItem>
                    <IonInput
                      label="User postal code"
                      onInput={(e: any) => setPostal(e.target.value)}
                      value={postal}
                      labelPlacement="floating"
                      placeholder="Enter text"
                    ></IonInput>
                  </IonItem>

                  <IonItem>
                    <IonInput
                      label="ID Number"
                      disabled
                      onInput={(e: any) => setIdNumber(e.target.value)}
                      value={idNumber}
                      labelPlacement="floating"
                      placeholder="Enter text"
                    ></IonInput>
                  </IonItem>

                  <IonItem>
                    <IonInput
                      label="Cell No"
                      onInput={(e: any) => setCell(e.target.value)}
                      value={cell}
                      labelPlacement="floating"
                      placeholder="Enter text"
                    ></IonInput>
                  </IonItem>
                  <IonButton
                    onClick={() => updateUser()}
                    className="btn mt-3"
                    fill="outline"
                    shape="round"
                    color="medium"
                  >
                    Update Profile
                  </IonButton>
                  <IonButton id="present-alert" color="danger" shape="round">
                    Delete Profile
                  </IonButton>
                  <IonAlert
                    header="Are you sure you want to delete your profile!"
                    trigger="present-alert"
                    buttons={[
                      {
                        text: "Cancel",
                        role: "cancel",
                        handler: () => {
                          console.log("Alert canceled");
                        },
                      },
                      {
                        text: "OK",
                        role: "confirm",
                        handler: () => {
                          deleteUser();
                        },
                      },
                    ]}
                    onDidDismiss={({ detail }) =>
                      console.log(`Dismissed with role: ${detail.role}`)
                    }
                  ></IonAlert>
                </div>
                <div className="col-sm-6 text-secondary p-5">
                  {loginUser && loginUser.access_type === "admin" ? (
                    <MdAdminPanelSettings size="200" />
                  ) : (
                    <FaUserPen size="200" />
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="nodata">
              <h3 className="text-warning">
                You must be logged in to access this section!
              </h3>
            </div>
          )}
        </section>

        {/* Footer section */}
        <section className="footer-section">
          <Footer />
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
