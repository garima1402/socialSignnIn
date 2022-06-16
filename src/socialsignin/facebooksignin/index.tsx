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
  })
);
interface Props {
  signupSlide?: any;
}

const FacebookSignIn = ({ signupSlide }: Props) => {
  const theme = useTheme();
  const classes = styles(theme);
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   let ele = document.getElementsByClassName("kep-login-facebook")[0];
  //   ele.innerHTML = `
  //   <span onClick={renderProps.onClick} style="text-transform: "capitalize">
  //     <img style="width: 500px; height:15px" src="/fb.svg" />
  //     Facebook
  //   </span>`;
  // }, []);

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
      <div>
        <div
          style={{
            boxShadow:
              "rgb(0 0 0 / 24%) 0px 2px 2px 0px, rgb(0 0 0 / 24%) 0px 0px 1px 0px",
              lineHeight: "2",
              justifyContent:'space-between',
              padding:'10px'
          }}
        >
          <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_APP_ID as string}
            fields="name,email,picture"
            callback={handleFacebookLoginSuccess}
            icon={
              <img className={classes.fbIcon} src="/fb.svg" alt="facebook" />
            }
            textButton="Sign in with Facebook"
            size="medium"
            onFailure={handleFacebookLoginFailure}
            buttonStyle={{
              backgroundColor: "#FFFFFF",
              color: "rgba(0, 0, 0, 0.54)",
              fontSize: "14px !important",
              textTransform: "none",
              fontWeight: "500",
              paddingLeft: 0,
              border: "none",
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default FacebookSignIn;
