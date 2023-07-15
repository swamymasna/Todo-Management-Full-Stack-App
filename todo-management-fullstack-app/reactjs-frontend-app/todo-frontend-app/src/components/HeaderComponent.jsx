import React from "react";

const HeaderComponent = () => {
  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
          <a
            href="http://localhost:3000/"
            className="navbar-brand"
            style={{ marginLeft: 17, fontSize: 26, color: "white" }}
          >
            Todo Management System
          </a>
          <div className="navbar-nav">
            <a
              className="nav-item nav-link text-white"
              href="/"
              style={{ fontSize: 22 }}
            >
              View Todos
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
