export default function Navbar() {
  return (
    <nav className="nav">
      <a className="nav__logo" href="#">
          
      </a>
      <a id="nav__toggler" className="nav__toggler">
        <span className="nav__toggler-icon material-icons">more_vert</span>
      </a>
      <ul className="nav__menu">
        <li>
          <a className="nav__link" href="#">
            Accueil
          </a>
        </li>
        <li>
          <a className="nav__link" href="#service">
            Services
          </a>
        </li>
        <li>
          <a className="nav__link" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a className="nav__link" href="#blog">
            Publications
          </a>
        </li>
      </ul>
    </nav>
  );
}
