import React from 'react'
function BackgroundAnimation() {
  return (
    <>
      <div className="background-container">
        {/* Breathing circles */}
        <div className="breathing-circle"></div>
        <div className="breathing-circle"></div>
        <div className="breathing-circle"></div>

        {/* Tech-inspired accent lines */}
        <div className="tech-lines">
          <div className="tech-line"></div>
          <div className="tech-line"></div>
          <div className="tech-line"></div>
          <div className="tech-line"></div>
        </div>

        {/* Floating orbs with glow */}
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>

        <div className="floating-shapes">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="grid-pattern"></div>

        {/* Noise texture */}
        <div className="noise-texture"></div>
      </div>
    </>
  )
}

export default BackgroundAnimation