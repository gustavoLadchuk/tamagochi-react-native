import Colors from "@/assets/constants/Colors"
import Header from "@/components/Header"
import MinigameCard from "@/components/MinigameCard"
import { useLocalSearchParams } from "expo-router"
import { View, StyleSheet } from "react-native"

/*################################################################################################*/

const jogos = () => {

  const params = useLocalSearchParams()

  return (
    <View style={styles.minigamePage}>
      <Header title='Jogos' color={Colors.darkYellow} />
      <View style={styles.gamesContainer}>
        <MinigameCard imagemini={require('@/assets/images/snake.jpeg')}
          name="Snake" path='Snake' id={Number(params.id)} />
        <MinigameCard imagemini={require('@/assets/images/carStreetLogo.png')}
          name="Car Street" path="carStreet" id={Number(params.id)} />
      </View>
    </View>
  )
}

/*################################################################################################*/

const styles = StyleSheet.create({
  minigamePage: {
    flex: 1,
    backgroundColor: Colors.royalPurple,

  },
  gamesContainer: {
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 5,
    flex: 1
  }
})

/*################################################################################################*/

export default jogos