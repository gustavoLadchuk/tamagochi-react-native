import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
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

type info = {
    name: string,
    status: string
}

const PetInfo = ({ name, status }: info) => {
    return (
        <View style={styles.petInfoContainer}>
            <Text style={styles.petName}>{name}</Text>
            <Text style={styles.petStatus}>{status}</Text>
        </View>
    );
}

export default PetInfo;