import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";

import { showErrorToast, showSuccessToast } from "../utils/tools";

import { Link } from "react-router-dom";

import { LionCsk } from "../utils/tools.js";

import { firebase } from "../../firebase";

const Header = ({ user }) => {
  const logoutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        showSuccessToast("Good bye!!");
      })
      .catch((error) => {
        showErrorToast(error.message);
      });
  };

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "#ebd834",
        boxShadow: "none",
        padding: "10px 0px",
        borderBottom: "2px solid #eb7d34",
      }}
    >
      <Toolbar style={{ display: "flex" }}>
        <div style={{ flexGrow: 1 }}>
          <div className="header_logo">
            <LionCsk link={true} linkTo={"/"} width="80px" height="80px" />
          </div>
        </div>

        <Link to="/the_team">
          <Button color="inherit">The team</Button>
        </Link>
        <Link to="/the_matches">
          <Button color="inherit">Matches</Button>
        </Link>

        {user ? (
          <>
            <Link to="/dashboard">
              <Button color="inherit">Dashboard</Button>
            </Link>

            <Button color="inherit" onClick={() => logoutHandler()}>
              Log out
            </Button>
          </>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};
export default Header;
