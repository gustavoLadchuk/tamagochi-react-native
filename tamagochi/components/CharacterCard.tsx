import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Button, Image, ImageSourcePropType, Linking, StyleSheet, Text, View } from "react-native";
import StatusCalculation from "./StatusCalculation";
import { Link, Redirect } from "expo-router";
import Colors from '@/assets/constants/Colors';

type CharacterCardProps = {
    PetImage: ImageSourcePropType,
    Name: string,
    Status: number,
}

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

const CharacterCard = ({ PetImage, Name, Status }: CharacterCardProps) => {

    return (
        <View style={styles.cardContainer}>
            <View style={styles.CardImage}>
                <Image source={PetImage} />
            </View>

            <View style={styles.CardText}>
                <Text>
                    {Name}
                </Text>

                <Text>
                    Atributes
                </Text>

                <Text>
                    Status:  <StatusCalculation status={Status} />
                </Text>
                <Link href={"/tamagochiHouse/sala"}>
                    <Button title="Selecionar"></Button>
                </Link>
            </View>
        </View>
    );


}

export default CharacterCard;