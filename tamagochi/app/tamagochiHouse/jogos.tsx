import Colors from "@/assets/constants/Colors"
import CharacterCard from "@/components/CharacterCard"
import MinigameChard from "@/components/MinigameCard"
import { View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  minigamePage: {
    flex: 1,
    backgroundColor: Colors.royalPurple,
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 5
  }
})

const Jogos = () => {
  return (
    <View style={styles.minigamePage}>
      <MinigameChard Imagemini={require('@/assets/images/images.png')}
        Name="Tetris" />
      <MinigameChard Imagemini={require('@/assets/images/snake.jpeg')}
        Name="Snake" />
    </View>
  )
}


export default Jogos