import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@pages/home";
import StartPage from "@pages/start";
import DaysForeCastsPage from "@pages/days-forecasts";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/days-forecasts" element={<DaysForeCastsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
