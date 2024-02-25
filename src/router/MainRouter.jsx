import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loader from "../components/Loader";
import Err404 from "../pages/ErrorPages/Err404";
import Navbar from "../components/Navbar";
const Login = lazy(() => import("../pages/Auth/Login"));
const Home = lazy(() => import("../pages/Home/Home"));
const SignUp = lazy(() => import("../pages/Auth/SignUp"));

const MainRouter = () => {
  return (
    <Suspense fallback={Loader}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/auth/sign-up" Component={SignUp}></Route>
          <Route path="/auth/login" Component={Login}></Route>
          <Route path="*" Component={Err404}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default MainRouter;
