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
  useIonAlert,
} from "@ionic/react";
import "./Home.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { API, Auth } from "aws-amplify";
import { useEffect, useRef, useState, useContext } from "react";
import { MdDelete, MdOutlineAdminPanelSettings } from "react-icons/md";
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
import { PiUsersThreeFill } from "react-icons/pi";
import UserTranslateSetting from "../context/translateSettings";
import MainTranslate from "../context/translateLanguages";
import LoginData from "../context/login";
import { FaHandsWash, FaUserEdit } from "react-icons/fa";
import { TbLanguageKatakana } from "react-icons/tb";
import { BsFiletypePdf } from "react-icons/bs";
import AllUsers from "../context/users";
import { FaUserPen } from "react-icons/fa6";
import { AiFillDashboard } from "react-icons/ai";
import SelectedUserAdmin from "../context/selected_user";

const UserProfile: React.FC = () => {
  const { userTranslateSetting, setSerTranslateSetting }: any =
    useContext(UserTranslateSetting);
  const [loginState, setLoginState]: any = useState(false);
  const { allTransLate, setAllTransLate }: any = useContext(MainTranslate);
  const [lngD, setlngD]: any = useState("");
  const [lngID, setLngID]: any = useState("");
  const { users, setUsers }: any = useContext(AllUsers);
  const [presentAlert] = useIonAlert();
  const { selectedUserA, setSelectedUserA }: any =
    useContext(SelectedUserAdmin);

  //User details
  const [name, setName]: any = useState("");
  const [surname, setSurname]: any = useState("");
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");
  const [address, setAddress]: any = useState("");
  const [postal, setPostal]: any = useState("");
  const [cell, setCell]: any = useState("");
  const [idNumber, setIdNumber]: any = useState("");

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
    if (selectedUserA != null) {
      setEmail(selectedUserA.email);
      setPassword(selectedUserA.password);
      setName(selectedUserA.name);
      setSurname(selectedUserA.surname);
      setAddress(selectedUserA.address);
      setPostal(selectedUserA.postal_code);
      setCell(selectedUserA.cell_phone_no);
      setIdNumber(selectedUserA.id_number);
    }
  }, [selectedUserA]);

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
        id: selectedUserA.id,
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

  useEffect(() => {
    console.log(allTransLate);
  }, [allTransLate]);

  //Delete main set
  async function deleteUserMainFunction(id: any) {
    const userDetails: DeleteUserInput = {
      id: id,
    };
    const deletedTodo = await API.graphql<GraphQLQuery<DeleteUserMutation>>({
      query: mutations.deleteUser,
      variables: { input: userDetails },
    });
    if (deletedTodo) {
      Toast.fire({
        icon: "success",
        title: "Record deleted successfully!!",
      });
      window.location.replace("/users");
    }
  }

  //Delete users
  async function deleteUser(id: any) {
    presentAlert({
      header: "Are you sure?",
      cssClass: "custom-alert",
      buttons: [
        {
          text: "No",
          cssClass: "alert-button-cancel",
        },
        {
          text: "Yes",
          handler: () => {
            deleteUserMainFunction(id);
          },
        },
      ],
    });

  }

  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Neviagtion section */}
        <Nav />

        <section className="about-section  bg-light">
          <h2 className="about-sub text-secondary">
            <PiUsersThreeFill size="50" />
            User Profile Section
          </h2>

          <div className="row text-center">
            <IonGrid>
              <IonRow>
                <IonCol>
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <IonButton
                        fill="clear"
                        color="medium"
                        className="nav-link "
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
                        color="success"
                        className="nav-link active"
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
                        className="nav-link "
                        aria-current="page"
                        routerLink="/gesture"
                      >
                        <FaHandsWash size="22" />
                        Gesture
                      </IonButton>
                    </li>
                    <li className="nav-item">
                      <IonButton
                        fill="clear"
                        color="medium"
                        className="nav-link"
                        aria-current="page"
                        routerLink="/language"
                      >
                        <TbLanguageKatakana size="22" />
                        Language
                      </IonButton>
                    </li>
                  </ul>
                  <br />
                </IonCol>
                <IonCol size="12">
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
                    </div>
                    <div className="col-sm-6 text-secondary p-5">
                      <FaUserPen size="200" />
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

export default UserProfile;
