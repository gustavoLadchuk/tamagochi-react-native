import { coordinate } from "../Types/types";

export const randomFoodPosition = (maxX: number, maxY: number): coordinate => {
    return {
        x: Math.floor(Math.random() * maxX),
        y: Math.floor(Math.random() * maxY),
    };
}