import * as React from 'react'
import { Image, StyleSheet, Text, View } from "react-native";
import { Link} from "expo-router";
import Colors from '@/assets/constants/Colors';
import { calculate } from './constants/statusCalculate';

/*################################################################################################*/

type tamagochiCard = {
    id: number
    name: string,
    hunger: number,
    sleep: number,
    fun: number,
}


/*################################################################################################*/
//Componente para mostrar o bichinho na tela de seleção
const CharacterCard = ({ id, name, hunger, sleep, fun }: tamagochiCard) => {

    //Váriveis de cor de texto, função para calcular o status, e a imagem de condição
    let TextColor = 'white';
    const status = calculate(hunger + sleep + fun)
    
    const images = {
        "Morto": require('@/assets/images/PetIsDead.jpeg'),
        "Muito Triste": require('@/assets/images/PetIsSad.jpeg'),
        "Triste": require('@/assets/images/PetIsSad.jpeg'),
        "Critíco": require('@/assets/images/PetIsSad.jpeg'),
        "Ok": require("@/assets/images/PetIsOk.jpeg"),
        "Bem": require("@/assets/images/PetIsHappy.jpeg"),
        "Muito Bem": require("@/assets/images/PetIsHappy.jpeg"),
        default: require("@/assets/images/PetIsHappy.jpeg"),
    }

    //Condição para mudar a imagem do bichinho
    let imageCondition = images[status] || images.default;

    return (

        //A somatória das condições para verificar se ele é maior que zero, se for pegue o bichinho
        //se não delete.
        <Link href={hunger + sleep + fun > 0 ? `/${id}` : "/deleteTamagochi"}>
            <View style={styles.cardContainer}>
                <View>
                    <Image style={styles.CardImage} source={imageCondition}/>
                </View>



                <View style={styles.CardText}>
                    <Text style={{color: TextColor}}>
                        {name}
                    </Text>

                    <View>
                        <Text style={{color: TextColor}}>
                            Fome: {hunger}%
                        </Text>
                        <Text style={{color: TextColor, marginBottom: 10}}>
                            Sono: {sleep}%
                        </Text>
                        <Text style={{color: TextColor, marginBottom: 10}}>
                            Diversão: {fun}%
                        </Text>
                    </View>


                    <Text style={{color: TextColor}}>
                        Status:  {status}
                    </Text>

                </View>
            </View>
        </Link>
    );

}

/*################################################################################################*/

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 50,
        backgroundColor: Colors.lavenderPurple,
        width: 180,
        height: 300,
        alignItems: 'center',
        gap: 50,
        borderWidth: 3,
        padding: 10,
        borderRadius: 10
    },
    CardImage: {
        width: 100,
        height: 100,
    },
    CardText: {
        gap: 10
    },
})

/*################################################################################################*/

export default CharacterCard;