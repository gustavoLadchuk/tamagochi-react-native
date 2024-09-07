import Colors from '@/assets/constants/Colors';
import { View, Text, Image, ImageSourcePropType, StyleSheet } from 'react-native'


type props = {
    TamagochiImage: ImageSourcePropType,
    scale: number
}

const styles = StyleSheet.create({
    tamagochiMainContainer: {
        height: 400,
        width: 250,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    tamagochiSprite: {

    }
})

const TamagochiSprite = ({ TamagochiImage, scale }: props) => {

    return (
        <View style={styles.tamagochiMainContainer}>
            <Image source={TamagochiImage} style={{ height: 50 * scale, width: 50 * scale }} />
        </View>
    );
}

export default TamagochiSprite