import { useEffect, useRef } from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiAdobephotoshop, SiAdobeillustrator, SiReact, SiPython, SiGithub, SiTypescript, SiTensorflow, SiKeras, SiMysql, SiMongodb, SiDocker, SiAmazon, SiGooglecloud } from 'react-icons/si';

const icons = [
  { icon: SiHtml5, color: '#e44d26' },
  { icon: SiCss3, color: '#1FADE4' },
  { icon: SiJavascript, color: '#f7df1e' },
  { icon: SiTypescript, color: '#1FADE4' },
  { icon: SiNodedotjs, color: '#339933' },
  { icon: SiAdobephotoshop, color: '#31a8ff' },
  { icon: SiAdobeillustrator, color: '#ff9a00' },
  { icon: SiReact, color: '#1FADE4' },
  { icon: SiPython, color: '#3776ab' },
  { icon: SiGithub, color: '#181717' },
  { icon: SiTensorflow, color: '#ff6f00' },
  { icon: SiKeras, color: '#d00000' },
  { icon: SiMysql, color: '#00758f' },
  { icon: SiMongodb, color: '#47a248' },
  { icon: SiDocker, color: '#2496ed' },
  { icon: SiAmazon, color: '#ff9900' },
  { icon: SiGooglecloud, color: '#4285f4' },
];

const ICON_SIZE = 48;
const ICON_COUNT = 20;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function FloatingITIconsBG() {
  const containerRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    // Allow icons to float across the full hero section horizontally (0vw-100vw), but restrict vertical range
    const iconsData = Array.from({ length: ICON_COUNT }, (_, i) => {
      // Scatter icons randomly across a slightly larger area for full coverage
      const x = randomBetween(-5, 105); // -5vw to 105vw
  const y = randomBetween(0, 100);
      const dx = randomBetween(-0.08, 0.08) || 0.05 * (Math.random() > 0.5 ? 1 : -1); // never 0
      const dy = randomBetween(-0.08, 0.08);
      return {
        x,
        y,
        dx,
        dy,
        iconIdx: i % icons.length,
        size: randomBetween(36, ICON_SIZE),
        opacity: randomBetween(0.18, 0.32),
        rotate: randomBetween(0, 360),
        rotateSpeed: randomBetween(-0.1, 0.1),
      };
    });
    let running = true;
    function animate() {
      if (!running) return;
      iconsData.forEach((icon, i) => {
        icon.x += icon.dx;
        icon.y += icon.dy;
        icon.rotate += icon.rotateSpeed;
        // Only bounce at the edges, not in the middle
        if (icon.x < -5) {
          icon.x = -5;
          icon.dx = Math.abs(icon.dx);
        } else if (icon.x > 105) {
          icon.x = 105;
          icon.dx = -Math.abs(icon.dx);
        }
        if (icon.y < 0) {
          icon.y = 0;
          icon.dy = Math.abs(icon.dy);
        } else if (icon.y > 100) {
          icon.y = 100;
          icon.dy = -Math.abs(icon.dy);
        }
        if (icon.rotate > 360) icon.rotate -= 360;
        if (icon.rotate < 0) icon.rotate += 360;
        const el = iconRefs.current[i];
        if (el) {
          el.style.transform = `translate(-50%, -50%) translate(${icon.x}vw, ${icon.y}vh) rotate(${icon.rotate}deg)`;
        }
      });
      requestAnimationFrame(animate);
    }
    animate();
    return () => { running = false; };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
      {Array.from({ length: ICON_COUNT }).map((_, i) => {
        const { icon: Icon, color } = icons[i % icons.length];
        return (
          <span
            key={i}
            ref={el => (iconRefs.current[i] = el)}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              fontSize: `${randomBetween(36, ICON_SIZE)}px`,
              color,
              opacity: randomBetween(0.18, 0.32),
              filter: 'blur(0.5px)',
              transition: 'opacity 0.3s',
              zIndex: 0,
            }}
          >
            <Icon />
          </span>
        );
      })}
    </div>
  );
}
