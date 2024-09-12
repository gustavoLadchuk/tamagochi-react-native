import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

/*################################################################################################*/

const InteractionButton = ({ id, room, eatFunc, sleepFunc, disabled }:
    { id: number, room: number, eatFunc: () => void, sleepFunc: () => void, disabled?: boolean }) => {

    const buttonProps = [
        {
            title: "Brincar",
            color: "#07cc00",
            func: null
        },
        {
            title: "Comer",
            color: "#753100",
            func: eatFunc
        },
        {
            title: "Dormir",
            color: "#002975",
            func: sleepFunc
        }
    ]

    /*################################################################################################*/

    const handlePressButton = () => {

        if (buttonProps[room].func) buttonProps[room].func()

    }

    if (room === 0) {

        if (disabled)
            return (
                <View style={[styles.button, { backgroundColor: buttonProps[room].color }]}>
                    <Text style={styles.buttonText}>{buttonProps[room].title}</Text>
                </View>
            )

        return (
            <Link href={`/jogos?id=${id}`}>
                <View style={[styles.button, { backgroundColor: buttonProps[room].color }]}>
                    <Text style={styles.buttonText}>{buttonProps[room].title}</Text>
                </View>
            </Link>
        )
    }

    return (
        <Pressable onPress={handlePressButton} disabled={disabled}>
            <View style={[styles.button, { backgroundColor: buttonProps[room].color }]}>
                <Text style={styles.buttonText}>{buttonProps[room].title}</Text>
            </View>
        </Pressable>
    );
}

export default InteractionButton;

/*################################################################################################*/

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