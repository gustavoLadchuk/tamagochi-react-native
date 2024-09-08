import React, { useState, useEffect } from 'react';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Gyroscope } from 'expo-sensors';
import { useLocalSearchParams } from 'expo-router';
import { useDatabase } from '@/hooks/useDatabase';
import { tamagochi } from '@/components/Types/types';
import GameOver from '@/components/GameOver';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "green"
    },
    text: {
        fontSize: 18,
    },
    car: {
        width: 150,
        height: 150
    },
    road: {
        backgroundColor: "black",
        height: "100%",
        width: "80%",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    obstacle1: {
        width: "30%",
        height: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    obstacleImage1: {
        width: 70,
        height: 70,
    },
    obstacle2: {
        width: "50%",
        height: 200,
        justifyContent: "center",
        alignItems: "center"
    },
    obstacleImage2: {
        width: "100%",
        height: 200
    },
    obstacle3: {
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    gameOverScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    restartButton: {
        width: 200,
        height: 100,
        backgroundColor: "green"
    },
    scoreText: {
        color: "white",
        fontSize: 15,
        position: "absolute",
        top: 0
    }
});



const Obstacle = ({ type, positionX, positionY }: { type: number, positionX: number, positionY: number }) => {

    if (type == 1) {
        return (
            <View style={[styles.obstacle1, { top: positionY, left: positionX }]}>
                <Image style={styles.obstacleImage1} source={require("@/assets/images/cone.png")} />
            </View>
        )
    }
    else if (type == 2) {
        return (
            <View style={[styles.obstacle2, { top: positionY, left: positionX > 50 ? 70 : -70 }]}>
                <Image style={styles.obstacleImage2} source={require("@/assets/images/caminhao.png")} />
            </View>
        )
    }
    else if (type == 3) {
        return (
            <View style={[styles.obstacle3, { top: positionY }]}>
                <View style={styles.obstacle1}>
                    <Image style={styles.obstacleImage1} source={require("@/assets/images/cone.png")} />
                </View>
                <View style={styles.obstacle1}>
                    <Image style={styles.obstacleImage1} source={require("@/assets/images/cone.png")} />
                </View>
            </View>

        )
    }
    return (
        <View>

        </View>
    )

}



export default function carStreet() {

    const params = useLocalSearchParams()

    const { getTamagochiById, updateTamagochi } = useDatabase()

    const [pet, setPet] = useState<tamagochi>({
        "id": 0,
        "name": "",
        "pet_id": 0,
        "fun": 0,
        "sleep": 0,
        "hunger": 0,
        "is_sleeping": false,
        "last_update": ""
    })

    const [gyroscopeData, setGyroscopeData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });

    const [isRunning, setRunning] = useState(true)

    const [obstacleType, setObstacleType] = useState(1)

    const minPositionY = -520

    const maxPositionY = 800

    const minPositionX = -100

    const [obstaclePositionX, setObstaclePositionX] = useState(minPositionX)

    const [obstaclePositionY, setObstaclePositionY] = useState(minPositionY)

    const [speed, setSpeed] = useState(10)

    const [score, setScore] = useState(0)


    const [position, setPosition] = useState(0)

    useEffect(() => {

        const subscription = Gyroscope.addListener((data) => {
            setGyroscopeData(data);

        });

        Gyroscope.setUpdateInterval(16);

        return () => subscription.remove();
    }, []);

    const checkColision = () => {
        if (obstaclePositionY > 10) {

            if (obstacleType == 3 && obstaclePositionY < 280) {
                if (position < -25 || position > 45) {
                    setRunning(false)
                }
            }

            if (obstacleType == 2 && obstaclePositionY < 360) {
                if ((obstaclePositionX <= 50 && position < 25) || (obstaclePositionX > 50 && position > -25)) {
                    setRunning(false)
                }
            }

            if (obstacleType == 1 && obstaclePositionY < 280) {
                if (position > obstaclePositionX - 65 && position < obstaclePositionX + 60) {
                    setRunning(false)
                }
            }
        }
    }

    useEffect(() => {
        const carSpeed = 5
        const movement = -gyroscopeData.z * carSpeed
        const max = 100

        if (isRunning) {
            if (position + movement > -max && position + movement < max) {
                setPosition(position + movement)
            }

            if (obstaclePositionY <= maxPositionY) setObstaclePositionY(obstaclePositionY + speed)

            if (obstaclePositionY >= maxPositionY) {
                setObstaclePositionY(minPositionY)
                setScore(score + 10)
                setObstaclePositionX(Math.floor(Math.random() * 200) - 100)
                setObstacleType(Math.floor(Math.random() * 3) + 1)
                setSpeed(speed + 0.1)
            }


        }

        checkColision()

    }, [gyroscopeData.z])

    const findTamagochi = async () => {
        const pet = await getTamagochiById(Number(params.id))
        setPet(pet)
    }

    useEffect(() => {
        findTamagochi()
    }, [])

    const restart = () => {
        if (!isRunning) {
            setObstaclePositionY(minPositionY)
            setRunning(true)
            setPosition(0)
            setObstacleType(Math.floor(Math.random() * 3) + 1)
            setScore(0)
            setSpeed(10)
        }
    }

    const addFun = async () => {
        if (score > 0)
            await updateTamagochi({ ...pet, fun: (pet.fun + score / 2 <= 100 ? pet.fun + score / 2 : 100) })
    }

    if (!isRunning) {
        addFun()
    }

    if (isRunning) {
        return (
            <View style={styles.container}>
                <View style={styles.road}>
                    <Text style={styles.scoreText}>{score}</Text>
                    <Obstacle type={obstacleType} positionX={obstaclePositionX} positionY={obstaclePositionY} />
                    <Image source={require("@/assets/images/carro.png")} style={[styles.car, { left: (position) }]} />
                </View>
            </View>
        );
    }
    return (
        <GameOver restart={restart} />
    )


}


