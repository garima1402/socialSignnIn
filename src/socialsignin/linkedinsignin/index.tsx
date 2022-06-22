import { useLinkedIn } from "react-linkedin-login-oauth2";
import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconandtextDiv: {
      display: "inline-flex",
    },
    text: {
      backgroundColor: "#FFFFFF",
      color: "rgba(0, 0, 0, 0.54)",
      fontSize: "16px !important",
      textTransform: "none",
      paddingLeft: 0,
      border: "none",
    },
    imgClass: {
      width: "20%",
    },
  })
);
function LinkedinSignIn() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { linkedInLogin } = useLinkedIn({
    clientId: "77n92qjnhvh7pw",
    redirectUri: `${window.location.origin}/linkedin`,
    onSuccess: (code) => {
      console.log(code, "successcode");
      navigate("/success");
    },
    scope: "r_emailaddress r_liteprofile w_member_social",
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div className={classes.iconandtextDiv} onClick={linkedInLogin}>
      <img src="/linkedin.svg" className={classes.imgClass} alt="linkedin" />
      <p className={classes.text}>Sign in with Linkedin</p>
    </div>
  );
}
export default LinkedinSignIn;
