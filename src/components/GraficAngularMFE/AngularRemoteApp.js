import React, { useEffect } from "react";
import { mount } from "angularRemoteApp/angularRemoteApp";
// import "./AngularRemoteApp.css";

const AngularRemoteApp = () => {
  useEffect(() => {
    localStorage.setItem("grafic-invest", JSON.stringify([44, 55, 13, 43]));
    mount();  
  }, []);   
return <div className="angular-remote-app" style={{ 'width': "100%", height: "100%" }}><app-root></app-root></div>;
};

export default AngularRemoteApp;