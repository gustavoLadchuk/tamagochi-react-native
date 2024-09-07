import { Link } from "expo-router";
import { useState } from "react";
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


const InteractionButton = ({ room, eatFunc, sleepFunc }:
    { room: number, eatFunc: () => void, sleepFunc: () => void }) => {

    const [message, setMessage] = useState("")

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

    const handlePressButton = () => {

        if (buttonProps[room].func) buttonProps[room].func()

    }

    if (room === 0) {
        return (
            <Link href={"/jogos"}>
                <View style={[styles.button, { backgroundColor: buttonProps[room].color }]}>
                    <Text style={styles.buttonText}>{buttonProps[room].title}</Text>
                </View>
            </Link>
        )
    }

    return (
        <Pressable onPress={handlePressButton}>
            <View style={[styles.button, { backgroundColor: buttonProps[room].color }]}>
                <Text style={styles.buttonText}>{buttonProps[room].title}</Text>
            </View>
        </Pressable>
    );
}

export default InteractionButton;