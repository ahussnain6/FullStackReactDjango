 const Herosection = () => {
  return (
    <>
    
     
    <section className="hero_section">
      <div className="section_container">
        <div className="hero_container">
          <div className="text_section">
            <h2>Fuel Your Passion</h2>
            <h3>Discover the Magic in Every Cup</h3>
            <p>
              Welcome to our coffee paradise, where every bean tells a story and
              every cup sparks.
            </p>

            <div className="hero_section_button">
              <a href="products.php" className="button">Order Online</a>
              <a className="button" href="sign.php">Book A Table</a>
            </div>
          </div>

          <div className="image_section">
            <img src="https://res.cloudinary.com/dlcyf2qtl/image/upload/v1724351208/cofffee_image_kjjf7b.png" alt="Coffee" />
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Herosection;
