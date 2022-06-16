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
      boxShadow:'none',
      lineHeight: "2",
      justifyContent:'space-between',
      padding:'10px'
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
  //   const fbRef = React.useRef<any>(null);

  //   React.useEffect(() => {
  //     let ele = document.getElementsByClassName("kep-login-facebook")[0];
  //     ele.innerHTML = `
  //     <span onClick={renderProps.onClick} style="text-transform: "capitalize">
  //       <img style="width: 15px; height:15px" src="/fb.svg" />
  //       Facebook
  //     </span>`;
  //   }, []);

  const handleGoogleLoginSuccess = async (response: any) => {
    console.log(response, "success");
    navigate("/success");
  };
  const handleGoogleLoginFailure = async (response: any) => {
    if (window.location.href !== "https://localhost:3000/login") {
    }
  };
  return (
    <React.Fragment>
      <div className={classes.googlediv}>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
          // buttonText="Google"
          // render={(renderProps) => (
          //   <button
          //     onClick={renderProps.onClick}
          //     className={classes.googleButton}
          //   >
          //     <img src="/google.svg" alt="GOOGLE" />
          //     <Typography variant="body2">Google</Typography>
          //   </button>
          // )}
          onSuccess={handleGoogleLoginSuccess}
          onFailure={handleGoogleLoginFailure}
          cookiePolicy={"single_host_origin"}
          icon={true}
          prompt="consent"
          style={{ boxShadow:"none",  }}
        />
      </div>
    </React.Fragment>
  );
};
export default GoogleSignIn;
