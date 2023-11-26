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
  ListGesturesQuery,
} from "../API";
import { GraphQLQuery } from "@aws-amplify/api";
import * as mutations from "../graphql/mutations";
import Swal from "sweetalert2";
import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import UserTranslateSetting from "../context/translateSettings";
import MainTranslate from "../context/translateLanguages";
import LoginData from "../context/login";
import { TbReportSearch } from "react-icons/tb";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import * as queries from "../graphql/queries";
import { Button } from "@aws-amplify/ui-react";
import { BsFiletypePdf } from "react-icons/bs";
import { usePDF } from "react-to-pdf";
import AllUsers from "../context/users";

const Report: React.FC = () => {
  const [dataTran, setDataTran]: any = useState();
  const { loginUser, setLoginUser }: any = useContext(LoginData);
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const [ges, setGes]: any = useState();
  const [customData, setCustomData]: any = useState();
  const { users, setUsers }: any = useContext(AllUsers);
  const [products, setProducts] = useState([]);

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
    getData();
  }, []);

  useEffect(() => {
    if (ges && users) {
      setCustData();
    }
  }, [ges]);

  useEffect(() => {
    console.log(products);
  }, []);

  //Get all transdata
  async function getData() {
    let gestureData: any[] = [];
    const allGestures = await API.graphql<GraphQLQuery<ListGesturesQuery>>({
      query: queries.listGestures,
    });

    if (allGestures.data?.listGestures?.items) {
      gestureData = allGestures.data.listGestures.items.filter(
        (element: any) => {
          return element;
        }
      );
    }

    setDataTran(gestureData);
    setGes(gestureData);
  }

  function setCustData() {
    const data: any = [];

    ges.map((ges_element: any) => {
      users.map((users_element: any) => {
        if (
          users_element.id === ges_element.user_id &&
          users_element.id === loginUser.id
        ) {
          //For No
          if (ges_element.sign_language === "No") {
            data.push({
              id: ges_element.id,
              sign_language: ges_element.sign_language,
              name: users_element.name,
              surname: users_element.surname,
              img: "/assets/sign/No.png",
            });
          }

          //For Yes
          if (ges_element.sign_language === "Yes") {
            data.push({
              id: ges_element.id,
              sign_language: ges_element.sign_language,
              name: users_element.name,
              surname: users_element.surname,
              img: "/assets/sign/Yes.png",
            });
          }

          //For Hello
          if (ges_element.sign_language === "Hello") {
            data.push({
              id: ges_element.id,
              sign_language: ges_element.sign_language,
              name: users_element.name,
              surname: users_element.surname,
              img: "/assets/sign/Hello.png",
            });
          }

          //For Thank you
          if (ges_element.sign_language === "Thank You") {
            data.push({
              id: ges_element.id,
              sign_language: ges_element.sign_language,
              name: users_element.name,
              surname: users_element.surname,
              img: "/assets/sign/Thank you.png",
            });
          }

          //For Please
          if (ges_element.sign_language === "Please") {
            data.push({
              id: ges_element.id,
              sign_language: ges_element.sign_language,
              name: users_element.name,
              surname: users_element.surname,
              img: "/assets/sign/Please.png",
            });
          }

          //For Good Bye
          if (ges_element.sign_language === "Good Bye") {
            data.push({
              id: ges_element.id,
              sign_language: ges_element.sign_language,
              name: users_element.name,
              surname: users_element.surname,
              img: "/assets/sign/Goodbye.png",
            });
          }
        }
      });
    });

    setCustomData(data);
    setProducts(data);
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Neviagtion section */}
        <Nav />

        <section className="about-section  bg-light">
          <h2 className="about-sub text-secondary pb-5">
            <TbReportSearch size="50" />
            Report section
          </h2>

          <div className="row text-center">
            <div
              className="col-sm-12 text-secondary p-5"
              id="translation_section_id"
            >
              <div ref={targetRef}>
                <DataTable
                  value={ges}
                  sortMode="multiple"
                  tableStyle={{ minWidth: "50rem" }}
                  paginator
                  rows={5}
                  rowsPerPageOptions={[5, 10, 25, 50]}
                  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                  currentPageReportTemplate="{first} to {last} of {totalRecords}"
                  paginatorLeft={<></>}
                  paginatorRight={
                    <>
                      <br />
                      <IonButton onClick={() => toPDF()} color="danger">
                        Download PDF <BsFiletypePdf size="25" />
                      </IonButton>
                    </>
                  }
                >
                  <Column
                    className="col_style p-3"
                    field="createdAt"
                    header="Created Date"
                    sortable
                    style={{ width: "25%" }}
                  ></Column>
                  <Column
                    className="col_style p-3"
                    field="sign_language"
                    header="Sign"
                    sortable
                    style={{ width: "25%" }}
                  ></Column>
                  <Column
                    className="col_style p-3"
                    field="category"
                    body={(data: any) => (
                      <>
                        <img
                          src={
                            "../../assets/sign/" + data.sign_language + ".png"
                          }
                          width="60"
                          alt=""
                        />
                      </>
                    )}
                    header="Translate Sign"
                    style={{ width: "25%" }}
                  ></Column>
                  <Column
                    className="col_style"
                    header="User"
                    body={
                      <>
                        <AiOutlineUser size="30" /> {loginUser.surname}
                      </>
                    }
                    style={{ width: "25%" }}
                  ></Column>
                </DataTable>
              </div>
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

export default Report;
