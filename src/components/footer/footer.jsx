import './footer.css';

const Footer = props => {
  const path = props.path();
  const isVisible = (path !== "/");

  return (isVisible ?
      <footer className="footer">
        <span className="footer__caption">web powered by ...</span>
        <span className="footer__caption">designed by kocurrok</span>
      </footer>
      : "")
}

export default Footer;