// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // 导入Header组件
import BasicInfoPage from './pages/BasicInfoPage';
import WorkExperiencePage from './pages/WorkExperiencePage';
import SkillsPage from './pages/SkillsPage';
import EducationPage from './pages/EducationPage';
import DeveloperSetupPage from './pages/DeveloperSetupPage';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <Routes>
          <Route path="/" element={<BasicInfoPage />} />
          <Route path="/workexperience" element={<WorkExperiencePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/developer-setup" element={<DeveloperSetupPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
