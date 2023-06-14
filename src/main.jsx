import React from "react";
import ReactDOM from "react-dom/client";
import '@/styles/app.css';
import MathMagApp from "@/components/MathMagApp";
import { BrowserRouter as Router } from 'react-router-dom';

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <Router>
      <MathMagApp />
    </Router>
  </React.StrictMode>
);
