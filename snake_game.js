<!DOCTYPE html>
<html>
<head>
  <title>Snake Game</title>
  <style>
    canvas {
      border: 1px solid black;
      display: block;
      margin: 0 auto;
    }
  </style>
</head>
<body>
  <canvas id="gameCanvas" width="400" height="400"></canvas>
  <script>
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    const cellSize = 20;
    const cellNumber = 20;

    let snake = [{ x: cellNumber / 2, y: cellNumber / 2 }];
    let direction = { x: 0, y: 0 };
    let speed = 5;
    let fruit = { x: Math.floor(Math.random() * cellNumber), y: Math.floor(Math.random() * cellNumber) };

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw snake
      ctx.fillStyle = 'green';
      for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x * cellSize, snake[i].y * cellSize, cellSize, cellSize);
      }

      // Draw fruit
      ctx.fillStyle = 'red';
      ctx.fillRect(fruit.x * cellSize, fruit.y * cellSize, cellSize, cellSize);
    }

    function update() {
      // Update snake position
      const head = { x: snake[snake.length - 1].x + direction.x, y: snake[snake.length - 1].y + direction.y };
      if (head.x < 0 || head.x >= cellNumber || head.y < 0 || head.y >= cellNumber || snake.some(seg => seg.x === head.x && seg.y === head.y)) {
        alert('Game Over!');
        location.reload();
      }

      snake.push(head);
      if (head.x === fruit.x && head.y === fruit.y) {
        fruit = { x: Math.floor(Math.random() * cellNumber), y: Math.floor(Math.random() * cellNumber) };
      } else {
        snake.shift();
      }
    }

    function gameLoop() {
      update();
      draw();
      setTimeout(gameLoop, 1000 / speed);
    }

    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowUp':
          direction = { x: 0, y: -1 };
          break;
        case 'ArrowDown':
          direction = { x: 0, y: 1 };
          break;
        case 'ArrowLeft':
          direction = { x: -1, y: 0 };
          break;
        case 'ArrowRight':
          direction = { x: 1, y: 0 };
          break;
      }
    });

    gameLoop();
  </script>
</body>
</html>
