function Navbar() {
  return (
    <div className="navBarContainer">
      <div className="logoWrapper">
        <h1 className="logo">Logo</h1>
        <ul className="linksWrapper">
          <li className="about">About us</li>
          <li className="events">Events</li>
          <li className="faq">FAQ</li>
          <li className="sponsors">Sponsors & Exhibitors</li>
        </ul>
      </div>
      <form className="form">
        <input className="formInput"></input>
        <submit className="button">My Afrima</submit>
      </form>
    </div>
  );
}

export default Navbar;
