import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Registration from './component/signUp.tsx';
import LostPassword from './component/forgetPassword.tsx';
import Layout from './component/Layout.tsx';
// import Dashboard from './components/dashboard.tsx';
import Login from './component/logIn.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/password" element={<LostPassword />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>,
)
