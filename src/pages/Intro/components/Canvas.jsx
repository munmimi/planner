import React, { useState, useEffect } from 'react';
import Theme from '../../../styles/Theme';

const Canvas = () => {
  const [drawing, setDrawing] = useState(false);
  const [dots, setDots] = useState([]);
  const [lastDot, setLastDot] = useState(null); // 마지막 점 상태 추가

  const dotSpacing = 0.1; // 점 간격
  let dotTimeouts = [];

  useEffect(() => {
    return () => {
      dotTimeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  const startDrawing = (e) => {
    const { clientX, clientY } = e;
    const { top, left } = e.currentTarget.getBoundingClientRect();
    const offsetX = clientX - left;
    const offsetY = clientY - top;

    setDrawing(true);
    const dot = { x: offsetX, y: offsetY, createdAt: Date.now() };
    setDots(prevDots => [...prevDots, dot]);
    setLastDot(dot); // 마지막 점 설정

    const timeoutId = setTimeout(() => {
      setDots(prevDots => prevDots.filter(d => d !== dot));
    }, 300);
    dotTimeouts.push(timeoutId);
  };

  const continueDrawing = (e) => {
    if (!drawing && dots.length === 0) return; // 이전 점이 없는 경우 처리

    const { clientX, clientY } = e;
    const { top, left } = e.currentTarget.getBoundingClientRect();
    const offsetX = clientX - left;
    const offsetY = clientY - top;

    const previousDot = lastDot || dots[dots.length - 1]; // 마지막 점이 있으면 그것을 사용하고, 없으면 이전 점 사용
    const distance = Math.sqrt(Math.pow(offsetX - previousDot.x, 2) + Math.pow(offsetY - previousDot.y, 2));
    if (distance >= dotSpacing) {
      const dot = { x: offsetX, y: offsetY, createdAt: Date.now() };
      setDots(prevDots => [...prevDots, dot]);
      setLastDot(dot); // 마지막 점 갱신
  
      const timeoutId = setTimeout(() => {
        setDots(prevDots => prevDots.filter(d => d !== dot));
      }, 300);
      dotTimeouts.push(timeoutId);
    }
  };

  const stopDrawing = () => {
    setDrawing(false);
  };

  return (
    <div className='intro-canvas' onMouseEnter={startDrawing} onMouseMove={continueDrawing} onMouseLeave={stopDrawing}>
      <svg width="100%" height="100%">
        {dots.map((dot, index) => (
          <line key={index} x1={index === 0 ? dot.x : dots[index - 1].x} y1={index === 0 ? dot.y : dots[index - 1].y} x2={dot.x} y2={dot.y} stroke={Theme.colors.purple} strokeWidth="1" />
        ))}
                {lastDot && <circle cx={lastDot.x} cy={lastDot.y} r={5} fill={Theme.colors.purple} />} {/* 마지막 점을 원으로 표시 */}
      </svg>
    </div>
  );
};

export default Canvas;
