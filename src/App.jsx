import "./App.css";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoutes from "./utils/ProtectedRoutes";

const AuthPage = lazy(() => import("./pages/AuthPage"));
const PlayersPage = lazy(() => import("./pages/PlayersPage"));
const ChooseTeamPage = lazy(() => import("./pages/ChooseTeamPage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AuthPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/players" element={<PlayersPage />} />
            <Route path="/choose-team" element={<ChooseTeamPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
