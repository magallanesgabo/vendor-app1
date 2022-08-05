import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Html5Qrcode } from "html5-qrcode";
import axios from 'axios';

const qrConfig = { fps: 60, qrbox: { width: 200, height: 200 }, rememberLastUsedCamera: true };

let html5QrCode;

const QRscan = (props) => {

  const navigate = useNavigate();

  useEffect(() => {
    html5QrCode = new Html5Qrcode("reader");
    const token = localStorage.getItem('token');

    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
       console.log(decodedText);
       html5QrCode.stop();
  
        axios({
          method: 'POST',
          url: 'https://api.devrudolf.com/vendors/qr-scan',
          data: {
            pass_code: (decodedText)
          },
          headers: {
            'Authorization': 'Bearer ' + token,    
          },
        }).then(function (response) {
          console.log(response);
          if(response.status === 201){
            navigate('/vendor/success');
          }if(response.data.code === 404){
            navigate('/vendor/invalid'); 
          }if(response.data.code === 400){
            navigate('/vendor/error'); 
          }
        })
        .catch(function (response) {
          console.log(response);
          if(response.data.code === 500){
            navigate('/vendor/out');
          }
        });
      };
       
    html5QrCode.start(
        { facingMode: "environment" }, qrConfig, qrCodeSuccessCallback );
  }, [navigate]);

  
  return (
    <div style={{ position: "relative" }}>
      <div id="reader" width="100%" />
    </div>
  );
};
export default QRscan;