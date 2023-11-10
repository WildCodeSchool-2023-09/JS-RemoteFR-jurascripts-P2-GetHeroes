import React, { useRef, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import "./scratchcard.scss";

function ScratchCard({ width, height, image, brushSize }) {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const [isScratching, setIsScratching] = useState(false);
  const [scratchedPercent, setScratchedPercent] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const images = imageRef.current;
    images.crossOrigin = "anonymous";
    images.onload = () => {
      context.drawImage(images, 0, 0);
      context.globalCompositeOperation = "destination-out";
    };
  }, []);

  const handleScratch = (e) => {
    if (isScratching) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const rect = canvas.getBoundingClientRect();

      for (let i = 0; i < e.touches.length; i += 1) {
        const touch = e.touches[i];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        context.beginPath();
        context.arc(x, y, brushSize, 0, Math.PI * 2, true);
        context.fill();
      }
    }
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    setIsScratching(true);
    handleScratch(e);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    handleScratch(e);
  };

  const calculateScratchedPercent = useCallback(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const pixels = context.getImageData(0, 0, width, height).data;
    const totalPixels = width * height;
    let scratchedPixels = 0;

    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i + 3] === 0) {
        scratchedPixels += 1;
      }
    }

    setScratchedPercent((scratchedPixels / totalPixels) * 100);
  }, [width, height]);
  const handleTouchEnd = () => {
    if (isScratching) {
      setIsScratching(false);
      calculateScratchedPercent();
    }
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
      <img
        ref={imageRef}
        src={image}
        alt="hidden"
        style={{ display: "none" }}
      />
      <p>{scratchedPercent.toFixed(2)}% scratched</p>
    </div>
  );
}

ScratchCard.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  brushSize: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ScratchCard;
