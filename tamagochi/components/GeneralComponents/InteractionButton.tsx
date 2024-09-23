import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

/*################################################################################################*/

type props = {
    id: number,
    room: number,
    eatFunc: () => void,
    sleepFunc: () => void,
    isLightsOff: boolean,
    disabled?: boolean
}

type buttonProps = {
    iconName: | 'gamepad-variant' | 'silverware-fork-knife' | 'lightbulb' | 'lightbulb-outline',
    color: string,
    func?: () => void
}

const InteractionButton = ({ id, room, eatFunc, sleepFunc, isLightsOff, disabled }: props) => {

    const buttonProps: buttonProps[] = [
        {
            iconName: "gamepad-variant",
            color: "#07cc00"
        },
        {
            iconName: "silverware-fork-knife",
            color: "#753100",
            func: eatFunc
        },
        {
            iconName: isLightsOff ? "lightbulb" : "lightbulb-outline",
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
                    <MaterialCommunityIcons name={buttonProps[room].iconName} size={40} color="white" />
                </View>
            )

        return (
            <Link href={`/jogos?id=${id}`}>
                <View style={[styles.button, { backgroundColor: buttonProps[room].color }]}>
                    <MaterialCommunityIcons name={buttonProps[room].iconName} size={40} color="white" />
                </View>
            </Link>
        )
    }

    return (
        <Pressable onPress={handlePressButton} disabled={disabled}>
            <View style={[styles.button, { backgroundColor: buttonProps[room].color }]}>
                <MaterialCommunityIcons name={buttonProps[room].iconName} size={40} color="white" />
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