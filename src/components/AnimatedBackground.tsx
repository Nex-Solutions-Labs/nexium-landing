import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Box } from '@mui/material';

const Polygon: React.FC<{
  size: number;
  color: string;
  initialX: number;
  initialY: number;
}> = ({ size, color, initialX, initialY }) => {
  const controls = useAnimation();
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [velocity, setVelocity] = useState({
    x: Math.random() * 2 - 1,
    y: Math.random() * 2 - 1,
  });
  const speed = 1.5; // Velocidad base del movimiento

  useEffect(() => {
    let frameId: number;
    const updatePosition = () => {
      setPosition((currentPos) => {
        const windowWidth = window.innerWidth - size;
        const windowHeight = window.innerHeight - size;
        let newX = currentPos.x + velocity.x * speed;
        let newY = currentPos.y + velocity.y * speed;
        let newVelX = velocity.x;
        let newVelY = velocity.y;

        // Rebote en los bordes horizontales
        if (newX <= 0 || newX >= windowWidth) {
          newVelX = -velocity.x;
          newX = newX <= 0 ? 0 : windowWidth;
        }

        // Rebote en los bordes verticales
        if (newY <= 0 || newY >= windowHeight) {
          newVelY = -velocity.y;
          newY = newY <= 0 ? 0 : windowHeight;
        }

        // Actualizar velocidad si hubo rebote
        if (newVelX !== velocity.x || newVelY !== velocity.y) {
          setVelocity({ x: newVelX, y: newVelY });
        }

        return { x: newX, y: newY };
      });
      frameId = requestAnimationFrame(updatePosition);
    };

    frameId = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(frameId);
  }, [velocity, size, speed]);

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    });
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        left: 0,
        top: 0,
        transform: `translate(${position.x}px, ${position.y}px)`,
        opacity: 0.15,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100">
        <polygon
          points="50,10 90,90 10,90"
          fill={color}
          style={{ filter: 'blur(2px)' }}
        />
      </svg>
    </motion.div>
  );
};

const AnimatedBackground: React.FC = () => {
  const polygons = [
    { size: 100, color: '#00f2ff', x: 100, y: 200 },
    { size: 150, color: '#7000ff', x: 800, y: 150 },
    { size: 120, color: '#00f2ff', x: 200, y: 700 },
    { size: 180, color: '#7000ff', x: 700, y: 800 },
    { size: 90, color: '#00f2ff', x: 400, y: 400 },
    { size: 130, color: '#7000ff', x: 600, y: 600 },
    { size: 110, color: '#00f2ff', x: 300, y: 300 },
    { size: 160, color: '#7000ff', x: 900, y: 500 },
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      {polygons.map((polygon, index) => (
        <Polygon
          key={index}
          size={polygon.size}
          color={polygon.color}
          initialX={polygon.x}
          initialY={polygon.y}
        />
      ))}
    </Box>
  );
};

export default AnimatedBackground; 