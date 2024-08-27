import Colors from '@/assets/constants/Colors';
import { View, Text, Image, ImageSourcePropType, StyleSheet } from 'react-native'


type props = {
    TamagochiImage: ImageSourcePropType
}

const styles = StyleSheet.create({
    tamagochiMainContainer: {
        alignItems: "center",
        marginTop: 100,
    },
    tamagochiContainer: {
        height: 400,
        width: 250,
        backgroundColor: Colors.lavenderPurple,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    tamagochiSprite: {

    }
})

const TamagochiSprite = ({ TamagochiImage }: props) => {

    return (
        <View style={styles.tamagochiMainContainer}>
            <Text>
                Fome:
                Sono:
                Diversão:
                <Text>

                </Text>
            </Text>
            <View style={styles.tamagochiContainer}>
                <Image source={TamagochiImage} style={styles.tamagochiSprite} />
            </View>
        </View>
    );
}

export default TamagochiSprite