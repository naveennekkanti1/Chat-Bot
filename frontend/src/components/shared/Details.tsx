import React, { useState } from 'react';

const Details: React.FC = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

  const cardStyles: React.CSSProperties = {
    marginTop: '100px',
    margin: '40px',
    position: 'relative',
    width: '300px',
    height: '200px',
    backgroundColor: '#f2f2f2',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    perspective: '1000px',
    boxShadow: '0 0 0 5px #ffffff80',
    transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  };

  const svgStyles: React.CSSProperties = {
    width: '48px',
    fill: '#333',
    transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  };

  const contentStyles: React.CSSProperties = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: '#f2f2f2',
    transformOrigin: 'bottom',
    transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  };

  const titleStyles: React.CSSProperties = {
    margin: '0',
    fontSize: '20px',
    color: '#333',
    fontWeight: 700,
    textAlign: 'center',
  };

  const descriptionStyles: React.CSSProperties = {
    margin: '10px 0 0',
    fontSize: '14px',
    color: '#777',
    lineHeight: '1.4',
    textAlign: 'center',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={cardStyles}
        className="card"
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
      >
        <img
            src="symptons.png"
            alt="symptons"
            style={{ width: "250px",}}
          />
        <div style={{ ...contentStyles, transform: isHovered1 ? 'rotateX(0)' : 'rotateX(-90deg)' }} className="card__content">
          <p style={titleStyles} className="card__title">Symptom Assessment</p>
          <p style={descriptionStyles} className="card__description">Describe your symptoms, and our chatbot will assist you in evaluating them.</p>
        </div>
      </div>

      <div
        style={cardStyles}
        className="card"
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
      >
        <img
            src="Analysis.png"
            alt="Analysis"
            style={{ height: "200px",}}
          />
        <div style={{ ...contentStyles, transform: isHovered2 ? 'rotateX(0)' : 'rotateX(-90deg)' }} className="card__content">
          <p style={titleStyles} className="card__title">Check Symptoms</p>
          <p style={descriptionStyles} className="card__description">Get information about symptoms and possible conditions.</p>
        </div>
      </div>
      <div
        style={cardStyles}
        className="card"
        onMouseEnter={handleMouseEnter3}
        onMouseLeave={handleMouseLeave3}
      >
        <img
            src="information.webp"
            alt="information"
            style={{ width: "300px",}}
          />
        <div style={{ ...contentStyles, transform: isHovered3 ? 'rotateX(0)' : 'rotateX(-90deg)' }} className="card__content">
          <p style={titleStyles} className="card__title">Medical Information</p>
          <p style={descriptionStyles} className="card__description">Access reliable medical information and resources.</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
