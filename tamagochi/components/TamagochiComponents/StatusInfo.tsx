import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    statusIcon: {
        width: 50,
        height: 50,
        borderWidth: 3,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "flex-end",
        borderColor: "white"
    },
    statContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 3
    },
    statusText: {
        fontWeight: "bold",
        fontSize: 18
    },
    iconContainer: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        top: 0
    }
})

type icons =
    | "food-drumstick"
    | "moon-waning-crescent"
    | "emoticon-happy-outline"


type statusIcon = {
    icon: icons,
    color: string,
    percentage: number
}

const StatusInfo = ({ icon, color, percentage }: statusIcon) => {
    return (

        <View style={[styles.statusIcon, { backgroundColor: "black" }]}>
            <View style={{ width: "100%", height: `${percentage}%`, backgroundColor: color }} />
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                    name={icon}
                    size={40}
                    color="white"
                />
            </View>

        </View>

    )
}

export default StatusInfo