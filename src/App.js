

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";           // fintech overview
import SuperAdminTable from "./components/SuperAdminTable";
import OrganizationTable from "./components/OrganizationTable"; 

function App() {
  const [activePage, setActivePage] = useState("Overview");

  return (
    <div className="flex h-screen overflow-hidden bg-bg-black text-text-white">
      <Sidebar 
        active={activePage} 
        onItemClick={setActivePage} 
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header name="Admin" />

        <main className="flex-1 overflow-y-auto">
          {activePage === "Overview" && <Dashboard />}
          
          {activePage === "Super Admin" && <SuperAdminTable />}
          {activePage === "Organization" && <OrganizationTable />}
          {activePage !== "Overview" && activePage !== "Super Admin" && (
            <div className="flex items-center justify-center h-full text-text-muted text-xl">
              Page under construction: {activePage}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;