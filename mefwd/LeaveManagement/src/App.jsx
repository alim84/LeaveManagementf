import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router";
import Dashboard from "./Pages/Dashboard";
import Rootlayout from "./layout/Rootlayout";
import Sidebar from "./Pages/Sidebar";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Omrah from "./Pages/Omrah";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/omrah" element={<Omrah />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Signup />} />
    </>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
