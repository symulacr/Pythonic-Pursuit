-- Haskell doesn't have a direct graphical support, so this code shows the game logic using text-based interface.

import System.Random

type Position = (Int, Int)
type Snake = [Position]
type Fruit = Position

data Direction = Up | Down | Left | Right deriving (Eq)

move :: Direction -> Position -> Position
move Up    (x, y) = (x, y - 1)
move Down  (x, y) = (x, y + 1)
move Left  (x, y) = (x - 1, y)
move Right (x, y) = (x + 1, y)

generateFruit :: Snake -> IO Fruit
generateFruit snake = do
    x <- randomRIO (0, 19)
    y <- randomRIO (0, 19)
    let fruit = (x, y)
    if fruit `elem` snake
        then generateFruit snake
        else return fruit

main :: IO ()
main = do
    let initialSnake = [(10, 10)]
    fruit <- generateFruit initialSnake
    gameLoop initialSnake fruit Right

gameLoop :: Snake -> Fruit -> Direction -> IO ()
gameLoop snake fruit direction = do
    -- Implement game loop logic here using text-based UI (printing snake, fruit, etc.)
    -- Get user input for changing direction
    -- Update snake position, check collisions, generate new fruit, etc.
    -- Call gameLoop recursively
    putStrLn "Game loop logic goes here"
