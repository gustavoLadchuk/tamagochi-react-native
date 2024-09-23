import Colors from "@/assets/constants/Colors";
import { StyleSheet, Text, View } from "react-native";
import StatusInfo from "./StatusInfo";
import { tamagochi } from "../Types/types";

const styles = StyleSheet.create({

    statusContainer: {
        backgroundColor: Colors.darkYellow,
        width: "100%",
        height: 80,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: 'center',
    },
    petNameContainer: {
        alignItems: "center",
        width: "50%"
    },
    petName: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold"
    },
})

const StatusHeader = ({ pet }: { pet: tamagochi }) => {
    return (
        <View style={styles.statusContainer}>
            <View style={{ flexDirection: "row", width: "50%", justifyContent: "space-around" }}>
                <StatusInfo icon={"food-drumstick"} color={"#753100"} percentage={pet.hunger} />
                <StatusInfo icon={"moon-waning-crescent"} color={"#002975"} percentage={pet.sleep} />
                <StatusInfo icon={"emoticon-happy-outline"} color={"#07cc00"} percentage={pet.fun} />
            </View>
            <View style={styles.petNameContainer}>
                <Text style={styles.petName}>{pet.name}</Text>
            </View>

        </View>
    );
}

export default StatusHeader;