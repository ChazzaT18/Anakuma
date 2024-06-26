const InfoMenu = ({ isVisible }) => {
    return (
      <div className={`info-menu ${isVisible ? 'visible' : ''}`}>
        <div className="info-menu-content">
          <h3>FIND US</h3>
          <h3>GET IN TOUCH</h3>
          <h3>ABOUT US</h3>
          <h3>HALISCO</h3>
        </div>
      </div>
    );
  };
  
  export default InfoMenu;
  