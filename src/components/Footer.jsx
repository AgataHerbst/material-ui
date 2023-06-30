import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
//import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
     <div className="socialMedia">
      <InstagramIcon />
      <FacebookIcon />
      <GoogleIcon />
      <GitHubIcon />
     </div>
     <p> &copy; 2023 irisbackery.com</p>
    </div>
  )
}

export default Footer;