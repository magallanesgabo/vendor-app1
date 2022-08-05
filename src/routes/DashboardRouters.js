import React from 'react';
import { Route, Routes } from 'react-router'
import VendorReport from '../pages/pagesVendor/vendorReport';
import ScanCode from '../pages/pagesVendor/scanCode';
import VendorHome from '../pages/pagesVendor/vendorHome';
import SuccessScan from '../pages/pagesVendor/EscaneoExitoso';
import Error from '../pages/pagesVendor/EscaneoFallido';
import Error404 from '../pages/Error404';
import Invalid from '../pages/pagesVendor/CodigoInvalido'
// import QRscan from '../components/QRscan';

const DashboardRouters = () => {

  return (
    <Routes>
        <Route path="/home" element={<VendorHome />} />
        <Route path="/vendor-report" element={<VendorReport />} />
        <Route path="/scan-code" element={<ScanCode />} />
        <Route path="/success" element={<SuccessScan />} />
        <Route path="/error" element={<Error />} />
        {/* <Route path="/qrscan" element={<QRscan />} /> */}
        <Route path="/" element={<VendorHome />} />
        <Route path="*" element={<Error404 />}></Route>
        <Route path="/invalid" element={<Invalid />} />
        <Route path="/" element={<VendorHome />} />
        <Route path="*" element={<h1>404</h1>}></Route>
    </Routes>
  )
}

export default DashboardRouters