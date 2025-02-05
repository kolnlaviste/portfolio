import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">My Portfolio</h1>
        <ul className="nav-list">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
