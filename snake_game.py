import pygame
import random

# Initialize Pygame
pygame.init()

# Constants
WIDTH, HEIGHT = 800, 600
CELL_SIZE = 20
CELL_WIDTH, CELL_HEIGHT = WIDTH // CELL_SIZE, HEIGHT // CELL_SIZE
FPS = 10

# Colors
WHITE = (255, 255, 255)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLACK = (0, 0, 0)

# Set up the display
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption('Pythonic Pursuit')

clock = pygame.time.Clock()

# Snake initial position and direction
snake = [(CELL_WIDTH // 2, CELL_HEIGHT // 2)]
snake_direction = (0, 0)
snake_speed = 1

# Fruit initial position
fruit = (random.randint(0, CELL_WIDTH - 1), random.randint(0, CELL_HEIGHT - 1))


def draw_snake():
    for segment in snake:
        pygame.draw.rect(screen, GREEN, (segment[0] * CELL_SIZE, segment[1] * CELL_SIZE, CELL_SIZE, CELL_SIZE))


def draw_fruit():
    pygame.draw.rect(screen, RED, (fruit[0] * CELL_SIZE, fruit[1] * CELL_SIZE, CELL_SIZE, CELL_SIZE))


running = True
while running:
    screen.fill(BLACK)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_UP:
                snake_direction = (0, -1)
            elif event.key == pygame.K_DOWN:
                snake_direction = (0, 1)
            elif event.key == pygame.K_LEFT:
                snake_direction = (-1, 0)
            elif event.key == pygame.K_RIGHT:
                snake_direction = (1, 0)

    # Update snake position
    snake_head = (snake[-1][0] + snake_direction[0], snake[-1][1] + snake_direction[1])
    snake.append(snake_head)
    if snake_head == fruit:
        fruit = (random.randint(0, CELL_WIDTH - 1), random.randint(0, CELL_HEIGHT - 1))
    else:
        snake.pop(0)

    # Draw elements
    draw_fruit()
    draw_snake()

    # Update display
    pygame.display.update()
    clock.tick(FPS)

pygame.quit()
