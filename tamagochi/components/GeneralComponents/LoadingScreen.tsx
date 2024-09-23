import Colors from "@/assets/constants/Colors";
import { ActivityIndicator, View } from "react-native";

const LoadingScreen = () => {
    return (
        <View style={{
            alignItems: "center",
            justifyContent: "center",
            alignSelf: 'center',
            marginTop: 400,
        }}>
            <ActivityIndicator color={Colors.deepPurple} size={30} />
        </View>
    );
}

export default LoadingScreen;