import { useEffect, useState } from 'react';
import styled from 'styled-components';

const MouseTrail = styled.div`
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  background-color: #FF9A42;
  will-change: transform, opacity;
  backface-visibility: hidden;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const MouseEffect = () => {
  const [trail, setTrail] = useState<Array<{x: number, y: number, size: number}>>(
    Array(5).fill({ x: -100, y: -100, size: 10 })
  );
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let counter = 0;
    const handleMouseMove = (e: MouseEvent) => {
      setTrail(prev => {
        const newTrail = [...prev];
        newTrail[counter % 5] = { 
          x: e.clientX, 
          y: e.clientY, 
          size: isHovering ? 20 : 10 
        };
        return newTrail;
      });
      counter++;
    };

    const handleHover = () => {
      document.querySelectorAll('[data-hoverable]').forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    handleHover();

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovering]);

  return (
    <>
      {trail.map((pos, i) => (
        <MouseTrail
          key={i}
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            width: `${pos.size - i * 2}px`,
            height: `${pos.size - i * 2}px`,
            opacity: 1 - (i * 0.2),
            transition: `all 0.${i+1}s ease-out`,
            backgroundColor: isHovering ? '#FF7A00' : '#FF9A42'
          }}
        />
      ))}
    </>
  );
};

export default MouseEffect;

