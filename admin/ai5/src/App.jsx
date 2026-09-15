import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppLayout from "./layouts/AppLayout.jsx";
import { AppContextProvider } from "./context/AppContext.jsx";

export default function App() {
  const [activePage, setActivePage] = useState("chat"); // 'chat' | 'settings'
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <AppContextProvider>
        <AppLayout
          activePage={activePage}
          setActivePage={setActivePage}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </AppContextProvider>
    </Router>
  );
}