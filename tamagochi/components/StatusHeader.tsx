import Colors from "@/assets/constants/Colors";
import { StyleSheet, View } from "react-native";
import StatusInfo from "./StatusInfo";

const styles = StyleSheet.create({

    statusContainer: {
        backgroundColor: Colors.darkYellow,
        width: "100%",
        height: 80,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: 'center',
    }
})

type tamagochiAtributes = {
    hunger: number,
    sleep: number,
    fun: number
}

const StatusHeader = ({ hunger, sleep, fun }: tamagochiAtributes) => {
    return (
        <View style={styles.statusContainer}>
            <StatusInfo icon={"food-drumstick"} color={"#753100"} percentage={hunger} />
            <StatusInfo icon={"moon-waning-crescent"} color={"#002975"} percentage={sleep} />
            <StatusInfo icon={"gamepad-variant"} color={"#07cc00"} percentage={fun} />
        </View>
    );
}

export default StatusHeader;