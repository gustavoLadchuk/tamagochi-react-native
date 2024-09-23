import { coordinate } from "../Types/types";

export const checkGameOver = (snake: coordinate[], boundaries: any): boolean => {

    const snakeHead = snake[0]
    let isGameOver = false

    snake.map((item, index) => {
        if (index > 0 && item.x == snakeHead.x && item.y == snakeHead.y) {
            isGameOver = true
        }
    })

    if (isGameOver) return true

    return (
        snakeHead.x < boundaries.xMin ||
        snakeHead.x > boundaries.xMax ||
        snakeHead.y < boundaries.yMin ||
        snakeHead.y > boundaries.yMax
    )
}