import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import TamagochiSprite from "./TamagochiSprite";
import PetDetails from "./PetDetails";
import { tamagochi } from "../Types/types";

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

type props = {
    room: number,
    pet: tamagochi,
    isLightOff: boolean,
    isShowingDetails: boolean
}


/*################################################################################################*/

export const RoomContainer = ({ room, pet, isLightOff, isShowingDetails }: props) => {



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
                    <TamagochiSprite scale={6} TamagochiImage={isLightOff ? petImages[pet.pet_id].sleeping : petImages[pet.pet_id].normal} />
                </View>
                <View style={[styles.lightOff, { backgroundColor: `rgba(0, 0, 0, ${isLightOff ? 0.7 : 0})` }]} />
                {isShowingDetails ?
                    <PetDetails pet={pet} />
                    :
                    <></>
                }

            </ImageBackground>
        </View>
    )
}

/*################################################################################################*/