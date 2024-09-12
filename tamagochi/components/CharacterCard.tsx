import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Button, Image, ImageSourcePropType, Linking, StyleSheet, Text, View } from "react-native";

import { Link, Redirect, router } from "expo-router";
import Colors from '@/assets/constants/Colors';
import { tamagochi } from './Types/types';
import { calculate } from '../assets/constants/statusCalculate';


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
        marginLeft: 20,
    },
    CardText: {
        gap: 10
    },
})


type tamagochiCard = {
    id: number
    name: string,
    hunger: number,
    sleep: number,
    fun: number,
}

const CharacterCard = ({ id, name, hunger, sleep, fun }: tamagochiCard) => {

    const status = calculate(hunger + sleep + fun)

    return (
        <Link href={hunger + sleep + fun > 0 ? `/${id}` : `/deleteTamagochi?id=${id}`}>
            <View style={styles.cardContainer}>
                <View style={styles.CardImage}>
                    <Image source={require("../assets/images/hamster.png")} />
                </View>

                <View style={styles.CardText}>
                    <Text>
                        {name}
                    </Text>

                    <View>
                        <Text>
                            Fome: {hunger}%
                        </Text>
                        <Text>
                            Sono: {sleep}%
                        </Text>
                        <Text>
                            Diversão: {fun}%
                        </Text>
                    </View>


                    <Text>
                        Status:  {status}
                    </Text>

                </View>
            </View>
        </Link>
    );


}

export default CharacterCard;