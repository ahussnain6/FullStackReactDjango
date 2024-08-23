const Header = () => {
  return (
    <>
      <header>
      <nav>
        <div className="nav_logo">
          <a href="home.php">
            <img src="https://res.cloudinary.com/dlcyf2qtl/image/upload/v1724351207/coffee_logo_uwytci.png" alt="Coffee Logo" />
            <h2>Coffee</h2>
          </a>
        </div>
        <input type="checkbox" id="click" />
        <label for="click">
          <i className="menu_btn bx bx-menu"></i>
          <i className="close_btn bx bx-x"></i>
        </label>
        <ul>
          <li><a id="cartLink">Cart</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#why">Why Us</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header;
