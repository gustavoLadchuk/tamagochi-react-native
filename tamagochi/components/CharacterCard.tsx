import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Button, Image, ImageSourcePropType, Linking, StyleSheet, Text, View } from "react-native";
import { Link, Redirect, router } from "expo-router";
import Colors from '@/assets/constants/Colors';
import { tamagochi } from './Types/types';
import { calculate } from '@/assets/constants/statusCalculate';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
        <Link href={hunger + sleep + fun > 0 ? `/tamagochiDetails?id=${id}` : `/deleteTamagochi?id=${id}`}>
            <View style={styles.cardContainer}>
                <View>
                    <Image style={styles.CardImage} source={imageCondition} />
                </View>



                <View style={styles.textContainer}>
                    <View>
                        <Text style={[{ color: TextColor }, styles.PetName]}>
                            {name}
                        </Text>
                    </View>
                    <View style={styles.statusContainer}>
                        <View style={styles.infoStatus}>
                            <MaterialCommunityIcons
                                name="food-drumstick"
                                size={20}
                                color="white"
                            />
                            <Text style={styles.CardText}>
                                {hunger}%
                            </Text>
                        </View>
                        <View style={styles.infoStatus}>
                            <MaterialCommunityIcons
                                name="moon-waning-crescent"
                                size={20}
                                color="white"
                            />
                            <Text style={styles.CardText}>
                                {sleep}%
                            </Text>
                        </View>
                        <View style={styles.infoStatus}>
                            <MaterialCommunityIcons
                                name="gamepad-variant"
                                size={20}
                                color="white"
                            />
                            <Text style={styles.CardText}>
                                {fun}%
                            </Text>
                        </View>

                    </View>

                    <Text style={styles.CardText}>
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
        gap: 30,
        borderWidth: 3,
        padding: 10,
        borderRadius: 10
    },
    CardImage: {
        borderRadius: 10,
        width: 100,
        height: 100,
    },
    CardText: {
        color: 'white',
    },
    PetName: {
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusContainer: {
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        marginBottom: 10
    },
    infoStatus: {
        justifyContent: "center",
        alignItems: "center"
    }
})

/*################################################################################################*/

export default CharacterCard;