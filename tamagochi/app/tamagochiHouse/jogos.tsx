import Colors from "@/assets/constants/Colors"
import CharacterCard from "@/components/CharacterCard"
import Header from "@/components/Header"
import MinigameChard from "@/components/MinigameCard"
import StatusInfo from "@/components/StatusInfo"
import { View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  minigamePage: {
    flex: 1,
    backgroundColor: Colors.royalPurple,

  },
  statusContainer: {
    backgroundColor: Colors.darkYellow,
    width: "100%",
    height: 100,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: 'center',
  },
  gamesContainer: {
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 5,
    flex: 1
  }
})

const Jogos = () => {
  return (
    <View style={styles.minigamePage}>
      <Header title='Jogos' color={Colors.darkYellow} />
      <View style={styles.gamesContainer}>
        <MinigameChard Imagemini={require('@/assets/images/images.png')}
          Name="Tetris" />
        <MinigameChard Imagemini={require('@/assets/images/snake.jpeg')}
          Name="Snake" />
      </View>


    </View>
  )
}


export default Jogos