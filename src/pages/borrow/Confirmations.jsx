import React, {useEffect} from "react";
import SuccessConfirm from "./SuccessConfirm";
import ErrorConfirm from "./ErrorConfirm";
import {useNavigate } from "react-router-dom";

function Confirmations({_generateRes}) {
  const navigate = useNavigate();

 //handles redirection to dashboard in 3 seconds
 const dashboardRedirect = () => {
  setInterval(() => {
    navigate("/dashboard");
  }, 3000)
 }

 //redirect to dashboard affer 3 seconds
 useEffect(() => {
  dashboardRedirect();
}, []);

  return (
    <div>
      
      {
      _generateRes? <SuccessConfirm />
      : 
      <ErrorConfirm />
      }
    </div>
  );
}

export default Confirmations;
