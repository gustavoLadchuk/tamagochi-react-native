import { Pressable, StyleSheet, View, } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from "@/assets/constants/Colors";
import { changeButtonDirection } from "./Types/types";


const styles = StyleSheet.create({
    changeButton: {
        width: 50,
        height: 50,
        borderWidth: 3,
        alignItems: "center",
        justifyContent: "center"
    }
})



type props = {
    direction: changeButtonDirection,
    func: (direction: changeButtonDirection) => void,
    disabled: boolean
}

/*################################################################################################*/

function ChangeButton({ direction, func, disabled }: props) {
    let buttonChangeColor: string;
    if (disabled) {
        buttonChangeColor = Colors.deepPurple;
    } else {
        buttonChangeColor = Colors.lavenderPurple;
    }

    const handlePressButton = () => {
        func(direction)
    }


    return (
        <Pressable onPress={handlePressButton} disabled={disabled}>
            <View style={[{ backgroundColor: buttonChangeColor }, styles.changeButton]}>
                <MaterialCommunityIcons name={`chevron-${direction}`} size={30} color="black" />
            </View>
        </Pressable>

    )


}

/*################################################################################################*/

export default ChangeButton