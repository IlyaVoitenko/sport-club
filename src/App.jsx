import "./App.css";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoutes from "./utils/ProtectedRoutes";

const AuthPage = lazy(() => import("./pages/AuthPage"));
const MainPage = lazy(() => import("./pages/MainPage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AuthPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/main" element={<MainPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
