import { Button, Pressable, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    button: {
        height: 50,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderColor: "white",
        borderWidth: 5
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    }
})


const InteractionButton = ({ title, color, onPress }: { title: string, color: string, onPress: () => void }) => {

    const handlePressButton = () => {
        onPress()
    }

    return (
        <Pressable onPress={handlePressButton}>
            <View style={[styles.button, { backgroundColor: color }]}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </Pressable>
    );
}

export default InteractionButton;