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
import { RiDeleteBin5Fill } from "react-icons/ri";
import {
  CreateLanguageInput,
  CreateLanguageMutation,
  CreateUserInput,
  CreateUserMutation,
  DeleteLanguageInput,
  DeleteLanguageMutation,
} from "../API";
import { GraphQLQuery } from "@aws-amplify/api";
import * as mutations from "../graphql/mutations";
import Swal from "sweetalert2";
import { AiOutlineSetting } from "react-icons/ai";
import UserTranslateSetting from "../context/translateSettings";
import MainTranslate from "../context/translateLanguages";
import LoginData from "../context/login";

const Settings: React.FC = () => {
  const { userTranslateSetting, setSerTranslateSetting }: any =
    useContext(UserTranslateSetting);
  const [loginState, setLoginState]: any = useState(false);
  const { allTransLate, setAllTransLate }: any = useContext(MainTranslate);
  const [lngD, setlngD]: any = useState("");
  const [lngID, setLngID]: any = useState("");
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

  async function addNewLang() {
    console.log(lngD);
    console.log(loginUser.id);
    const data_settings: CreateLanguageInput = {
      Language_name: lngD,
      user_id: loginUser.id,
    };

    const newTodo = await API.graphql<GraphQLQuery<CreateLanguageMutation>>({
      query: mutations.createLanguage,
      variables: { input: data_settings },
    });

    if (newTodo) {
      Toast.fire({
        icon: "success",
        title: "Defult translation language set!",
      });
      setInterval(() => {
        window.location.href = "/settings";
      }, 2000);
    } else {
    }
  }

  //Delete settings
  async function deleteSetting(id: any) {
    const todoDetails: DeleteLanguageInput = {
      id: id,
    };

    const deletedTodo = await API.graphql<GraphQLQuery<DeleteLanguageMutation>>(
      {
        query: mutations.deleteLanguage,
        variables: { input: todoDetails },
      }
    );

    if (deletedTodo) {
      Toast.fire({
        icon: "success",
        title: "Record deleted successfully!!",
      });
      setInterval(() => {
        window.location.href = "/settings";
      }, 2000);
    }

    setSerTranslateSetting((userTranslateSetting: any) => {
      return userTranslateSetting.filter((value: any, i: any) => i !== id);
    });
  }

  function setF(e: any) {
    setlngD(e.detail.value);
  }



  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Neviagtion section */}
        <Nav />

        <section className="about-section  bg-light">
          <h2 className="about-sub text-secondary pb-5">
            <AiOutlineSetting size="50" />
            Settings section
          </h2>

          <div className="row text-center">
            <div
              className="col-sm-12 text-secondary p-5"
              id="translation_section_id"
            >
              <IonItem>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonSelect
                        aria-label="Fruit"
                        interface="popover"
                        placeholder="Select defult translation language"
                        onIonChange={(e: any) => setF(e)}
                      >
                        <IonSelectOption value="English">
                          English
                        </IonSelectOption>
                        <IonSelectOption value="Sepedi">Sepedi</IonSelectOption>
                        <IonSelectOption value="Zulu">Zulu</IonSelectOption>
                      </IonSelect>
                    </IonCol>
                    <IonCol style={{ textAlign: "right" }}>
                      <IonButton color="medium" onClick={() => addNewLang()}>
                        Add Language
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Defult language </th>
                    <th scope="col">Date</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {userTranslateSetting &&
                    userTranslateSetting.map(
                      (element_data: any, id__value: any) => {
                        if (element_data.user_id === loginUser.id) {
                          return (
                            <>
                              <tr key={element_data.id}>
                                <th scope="row">{id__value}</th>
                                <td scope="row">
                                  {element_data.Language_name}
                                </td>
                                <td scope="row">{element_data.createdAt}</td>
                                <td scope="row">
                                  <IonButton
                                    onClick={() =>
                                      deleteSetting(element_data.id)
                                    }
                                    color="danger"
                                  >
                                    <RiDeleteBin5Fill />
                                  </IonButton>
                                </td>
                              </tr>
                            </>
                          );
                        }
                      }
                    )}
                </tbody>
              </table>
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

export default Settings;
