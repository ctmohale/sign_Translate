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
  ListGesturesQuery,
} from "../API";
import { GraphQLQuery } from "@aws-amplify/api";
import * as mutations from "../graphql/mutations";
import Swal from "sweetalert2";
import { PiUsersThreeFill } from "react-icons/pi";
import UserTranslateSetting from "../context/translateSettings";
import MainTranslate from "../context/translateLanguages";
import LoginData from "../context/login";
import { FaHandsWash, FaUserEdit } from "react-icons/fa";
import { TbFilterDown, TbLanguageKatakana } from "react-icons/tb";
import {
  BsFileEarmarkWord,
  BsFiletypeCsv,
  BsFiletypePdf,
} from "react-icons/bs";
import AllUsers from "../context/users";
import { AiFillDashboard, AiFillFileExcel } from "react-icons/ai";
import { usePDF } from "react-to-pdf";
import * as queries from "../graphql/queries";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "@aws-amplify/ui-react";
import { Tooltip } from "primereact/tooltip";
import { RiFileExcel2Line } from "react-icons/ri";

const Gesture: React.FC = () => {
  const { userTranslateSetting, setSerTranslateSetting }: any =
    useContext(UserTranslateSetting);
  const [loginState, setLoginState]: any = useState(false);
  const { allTransLate, setAllTransLate }: any = useContext(MainTranslate);
  const [lngD, setlngD]: any = useState("");
  const [lngID, setLngID]: any = useState("");
  const { loginUser, setLoginUser }: any = useContext(LoginData);
  const { users, setUsers }: any = useContext(AllUsers);
  const [presentAlert] = useIonAlert();
  const [signGestureData, setSignGestureData]: any = useState({
    gesture: "",
  });
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const [ges, setGes]: any = useState();
  const [customData, setCustomData]: any = useState();
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct]: any = useState(null);
  const [x, setX]: any = useState(null);

  const dt: any = useRef(null);

  const cols = [
    { field: "code", header: "Code" },
    { field: "name", header: "Name" },
    { field: "category", header: "Category" },
    { field: "quantity", header: "Quantity" },
  ];

  const exportColumns: any = cols.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }));

  // eslint-disable-line react-hooks/exhaustive-deps

  const exportCSV = (selectionOnly: any) => {
    dt.current.exportCSV({ selectionOnly });
  };

  const exportExcel = () => {
    import("xlsx").then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(products);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      saveAsExcelFile(excelBuffer, "products");
    });
  };

  let dataTest: any = "file-saver";
  const saveAsExcelFile: any = (buffer: any, fileName: any) => {
    import(dataTest).then((module: any) => {
      if (module && module.default) {
        let EXCEL_TYPE =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        let EXCEL_EXTENSION = ".xlsx";
        const data = new Blob([buffer], {
          type: EXCEL_TYPE,
        });

        module.default.saveAs(
          data,
          "Gesture" + "_export_" + new Date().getTime() + EXCEL_EXTENSION
        );
      }
    });
  };

  const header = (
    <div className="recordD">
      <IonButton fill="clear" color="danger" onClick={() => toPDF()}>
        <BsFiletypePdf size="30" /> PDF
      </IonButton>
      <IonButton
        fill="clear"
        type="button"
        onClick={() => exportCSV(false)}
        data-pr-tooltip="CSV"
      >
        <BsFiletypeCsv size="30" /> CSV
      </IonButton>
      <IonButton
        fill="clear"
        color="success"
        type="button"
        onClick={exportExcel}
        data-pr-tooltip="XLS"
      >
        <RiFileExcel2Line size="30" /> EXCEL
      </IonButton>
    </div>
  );

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
    allGesture();
  }, []);

  useEffect(() => {
    if (ges && users) {
      setCustData();
    }
  }, [ges]);

  async function allGesture() {
    // Simple query
    const allTodos = await API.graphql<GraphQLQuery<ListGesturesQuery>>({
      query: queries.listGestures,
    });
    console.log(allTodos.data?.listGestures?.items);
    if (allTodos) {
      setGes(allTodos.data?.listGestures?.items);
    }
  }

  function setCustData() {
    const data: any = [];

    ges.map((ges_element: any) => {
      users.map((users_element: any) => {
        if (users_element.id === ges_element.user_id) {
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
              img: "/assets/sign/Thank You.png",
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
              img: "/assets/sign/Good Bye.png",
            });
          }
        }
      });
    });

    setCustomData(data);
    setProducts(data);
  }

  const imageBodyTemplate = (rowData: any) => {
    return (
      <img
        src={rowData.img}
        alt={rowData.img}
        width="64px"
        className="shadow-4"
      />
    );
  };

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
                        color="medium"
                        className="nav-link "
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
                        color="success"
                        className="nav-link active"
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

                <IonCol size="12" ref={targetRef}>
                  <DataTable
                    ref={dt}
                    header={header}
                    selectionMode="single"
                    value={products}
                    selection={selectedProduct}
                    paginator
                    rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    onSelectionChange={(e: any) => {
                      setSelectedProduct(e.value.id);
                      setX(e.value); // Assuming 'id' is the property holding the user's ID
                    }}
                    tableStyle={{ minWidth: "50rem" }}
                  >
                    <Column
                      className="col_style"
                      field="sign_language"
                      body={imageBodyTemplate}
                      header="Sign Gesture"
                      style={{ width: "25%" }}
                    ></Column>
                    <Column
                      className="col_style"
                      field="sign_language"
                      header="Translate"
                      sortable
                    ></Column>
                    <Column
                      className="col_style"
                      field="name"
                      header="User Name"
                      sortable
                    ></Column>
                    <Column
                      className="col_style"
                      field="surname"
                      header="User Surname"
                      sortable
                    ></Column>

                    {selectedProduct && (
                      <Column
                        className="col_style"
                        header="Delete Record"
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

export default Gesture;
