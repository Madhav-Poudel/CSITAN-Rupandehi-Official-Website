import { useEffect, useRef } from 'react';


// Simple 3D cube vertices and edges
const vertices: [number, number, number][] = [
  [-1, -1, -1],
  [1, -1, -1],
  [1, 1, -1],
  [-1, 1, -1],
  [-1, -1, 1],
  [1, -1, 1],
  [1, 1, 1],
  [-1, 1, 1],
];
const edges = [
  [0, 1], [1, 2], [2, 3], [3, 0],
  [4, 5], [5, 6], [6, 7], [7, 4],
  [0, 4], [1, 5], [2, 6], [3, 7],
];

export default function Rotating3DCubeBG() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    resize();
    window.addEventListener('resize', resize);

    function project([x, y, z], angleX, angleY, cx, cy, scale) {
      // Rotate in 3D
      let dx = x * Math.cos(angleY) - z * Math.sin(angleY);
      let dz = x * Math.sin(angleY) + z * Math.cos(angleY);
      let dy = y * Math.cos(angleX) - dz * Math.sin(angleX);
      dz = y * Math.sin(angleX) + dz * Math.cos(angleX);
      // Perspective
      const perspective = scale / (dz + 4);
      return [
        cx + dx * perspective,
        cy + dy * perspective,
      ];
    }

    // Multiple cubes with different positions, sizes, and rotation speeds
    const cubes = [
      { cx: width * 0.5, cy: height * 0.5, scale: 180, color: '#60a5fa', alpha: 0.18, speedX: 0.008, speedY: 0.012, offset: 0 },
      { cx: width * 0.25, cy: height * 0.4, scale: 110, color: '#818cf8', alpha: 0.13, speedX: -0.006, speedY: 0.009, offset: 1.2 },
      { cx: width * 0.7, cy: height * 0.6, scale: 140, color: '#38bdf8', alpha: 0.11, speedX: 0.01, speedY: -0.007, offset: 2.1 },
      { cx: width * 0.3, cy: height * 0.7, scale: 90, color: '#f472b6', alpha: 0.09, speedX: 0.012, speedY: 0.008, offset: 0.7 },
    ];

    function draw(angles) {
      ctx.clearRect(0, 0, width, height);
      cubes.forEach((cube, idx) => {
        ctx.save();
        ctx.globalAlpha = cube.alpha;
        ctx.strokeStyle = cube.color;
        ctx.lineWidth = 2;
        // Draw edges
        for (const [a, b] of edges) {
          const [x1, y1] = project(vertices[a] as [number, number, number], angles[idx].x, angles[idx].y, cube.cx, cube.cy, cube.scale);
          const [x2, y2] = project(vertices[b] as [number, number, number], angles[idx].x, angles[idx].y, cube.cx, cube.cy, cube.scale);
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
        ctx.restore();
      });
    }

    // Initial angles for each cube
    let angles = cubes.map((cube, i) => ({ x: 0.7 + cube.offset, y: 0.7 + cube.offset }));

    function animate() {
      // Animate each cube with its own speed
      cubes.forEach((cube, i) => {
        angles[i].x += cube.speedX;
        angles[i].y += cube.speedY;
      });
      draw(angles);
      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
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
