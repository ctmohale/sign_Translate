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
  CreateTranslationSettingInput,
  CreateTranslationSettingMutation,
  CreateUserInput,
  CreateUserMutation,
  DeleteTranslationSettingInput,
  DeleteTranslationSettingMutation,
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

  useEffect(() => {
    console.log(allTransLate);
  }, [allTransLate]);

  async function addNewLang(data: any, t_id: any) {
    console.log(t_id);
    const data_settings: CreateTranslationSettingInput = {
      translationlanguage: data,
      user_id: loginUser.id,
      translation_language_types_id: t_id,
    };

    const newTodo = await API.graphql<
      GraphQLQuery<CreateTranslationSettingMutation>
    >({
      query: mutations.createTranslationSetting,
      variables: { input: data_settings },
    });

    if (newTodo) {
      Toast.fire({
        icon: "success",
        title: "Defult translation language set!",
      });
    } else {
    }
  }

  //Delete settings
  async function deleteSetting(id: any) {
    const todoDetails: DeleteTranslationSettingInput = {
      id: id,
    };

    const deletedTodo = await API.graphql<
      GraphQLQuery<DeleteTranslationSettingMutation>
    >({
      query: mutations.deleteTranslationSetting,
      variables: { input: todoDetails },
    });

    if (deletedTodo) {
      Toast.fire({
        icon: "success",
        title: "Record deleted successfully!!",
      });
    }

    setSerTranslateSetting((userTranslateSetting: any) => {
      return userTranslateSetting.filter((value: any, i: any) => i !== id);
    });
  }

  function setF(e: any) {
    setLngID(e.target.value.id);
    setlngD(e.target.value.data);

    console.log(lngD);
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
                        {allTransLate &&
                          allTransLate.map((element_data: any) => {
                            return (
                              <IonSelectOption
                                key={element_data.id}
                                value={{
                                  id: element_data.id,
                                  data: element_data.Language,
                                }}
                              >
                                {element_data.Language}
                              </IonSelectOption>
                            );
                          })}
                      </IonSelect>
                    </IonCol>
                    <IonCol style={{ textAlign: "right" }}>
                      <IonButton
                        color="medium"
                        onClick={() => addNewLang(lngD, lngID)}
                      >
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
                                  {element_data.translationlanguage}
                                </td>
                                <td scope="row">17-01-2021 000</td>
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
