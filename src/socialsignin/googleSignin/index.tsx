import { makeStyles, createStyles } from "@mui/styles";
import { Theme, useTheme } from "@mui/material";
import GoogleLogin from "react-google-login";
import React from "react";
import { useNavigate } from "react-router-dom";
const styles = makeStyles((theme: Theme) =>
  createStyles({
    googleButton: {
      width: "314px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
    },
    googlediv: {
      backgroundColor: "white !important",
      border: "none",
      boxShadow: "none",
      lineHeight: "2",
      justifyContent: "space-between",
      padding: "10px",
    },
  })
);
interface Props {
  signupSlide?: any;
}

const GoogleSignIn = ({ signupSlide }: Props) => {
  const theme = useTheme();
  const classes = styles(theme);
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = async (response: any) => {
    console.log(response, "success");
    navigate("/success");
  };
  const handleGoogleLoginFailure = async (response: any) => {
    console.log(response, 'Google Failure!');
  };
  return (
    <React.Fragment>
      <div className={classes.googlediv}>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
          onSuccess={handleGoogleLoginSuccess}
          onFailure={handleGoogleLoginFailure}
          cookiePolicy={"single_host_origin"}
          icon={true}
          prompt="consent"
          style={{ boxShadow: "none" }}
        />
      </div>
    </React.Fragment>
  );
};
export default GoogleSignIn;