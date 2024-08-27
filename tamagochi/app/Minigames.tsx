import tamagochiStyle from "@/assets/constants/style"
import CharacterCard from "@/components/CharacterCard"
import MinigameChard from "@/components/MinigameCard"
import { View,Text } from "react-native"

const Minigames = () => {
    return (
        <View style={tamagochiStyle.minigamePage}>
            <MinigameChard Imagemini={require('@/assets/images/images.png')}
            Name="Tetris"/>
             <MinigameChard Imagemini={require('@/assets/images/snake.jpeg')}
            Name="Snake"/>
        </View>
    )
}


export default Minigames
