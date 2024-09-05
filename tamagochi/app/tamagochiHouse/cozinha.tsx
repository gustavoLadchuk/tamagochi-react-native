import Colors from '@/assets/constants/Colors';
import Header from '@/components/Header';
import InteractionButton from '@/components/InteractionButton';
import PetInfo from '@/components/PetInfo';
import StatusHeader from '@/components/StatusHeader';
import StatusInfo from '@/components/StatusInfo';
import TamagochiSprite from '@/components/TamagochiSprite';
import { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  kitchenContainer: {
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
    top: 130,
    left: 50
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

export default function Cozinha() {

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

  const handleFeedButton = () => {
    if (atributes.hunger < 100) {
      setAtributes({ hunger: atributes.hunger + 10, sleep: atributes.sleep, fun: atributes.fun })
    }

  }

  return (
    <View >
      <StatusHeader hunger={atributes.hunger} sleep={atributes.sleep} fun={atributes.fun} />
      <View style={styles.kitchenContainer}>
        <ImageBackground source={require('@/assets/images/cozinha.jpg')}>
          <PetInfo name='Edivaldo' status='feliz' />
          <View style={styles.tamagochiContainer}>
            <TamagochiSprite TamagochiImage={require('@/assets/images/cobra.png')} />
          </View>
        </ImageBackground>
      </View>

      <View style={styles.interactionContainer}>
        <InteractionButton title="Alimentar" color='#753100' onPress={handleFeedButton} />
      </View>
    </View>
  );
}
