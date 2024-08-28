import Colors from '@/assets/constants/Colors';
import { View, Text, Image, ImageSourcePropType, StyleSheet } from 'react-native'


type props = {
    TamagochiImage: ImageSourcePropType
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
        height: 250,
        width: 250
    }
})

const TamagochiSprite = ({ TamagochiImage }: props) => {

    return (
        <View style={styles.tamagochiMainContainer}>
            <Image source={TamagochiImage} style={styles.tamagochiSprite} />
        </View>
    );
}

export default TamagochiSprite