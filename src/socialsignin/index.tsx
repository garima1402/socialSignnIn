import React from "react";
import GoogleSignIn from "./googleSignin";
import FacebookSignIn from "./facebooksignin";
import LinkedinSignIn from "./linkedinsignin";
import { Divider } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      alignItems: "center",
      cursor: "pointer",
      boxShadow:
        "rgb(0 0 0 / 24%) 0px 2px 2px 0px, rgb(0 0 0 / 24%) 0px 0px 1px 0px",
      lineHeight: "2",
      justifyContent: "space-between",
      width: "300px",
      margin: "0 auto",
      border: "npne",
    },
  })
);
function Home() {
  const classes = useStyles();

  return (
    <>
      <h1>Welcome to Social Sign In!</h1>
      <div className={classes.container}>
        <GoogleSignIn />
        <Divider />
        <FacebookSignIn />
        <Divider />
        <LinkedinSignIn />
      </div>
    </>
  );
}
export default Home;
