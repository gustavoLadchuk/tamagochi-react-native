import { Pressable, View,  } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from "@/assets/constants/Colors";
import { styles } from "@/app/[tamagochi]";

/*################################################################################################*/

function ChangeButton({ isLeftDirection, func, disabled }:
    { isLeftDirection: boolean, func: (isLeftDirection: boolean) => void, disabled: boolean }) {
        let buttonChangeColor:string;
        if(disabled){
            buttonChangeColor = Colors.deepPurple;
        }else{
            buttonChangeColor = Colors.lavenderPurple;
        }

    const handlePressButton = () => {
        func(isLeftDirection)
    }


    return (
        <Pressable onPress={handlePressButton} disabled={disabled}>
            <View style={[{backgroundColor: buttonChangeColor},styles.changeButton]}>
                <MaterialCommunityIcons name={isLeftDirection ? "chevron-left" : "chevron-right"} size={30} color="black" />
            </View>
        </Pressable>

    )


}

/*################################################################################################*/

export default ChangeButton