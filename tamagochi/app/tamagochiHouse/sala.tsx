import { StyleSheet, Text, View } from 'react-native';
import Header from '@/components/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TamagochiSprite from '@/components/TamagochiSprite';
import Colors from '@/assets/constants/Colors';

type icons =
  | "food-drumstick"
  | "moon-waning-crescent"
  | "gamepad-variant"


type statusIcon = {
  icon: icons,
  color: string,
  percentage: number
}

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
    height: 100,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: 'center',
  },
})

const StatusInfo = ({ icon, color, percentage }: statusIcon) => {
  return (
    <View style={styles.statContainer}>
      <View style={[styles.statusIcon, { backgroundColor: color }]}>
        <MaterialCommunityIcons
          name={icon}
          size={40}
          color="black"
        />
      </View>
      <Text style={styles.statusText}>{percentage}%</Text>
    </View>
  )
}


export default function Sala() {
  return (
    <View >
      <Header title='Sala' color={Colors.darkYellow} />
      <View style={styles.roomContainer}>
        <TamagochiSprite TamagochiImage={require('@/assets/images/Hams1.png')} />
      </View>
      <View style={styles.statusContainer}>
        <StatusInfo icon={"food-drumstick"} color={"#753100"} percentage={100} />
        <StatusInfo icon={"moon-waning-crescent"} color={"#002975"} percentage={100} />
        <StatusInfo icon={"gamepad-variant"} color={"#07cc00"} percentage={100} />
      </View>
    </View>
  );
}
