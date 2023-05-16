import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { grey } from "@mui/material/colors";

import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a
          href="https://www.twitter.com/prabalsh19"
          rel="noreferrer"
          target="_blank"
        >
          <TwitterIcon fontSize="large" sx={{ color: grey[500] }} />
        </a>
        <a
          href="https://www.github.com/prabalsh19"
          rel="noreferrer"
          target="_blank"
        >
          <GitHubIcon fontSize="large" sx={{ color: grey[500] }} />
        </a>
        <a
          href="https://www.linkedin.com/in/prabalsh19"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedInIcon fontSize="large" sx={{ color: grey[500] }} />
        </a>
      </div>
      <div className="footer-text">© No Copyright, Feel free to replicate.</div>
    </footer>
  );
}

export default Footer;
