import './footer.css';

const Footer = props => {
  const path = props.path();
  const isVisible = (path !== "/");

  return (isVisible ?
      <footer className="footer">
        <span className="footer__caption">web powered by <a className="link" href="https://mikr.us">mikr.us</a></span>
        <span className="footer__caption">
          Made by <a className="link" href="https://github.com/mobaradev">MObara</a> and <a className="link" href="https://github.com/JakubK">JakubK</a>
        </span>
        <span className="footer__caption">designed by <a className="link" href="https://www.instagram.com/kocurrok/">kocurrok</a></span>
      </footer>
      : "")
}

export default Footer;