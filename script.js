const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseText = document.getElementById('surpriseText');

surpriseBtn.addEventListener('click', () => {
  surpriseText.classList.remove('hidden');
  surpriseBtn.textContent = 'You are my forever favorite 💞';
});

const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');

const pieces = Array.from({ length: 120 }, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * -window.innerHeight,
  size: Math.random() * 8 + 3,
  speedY: Math.random() * 2 + 1,
  speedX: Math.random() * 1.2 - 0.6,
  color: `hsl(${Math.random() * 360}, 90%, 65%)`,
}));

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const p of pieces) {
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size * 0.7);

    p.y += p.speedY;
    p.x += p.speedX;

    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
    if (p.x < -10) p.x = canvas.width + 10;
    if (p.x > canvas.width + 10) p.x = -10;
  }

  requestAnimationFrame(draw);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
draw();
