import { useState } from "react";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px 0",
        }}
      >
        <h2 style={{ color: "#fff", marginBottom: 10 }}>Stay Connected</h2>
        <p style={{ color: "#fff", fontSize: 16 }}>
          Follow us on social media for the latest updates and news.
        </p>
        <hr style={{ width: "50%", margin: "20px 0", borderColor: "#fff" }} />
        <div style={{ marginTop: 20 }}>
          <img
            src="facebook.svg"
            alt="Facebook"
            style={{
              marginRight: 10,
              width: 30,
              height: 30,
              cursor: "pointer",
              filter: isHovered ? "brightness(150%)" : "none",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
          <img
            src="twitter.svg"
            alt="Twitter"
            style={{
              color: "#fff",
              marginRight: 10,
              width: 30,
              height: 30,
              cursor: "pointer",
              filter: isHovered ? "brightness(150%)" : "none",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
          <img
            src="instagram.svg"
            alt="Instagram"
            style={{
              marginRight: 10,
              width: 30,
              height: 30,
              cursor: "pointer",
              filter: isHovered ? "brightness(150%)" : "none",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
