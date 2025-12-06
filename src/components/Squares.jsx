
import React, { useEffect, useRef } from "react";

/**
 * Animated squares canvas background
 *
 * Props:
 * - speed: number (default 0.5)
 * - squareSize: number (default 40)
 * - direction: "up" | "down" | "left" | "right" | "diagonal" (default "diagonal")
 * - borderColor: string (default "rgba(255,255,255,0.15)")
 * - hoverFillColor: string (default "#202020")
 */
function Squares({
  speed = 0.5,
  squareSize = 40,
  direction = "diagonal",
  borderColor = "rgba(255,255,255,0.15)",
  hoverFillColor = "#202020",
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const setSize = () => {
      const dpr = Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    setSize();

    let offsetX = 0;
    let offsetY = 0;

    const onResize = () => setSize();

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    window.addEventListener("resize", onResize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      // Clear
      ctx.clearRect(0, 0, w, h);

      // Movement
      let dx = 0;
      let dy = 0;
      const sp = speed;
      switch (direction) {
        case "up":
          dy = -sp;
          break;
        case "down":
          dy = sp;
          break;
        case "left":
          dx = -sp;
          break;
        case "right":
          dx = sp;
          break;
        case "diagonal":
        default:
          dx = sp;
          dy = sp;
          break;
      }
      offsetX = (offsetX + dx) % squareSize;
      offsetY = (offsetY + dy) % squareSize;

      // Grid style
      ctx.lineWidth = 1;
      ctx.strokeStyle = borderColor;

      // Vertical lines
      for (let x = -squareSize + offsetX; x < w + squareSize; x += squareSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = -squareSize + offsetY; y < h + squareSize; y += squareSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Hover fill
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      if (mx !== -9999 && my !== -9999) {
        const cellX =
          Math.floor((mx - offsetX + squareSize) / squareSize) * squareSize -
          squareSize +
          offsetX;
        const cellY =
          Math.floor((my - offsetY + squareSize) / squareSize) * squareSize -
          squareSize +
          offsetY;

        ctx.fillStyle = hoverFillColor;
        ctx.globalAlpha = 0.15;
        ctx.fillRect(cellX, cellY, squareSize, squareSize);
        ctx.globalAlpha = 1;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [speed, squareSize, direction, borderColor, hoverFillColor]);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}

// ✅ Default export so `import Squares from ...` works
export default Squares;
