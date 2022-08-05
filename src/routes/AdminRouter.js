import React from 'react';
import { Route, Routes } from 'react-router'
import Error404 from '../pages/Error404';
import Home from '../pages/pagesAdmin/Home';
import Report from '../pages/pagesAdmin/Report';
import ResendPassport from '../pages/pagesAdmin/ResendPassport';
import ResendPassportSms from '../pages/pagesAdmin/ResendPassportSms';
import SendSms from '../pages/pagesAdmin/SendSms';

const DashboardRouters = () => {

  return (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/send_sms" element={<SendSms />} />
        <Route path="/resend_passport" element={<ResendPassport />} />
        <Route path="/resend_passport_sms" element={<ResendPassportSms />} />
        <Route path="/report" element={<Report />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />}></Route>
    </Routes>
  )
}

export default DashboardRouters