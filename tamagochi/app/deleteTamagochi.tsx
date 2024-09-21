import { useDatabase } from "@/hooks/useDatabase";
import { router, useLocalSearchParams } from "expo-router";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";


const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200
    },
    deletePage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    },
    deleteText: {
        fontSize: 25,
        fontWeight: "600"
    },
    deleteButton: {
        backgroundColor: "red",
        borderWidth: 3,
        padding: 10
    },
    deleteButtonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 18
    }
})

const deleteTamagochi = () => {

    const params = useLocalSearchParams()

    const { deleteTamagochi } = useDatabase()

    const handleDeleteTamagochi = async () => {
        await deleteTamagochi({ id: Number(params.id) })
        router.replace("/")
    }


    return (
        <View style={styles.deletePage}>
            <Image source={require("@/assets/images/lapide.png")} style={styles.image} />
            <Text style={styles.deleteText}>Ah não, seu bixinho morreu...</Text>
            <Pressable onPress={handleDeleteTamagochi} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Despedir-se do bichinho</Text>
            </Pressable>
        </View>
    );
}

export default deleteTamagochi;