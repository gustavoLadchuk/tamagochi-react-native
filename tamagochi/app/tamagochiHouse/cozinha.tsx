import Colors from '@/assets/constants/Colors';
import Header from '@/components/Header';
import StatusInfo from '@/components/StatusInfo';
import TamagochiSprite from '@/components/TamagochiSprite';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  kitchenContainer: {
    backgroundColor: "black",
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
    top: 130,
    left: 50
  }
})

export default function Cozinha() {
  return (
    <View >
      <Header title='Cozinha' color={Colors.darkYellow} />
      <View style={styles.kitchenContainer}>
        <ImageBackground source={require('@/assets/images/cozinha.jpg')}>
          <View style={styles.tamagochiContainer}>
            <TamagochiSprite TamagochiImage={require('@/assets/images/cobra.png')} />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.statusContainer}>
        <StatusInfo icon={"food-drumstick"} color={"#753100"} percentage={100} />
      </View>
    </View>
  );
}
