import tamagochiStyle from '@/assets/constants/style';
import  {View,Text,Image, ImageSourcePropType} from 'react-native'
type props = {
    TamagochiImage: ImageSourcePropType
}
const TamagochiSprite = ({TamagochiImage}: props) => {
   
    return (
    <View style={tamagochiStyle.tamagochiMainContainer}>
            <Text>
                Fome:
                Sono:
                Diversão:
                <Text>
                    
                </Text> 
            </Text>
            <View style={tamagochiStyle.tamagochiContainer}>
                <Image source={TamagochiImage} style={tamagochiStyle.tamagochiSprite}/>
        </View>
    </View>
    );
}

export default TamagochiSprite