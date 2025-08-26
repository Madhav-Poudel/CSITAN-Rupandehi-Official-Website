import { useEffect, useRef } from 'react';

export default function ITNetworkParticlesBG() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId;

    canvas.width = width;
    canvas.height = height;

    const PARTICLE_COUNT = Math.floor(width / 30);
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: 2 + Math.random() * 2,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      // Draw lines
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = 'rgba(30, 64, 175, 0.09)'; // Lower opacity
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      // Draw particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, particles[i].radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(30, 64, 175, 0.28)'; // Lower opacity
        ctx.fill();
      }
    }

    function update() {
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles[i].x += particles[i].vx;
        particles[i].y += particles[i].vy;
        if (particles[i].x < 0 || particles[i].x > width) particles[i].vx *= -1;
        if (particles[i].y < 0 || particles[i].y > height) particles[i].vy *= -1;
      }
    }

    function animate() {
      update();
      draw();
      animationId = requestAnimationFrame(animate);
    }

    animate();

    // Resize
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', handleResize);

    // Mouse interaction
    function handleMouseMove(e) {
      const mx = e.clientX;
      const my = e.clientY;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const dx = particles[i].x - mx;
        const dy = particles[i].y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80) {
          particles[i].vx += dx * 0.0005;
          particles[i].vy += dy * 0.0005;
        }
      }
    }
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none"
      style={{ display: 'block' }}
    />
  );
}
