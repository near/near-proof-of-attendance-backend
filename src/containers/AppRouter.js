import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import {
  Home,
  BadgesHome,
  CreateNewBadges,
  BadgesList,
  
} from "./";

import {
  Notification,
  AppHeader,
} from "../components";

import {
  networkId, 
  
} from "../nft"

export default function AppRouter() {
  const [notification, showNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  
  const componentDidMount = () => {
    if(window.walletConnection.isSignedIn()) {
      showNotification(true);
      setNotificationMessage("You are logged ");
      
      setTimeout(() => {
        showNotification(false);
      }, 1000)
    }
  }
  
  useEffect(componentDidMount, []);
  
  const isSignedIn = window.walletConnection.isSignedIn();

  const RenderNotification = () => {
    return notification && <Notification message={notificationMessage} networkId={networkId} />
  }
  
  const RenderAppHeader = () => {
    return window.walletConnection.isSignedIn() && (<AppHeader />) 
  }
  
  const RenderAppRouter = () => {
    return (
      <>
        {
          isSignedIn ? (
            <Router> 
              { window.walletConnection.isSignedIn() && (<AppHeader />)  }
              <Switch>
                <Route path={"/"} exact>
                    <BadgesHome />
                    <RenderNotification />
                </Route>
                
                <Route path={"/new"}>
                 <CreateNewBadges />
                </Route>
                
                <Route path={"/badges/:account"}>
                 <BadgesList />
                </Route>
              </Switch>
              
            </Router>
          ) :  
          (
            <Home />
          )
        }
      </>
    )
  }

  return <RenderAppRouter />
}
