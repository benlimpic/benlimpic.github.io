import { useEffect, useRef } from 'react';

export default function Stars() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let stars = [],
      shootingStar = null,
      nebulas = [],
      animationFrameId;

    const speeds = [0.05, 0.1, 0.2];
    const baseStarCount = 50;
    const layerCount = 3;
    const repelRadius = 100;
    const repelForce = 2;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    }

    function createStars() {
      stars = [];
      nebulas = [];

      const scale = Math.max(canvas.width, canvas.height) / 1000;
      for (let i = 0; i < layerCount; i++) {
        const count = Math.floor(baseStarCount * scale * (i + 1));
        for (let j = 0; j < count; j++) {
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * (i + 1) + 0.5,
            speed: speeds[i],
            opacity: Math.random(),
            baseOpacity: Math.random() * 0.5 + 0.5,
            layer: i,
          });
        }
      }

      for (let i = 0; i < 10; i++) {
        nebulas.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 600 + 300,
          colorIndex: i % 3,
        });
      }
    }

    function updateStars() {
      stars.forEach((star) => {
        star.y -= star.speed;

        if (mouse.current.x !== null && mouse.current.y !== null) {
          const dx = star.x - mouse.current.x;
          const dy = star.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < repelRadius) {
            const force = (repelRadius - dist) / repelRadius;
            const angle = Math.atan2(dy, dx);
            star.x += Math.cos(angle) * force * repelForce;
            star.y += Math.sin(angle) * force * repelForce;
          }
        }

        star.opacity = star.baseOpacity;

        if (star.y < 0 || star.x < 0 || star.x > canvas.width) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
      });
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Background gradient
      const bgGradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      bgGradient.addColorStop(0, '#2a0a1f');
      bgGradient.addColorStop(0.3, '#402944');
      bgGradient.addColorStop(0.7, '#1f2b4d');
      bgGradient.addColorStop(1, '#0b0d1a');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Animated nebula overlays (static position)
      const t = Date.now() * 0.00002;
      const animatedColor = (r1, g1, b1, r2, g2, b2, alpha, offset = 0) => {
        const factor = (Math.sin(t + offset) + 1) / 2;
        const r = Math.floor(r1 + (r2 - r1) * factor);
        const g = Math.floor(g1 + (g2 - g1) * factor);
        const b = Math.floor(b1 + (b2 - b1) * factor);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      };

      const nebulaColors = [
        animatedColor(255, 140, 100, 180, 80, 160, 0.03),
        animatedColor(255, 180, 120, 100, 80, 200, 0.025, 1.5),
        animatedColor(200, 130, 180, 60, 40, 90, 0.02, 3.0),
      ];

      nebulas.forEach((n) => {
        const gradient = ctx.createRadialGradient(
          n.x,
          n.y,
          0,
          n.x,
          n.y,
          n.radius
        );
        gradient.addColorStop(0, nebulaColors[n.colorIndex]);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(
          n.x - n.radius,
          n.y - n.radius,
          n.radius * 2,
          n.radius * 2
        );
      });

      // 3. Stars
      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.7})`;
        ctx.fillRect(star.x, star.y, star.size, star.size);
      });
    }

    function updateShootingStar() {
      if (!shootingStar) return;
      shootingStar.x += shootingStar.dx;
      shootingStar.y += shootingStar.dy;
      shootingStar.opacity -= 0.01;
      if (
        shootingStar.opacity <= 0 ||
        shootingStar.x < 0 ||
        shootingStar.x > canvas.width ||
        shootingStar.y < 0 ||
        shootingStar.y > canvas.height
      ) {
        shootingStar = null;
      }
    }

    function drawShootingStar() {
      if (!shootingStar) return;
      const grad = ctx.createLinearGradient(
        shootingStar.x,
        shootingStar.y,
        shootingStar.x - shootingStar.dx * shootingStar.length,
        shootingStar.y - shootingStar.dy * shootingStar.length
      );
      grad.addColorStop(0, `rgba(255,255,255,${shootingStar.opacity})`);
      grad.addColorStop(1, `rgba(255,255,255,0)`);
      ctx.beginPath();
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.moveTo(shootingStar.x, shootingStar.y);
      ctx.lineTo(
        shootingStar.x - shootingStar.dx * shootingStar.length,
        shootingStar.y - shootingStar.dy * shootingStar.length
      );
      ctx.stroke();
      ctx.closePath();
    }

    function createShootingStar() {
      const startX = Math.random() * canvas.width;
      const startY = Math.random() * canvas.height;
      const angle = Math.random() * Math.PI * 2;
      const length = Math.random() * 300 + 100;
      const speed = Math.random() * 4 + 2;

      shootingStar = {
        x: startX,
        y: startY,
        length,
        speed,
        opacity: 1,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
      };

      setTimeout(createShootingStar, Math.random() * 20000 + 20000);
    }

    function animate() {
      updateStars();
      updateShootingStar();
      drawStars();
      drawShootingStar();
      animationFrameId = requestAnimationFrame(animate);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    });

    setTimeout(createShootingStar, Math.random() * 20000 + 20000);
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', null);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'block',
        pointerEvents: 'none',
        zIndex: -10,
      }}
    />
  );
}
