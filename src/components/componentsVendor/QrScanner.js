import React from 'react';
import './QrScanner.css';
import { Container } from '@material-ui/core';
import QRscan  from './QRscan';


function QRscanner() {

    return (
      <Container className="App">
        <div id="qrscanner">
          <QRscan />
        </div>
      </Container>
    );
  }


export default QRscanner;