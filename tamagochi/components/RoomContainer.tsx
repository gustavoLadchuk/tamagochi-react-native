import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import PetInfo from "./PetInfo";
import TamagochiSprite from "./TamagochiSprite";

const styles = StyleSheet.create({
    lightOff: {
        position: "absolute",
        width: "100%",
        height: 600,
        top: 0
    },
    background: {
        flex: 1
    },
    roomContainer: {
        backgroundColor: "black",
        height: "78%"
    },
})


/*################################################################################################*/

export const RoomContainer = ({ room, name, status, pet_id, isLightOff }:
    { room: number, name: string, status: string, pet_id: number, isLightOff: boolean }) => {



    const roomData = [
        {
            image: require('@/assets/images/sala.jpg'),
            petX: 30,
            petY: 25
        },
        {
            image: require('@/assets/images/cozinha.jpg'),
            petX: 30,
            petY: 150
        },
        {
            image: require('@/assets/images/quarto.jpg'),
            petX: 30,
            petY: 120
        },
    ]

    const petImages = [
        {
            normal: require('@/assets/images/coelho.png'),
            sleeping: require(('@/assets/images/coelho-dormindo.png'))
        },
        {
            normal: require('@/assets/images/rato.png'),
            sleeping: require(('@/assets/images/rato.png'))
        },
        {
            normal: require('@/assets/images/cobra.png'),
            sleeping: require(('@/assets/images/cobra-dormindo.png'))
        }
    ]

    return (
        <View style={styles.roomContainer}>
            <ImageBackground resizeMode='cover' style={styles.background} source={roomData[room].image}>

                <View style={{ position: "absolute", left: roomData[room].petX, top: roomData[room].petY }}>
                    <TamagochiSprite scale={6} TamagochiImage={isLightOff ? petImages[pet_id].sleeping : petImages[pet_id].normal} />
                </View>
                <View style={[styles.lightOff, { backgroundColor: `rgba(0, 0, 0, ${isLightOff ? 0.7 : 0})` }]} />
                <PetInfo name={name} status={status} />
            </ImageBackground>
        </View>
    )
}

/*################################################################################################*/