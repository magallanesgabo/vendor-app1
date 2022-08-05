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
          if(response.status === 201){
            window.location.href = `/vendor/success`;
          }if(response.data.code === 404){
            window.location.href = `/vendor/invalid`;
          }if(response.data.code === 400){
            window.location.href = `/vendor/error`;
          }
        })
        .catch(function (error) {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
        });
      };
      
      axios.interceptors.response.use(response => {
        return response;
     }, error => {
       if (error.response.status === 401) {
        //window.location.href = `/vendor/scan`;
       }
       return error;
     });

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