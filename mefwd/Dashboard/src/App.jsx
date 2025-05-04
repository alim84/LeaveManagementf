import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Rootlayout from "./component/layout/Rootlayout";
import { Allproduct } from "./pages/Allproduct";

import ProtectRoute from "./component/layout/ProtectRoute";
import PersonelInfo from "./pages/PersonelInfo";
import Inventory from "./pages/Inventory";
import Comsumption from "./pages/Consumption";
import LeaveManagement from "./pages/LeaveManagement";
import Showleave from "./pages/Showleave";
import Discipline from "./pages/Discipline";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rootlayout />}>
          <Route element={<ProtectRoute />}>
            <Route index element={<Home />} />
            <Route path="/discipline" element={<Discipline />} />
            <Route path="/leavemanagement" element={<LeaveManagement />} />
            <Route path="/allproduct" element={<Allproduct />} />
            <Route path="/showleave" element={<Showleave />} />
            <Route path="/personel" element={<PersonelInfo />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/consumption" element={<Comsumption />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
