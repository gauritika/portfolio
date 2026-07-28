import { useEffect, useRef } from 'react';

export default function CursorTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationId;
    let mouse = { x: width / 2, y: height / 2 };

    const particles = [];
    const colors = [
      'rgba(168, 85, 247, ',   // purple
      'rgba(129, 140, 248, ',  // indigo
      'rgba(59, 130, 246, ',   // blue
      'rgba(124, 58, 237, ',   // violet
    ];

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2.5 + 1;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.speedY = (Math.random() - 0.5) * 0.6;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.life = 0.5;
        this.decay = Math.random() * 0.015 + 0.012;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= this.decay;
        this.size *= 0.97;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.life + ')';
        ctx.shadowBlur = 6;
        ctx.shadowColor = this.color + '0.2)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      particles.push(new Particle(mouse.x, mouse.y));
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].life <= 0 || particles[i].size <= 0.3) {
          particles.splice(i, 1);
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
}
