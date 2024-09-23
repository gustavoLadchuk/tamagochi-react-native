import { StyleSheet, Text, View } from "react-native";
import { tamagochi } from "../Types/types";
import { calculate } from "@/assets/constants/statusCalculate";

const styles = StyleSheet.create({
    detailsContainer: {
        width: "100%",
        height: 70,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    statusContainer: {
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        width: '100%'
    },
    statusText: {
        color: "white",
        fontSize: 18,
        fontWeight: "600"
    }
})

const PetDetails = ({ pet }: { pet: tamagochi }) => {
    return (
        <View style={styles.detailsContainer}>
            <View style={styles.statusContainer}>
                <Text style={styles.statusText}>Fome: {pet.hunger}</Text>
                <Text style={styles.statusText}>Sono: {pet.sleep}</Text>
                <Text style={styles.statusText}>Diversão: {pet.fun}</Text>
            </View>
            <Text style={styles.statusText}>Status: {calculate(pet.hunger + pet.sleep + pet.fun)}</Text>
        </View>
    );
}

export default PetDetails;