import { makeStyles, createStyles } from "@mui/styles";
import { Theme, useTheme } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import FacebookLogin from "react-facebook-login";
const styles = makeStyles((theme: Theme) =>
  createStyles({
    fbIcon: {
      width: "30px !important",
    },
    googleButton: {
      width: "314px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
    },
    googlediv: {
      display: "inline-flex",
    },
  })
);
interface Props {
  signupSlide?: any;
}

const FacebookSignIn = ({ signupSlide }: Props) => {
  const theme = useTheme();
  const classes = styles(theme);
  const navigate = useNavigate();

  const handleFacebookLoginSuccess = async (response: any) => {
    const res = response;
    console.log(res, "response");
    navigate("/success");
  };
  const handleFacebookLoginFailure = async (response: any) => {
    console.log(response, "facebook failure");
  };
  return (
    <React.Fragment>
      <div className={classes.googlediv}>
        <FacebookLogin
          appId={process.env.REACT_APP_FACEBOOK_APP_ID as string}
          fields="name,email,picture"
          callback={handleFacebookLoginSuccess}
          icon={<img className={classes.fbIcon} src="/fb.svg" alt="facebook" />}
          textButton="Sign in with Facebook"
          size="medium"
          onFailure={handleFacebookLoginFailure}
          buttonStyle={{
            backgroundColor: "#FFFFFF",
            color: "rgba(0, 0, 0, 0.54)",
            fontSize: "14px !important",
            textTransform: "none",
            fontWeight: "400",
            paddingLeft: 0,
            border: "none",
          }}
        />
      </div>
    </React.Fragment>
  );
};
export default FacebookSignIn;
