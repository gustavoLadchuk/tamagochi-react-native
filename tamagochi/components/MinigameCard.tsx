import tamagochiStyle                from "@/assets/constants/style"
import React from "react"
import {View,Text,Image,Button, ImageSourcePropType} from 'react-native'
import StatusCalculation from "./StatusCalculation"
import { Link } from "expo-router"

type prop = {
    Imagemini: ImageSourcePropType,
    Name: string
}

const MinigameChard = ({Imagemini, Name} : prop) => {
    return (
        <View style={tamagochiStyle.cardContainer}>
            <View>
               <Image style={tamagochiStyle.MinigameImage} source={Imagemini}/>
               <Text>{Name}</Text>
            </View>            
                <Link href={'/Tetris'}>
                <Button title="Selecionar"></Button>
                </Link>
           </View>
    )
}

export default MinigameChard