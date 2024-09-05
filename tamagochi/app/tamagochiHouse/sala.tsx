import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Header from '@/components/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TamagochiSprite from '@/components/TamagochiSprite';
import Colors from '@/assets/constants/Colors';
import StatusInfo from '@/components/StatusInfo';
import { useEffect, useState } from 'react';
import InteractionButton from '@/components/InteractionButton';
import { Link } from 'expo-router';
import StatusHeader from '@/components/StatusHeader';
import PetInfo from '@/components/PetInfo';



const styles = StyleSheet.create({
  statusIcon: {
    width: 50,
    height: 50,
    borderWidth: 3,
    borderRadius: 5
  },
  statContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3
  },
  statusText: {
    fontWeight: "bold",
    fontSize: 18
  },
  roomContainer: {
    backgroundColor: "black",
    height: 460
  },
  statusContainer: {
    backgroundColor: Colors.darkYellow,
    width: "100%",
    height: 80,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: 'center',
  },
  tamagochiContainer: {
    position: "absolute",
    right: 10,
    top: 20
  },
  interactionContainer: {
    width: "100%",
    height: 80,
    backgroundColor: Colors.darkYellow,
    justifyContent: 'center',
    alignItems: "center"
  },
  petInfoContainer: {
    width: "100%",
    alignItems: "center"
  },
  petName: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold"
  },
  petStatus: {
    color: "white",
    fontSize: 20
  }
})


type tamagochiAtributes = {
  hunger: number,
  sleep: number,
  fun: number
}

export default function Sala() {

  const [atributes, setAtributes] = useState<tamagochiAtributes>({
    hunger: 50,
    sleep: 50,
    fun: 50
  })

  const [lastUpdate, setLastUpdate] = useState<number>()

  const updateAtributes = () => {
    setLastUpdate(Date.now)
  }

  useEffect(() => {
    updateAtributes()
  }, [])

  return (
    <View >
      <StatusHeader hunger={atributes.hunger} sleep={atributes.sleep} fun={atributes.fun} />

      <View style={styles.roomContainer}>
        <ImageBackground source={require('@/assets/images/sala.jpg')}>
          <PetInfo name='Edivaldo' status='feliz' />
          <View style={styles.tamagochiContainer}>
            <TamagochiSprite TamagochiImage={require('@/assets/images/rato.png')} />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.interactionContainer}>
        <Link href={"/jogos"}>
          <InteractionButton title={"Brincar"} color='#07cc00' onPress={() => { }} />
        </Link>


      </View>

    </View>
  );
}
