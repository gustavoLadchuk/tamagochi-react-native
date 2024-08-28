import Colors from '@/assets/constants/Colors';
import Header from '@/components/Header';
import StatusInfo from '@/components/StatusInfo';
import TamagochiSprite from '@/components/TamagochiSprite';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  kitchenContainer: {
    height: 460
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
  tamagochiContainer: {
    position: "absolute",
    right: 10,
    bottom: -50
  }
})

export default function Quarto() {
  return (
    <View >
      <Header title='Quarto' color={Colors.darkYellow} />
      <View style={styles.kitchenContainer}>
        <ImageBackground source={require('@/assets/images/quarto.jpg')}>

        </ImageBackground>
        <View style={styles.tamagochiContainer}>
          <TamagochiSprite TamagochiImage={require('@/assets/images/coelho.png')} />
        </View>

      </View >
      <View style={styles.statusContainer}>
        <StatusInfo icon={"moon-waning-crescent"} color={"#002975"} percentage={100} />
      </View>
    </View>
  );
}

