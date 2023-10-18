import { Routes, Route } from 'react-router-dom';
import './App.css'
import Menu from "./components/Menu";
import DriftPage from "./pages/DriftPage";
import ForzaPage from "./pages/ForzaPage";
import HomePage from "./pages/HomePage";
import TimeAttackPage from "./pages/TimeAttackPage";

export default function App() {
  return (
    <>
      <div className="page">
        <Menu />
        <Routes>

          <Route path="/" exact element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />

        </Routes>
      </div>
    </>
  );
}