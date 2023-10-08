import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Home from "./pages/Home";
import Nav from "./components/Nav";

import { API, Amplify, graphqlOperation } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
import Registration from "./pages/Registration";
import AllUsers from "./context/users";
import LoginData from "./context/login";
import { useEffect, useState } from "react";
import * as queries from "./graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import {
  ListLanguagesQuery,
  ListUsersQuery,
  OnUpdateUserSubscription,
} from "./API";
import Profile from "./pages/Profile";
import Main from "./pages/Translate";
import Translate from "./pages/Translate";
import { GraphQLSubscription } from "@aws-amplify/api";
import * as subscriptions from "./graphql/subscriptions";
import Settings from "./pages/Settings";
import MainTranslate from "./context/translateLanguages";
import UserTranslateSetting from "./context/translateSettings";
import TestMainData from "./context/textData";
import Admin from "./pages/Admin";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";
import Gesture from "./pages/Gesture";
import Language from "./pages/Language";
import SelectedUserAdmin from "./context/selected_user";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";
Amplify.configure(awsExports);

setupIonicReact();

const App: React.FC = () => {
  const [users, setUsers]: any = useState();
  const [loginUser, setLoginUser]: any = useState();
  const localData: any = localStorage.getItem("user");
  const [allTransLate, setAllTransLate]: any = useState();
  const [userTranslateSetting, setSerTranslateSetting]: any = useState();
  const [transData, setTransData]: any = useState("");
  const [selectedUserA, setSelectedUserA]: any = useState();

  useEffect(() => {
    getAllUsers();
    getTranslateSetting();
  }, []);

  //Get all users
  async function getAllUsers() {
    const allUsers = await API.graphql<GraphQLQuery<ListUsersQuery>>({
      query: queries.listUsers,
    });
    setUsers(allUsers.data?.listUsers?.items);
  }

  //Get all translate settings
  async function getTranslateSetting() {
    const settingsData = await API.graphql<GraphQLQuery<ListLanguagesQuery>>({
      query: queries.listLanguages,
    });
    setSerTranslateSetting(settingsData.data?.listLanguages?.items);
  }

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      setLoginUser(JSON.parse(localData));
    }
  }, []);

  //Sub

  return (
    <IonApp>
      <AllUsers.Provider value={{ users, setUsers }}>
        <LoginData.Provider value={{ loginUser, setLoginUser }}>
          <MainTranslate.Provider value={{ allTransLate, setAllTransLate }}>
            <UserTranslateSetting.Provider
              value={{ userTranslateSetting, setSerTranslateSetting }}
            >
              <TestMainData.Provider value={{ transData, setTransData }}>
                <SelectedUserAdmin.Provider
                  value={{ selectedUserA, setSelectedUserA }}
                >
                  <IonReactRouter>
                    <IonTabs>
                      <IonRouterOutlet>
                        <Authenticator></Authenticator>
                        <Route exact path="/home">
                          <Home />
                        </Route>
                        <Route exact path="/registration">
                          <Registration />
                        </Route>
                        <Route exact path="/profile">
                          <Profile />
                        </Route>
                        <Route exact path="/settings">
                          <Settings />
                        </Route>

                        <Route exact path="/users">
                          <Users />
                        </Route>
                        <Route exact path="/gesture">
                          <Gesture />
                        </Route>

                        <Route exact path="/language">
                          <Language />
                        </Route>
                        <Route exact path="/admin">
                          <Admin />
                        </Route>

                        <Route exact path="/userprofile">
                          <UserProfile />
                        </Route>
                        <Route exact path="/Translate">
                          <Translate />
                        </Route>
                        <Route exact path="/">
                          <Redirect to="/home" />
                        </Route>
                      </IonRouterOutlet>

                      <IonTabBar
                        slot="bottom"
                        style={{ display: "none" }}
                      ></IonTabBar>
                    </IonTabs>
                  </IonReactRouter>
                </SelectedUserAdmin.Provider>
              </TestMainData.Provider>
            </UserTranslateSetting.Provider>
          </MainTranslate.Provider>
        </LoginData.Provider>
      </AllUsers.Provider>
    </IonApp>
  );
};

export default App;
