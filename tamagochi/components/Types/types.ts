export interface GestureEventType {
    nativeEvent: { translationX: number, translationY: number };
}

export interface coordinate {
    x: number,
    y: number,
}

export enum Direction {
    Right,
    Left,
    Up,
    Down,
}

export type tamagochi = {
    name: string,
    pet_id: number,
    hunger: number,
    sleep: number,
    fun: number,
    is_sleeping: boolean
}


