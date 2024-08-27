import { coordinate } from "../Types/types";

export const checkGameOver = (snakeHead: coordinate, boundaries: any):boolean => {
    return (
        snakeHead.x < boundaries.xMin ||
        snakeHead.x > boundaries.xMax ||
        snakeHead.y < boundaries.yMin ||
        snakeHead.y > boundaries.yMax 
        
    )
}