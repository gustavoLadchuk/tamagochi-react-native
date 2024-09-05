import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/assets/constants/Colors';

const styles = StyleSheet.create({
    statusIcon: {
        width: 50,
        height: 50,
        borderWidth: 3,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
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
})

type icons =
    | "food-drumstick"
    | "moon-waning-crescent"
    | "gamepad-variant"


type statusIcon = {
    icon: icons,
    color: string,
    percentage: number
}

const StatusInfo = ({ icon, color, percentage }: statusIcon) => {
    return (
        <View style={styles.statContainer}>
            <View style={[styles.statusIcon, { backgroundColor: color }]}>
                <MaterialCommunityIcons
                    name={icon}
                    size={40}
                    color="white"
                />
            </View>
            <Text style={styles.statusText}>{percentage}%</Text>
        </View>
    )
}

export default StatusInfo