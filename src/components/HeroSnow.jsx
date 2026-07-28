import { useEffect, useRef } from 'react';

export default function HeroSnow() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;

    let width = (canvas.width = parent.offsetWidth);
    let height = (canvas.height = parent.offsetHeight);
    let animationId;

    const particles = [];
    const particleCount = 60;

    class SnowParticle {
      constructor() {
        this.reset();
        this.y = Math.random() * height; // Initial random spawn
      }

      reset() {
        this.x = Math.random() * width;
        this.y = -10;
        this.size = Math.random() * 2 + 0.5;
        this.speedY = Math.random() * 0.8 + 0.3; // Fall down slowly
        this.speedX = (Math.random() - 0.5) * 0.5; // Slight drift
        this.opacity = Math.random() * 0.4 + 0.1; // Very subtle
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;

        // Add a tiny bit of sine wave motion to x for "fluttering"
        this.x += Math.sin(this.y * 0.02) * 0.3;

        if (this.y > height) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
        
        // Optional subtle glow
        ctx.shadowBlur = 4;
        ctx.shadowColor = `rgba(168, 85, 247, ${this.opacity * 0.5})`; // Purple tint to the glow
        ctx.shadowBlur = 0; // reset
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new SnowParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = parent.offsetWidth;
      height = canvas.height = parent.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0, // Behind the hero content but in front of global bg
      }}
    />
  );
}
