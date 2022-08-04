import React, { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
import axios from 'axios';

const token = localStorage.getItem('token');
const qrConfig = { fps: 60, qrbox: { width: 200, height: 200 }, rememberLastUsedCamera: true };
let html5QrCode;

const QRscan = (props) => {
  useEffect(() => {
    html5QrCode = new Html5Qrcode("reader");

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
          if(response.statusText === 'Created'){
           window.location.href = `/vendor/success`;
          }if(response.data.code === 404){
            window.location.href = `/vendor/invalid`;
          }if(response.data.code === 400){
            window.location.href = `/vendor/error`;
          }
        })
        .catch(function (response) {
          console.log(response);
          if(response.data.code === 500){
            window.location.href = `/vendor/out`;
          }
        });
      };

    html5QrCode.start(
        { facingMode: "environment" }, qrConfig, qrCodeSuccessCallback );
  }, []);

  
  return (
    <div style={{ position: "relative" }}>
      <div id="reader" width="100%" />
    </div>
  );
};
export default QRscan;