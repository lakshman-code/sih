export class Simulation3D {
  constructor(canvasElement, projectType = "highway") {
    this.canvas = canvasElement;
    this.ctx = canvasElement.getContext("2d");
    this.projectType = projectType;
    this.angleX = 0.4;
    this.angleY = 0.5;
    this.isDragging = false;
    this.lastMouseX = 0;
    this.lastMouseY = 0;
    this.animId = null;
    this.time = 0;

    this.initEvents();
    this.start();
  }

  initEvents() {
    const handleDown = (x, y) => {
      this.isDragging = true;
      this.lastMouseX = x;
      this.lastMouseY = y;
    };

    const handleMove = (x, y) => {
      if (!this.isDragging) return;
      const dx = x - this.lastMouseX;
      const dy = y - this.lastMouseY;
      this.angleY += dx * 0.01;
      this.angleX += dy * 0.01;
      this.lastMouseX = x;
      this.lastMouseY = y;
    };

    const handleUp = () => {
      this.isDragging = false;
    };

    this.canvas.addEventListener("mousedown", (e) => handleDown(e.clientX, e.clientY));
    window.addEventListener("mousemove", (e) => handleMove(e.clientX, e.clientY));
    window.addEventListener("mouseup", handleUp);

    this.canvas.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) handleDown(e.touches[0].clientX, e.touches[0].clientY);
    });
    this.canvas.addEventListener("touchmove", (e) => {
      if (e.touches.length === 1) handleMove(e.touches[0].clientX, e.touches[0].clientY);
    });
    this.canvas.addEventListener("touchend", handleUp);
  }

  start() {
    const render = () => {
      this.draw();
      this.time += 0.02;
      this.animId = requestAnimationFrame(render);
    };
    render();
  }

  destroy() {
    if (this.animId) cancelAnimationFrame(this.animId);
  }

  project(x, y, z, width, height) {
    // 3D rotation
    const cosY = Math.cos(this.angleY);
    const sinY = Math.sin(this.angleY);
    const x1 = x * cosY - z * sinY;
    const z1 = z * cosY + x * sinY;

    const cosX = Math.cos(this.angleX);
    const sinX = Math.sin(this.angleX);
    const y2 = y * cosX - z1 * sinX;
    const z2 = z1 * cosX + y * sinX;

    const fov = 280;
    const distance = 400;
    const scale = fov / (distance + z2);

    return {
      x: width / 2 + x1 * scale,
      y: height / 2 + y2 * scale,
      scale: scale,
      z: z2
    };
  }

  draw() {
    const width = this.canvas.width = this.canvas.clientWidth;
    const height = this.canvas.height = this.canvas.clientHeight;
    const ctx = this.ctx;

    // Dark high-tech simulation background
    ctx.fillStyle = "#0c1520";
    ctx.fillRect(0, 0, width, height);

    // Grid Floor
    ctx.strokeStyle = "rgba(142, 223, 240, 0.12)";
    ctx.lineWidth = 1;
    const gridSize = 180;
    const step = 30;

    for (let i = -gridSize; i <= gridSize; i += step) {
      const p1 = this.project(i, 80, -gridSize, width, height);
      const p2 = this.project(i, 80, gridSize, width, height);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();

      const p3 = this.project(-gridSize, 80, i, width, height);
      const p4 = this.project(gridSize, 80, i, width, height);
      ctx.beginPath();
      ctx.moveTo(p3.x, p3.y);
      ctx.lineTo(p4.x, p4.y);
      ctx.stroke();
    }

    // 3D Infrastructure Mesh Model (Road/Bridge Corridor)
    const points = [];
    const numPoints = 16;
    for (let i = 0; i < numPoints; i++) {
      const t = (i / (numPoints - 1)) * 2 - 1;
      const z = t * 140;
      const wave = Math.sin(t * 3 + this.time) * 15;
      const x = Math.sin(t * 2) * 50;
      const y = -10 + wave;
      points.push({ x, y, z });
    }

    // Road Deck
    ctx.strokeStyle = "#8edff0";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    points.forEach((pt, idx) => {
      const left = this.project(pt.x - 24, pt.y, pt.z, width, height);
      if (idx === 0) ctx.moveTo(left.x, left.y);
      else ctx.lineTo(left.x, left.y);
    });
    ctx.stroke();

    ctx.beginPath();
    points.forEach((pt, idx) => {
      const right = this.project(pt.x + 24, pt.y, pt.z, width, height);
      if (idx === 0) ctx.moveTo(right.x, right.y);
      else ctx.lineTo(right.x, right.y);
    });
    ctx.stroke();

    // Cross-ties & Piers
    points.forEach((pt, idx) => {
      if (idx % 2 === 0) {
        const left = this.project(pt.x - 24, pt.y, pt.z, width, height);
        const right = this.project(pt.x + 24, pt.y, pt.z, width, height);
        const pier = this.project(pt.x, 80, pt.z, width, height);

        ctx.strokeStyle = "rgba(142, 223, 240, 0.4)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(left.x, left.y);
        ctx.lineTo(right.x, right.y);
        ctx.stroke();

        // Vertical Pier
        ctx.strokeStyle = "rgba(22, 136, 212, 0.6)";
        ctx.beginPath();
        ctx.moveTo((left.x + right.x) / 2, (left.y + right.y) / 2);
        ctx.lineTo(pier.x, pier.y);
        ctx.stroke();
      }
    });

    // Telemetry Sensor Nodes
    points.forEach((pt, idx) => {
      if (idx % 3 === 0) {
        const center = this.project(pt.x, pt.y - 12, pt.z, width, height);
        ctx.fillStyle = idx % 2 === 0 ? "#36a269" : "#e4ad38";
        ctx.beginPath();
        ctx.arc(center.x, center.y, 4 * center.scale, 0, Math.PI * 2);
        ctx.fill();

        // Pulsing ring
        const pulse = (Math.sin(this.time * 4 + idx) + 1) * 3;
        ctx.strokeStyle = idx % 2 === 0 ? "rgba(54, 162, 105, 0.5)" : "rgba(228, 173, 56, 0.5)";
        ctx.beginPath();
        ctx.arc(center.x, center.y, (6 + pulse) * center.scale, 0, Math.PI * 2);
        ctx.stroke();
      }
    });
  }
}
