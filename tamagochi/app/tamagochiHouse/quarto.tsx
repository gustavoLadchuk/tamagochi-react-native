import Colors from '@/assets/constants/Colors';
import Header from '@/components/Header';
import InteractionButton from '@/components/InteractionButton';
import PetInfo from '@/components/PetInfo';
import StatusHeader from '@/components/StatusHeader';
import StatusInfo from '@/components/StatusInfo';
import TamagochiSprite from '@/components/TamagochiSprite';
import { useEffect, useState } from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  roomContainer: {
    height: 460
  },
  tamagochiContainer: {
    position: "absolute",
    right: 10,
    top: 90
  },
  lightOff: {
    position: "absolute",
    width: "100%",
    height: 500,
  },
  interactionContainer: {
    width: "100%",
    height: 80,
    backgroundColor: Colors.darkYellow,
    justifyContent: 'center',
    alignItems: "center"
  },

})

type tamagochiAtributes = {
  hunger: number,
  sleep: number,
  fun: number
}

export default function Quarto() {

  const now = new Date()

  const [atributes, setAtributes] = useState<tamagochiAtributes>({
    hunger: 50,
    sleep: 50,
    fun: 50
  })

  const [lastUpdate, setLastUpdate] = useState<number>()

  const updateAtributes = async () => {
    setLastUpdate(10)
    console.log(lastUpdate)
  }

  useEffect(() => {
    updateAtributes()
  }, [])

  const [sleeping, setSleeping] = useState(false)

  const handleSleepButton = () => {
    if (sleeping) {
      setSleeping(false)
      return
    }
    setSleeping(true)

  }

  return (
    <View >
      <StatusHeader hunger={atributes.hunger} sleep={atributes.sleep} fun={atributes.fun} />
      <View style={styles.roomContainer}>
        <ImageBackground source={require('@/assets/images/quarto.jpg')}>
          <PetInfo name='Edivaldo' status='feliz' />
          <View style={styles.tamagochiContainer}>
            <TamagochiSprite TamagochiImage={require('@/assets/images/coelho.png')} />
          </View>
          <View style={[styles.lightOff, { backgroundColor: `rgba(0, 0, 0, ${sleeping ? 0.7 : 0})` }]} />
        </ImageBackground>
      </View >

      <View style={styles.interactionContainer}>
        <InteractionButton title={sleeping ? "Acordar" : "Dormir"} color='#002975' onPress={handleSleepButton} />
      </View>
    </View>
  );
}

