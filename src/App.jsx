// src/App.jsx - Main App component that puts everything together
import "./App.css";
import Sidebar from "./sidebar";
import NavigationBar from "./navigationbar";
import Dashboard from "./dashbord";

// App component - the root of our application
// It combines: Sidebar (left) + NavigationBar (top) + Dashboard (center)
function App() {
  return (
    // Outer container - full screen, flexbox row layout
    <div className="flex h-screen">
      {/* Sidebar on the left side */}
      <Sidebar />

      {/* Right side: Navbar on top + Dashboard below */}
      <div className="flex flex-col flex-1">
        {/* Navigation bar at the top */}
        <NavigationBar />

        {/* Dashboard fills the remaining space */}
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
