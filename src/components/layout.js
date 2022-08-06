import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Layout = ({ children }) => {
  const { isLoading, isAuthenticated, logout, loginWithPopup, user } = useAuth0();

  return (
    <>
      <header>
        <h1>
        <a href="/" rel="noreferrer">
                    <button className="menuitem" >
                      Idea Generator
                    </button>
                  </a>
        </h1>
        <nav>
          <ul>
              {!isLoading && isAuthenticated && (
                <li>
                  <a href="/profile" rel="noreferrer">
                    <button className="menuitem" >
                      {user.name}  
                    </button>
                  </a>               
                </li>
              )}
            </ul>
        </nav>
        <nav>        
          <ul>
            {!isLoading && isAuthenticated && (
              <li>
                <button className="menuitem" onClick={logout}>
                  Logout
                </button>
              </li>
            )}
            {!isLoading && !isAuthenticated && (
              <li>
                <button className="menuitem" onClick={() => {
                  loginWithPopup().then(token => {
                    console.log("login successful!")
                  });
                }}>Login</button>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
