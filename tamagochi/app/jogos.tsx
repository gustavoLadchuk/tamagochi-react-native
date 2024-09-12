import Colors from "@/assets/constants/Colors"
import Header from "@/components/Header"
import MinigameChard from "@/components/MinigameCard"
import { useLocalSearchParams } from "expo-router"
import { View, StyleSheet, Text, Button, Pressable } from "react-native"
import { Link } from "expo-router"

/*################################################################################################*/

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
        <Link href={`/${params.id}`}>
          {/* <Pressable><Text>Voltar</Text></Pressable> */}
        </Link>
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
  },
  ReturnButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.darkYellow,
  }
})

/*################################################################################################*/

export default jogos