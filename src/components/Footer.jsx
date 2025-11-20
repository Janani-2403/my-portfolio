import "../styles/components/footer.css";

const Footer = () => (
    <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Janani. All Rights Reserved</p>
         <div className="social-links">
      <a href={"https://github.com/Janani-2403"} target="_blank" rel="noreferrer">
       <i className="fa-brands fa-github"> </i>GitHub
      </a>
      {/* <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
        <img src="/assets/icons/linkedin.svg" alt="LinkedIn" />
      </a> */}
      <a href="mailto:janani.boopathy@outlook.com?subject=Portfolio%20Inquiry&body=Hello%20Janani,">
  <i className="fa-solid fa-envelope" style={{ marginRight: "8px" }}></i>
  Mail
</a>
      </div>
    </footer>
);

export default Footer;