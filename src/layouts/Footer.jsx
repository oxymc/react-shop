function Footer() {
  return (
    <footer className="page-footer grey darken-4">
        <div className="footer-copyright">
          <div className="container">
          © {new Date().getFullYear()} OXYG
          <a 
            className="grey-text text-lighten-4 right" 
            target="_blank" 
            rel="noreferrer"
            href="https://github.com/oxymc/react-shop">
              GitHub
          </a>
          </div>
        </div>
      </footer>
  );
}

export {Footer};

