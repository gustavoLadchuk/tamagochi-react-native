import * as React from "react";
import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { coordinate, Direction, GestureEventType, tamagochi } from "./Types/types";
import { StyleSheet, View } from "react-native";
import Snake from "./TheSnakeItself";
import Colors from "@/assets/constants/Colors";
import { checkGameOver } from "./Utils/CheckGameOver";
import Food from "./SnakeFood";
import { checkEatsFood } from "./Utils/CheckEatsFood";
import { randomFoodPosition } from "./Utils/randomFoodPosition";
import GameOver from "./GameOver";
import { useDatabase } from "@/hooks/useDatabase";
import { useLocalSearchParams } from "expo-router";

const SNAKE_INITIAL_POSITION = [{ x: 5, y: 5 }];
const FOOD_INITIAL_POSITION = { x: 5, y: 20 };
const GAME_BOUNDS = { xMin: 0, xMax: 35, yMin: 0, yMax: 78 };
const MOVE_INTERVAL = 100;
const SCORE_INCREMENT = 10;

export default function Game(): JSX.Element {
    const [direction, setDirection] = React.useState<Direction>(Direction.Right);
    const [snake, setSnake] = React.useState<coordinate[]>(
        SNAKE_INITIAL_POSITION
    );
    const [food, setFood] = React.useState<coordinate>(FOOD_INITIAL_POSITION);
    const [isGameOver, setIsGameOver] = React.useState<boolean>(false);
    const [isPaused, setIsPaused] = React.useState<boolean>(false);
    const [score, setScore] = React.useState<number>(0);

    const params = useLocalSearchParams()

    const { getTamagochiById, updateTamagochi } = useDatabase()

    const [pet, setPet] = React.useState<tamagochi>({
        "id": 0,
        "name": "",
        "pet_id": 0,
        "fun": 0,
        "sleep": 0,
        "hunger": 0,
        "is_sleeping": false,
        "last_update": ""
    })

    const findTamagochi = async () => {
        const pet = await getTamagochiById(Number(params.id))
        setPet(pet)
    }

    React.useEffect(() => {
        findTamagochi()
    }, [])

    React.useEffect(() => {
        if (!isGameOver) {
            const intervalid = setInterval(() => {
                !isPaused && moveSnake();
            }, MOVE_INTERVAL)
            return () => clearInterval(intervalid);
        }
    }, [snake, isGameOver, isPaused])
    const moveSnake = () => {
        const snakeHead = snake[0];
        const newHead = { ...snakeHead } // creates a new SNAKE HEAD!

        //game over
        if (checkGameOver(snakeHead, GAME_BOUNDS)) {
            setIsGameOver((prev => !prev));
            return;
        }

        switch (direction) {
            case Direction.Up:
                newHead.y -= 1;
                break;
            case Direction.Down:
                newHead.y += 1;
                break;
            case Direction.Left:
                newHead.x -= 1;
                break;
            case Direction.Right:
                newHead.x += 1;
                break;
            default:
                break;
        }
        setSnake([newHead, ...snake.slice(0, -1)]);
        if (checkEatsFood(newHead, food, 2)) {
            setSnake([newHead, ...snake]);
            setFood(randomFoodPosition(GAME_BOUNDS.xMax, GAME_BOUNDS.yMax));
            setScore(score + SCORE_INCREMENT);
        }

    }

    const handleGesture = (event: GestureEventType) => {
        const { translationX, translationY } = event.nativeEvent

        if (Math.abs(translationX) > Math.abs(translationY)) {
            if (translationX > 0) {
                //moves RIGHT
                setDirection(Direction.Right);
            } else {
                //moves LEFT
                setDirection(Direction.Left);
            }
        } else {
            if (translationY > 0) {
                //moves DOWN
                setDirection(Direction.Down);
            } else {
                //moves UP
                setDirection(Direction.Up);
            }
        }
    }

    const restart = () => {
        //nao sei como reiniciar esse jogo
    }

    const addFun = async () => {
        if (score > 0)
            await updateTamagochi({ ...pet, fun: (pet.fun + score / 2 <= 100 ? pet.fun + score / 2 : 100) })
    }
    if (isGameOver) {

        addFun()

        return (
            <GameOver restart={restart} />
        )
    }


    return (

        <GestureHandlerRootView style={styles.GameContainer}>
            <PanGestureHandler onGestureEvent={handleGesture}>
                <View style={styles.boundaries}>
                    <Food x={food.x} y={food.y} />
                    <Snake snake={snake} />
                </View>
            </PanGestureHandler>
        </GestureHandlerRootView>

    )
}


const styles = StyleSheet.create({
    boundaries: {
        flex: 1,
        borderColor: Colors.royalPurple,
        borderWidth: 3,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: Colors.primaryYellow,
    },
    GameContainer: {
        backgroundColor: Colors.primaryYellow,
        flex: 1,
    },
})



