import * as React from "react";
import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import { coordinate, Direction, GestureEventType, tamagochi } from "../Types/types";
import { StyleSheet, View, Button, Text, Pressable } from "react-native";
import Snake from "../SnakeComponents/TheSnakeItself";
import Colors from "@/assets/constants/Colors";
import { checkGameOver } from "../Utils/CheckGameOver";
import Food from "./SnakeFood";
import { checkEatsFood } from "../Utils/CheckEatsFood";
import { randomFoodPosition } from "../Utils/randomFoodPosition";
import GameOver from "../GeneralComponents/GameOver";
import { useDatabase } from "@/hooks/useDatabase";
import { useLocalSearchParams } from "expo-router";

/*################################################################################################*/

const SNAKE_INITIAL_POSITION = [{ x: 5, y: 5 }]; // Posição inicial da cobra (quanto superior esquerdo).
const FOOD_INITIAL_POSITION = { x: 5, y: 20 }; // Posição inicial da comida (um pouco abaixo da cobra).
const GAME_BOUNDS = { xMin: 0, xMax: 35, yMin: 0, yMax: 78 }; // limita a area maxíma do jogo.
const FOOD_SPAWN_BOUNDS = { xMin: 0, xMax: 30, yMin: 0, yMax: 60 }; // Limita onde a comida pode aparecer. 
const MOVE_INTERVAL = 30; //o intervalo de tempo que a cobra pode se mexer.
const SCORE_INCREMENT = 10; // Ao comer a comida, o placar aumenta 10 pontos.

/*################################################################################################*/

export default function Game(): JSX.Element {
    //useStates, alteram o valor da váriavel dinamicamente.
    const [direction, setDirection] = React.useState<Direction>(Direction.Right);
    const [snake, setSnake] = React.useState<coordinate[]>(
        SNAKE_INITIAL_POSITION
    );
    const [food, setFood] = React.useState<coordinate>(FOOD_INITIAL_POSITION);
    const [isGameOver, setIsGameOver] = React.useState<boolean>(false);
    const [isPaused, setIsPaused] = React.useState<boolean>(false);
    const [score, setScore] = React.useState<number>(0);

    // Essa parte é para pegar os parametros da url para fazer a identificação do bichinho.
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

    //
    React.useEffect(() => {
        if (!isGameOver) {
            const intervalid = setInterval(() => {
                !isPaused && moveSnake();
            }, MOVE_INTERVAL)
            return () => clearInterval(intervalid);
        }
    }, [snake, isGameOver, isPaused]);


    const moveSnake = () => {
        const snakeHead = snake[0]; // a cobra é um vetor.
        const newHead = { ...snakeHead } //para movimentar a cobra é adcionado mais partes.

        //game over
        if (checkGameOver(snake, GAME_BOUNDS)) {
            setIsGameOver((prev => !prev));
            return;
        }
            // move a cobra para diferentes direções.
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

        setSnake([newHead, ...snake.slice(0, -1)]); // corta a cobra para ela não ficar gigantesca sem comer fruta.
        if (checkEatsFood(newHead, food, 2)) { //verifica se a cobra comeu a fruta.
            setSnake([newHead, ...snake]); // a cobra fica maior
            setFood(randomFoodPosition(FOOD_SPAWN_BOUNDS.xMax, FOOD_SPAWN_BOUNDS.yMax)); //a fruta desaparece a vai para um lugar aleatório.
            setScore(score + SCORE_INCREMENT); //aumenta o placar.
        }

    }

        //Controla o movimento touchScreen para mover a cobra.
    const handleGesture = (event: GestureEventType) => {
        const { translationX, translationY } = event.nativeEvent

        if (Math.abs(translationX) > Math.abs(translationY)) {
            if (translationX > 0 && direction != Direction.Left) {
                //move pra Esquerda
                setDirection(Direction.Right);
            } else if (translationX < 0 && direction != Direction.Right) {
                //move pra Direita
                setDirection(Direction.Left);
            }
        } else {
            if (translationY > 0 && direction != Direction.Up) {
                //move pra baixo
                setDirection(Direction.Down);
            } else if (translationY < 0 && direction != Direction.Down) {
                //move pra cima
                setDirection(Direction.Up);
            }
        }
    }

        //reinicia, e coloca a cobra no lugar original.
    const restart = () => {
        setSnake(SNAKE_INITIAL_POSITION);
        setFood(FOOD_INITIAL_POSITION);
        setIsGameOver(false);
        setScore(0);
        setDirection(Direction.Right);
        setIsPaused(false);
    }
    
    //adciona a diversão para o tamagochi, se o placar for maior ou igual que 100.
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
            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 19, alignItems: 'center' }}>
                <Pressable style={{ height: 30, width: 60, backgroundColor: '#EFF59F', borderRadius: 16, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} onPress={() => setIsPaused(prevState => !prevState)}><Text>Pausar</Text></Pressable>
                <Text style={{ fontSize: 21, borderRadius: 12, backgroundColor: '#EFF59F', width: 109, height: 30, }}>Score: {score}</Text>
            </View>
            <PanGestureHandler onGestureEvent={handleGesture}>
                <View style={styles.boundaries}>
                    <Food x={food.x} y={food.y} />
                    <Snake snake={snake} />
                </View>
            </PanGestureHandler>
        </GestureHandlerRootView>

    )
}

/*################################################################################################*/

const styles = StyleSheet.create({
    boundaries: {
        flex: 1,
        borderColor: '#335A0F',
        borderWidth: 3,
        backgroundColor: "#D3FFAA",
    },
    GameContainer: {
        backgroundColor: "#136116",
        flex: 1,
    },
})

/*################################################################################################*/



