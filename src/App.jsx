
import React from "react";
import "./App.css";

function App() {

  // All data in one variable
  const dashboardData = {
    menu: [
      "Dashboard",
      "AI Agents",
      "Automations",
      "Analytics",
      "Settings"
    ],

    cards: [
      {
        number: "12.5K",
        title: "Total Interactions"
      },
      {
        number: "248",
        title: "Automations Run"
      },
      {
        number: "98.7%",
        title: "Success Rate"
      },
      {
        number: "2.3s",
        title: "Response Time"
      }
    ],

    activities: [
      "New automation completed",
      "Customer Support Agent active",
      "Document Analyzer running"
    ]
  };

  return (
    <div className="container">

      {/* Navbar */}
      <nav className="navbar">
        <h2>Pulsework AI</h2>
        <input type="text" placeholder="Search..." />
        <h4>Welcome, Vignesh M</h4>
      </nav>

      <div className="main">

        {/* Sidebar */}
        <div className="sidebar">
          <h3>Menu</h3>

          {dashboardData.menu.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

        </div>

        {/* Dashboard Content */}
        <div className="content">

          <h1>Welcome to Pulsework AI</h1>
          <p>Automate. Innovate. Grow with AI.</p>

          {/* Cards */}
          <div className="cards">

            {dashboardData.cards.map((item, index) => (
              <div className="card" key={index}>
                <h3>{item.number}</h3>
                <p>{item.title}</p>
              </div>
            ))}

          </div>

          {/* Recent Activity */}
          <div className="activity">

            <h2>Recent Activity</h2>

            {dashboardData.activities.map((item, index) => (
              <p key={index}>{item}</p>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
