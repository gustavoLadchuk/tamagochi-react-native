import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Button, Image, ImageSourcePropType, Linking, StyleSheet, Text, View } from "react-native";
import { Link, Redirect, router } from "expo-router";
import Colors from '@/assets/constants/Colors';
import { tamagochi } from '../Types/types';
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
const CharacterCard = ({ pet }: { pet: tamagochi }) => {

    //Váriveis de cor de texto, função para calcular o status, e a imagem de condição
    let TextColor = 'white';
    const status = calculate(pet.hunger + pet.sleep + pet.fun)

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

    const petImages =
        [
            require(`@/assets/images/rabbit.png`),
            require(`@/assets/images/mouse.png`),
            require(`@/assets/images/reptile.png`)
        ]

    //Condição para mudar a imagem do bichinho, ou a imagem padrão.
    let imageCondition = images[status] || images.default;

    return (
        <Link href={pet.hunger + pet.sleep + pet.fun > 0 ? `/tamagochiDetails?id=${pet.id}` : `/deleteTamagochi?id=${pet.id}`}>
            <View style={styles.cardContainer}>
                <View style={{ alignItems: "flex-end", width: "100%" }}>
                    <Image style={styles.StatusImage} source={imageCondition} />
                </View>
                <View>
                    <Image style={styles.CardImage} source={petImages[pet.pet_id]} />
                </View>

                <View style={styles.textContainer}>
                    <View>
                        <Text style={[{ color: TextColor }, styles.PetName]}>
                            {pet.name}
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
                                {pet.hunger}%
                            </Text>
                        </View>
                        <View style={styles.infoStatus}>
                            <MaterialCommunityIcons
                                name="moon-waning-crescent"
                                size={20}
                                color="white"
                            />
                            <Text style={styles.CardText}>
                                {pet.sleep}%
                            </Text>
                        </View>
                        <View style={styles.infoStatus}>
                            <MaterialCommunityIcons
                                name="gamepad-variant"
                                size={20}
                                color="white"
                            />
                            <Text style={styles.CardText}>
                                {pet.fun}%
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
        backgroundColor: "#BF00FF",
        width: 180,
        height: 300,
        alignItems: 'center',
        gap: 15,
        borderWidth: 3,
        borderColor: "#FF00FF",
        padding: 10,
        borderRadius: 10
    },
    CardImage: {
        borderRadius: 10,
        width: 100,
        height: 100,
    },
    StatusImage: {
        borderRadius: 5,
        width: 25,
        height: 25,
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