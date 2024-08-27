import tamagochiStyle from "@/assets/constants/style"
import React from "react"
import { View, Text, Image, Button, ImageSourcePropType } from 'react-native'
import StatusCalculation from "./StatusCalculation"
import { Link } from "expo-router"

type prop = {
    Imagemini: ImageSourcePropType,
    Name: string
}

const MinigameChard = ({ Imagemini, Name }: prop) => {
    return (
        <Link href={'/Tetris'}>
            <View style={tamagochiStyle.cardContainer}>
                <View>
                    <Image style={tamagochiStyle.MinigameImage} source={Imagemini} />
                    <View style={tamagochiStyle.cardTextContainer}>
                        <Text style={tamagochiStyle.minigameCardText}>{Name}</Text>
                    </View>

                </View>
            </View>
        </Link>
    )
}

export default MinigameChard