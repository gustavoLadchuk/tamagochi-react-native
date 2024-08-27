import { StyleSheet, Text, View } from 'react-native';
import tamagochiStyle from '@/assets/style';
import Header from '@/components/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
  }
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
      <Header title='Sala' color='#D4A000' />
      <View style={tamagochiStyle.roomContainer}>

      </View>
      <View style={tamagochiStyle.statusContainer}>
        <StatusInfo icon={"food-drumstick"} color={"#753100"} percentage={100} />
        <StatusInfo icon={"moon-waning-crescent"} color={"#002975"} percentage={100} />
        <StatusInfo icon={"gamepad-variant"} color={"#07cc00"} percentage={100} />
      </View>
    </View>
  );
}
