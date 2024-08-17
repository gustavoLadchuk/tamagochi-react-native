import { Image, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    petContainer: {
        width: 70,
        height: 70,
        borderStyle: "solid",
        borderWidth: 3,
        alignItems: "center",
        justifyContent: "center"
    },
    petIcon: {
        width: 64,
        height: 64
    }
})

type pet = {
    image_id: number
}

const SelectPet = () => {

    return (
        <View style={styles.petContainer}>
            <Image style={styles.petIcon} source={require("@/assets/images/hapi.jpg")} />
        </View>
    );
}

export default SelectPet;