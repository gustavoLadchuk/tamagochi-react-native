import { useDatabase } from "@/hooks/useDatabase";
import { router, useLocalSearchParams } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";


const styles = StyleSheet.create({
    deletePage: {
        justifyContent: "center",
        alignItems: "center"
    },
    deleteText: {
        fontSize: 25
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
            <Text style={styles.deleteText}>Despedir-se do bichinho?</Text>
            <Button title="Sim" onPress={handleDeleteTamagochi} color={"red"} />
        </View>
    );
}

export default deleteTamagochi;