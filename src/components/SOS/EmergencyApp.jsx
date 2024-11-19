
import React from "react";
import { Route, Routes } from "react-router-dom"; // No need to import BrowserRouter here
import LocationSender from "./LocationSender";
import ManageContacts from "./ManageContacts";
import SuccessPage from "./SuccessPage";

export default function EmergencyApp() {
  return (
    <Routes>
      <Route path="/" element={<LocationSender />} />
      <Route path="/manage-contacts" element={<ManageContacts />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
}

export { EmergencyApp };
