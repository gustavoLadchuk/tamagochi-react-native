// import React, { useState, useEffect } from 'react';
// import { Image, StyleSheet, Text, View } from 'react-native';
// import { Gyroscope } from 'expo-sensors';

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
        backgroundColor: "red"
    },
    obstacle2: {
        width: "50%",
        height: 200,
        backgroundColor: "yellow"
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
    }
});



const Obstacle = ({ type, positionX, positionY }: { type: number, positionX: number, positionY: number }) => {



    if (type == 1) {
        return (
            <View style={[styles.obstacle1, { top: positionY, left: positionX }]}>

            </View>
        )
    }
    else if (type == 2) {
        return (
            <View style={[styles.obstacle2, { top: positionY, left: positionX > 50 ? 70 : -70 }]}>

            </View>
        )
    }
    else if (type == 3) {
        return (
            <View style={[styles.obstacle3, { top: positionY }]}>
                <View style={styles.obstacle1}>

                </View>
                <View style={styles.obstacle1}>

                </View>
            </View>

        )
    }
    return (
        <View>

        </View>
    )

}

import React, { useState, useEffect } from 'react';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Gyroscope } from 'expo-sensors';

export default function carStreet() {
    const [gyroscopeData, setGyroscopeData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });

    const [isRunning, setRunning] = useState(true)

    const [obstacleType, setObstacleType] = useState(1)

    const minPositionY = -520

    const maxPositionY = 800

    const minPositionX = -80

    const [obstaclePositionX, setObstaclePositionX] = useState(minPositionX)

    const [obstaclePositionY, setObstaclePositionY] = useState(minPositionY)

    const [speed, setSpeed] = useState(15)


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

            if (obstacleType == 3 && obstaclePositionY < 70) {
                if (position < -10 || position > 40) {
                    setRunning(false)
                }
            }

            if (obstacleType == 2 && obstaclePositionY < 280) {
                if ((obstaclePositionX <= 50 && position < 30) || (obstaclePositionX > 50 && position > -20)) {
                    setRunning(false)
                }
            }

            if (obstacleType == 1 && obstaclePositionY < 70) {
                if (position < obstaclePositionX && position > obstaclePositionX + 100) {
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

            if (obstaclePositionY == maxPositionY) {
                setObstaclePositionY(minPositionY)
                setObstaclePositionX(Math.floor(Math.random() * 100))
                setObstacleType(Math.floor(Math.random() * 3) + 1)
                //setObstacleType(1)
            }


        }

        checkColision()

    }, [gyroscopeData.z])

    const restart = () => {
        if (!isRunning) {
            setObstaclePositionY(minPositionY)
            setRunning(true)
            setPosition(0)
            setObstacleType(Math.floor(Math.random() * 3) + 1)
        }
    }

    if (isRunning) {
        return (
            <View style={styles.container}>
                <View style={styles.road}>
                    <Obstacle type={obstacleType} positionX={obstaclePositionX} positionY={obstaclePositionY} />
                    <Text style={{ color: "white" }}>{position}</Text>
                    <Text style={{ color: "white" }}>{obstaclePositionX}</Text>
                    <Image source={require("@/assets/images/carro.png")} style={[styles.car, { left: (position) }]} />
                </View>
            </View>
        );
    }
    return (
        <View style={styles.gameOverScreen}>
            <Text>Game Over</Text>
            <Button onPress={restart} title='Reiniciar' />
        </View>
    )


}


