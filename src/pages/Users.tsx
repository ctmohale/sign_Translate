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
} from "../API";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { GraphQLQuery } from "@aws-amplify/api";
import * as mutations from "../graphql/mutations";
import Swal from "sweetalert2";
import { PiUsersThreeFill } from "react-icons/pi";
import UserTranslateSetting from "../context/translateSettings";
import MainTranslate from "../context/translateLanguages";
import LoginData from "../context/login";
import { FaHandsWash, FaUserEdit } from "react-icons/fa";
import { TbFilterDown, TbLanguageKatakana } from "react-icons/tb";
import { BsFiletypePdf } from "react-icons/bs";
import AllUsers from "../context/users";
import { AiFillDashboard, AiFillFilter } from "react-icons/ai";
import SelectedUserAdmin from "../context/selected_user";
import { usePDF } from "react-to-pdf";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Users: React.FC = () => {
  const { userTranslateSetting, setSerTranslateSetting }: any =
    useContext(UserTranslateSetting);
  const [loginState, setLoginState]: any = useState(false);
  const { allTransLate, setAllTransLate }: any = useContext(MainTranslate);
  const [lngD, setlngD]: any = useState("");
  const [lngID, setLngID]: any = useState("");
  const { loginUser, setLoginUser }: any = useContext(LoginData);
  const { users, setUsers }: any = useContext(AllUsers);
  const [presentAlert] = useIonAlert();
  const { selectedUserA, setSelectedUserA }: any =
    useContext(SelectedUserAdmin);
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct]: any = useState(null);
  const [x, setX]: any = useState(null);

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
    setProducts(users);
  }, [users]);

  //Delete main set

  async function deleteUserAsy(id: any) {
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
  async function deleteUserMainFunction(id: any) {
    console.log(id);
    setInterval(() => {
      deleteUserAsy(id);
    }, 5000);
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
          <br />
          <br />
          <div className="row text-center">
            <IonGrid>
              <IonRow>
                <IonCol size="8">
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
                        className="nav-link"
                        aria-current="page"
                        routerLink="/gesture"
                      >
                        <FaHandsWash size="22" />
                        Gesture
                      </IonButton>
                    </li>
                  </ul>
                  <br />
                </IonCol>
                <IonCol style={{ textAlign: "right" }}>
                  <IonButton fill="outline" onClick={() => toPDF()}>
                    <BsFiletypePdf /> Download Records
                  </IonButton>
                </IonCol>

                <IonCol size="12" ref={targetRef}>
                  <DataTable
                    selectionMode="single"
                    value={products}
                    selection={selectedProduct}
                    onSelectionChange={(e: any) => {
                      setSelectedProduct(e.value.id);
                      setX(e.value); // Assuming 'id' is the property holding the user's ID
                    }}
                    tableStyle={{ minWidth: "50rem" }}
                  >
                    <Column
                      className="col_style"
                      field="name"
                      header="Name"
                      sortable
                      style={{ width: "25%" }}
                    ></Column>
                    <Column
                      className="col_style"
                      field="surname"
                      header="Surname"
                      sortable
                    ></Column>
                    <Column
                      className="col_style"
                      field="email"
                      header="Email"
                      sortable
                    ></Column>
                    <Column
                      className="col_style"
                      field="id_number"
                      header="ID Number"
                      sortable
                    ></Column>

                    {x && (
                      <Column
                        className="col_style"
                        field="id_number"
                        header="Edit User"
                        body={
                          <IonButton
                            onClick={() => setSelectedUserA(x)}
                            routerLink="/userprofile"
                            fill="clear"
                            color="medium"
                          >
                            <FaUserEdit size="25" />
                          </IonButton>
                        }
                      ></Column>
                    )}

                    {selectedProduct && (
                      <Column
                        className="col_style"
                        header="ID Number"
                        body={
                          <IonButton
                            onClick={() => deleteUser(selectedProduct)}
                            fill="clear"
                            color={"danger"}
                          >
                            <MdDelete size="25" />
                          </IonButton>
                        }
                      ></Column>
                    )}
                  </DataTable>
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

export default Users;
