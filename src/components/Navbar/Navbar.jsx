const Navbar = (props) => {
  return (
    <nav className="navbar mb-5">
      <div className="container">
        <a className="navbar-brand" href="#" onClick={props.onClose}>
          <i className="bi bi-arrow-left text-secondary"></i>
        </a>
        <h3>Subscribe to Creator</h3>
        <a className="navbar-brand" onClick={props.onClose} href="#">
          <i className="bi bi-x-lg text-secondary"></i>
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
