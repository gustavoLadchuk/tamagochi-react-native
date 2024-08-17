import Header from "@/components/Header";
import SelectPet from "@/components/SelectPet";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";


const styles = StyleSheet.create({
    createContainer: {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        gap: 10
    },
    input: {
        height: 40,
        width: "70%",
        margin: 12,
        borderWidth: 2,
        padding: 5
    },
    petSelectionTitle: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: "bold"
    },
    petSelectionContainer: {
        flexDirection: "row",
        width: "70%",
        justifyContent: "space-between",
    },
    petPreviewContainer: {
        borderStyle: "solid",
        borderWidth: 3,
        height: "50%",
        width: "100%",

    }
})

const createTamagochi = () => {
    return (
        <View style={styles.createContainer}>
            <Header title="Novo Tamagochi" color="green" />
            <TextInput
                placeholder="Nome do bixinho"
                style={styles.input}
            />
            <Text style={styles.petSelectionTitle}>
                Selecione seu bixinho:
            </Text>
            <View style={styles.petSelectionContainer}>
                <SelectPet />
                <SelectPet />
                <SelectPet />
            </View>
            <View style={styles.petPreviewContainer}>

            </View>
            <View>
                <Button title="Criar Tamagochi" />
            </View>
        </View>
    );
}

export default createTamagochi;