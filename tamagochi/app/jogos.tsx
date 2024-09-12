import Colors from "@/assets/constants/Colors"
import CharacterCard from "@/components/CharacterCard"
import Header from "@/components/Header"
import MinigameChard from "@/components/MinigameCard"
import StatusInfo from "@/components/StatusInfo"
import { useLocalSearchParams } from "expo-router"
import { useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"

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

const jogos = () => {

  const params = useLocalSearchParams()

  return (
    <View style={styles.minigamePage}>
      <Header title='Jogos' color={Colors.darkYellow} />
      <View style={styles.gamesContainer}>
        <MinigameChard Imagemini={require('@/assets/images/snake.jpeg')}
          Name="Snake" Path={`Snake?id=${params.id}`} />
        <MinigameChard Imagemini={require('@/assets/images/carStreetLogo.png')}
          Name="Car Street" Path={`carStreet?id=${params.id}`} />
      </View>
    </View>
  )
}


export default jogos